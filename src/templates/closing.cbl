       Y0001-ERR-HANDLING.

            DISPLAY '********************************'.
            DISPLAY '  ERROR HANDLING REPORT '.
            DISPLAY '********************************'.
            DISPLAY '  ' WS-ERR-MSG.
            DISPLAY '  ' WS-ERR-CDE.
            DISPLAY '  ' WS-ERR-PROC.
            DISPLAY '********************************'.

            PERFORM Z0001-CLOS-FILES THRU Z0001-EXIT.

       Y0001-EXIT.
            EXIT.

       Z0001-CLOS-FILES.

           CLOSE {{process.input_file_name}}.

            IF WS-IN-STAT NOT EQUAL ZEROES
               SET WS-MSG-CL-IN TO TRUE
               MOVE WS-IN-STAT TO WS-ERR-CDE
               SET WS-PROC-CLOS TO TRUE
               PERFORM Y0001-ERR-HANDLING THRU Y0001-EXIT
            END-IF.

            CLOSE {{process.output_file_name}}.

            IF WS-OUT-STAT NOT EQUAL ZEROES
               SET WS-MSG-CL-IN TO TRUE
               MOVE WS-OUT-STAT TO WS-ERR-CDE
               SET WS-PROC-CLOS TO TRUE
               PERFORM Y0001-ERR-HANDLING THRU Y0001-EXIT
            END-IF.

            STOP RUN.

       Z0001-EXIT.
            EXIT.