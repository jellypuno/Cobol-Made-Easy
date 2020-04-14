#!/bin/sh
export _BPX_ACCT_DATA='129300000'
export _BPX_JOBNAME='TDMBPXDM'
export STEPLIB="EOSDB2.D10C.SDSNLOAD"
parms=$(<tdmvars.json)
tsocmd "exec 'PRODUCT.TDM.API.PGMLIB(TDMCNTV2)' '$parms'"
