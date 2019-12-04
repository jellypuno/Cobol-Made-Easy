//CBLCMPLR  JOB (CBLCMPLR),'COBOL COMPILER',CLASS=A,
//             MSGLEVEL=(1,1),NOTIFY=&SYSUID
//*
//COMPILE  EXEC  PGM=IGYCRCTL,REGION=220M,                              00050009
// PARM=(NOTERM,                                                        00060009
// '')                                                                  00070009
//*                                                                     00090009
//* INSERT A STEPLIB DD HERE IF SCREERUN AND SCREERUN2 ARE NOT IN YOUR  00100009
//* SYSTEM LIBRARY                                                      00110009
//*                                                                     00120009
//SYSPRINT DD  SYSOUT=(*)                                               00130009
//SYSIN    DD  DSN={{dsn.source.library}}(HELOWRLD),                    00140009
//   DISP=SHR                                                           00150009
//SYSPUNCH DD  DUMMY                                                    00160009
//SYSUT1   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00170009
//SYSUT2   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00180009
//SYSUT3   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00190009
//SYSUT4   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00200009
//SYSUT5   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00210009
//SYSUT6   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00220009
//SYSUT7   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00230009
//SYSUT8   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00240009
//SYSUT9   DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00250009
//SYSUT10  DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00260009
//SYSUT11  DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00270009
//SYSUT12  DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00280009
//SYSUT13  DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00290009
//SYSUT14  DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00300009
//SYSUT15  DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00310009
//SYSMDECK DD  UNIT=SYSDA,SPACE=(CYL,(2,2))                             00320009
//SYSLIB   DD  DSN=SYS1.MACLIB,DISP=SHR                                 00330009
//         DD  DSN={{dsn.source.library}},                              00350009
//   DISP=SHR                                                           00360009
//SYSLIN   DD  DSN={{dsn.object.library}}(HELOWRLD),                    00370009
//   DISP=OLD                                                           00380009
//*                                                                     00390009
//LKED   EXEC PGM=HEWL,COND=(8,LT,COMPILE),REGION=1024K                 00400009
//SYSLIB   DD DSNAME=CEE.SCEELKED,                                      00410009
//            DISP=SHR                                                  00420009
//SYSPRINT DD SYSOUT=*                                                  00430009
//SYSLIN   DD DSNAME={{dsn.object.library}}(HELOWRLD),DISP=SHR          00440009
//         DD DDNAME=SYSIN                                              00450009
//SYSLMOD  DD DSNAME={{dsn.load.library}}(HELOWRLD),                    00460009
//            DISP=(NEW,CATLG,DELETE),SPACE=(TRK,(10,10,1)),            00470009
//            RECFM=U,,DSNTYPE=LIBRARY                                  00480009
//SYSUT1   DD UNIT=VIO,SPACE=(TRK,(10,10))                              00490009
//GO     EXEC PGM=*.LKED.SYSLMOD,COND=((8,LT,COMPILE),(4,LT,LKED)),     00500009
//            REGION=2048K                                              00510009
//STEPLIB  DD DSNAME=CEE.SCEERUN,                                       00520009
//            DISP=SHR                                                  00530009
//SYSPRINT DD SYSOUT=*                                                  00540009
//CEEDUMP  DD SYSOUT=*                                                  00550009
//SYSUDUMP DD SYSOUT=*                                                  00560009
