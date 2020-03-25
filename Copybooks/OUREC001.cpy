       01 OUTPUT-REPORT-LAYOUT.
            02 OUTPUT-HEADER-LAYOUT.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 OHL-REPORT-NAME
                                PIC X(40).
                   88 OHL-COMPANY
                            VALUE 'CA TECHNOLOGIES'.
                   88 OHL-REPORT-TITLE
                            VALUE 'BRIGHTSIDE DEMO PRESENTATION'.
                05 FILLER       PIC X(91) VALUE SPACES.
            02 OUTPUT-SUB-HEADER-LAYOUT-1.
                05 FILLER       PIC X(05) VALUE SPACES.
                05 FILLER       PIC X(04) VALUE 'DATE'.
                05 FILLER       PIC X(06) VALUE SPACES.
                05 FILLER       PIC X(04) VALUE 'TIME'.
                05 FILLER       PIC X(08) VALUE SPACES.
                05 FILLER       PIC X(04) VALUE 'NAME'.
                05 FILLER       PIC X(15) VALUE SPACES.
                05 FILLER       PIC X(07) VALUE 'ADDRESS'.
                05 FILLER       PIC X(11) VALUE SPACES.
                05 FILLER       PIC X(06) VALUE 'SALARY'.
                05 FILLER       PIC X(63) VALUE SPACES.
            02 OUTPUT-SUB-HEADER-LAYOUT-2.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 FILLER       PIC X(10) VALUE ALL '*'.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 FILLER       PIC X(07) VALUE ALL '*'.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 FILLER       PIC X(14) VALUE ALL '*'.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 FILLER       PIC X(20) VALUE ALL '*'.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 FILLER       PIC X(12) VALUE ALL '*'.
                05 FILLER       PIC X(60) VALUE SPACES.
            02 OUTPUT-RECORD-LAYOUT.
                05 FILLER       PIC X(02) VALUE SPACES.
                05 ORL-DATE     PIC X(10).
                05 FILLER       PIC X(03) VALUE SPACES.
                05 ORL-TIME     PIC X(05).
                05 FILLER       PIC X(04) VALUE SPACES.
                05 ORL-NAME     PIC X(12).
                05 FILLER       PIC X(04) VALUE SPACES.
                05 ORL-ADDRESS  PIC X(18).
                05 FILLER       PIC X(04) VALUE SPACES.
                05 ORL-SALARY   PIC ZZZ,ZZZ.99.
                05 FILLER       PIC X(61) VALUE SPACES.