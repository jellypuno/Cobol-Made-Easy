       IDENTIFICATION DIVISION.
       PROGRAM-ID. {{initialization.program_name}}.
       ENVIRONMENT DIVISION.
       CONFIGURATION SECTION.
       INPUT-OUTPUT SECTION.
       FILE-CONTROL.

            {{#initialization.file_control.fc_input}}
            {{.}}
            {{/initialization.file_control.fc_input}}

            {{#initialization.file_control.fc_output}}
            {{.}}
            {{/initialization.file_control.fc_output}}

       DATA DIVISION.
       FILE SECTION.
       {{#initialization.file_section.fd_input}}
       {{.}}
       {{/initialization.file_section.fd_input}}

       {{#initialization.file_section.fd_output}}
       {{.}}
       {{/initialization.file_section.fd_output}}
      *
       WORKING-STORAGE SECTION.
      *
       01 EMPTY-RECORD-LAYOUT.
            02 WS-ASTERISK      PIC X(30) VALUE ALL '*'.
            02 WS-NO-DISPLAY.
               05 FILLER        PIC X(3) VALUE SPACES.
               05 FILLER        PIC X(18) VALUE 'NOTHING TO REPORT'.
               05 FILLER        PIC X(105) VALUE SPACES.
               
       COPY CONSTANT.
       COPY OUREC001.

       PROCEDURE DIVISION.
       A0001-MAIN.

            PERFORM B0001-OPEN-FILES THRU B0001-EXIT
            PERFORM C0001-INIT-FILES THRU C0001-EXIT
            PERFORM D0001-READ-FILES THRU D0001-EXIT
            PERFORM E0001-PROC-FILES THRU E0001-EXIT
            PERFORM Z0001-CLOS-FILES THRU Z0001-EXIT
            .
       A0001-MAIN-EXIT.
            EXIT.

       B0001-OPEN-FILES.

           OPEN INPUT {{process.input_file_name}}.

            IF WS-IN-STAT NOT EQUAL ZEROES
               SET WS-MSG-OP-IN TO TRUE
               MOVE WS-IN-STAT TO WS-ERR-CDE
               SET WS-PROC-OPEN TO TRUE
               PERFORM Y0001-ERR-HANDLING THRU Y0001-EXIT
            END-IF.

            OPEN OUTPUT {{process.output_file_name}}.

            IF WS-OUT-STAT NOT EQUAL ZEROES
               SET WS-MSG-OP-OU TO TRUE
               MOVE WS-OUT-STAT TO WS-ERR-CDE
               SET WS-PROC-OPEN TO TRUE
               PERFORM Y0001-ERR-HANDLING THRU Y0001-EXIT
            END-IF.

       B0001-EXIT.
            EXIT.

       C0001-INIT-FILES.

            SET WS-EOF-NO          TO TRUE
            SET WS-INIT-YES        TO TRUE
            INITIALIZE WS-ERROR-HANDLING
            .
       C0001-EXIT.
            EXIT.

       D0001-READ-FILES.

            READ {{process.input_file_name}}
              AT END SET WS-EOF-YES TO TRUE

            EVALUATE TRUE

               WHEN WS-IN-STAT EQUAL '10' AND WS-INIT-YES
                    PERFORM Z0001-CLOS-FILES THRU Z0001-EXIT

               WHEN WS-IN-STAT EQUAL '10' AND WS-INIT-NO
      *             insert process here
                    GO TO D0001-EXIT

               WHEN WS-IN-STAT EQUAL ZEROES
      *             insert process here
                    SET WS-INIT-NO TO TRUE

               WHEN OTHER
                    SET WS-MSG-RD-IN TO TRUE
                    MOVE WS-IN-STAT TO WS-ERR-CDE
                    SET WS-PROC-READ TO TRUE
                    PERFORM Y0001-ERR-HANDLING THRU Y0001-EXIT

               END-EVALUATE
               .
       D0001-EXIT.
            EXIT.
        
