       01 INPUT-REC.
            02 IR-NO        PIC 9(3).
            02 FILLER       PIC 9(03).
            02 IR-TIMESTAMP.
               05 IR-TS-DATE PIC X(10).
               05 FILLER     PIC X(01).
               05 IR-TS-TIME PIC X(05).
               05 FILLER     PIC X(10).
            02 FILLER       PIC X(01).
            02 IR-DATE      PIC X(10).
            02 FILLER       PIC X(01).
            02 IR-NUMERIC   PIC 9(11) COMP-3.
            02 FILLER       PIC X(03).
            02 IR-VARCHAR   PIC X(100).
            02 FILLER       PIC X(03).
            02 IR-CHAR      PIC X(30).
            02 FILLER       PIC X(03).