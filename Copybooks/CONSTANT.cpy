        01 WS-CONSTANTS.
           02 WS-SWITCH.
               05 WS-EOF-SW     PIC X(01).
                   88 WS-EOF-NO      VALUE 'N'.
                   88 WS-EOF-YES     VALUE 'Y'.
               05 WS-INIT-READ  PIC X(01).
                   88 WS-INIT-NO      VALUE 'N'.
                   88 WS-INIT-YES     VALUE 'Y'.
           02 WS-STATUS.
               05 WS-IN-STAT        PIC 9(02).
               05 WS-OUT-STAT       PIC 9(02).
           02 WS-ERROR-HANDLING.
               05 WS-ERR-MSG    PIC X(40).
                   88 WS-MSG-OP-IN
                   VALUE 'ERROR OPENING INPUT FILE!'.
                   88 WS-MSG-OP-OU
                   VALUE 'ERROR OPENING OUTPUT FILE!'.
                   88 WS-MSG-RD-IN
                   VALUE 'ERROR READING INPUT FILE!'.
                   88 WS-MSG-WR-OU
                   VALUE 'ERROR WRITING OUTPUT FILE!'.
                   88 WS-MSG-CL-IN
                   VALUE 'ERROR CLOSING INPUT FILE!'.
                   88 WS-MSG-CL-OU
                   VALUE 'ERROR CLOSING OUTPUT FILE!'.
               05 WS-ERR-CDE    PIC 9(02).
               05 WS-ERR-PROC   PIC X(20).
                   88 WS-PROC-OPEN VALUE 'B0001-OPEN-FILES'.
                   88 WS-PROC-READ VALUE 'D0001-READ-FILES'.
                   88 WS-PROC-PRNT VALUE 'P0001-PRINT-REC'.
                   88 WS-PROC-CLOS VALUE 'Z0001-CLOS-FILES'.
            02 WS-PRINT-REPORT  PIC X(133).