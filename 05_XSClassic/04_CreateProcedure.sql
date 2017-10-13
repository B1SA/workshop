
/* Create a TABLE TYPE for the procedure results */
CREATE TYPE "SBODEMOUS"."BPDETAILS" AS TABLE (
            "CardCode" NVARCHAR(15),
            "CardName" NVARCHAR(100),
            "CardType" CHAR(1),
            "Balance" DECIMAL
);

/* Create the Procedure */
/* This procedure is invoked via a XSJS Service */
CREATE PROCEDURE GETBPBYTYPE(IN cardtype CHAR(1), OUT bpListDetails "SBODEMOUS"."BPDETAILS")
 LANGUAGE SQLSCRIPT
 READS SQL DATA AS
 BEGIN
   bpListDetails = 
	SELECT T0."CardCode", T0."CardName", T0."CardType", T0."Balance" 
	FROM OCRD T0 
	WHERE T0."CardType" =:cardtype;
 END;