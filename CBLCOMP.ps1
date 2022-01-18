Import-Module './helper-functions' 

Write-Output "Running on remote system. Waiting for output..."

# Loading params from json file
$params = Get-Content '.\params.json' | ConvertFrom-JSON

# Get the member name from the local file and map it to the remote JCL dataset
$memberName = $params.cblcomp.jobCard.jobname
$fullMemberName = "$(($params.cblcomp.jobCard.username)).JCL($memberName)"
Write-Host $memberName $fullMemberName

# check if profile is passed from task, if not, take it from params
if  ($args[1]) {
    $profiles = $args[1]
} else {
    $profiles = $params.cblcomp.defaultProfile
}

# Zowe CLI command to submit a dataset and get back the spool files
$output = zowe jobs submit ds $fullMemberName --directory ./output --rfj --zosmf-p $profiles | ConvertFrom-JSON

$jobid = $output.data.jobid
$keepSpool = [System.Convert]::ToBoolean($params.cblcomp.keepSpool)

# Basic error handling
if ($output.data.retcode -le "CC 0004") {
    Write-Host ""
    Write-Host "OUTPUT:"
    Get-Content -Path ".\output\$jobid$($params.cblcomp.defaultStdout)"
    Remove-Files -jobid $jobid -keepSpool $keepSpool -outputJcl $params.cblcomp.outputJcl
} else {
    Write-Host "JOB $($output.data.jobid) finished in error." 
    Write-Host "Return Code: $($output.data.retcode)"
    Get-Content -Path ".\output\$jobid$($params.cblcomp.jesmsgs)"
    Remove-Files -jobid $jobid -keepSpool $keepSpool -outputJcl $params.cblcomp.outputJcl
}