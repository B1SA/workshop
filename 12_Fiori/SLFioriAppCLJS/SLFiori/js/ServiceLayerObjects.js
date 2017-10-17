var SAPB1;
(function (SAPB1) {
    function CallSL(b1cmd, actionUri, slsessionid, slrouteid) {
        var obj = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            obj[_i - 4] = arguments[_i];
        }
        var data;
        if (b1cmd == SAPB1.B1ObjActionEnum.ADD || b1cmd == SAPB1.B1ObjActionEnum.UPDATE) {
            data = JSON.stringify(obj[0][0]);
        }
        // Need to add reference to jQuery.js in html file
        $.ajax({
            type: "POST",
            url: "xsjs/B1SLLogic.xsjs?cmd=" + b1cmd + "&actionUri=" + actionUri + "&sessionID=" + slsessionid + "&routeID=" + slrouteid,
            data: data,
            dataType: "json",
            crossDomain: true,
            success: function (data) {
            	//call back
                if (obj[0][0].onActionSuccess)
                        obj[0][0].onActionSuccess(data);
            },
            error: function (response, textStatus, errorThrown) {
                //call back
                if (obj[0][0].onActionError)
                    obj[0][0].onActionError(response);
            }
        });
    }
    var AccountCategorySourceEnum = (function () {
        function AccountCategorySourceEnum() {
        }
        AccountCategorySourceEnum.acsBalanceSheet = "acsBalanceSheet";
        AccountCategorySourceEnum.acsProfitAndLoss = "acsProfitAndLoss";
        return AccountCategorySourceEnum;
    })();
    SAPB1.AccountCategorySourceEnum = AccountCategorySourceEnum;
    var AccountSegmentationTypeEnum = (function () {
        function AccountSegmentationTypeEnum() {
        }
        AccountSegmentationTypeEnum.ast_Alphanumeric = "ast_Alphanumeric";
        AccountSegmentationTypeEnum.ast_Numeric = "ast_Numeric";
        return AccountSegmentationTypeEnum;
    })();
    SAPB1.AccountSegmentationTypeEnum = AccountSegmentationTypeEnum;
    var AcquisitionPeriodControlEnum = (function () {
        function AcquisitionPeriodControlEnum() {
        }
        AcquisitionPeriodControlEnum.apcProRataTemporis = "apcProRataTemporis";
        AcquisitionPeriodControlEnum.apcFirstYearConvention = "apcFirstYearConvention";
        AcquisitionPeriodControlEnum.apcHalfYear = "apcHalfYear";
        AcquisitionPeriodControlEnum.apcFullYear = "apcFullYear";
        return AcquisitionPeriodControlEnum;
    })();
    SAPB1.AcquisitionPeriodControlEnum = AcquisitionPeriodControlEnum;
    var AcquisitionProRataTypeEnum = (function () {
        function AcquisitionProRataTypeEnum() {
        }
        AcquisitionProRataTypeEnum.aprtExactlyDailyBase = "aprtExactlyDailyBase";
        AcquisitionProRataTypeEnum.aprtFirstDayOfCurrentPeriod = "aprtFirstDayOfCurrentPeriod";
        AcquisitionProRataTypeEnum.aprtFirstDayOfNextPeriod = "aprtFirstDayOfNextPeriod";
        return AcquisitionProRataTypeEnum;
    })();
    SAPB1.AcquisitionProRataTypeEnum = AcquisitionProRataTypeEnum;
    var AlertManagementDocumentEnum = (function () {
        function AlertManagementDocumentEnum() {
        }
        AlertManagementDocumentEnum.atd_NOB = "atd_NOB";
        AlertManagementDocumentEnum.atd_Invoices = "atd_Invoices";
        AlertManagementDocumentEnum.atd_RevertInvoice = "atd_RevertInvoice";
        AlertManagementDocumentEnum.atd_DeliveryNotes = "atd_DeliveryNotes";
        AlertManagementDocumentEnum.atd_Returns = "atd_Returns";
        AlertManagementDocumentEnum.atd_Orders = "atd_Orders";
        AlertManagementDocumentEnum.atd_PurchaseInvoices = "atd_PurchaseInvoices";
        AlertManagementDocumentEnum.atd_PurchaseDeliveryNotes = "atd_PurchaseDeliveryNotes";
        AlertManagementDocumentEnum.atd_PurchaseOrders = "atd_PurchaseOrders";
        AlertManagementDocumentEnum.atd_Quotations = "atd_Quotations";
        AlertManagementDocumentEnum.atd_IncomingPayments = "atd_IncomingPayments";
        AlertManagementDocumentEnum.atd_JournalEntries = "atd_JournalEntries";
        AlertManagementDocumentEnum.atd_OutgoingPayments = "atd_OutgoingPayments";
        AlertManagementDocumentEnum.atd_ChecksForPayment = "atd_ChecksForPayment";
        AlertManagementDocumentEnum.atd_CorrectionInvoice = "atd_CorrectionInvoice";
        AlertManagementDocumentEnum.atd_DownPaymentIncoming = "atd_DownPaymentIncoming";
        AlertManagementDocumentEnum.atd_DownPaymentOutgoing = "atd_DownPaymentOutgoing";
        return AlertManagementDocumentEnum;
    })();
    SAPB1.AlertManagementDocumentEnum = AlertManagementDocumentEnum;
    var AlertManagementFrequencyType = (function () {
        function AlertManagementFrequencyType() {
        }
        AlertManagementFrequencyType.atfi_Minutes = "atfi_Minutes";
        AlertManagementFrequencyType.atfi_Hours = "atfi_Hours";
        AlertManagementFrequencyType.atfi_Days = "atfi_Days";
        AlertManagementFrequencyType.atfi_Weeks = "atfi_Weeks";
        AlertManagementFrequencyType.atfi_Monthly = "atfi_Monthly";
        return AlertManagementFrequencyType;
    })();
    SAPB1.AlertManagementFrequencyType = AlertManagementFrequencyType;
    var AlertManagementPriorityEnum = (function () {
        function AlertManagementPriorityEnum() {
        }
        AlertManagementPriorityEnum.atp_Low = "atp_Low";
        AlertManagementPriorityEnum.atp_Normal = "atp_Normal";
        AlertManagementPriorityEnum.atp_High = "atp_High";
        return AlertManagementPriorityEnum;
    })();
    SAPB1.AlertManagementPriorityEnum = AlertManagementPriorityEnum;
    var AlertManagementTypeEnum = (function () {
        function AlertManagementTypeEnum() {
        }
        AlertManagementTypeEnum.att_User = "att_User";
        AlertManagementTypeEnum.att_System = "att_System";
        return AlertManagementTypeEnum;
    })();
    SAPB1.AlertManagementTypeEnum = AlertManagementTypeEnum;
    var ApprovalTemplateConditionTypeEnum = (function () {
        function ApprovalTemplateConditionTypeEnum() {
        }
        ApprovalTemplateConditionTypeEnum.atctUndefined = "atctUndefined";
        ApprovalTemplateConditionTypeEnum.atctDeviationFromCreditLine = "atctDeviationFromCreditLine";
        ApprovalTemplateConditionTypeEnum.atctDeviationFromObligo = "atctDeviationFromObligo";
        ApprovalTemplateConditionTypeEnum.atctGrossProfitPercent = "atctGrossProfitPercent";
        ApprovalTemplateConditionTypeEnum.atctDiscountPercent = "atctDiscountPercent";
        ApprovalTemplateConditionTypeEnum.atctDeviationFromBudget = "atctDeviationFromBudget";
        ApprovalTemplateConditionTypeEnum.atctTotalDocument = "atctTotalDocument";
        ApprovalTemplateConditionTypeEnum.atctItemCode = "atctItemCode";
        ApprovalTemplateConditionTypeEnum.atctTotalLine = "atctTotalLine";
        ApprovalTemplateConditionTypeEnum.atctCountedQuantity = "atctCountedQuantity";
        ApprovalTemplateConditionTypeEnum.atctQuantity = "atctQuantity";
        ApprovalTemplateConditionTypeEnum.atctVariance = "atctVariance";
        ApprovalTemplateConditionTypeEnum.atctVariancePercent = "atctVariancePercent";
        return ApprovalTemplateConditionTypeEnum;
    })();
    SAPB1.ApprovalTemplateConditionTypeEnum = ApprovalTemplateConditionTypeEnum;
    var ApprovalTemplateOperationTypeEnum = (function () {
        function ApprovalTemplateOperationTypeEnum() {
        }
        ApprovalTemplateOperationTypeEnum.opcodeUndefined = "opcodeUndefined";
        ApprovalTemplateOperationTypeEnum.opcodeGreaterThan = "opcodeGreaterThan";
        ApprovalTemplateOperationTypeEnum.opcodeGreaterOrEqual = "opcodeGreaterOrEqual";
        ApprovalTemplateOperationTypeEnum.opcodeLessThan = "opcodeLessThan";
        ApprovalTemplateOperationTypeEnum.opcodeLessOrEqual = "opcodeLessOrEqual";
        ApprovalTemplateOperationTypeEnum.opcodeEqual = "opcodeEqual";
        ApprovalTemplateOperationTypeEnum.opcodeDoesNotEqual = "opcodeDoesNotEqual";
        ApprovalTemplateOperationTypeEnum.opcodeInRange = "opcodeInRange";
        ApprovalTemplateOperationTypeEnum.opcodeNotInRange = "opcodeNotInRange";
        return ApprovalTemplateOperationTypeEnum;
    })();
    SAPB1.ApprovalTemplateOperationTypeEnum = ApprovalTemplateOperationTypeEnum;
    var ApprovalTemplatesDocumentTypeEnum = (function () {
        function ApprovalTemplatesDocumentTypeEnum() {
        }
        ApprovalTemplatesDocumentTypeEnum.atdtQuotation = "atdtQuotation";
        ApprovalTemplatesDocumentTypeEnum.atdtOrder = "atdtOrder";
        ApprovalTemplatesDocumentTypeEnum.atdtDelivery = "atdtDelivery";
        ApprovalTemplatesDocumentTypeEnum.atdtReturns = "atdtReturns";
        ApprovalTemplatesDocumentTypeEnum.atdtArDownPayment = "atdtArDownPayment";
        ApprovalTemplatesDocumentTypeEnum.atdtArInvoice = "atdtArInvoice";
        ApprovalTemplatesDocumentTypeEnum.atdtArCreditMemo = "atdtArCreditMemo";
        ApprovalTemplatesDocumentTypeEnum.atdtCorrectionInvoice = "atdtCorrectionInvoice";
        ApprovalTemplatesDocumentTypeEnum.atdtPurchaseOrder = "atdtPurchaseOrder";
        ApprovalTemplatesDocumentTypeEnum.atdtGoodsReceiptPO = "atdtGoodsReceiptPO";
        ApprovalTemplatesDocumentTypeEnum.atdtGoodsReturns = "atdtGoodsReturns";
        ApprovalTemplatesDocumentTypeEnum.atdtApDownPayment = "atdtApDownPayment";
        ApprovalTemplatesDocumentTypeEnum.atdtApInvoice = "atdtApInvoice";
        ApprovalTemplatesDocumentTypeEnum.atdtApCreditMemo = "atdtApCreditMemo";
        ApprovalTemplatesDocumentTypeEnum.atdtGoodsReceipt = "atdtGoodsReceipt";
        ApprovalTemplatesDocumentTypeEnum.atdtGoodsIssue = "atdtGoodsIssue";
        ApprovalTemplatesDocumentTypeEnum.atdtInventoryTransfer = "atdtInventoryTransfer";
        ApprovalTemplatesDocumentTypeEnum.atdtPurchaseQuotation = "atdtPurchaseQuotation";
        ApprovalTemplatesDocumentTypeEnum.atdtInventoryTransferRequest = "atdtInventoryTransferRequest";
        ApprovalTemplatesDocumentTypeEnum.atdtOutgoingPayment = "atdtOutgoingPayment";
        ApprovalTemplatesDocumentTypeEnum.atdtInventoryCounting = "atdtInventoryCounting";
        ApprovalTemplatesDocumentTypeEnum.atdtInventoryPosting = "atdtInventoryPosting";
        ApprovalTemplatesDocumentTypeEnum.atdtInventoryOpeningBalance = "atdtInventoryOpeningBalance";
        return ApprovalTemplatesDocumentTypeEnum;
    })();
    SAPB1.ApprovalTemplatesDocumentTypeEnum = ApprovalTemplatesDocumentTypeEnum;
    var AreaTypeEnum = (function () {
        function AreaTypeEnum() {
        }
        AreaTypeEnum.atPostingtoGL = "atPostingtoGL";
        AreaTypeEnum.atAdditionalArea = "atAdditionalArea";
        AreaTypeEnum.atDerivedArea = "atDerivedArea";
        return AreaTypeEnum;
    })();
    SAPB1.AreaTypeEnum = AreaTypeEnum;
    var AssesseeTypeEnum = (function () {
        function AssesseeTypeEnum() {
        }
        AssesseeTypeEnum.atCompany = "atCompany";
        AssesseeTypeEnum.atOthers = "atOthers";
        return AssesseeTypeEnum;
    })();
    SAPB1.AssesseeTypeEnum = AssesseeTypeEnum;
    var AssetDocumentStatusEnum = (function () {
        function AssetDocumentStatusEnum() {
        }
        AssetDocumentStatusEnum.adsPosted = "adsPosted";
        AssetDocumentStatusEnum.adsDraft = "adsDraft";
        AssetDocumentStatusEnum.adsCancelled = "adsCancelled";
        return AssetDocumentStatusEnum;
    })();
    SAPB1.AssetDocumentStatusEnum = AssetDocumentStatusEnum;
    var AssetDocumentTypeEnum = (function () {
        function AssetDocumentTypeEnum() {
        }
        AssetDocumentTypeEnum.adtOrdinaryDepreciation = "adtOrdinaryDepreciation";
        AssetDocumentTypeEnum.adtUnplannedDepreciation = "adtUnplannedDepreciation";
        AssetDocumentTypeEnum.adtSpecialDepreciation = "adtSpecialDepreciation";
        AssetDocumentTypeEnum.adtAppreciation = "adtAppreciation";
        AssetDocumentTypeEnum.adtAssetTransfer = "adtAssetTransfer";
        AssetDocumentTypeEnum.adtSales = "adtSales";
        AssetDocumentTypeEnum.adtScrapping = "adtScrapping";
        AssetDocumentTypeEnum.adtAssetClassTransfer = "adtAssetClassTransfer";
        return AssetDocumentTypeEnum;
    })();
    SAPB1.AssetDocumentTypeEnum = AssetDocumentTypeEnum;
    var AssetOriginalTypeEnum = (function () {
        function AssetOriginalTypeEnum() {
        }
        AssetOriginalTypeEnum.aotARInvoice = "aotARInvoice";
        AssetOriginalTypeEnum.aotAPCreditMemo = "aotAPCreditMemo";
        AssetOriginalTypeEnum.aotAPInvoice = "aotAPInvoice";
        AssetOriginalTypeEnum.aotOutgoingPayment = "aotOutgoingPayment";
        AssetOriginalTypeEnum.aotAPCorrectionInvoice = "aotAPCorrectionInvoice";
        AssetOriginalTypeEnum.aotCapitalization = "aotCapitalization";
        AssetOriginalTypeEnum.aotFixedAssetsCreditMemo = "aotFixedAssetsCreditMemo";
        AssetOriginalTypeEnum.aotAllTransactions = "aotAllTransactions";
        AssetOriginalTypeEnum.aotManualDepreciation = "aotManualDepreciation";
        AssetOriginalTypeEnum.aotFixedAssetsTransfer = "aotFixedAssetsTransfer";
        AssetOriginalTypeEnum.aotRetirement = "aotRetirement";
        return AssetOriginalTypeEnum;
    })();
    SAPB1.AssetOriginalTypeEnum = AssetOriginalTypeEnum;
    var AssetStatusEnum = (function () {
        function AssetStatusEnum() {
        }
        AssetStatusEnum.New = "New";
        AssetStatusEnum.Active = "Active";
        AssetStatusEnum.Inactive = "Inactive";
        return AssetStatusEnum;
    })();
    SAPB1.AssetStatusEnum = AssetStatusEnum;
    var AssetTransactionTypeEnum = (function () {
        function AssetTransactionTypeEnum() {
        }
        AssetTransactionTypeEnum.att_BeginningOfYear = "att_BeginningOfYear";
        AssetTransactionTypeEnum.att_Acquistion = "att_Acquistion";
        AssetTransactionTypeEnum.att_Retirement = "att_Retirement";
        AssetTransactionTypeEnum.att_Transfer = "att_Transfer";
        AssetTransactionTypeEnum.att_WriteUp = "att_WriteUp";
        AssetTransactionTypeEnum.att_OrdinaryDepreciation = "att_OrdinaryDepreciation";
        AssetTransactionTypeEnum.att_UplannedDepreciation = "att_UplannedDepreciation";
        AssetTransactionTypeEnum.att_SpecialDepreciation = "att_SpecialDepreciation";
        AssetTransactionTypeEnum.att_EndOfYear = "att_EndOfYear";
        return AssetTransactionTypeEnum;
    })();
    SAPB1.AssetTransactionTypeEnum = AssetTransactionTypeEnum;
    var AssetTypeEnum = (function () {
        function AssetTypeEnum() {
        }
        AssetTypeEnum.atAssetTypeGeneral = "atAssetTypeGeneral";
        AssetTypeEnum.atAssetTypeLowValueAsset = "atAssetTypeLowValueAsset";
        return AssetTypeEnum;
    })();
    SAPB1.AssetTypeEnum = AssetTypeEnum;
    var AttributeGroupFieldTypeEnum = (function () {
        function AttributeGroupFieldTypeEnum() {
        }
        AttributeGroupFieldTypeEnum.agftText = "agftText";
        AttributeGroupFieldTypeEnum.agftNumeric = "agftNumeric";
        AttributeGroupFieldTypeEnum.agftDate = "agftDate";
        AttributeGroupFieldTypeEnum.agftAmount = "agftAmount";
        AttributeGroupFieldTypeEnum.agftPrice = "agftPrice";
        AttributeGroupFieldTypeEnum.agftQuantity = "agftQuantity";
        return AttributeGroupFieldTypeEnum;
    })();
    SAPB1.AttributeGroupFieldTypeEnum = AttributeGroupFieldTypeEnum;
    var AuthenticateUserResultsEnum = (function () {
        function AuthenticateUserResultsEnum() {
        }
        AuthenticateUserResultsEnum.aturNoUserConnectedToCompany = "aturNoUserConnectedToCompany";
        AuthenticateUserResultsEnum.aturUsernamePasswordMatched = "aturUsernamePasswordMatched";
        AuthenticateUserResultsEnum.aturLogOnUserNotAdmin = "aturLogOnUserNotAdmin";
        AuthenticateUserResultsEnum.aturBadUserOrPassword = "aturBadUserOrPassword";
        AuthenticateUserResultsEnum.aturUserHasBeenLocked = "aturUserHasBeenLocked";
        AuthenticateUserResultsEnum.aturPasswordExpired = "aturPasswordExpired";
        AuthenticateUserResultsEnum.aturDBErrors = "aturDBErrors";
        return AuthenticateUserResultsEnum;
    })();
    SAPB1.AuthenticateUserResultsEnum = AuthenticateUserResultsEnum;
    var AutoAllocOnReceiptMethodEnum = (function () {
        function AutoAllocOnReceiptMethodEnum() {
        }
        AutoAllocOnReceiptMethodEnum.aaormDefaultBin = "aaormDefaultBin";
        AutoAllocOnReceiptMethodEnum.aaormItemCurrentAndHistoricalBins = "aaormItemCurrentAndHistoricalBins";
        AutoAllocOnReceiptMethodEnum.aaormItemCurrentBins = "aaormItemCurrentBins";
        AutoAllocOnReceiptMethodEnum.aaormLastBinReceivedItem = "aaormLastBinReceivedItem";
        return AutoAllocOnReceiptMethodEnum;
    })();
    SAPB1.AutoAllocOnReceiptMethodEnum = AutoAllocOnReceiptMethodEnum;
    var AutomaticPostingEnum = (function () {
        function AutomaticPostingEnum() {
        }
        AutomaticPostingEnum.apNo = "apNo";
        AutomaticPostingEnum.apInterestAndFee = "apInterestAndFee";
        AutomaticPostingEnum.apInterestOnly = "apInterestOnly";
        AutomaticPostingEnum.apFeeOnly = "apFeeOnly";
        return AutomaticPostingEnum;
    })();
    SAPB1.AutomaticPostingEnum = AutomaticPostingEnum;
    var BankStatementDocTypeEnum = (function () {
        function BankStatementDocTypeEnum() {
        }
        BankStatementDocTypeEnum.bsdtReceipts = "bsdtReceipts";
        BankStatementDocTypeEnum.bsdtPaymentToVendor = "bsdtPaymentToVendor";
        BankStatementDocTypeEnum.bsdtInvoices = "bsdtInvoices";
        BankStatementDocTypeEnum.bsdtPurchases = "bsdtPurchases";
        BankStatementDocTypeEnum.bsdtDownPaymentIncoming = "bsdtDownPaymentIncoming";
        BankStatementDocTypeEnum.bsdtDownPaymentOutgoing = "bsdtDownPaymentOutgoing";
        BankStatementDocTypeEnum.bsdtRevertInvoices = "bsdtRevertInvoices";
        BankStatementDocTypeEnum.bsdtRevertPurchases = "bsdtRevertPurchases";
        BankStatementDocTypeEnum.bsdtJournalEntry = "bsdtJournalEntry";
        return BankStatementDocTypeEnum;
    })();
    SAPB1.BankStatementDocTypeEnum = BankStatementDocTypeEnum;
    var BankStatementRowSourceEnum = (function () {
        function BankStatementRowSourceEnum() {
        }
        BankStatementRowSourceEnum.bsImported = "bsImported";
        BankStatementRowSourceEnum.bsImportedAndAmended = "bsImportedAndAmended";
        BankStatementRowSourceEnum.bsManuallyEntered = "bsManuallyEntered";
        return BankStatementRowSourceEnum;
    })();
    SAPB1.BankStatementRowSourceEnum = BankStatementRowSourceEnum;
    var BankStatementStatusEnum = (function () {
        function BankStatementStatusEnum() {
        }
        BankStatementStatusEnum.bssExecuted = "bssExecuted";
        BankStatementStatusEnum.bssDraft = "bssDraft";
        BankStatementStatusEnum.bssOld = "bssOld";
        return BankStatementStatusEnum;
    })();
    SAPB1.BankStatementStatusEnum = BankStatementStatusEnum;
    var BaseDateSelectEnum = (function () {
        function BaseDateSelectEnum() {
        }
        BaseDateSelectEnum.bdsFromDueDate = "bdsFromDueDate";
        BaseDateSelectEnum.bdsFromLastDunningRun = "bdsFromLastDunningRun";
        return BaseDateSelectEnum;
    })();
    SAPB1.BaseDateSelectEnum = BaseDateSelectEnum;
    var BatchDetailServiceStatusEnum = (function () {
        function BatchDetailServiceStatusEnum() {
        }
        BatchDetailServiceStatusEnum.bdsStatus_Released = "bdsStatus_Released";
        BatchDetailServiceStatusEnum.bdsStatus_NotAccessible = "bdsStatus_NotAccessible";
        BatchDetailServiceStatusEnum.bdsStatus_Locked = "bdsStatus_Locked";
        return BatchDetailServiceStatusEnum;
    })();
    SAPB1.BatchDetailServiceStatusEnum = BatchDetailServiceStatusEnum;
    var BinActionTypeEnum = (function () {
        function BinActionTypeEnum() {
        }
        BinActionTypeEnum.batToWarehouse = "batToWarehouse";
        BinActionTypeEnum.batFromWarehouse = "batFromWarehouse";
        return BinActionTypeEnum;
    })();
    SAPB1.BinActionTypeEnum = BinActionTypeEnum;
    var BinLocationFieldTypeEnum = (function () {
        function BinLocationFieldTypeEnum() {
        }
        BinLocationFieldTypeEnum.blftWarehouseSublevel = "blftWarehouseSublevel";
        BinLocationFieldTypeEnum.blftBinLocationAttribute = "blftBinLocationAttribute";
        return BinLocationFieldTypeEnum;
    })();
    SAPB1.BinLocationFieldTypeEnum = BinLocationFieldTypeEnum;
    var BinRestrictItemEnum = (function () {
        function BinRestrictItemEnum() {
        }
        BinRestrictItemEnum.briNone = "briNone";
        BinRestrictItemEnum.briSpecificItem = "briSpecificItem";
        BinRestrictItemEnum.briSingleItemOnly = "briSingleItemOnly";
        BinRestrictItemEnum.briSpecificItemGroup = "briSpecificItemGroup";
        BinRestrictItemEnum.briSpecificItemGroupOnly = "briSpecificItemGroupOnly";
        return BinRestrictItemEnum;
    })();
    SAPB1.BinRestrictItemEnum = BinRestrictItemEnum;
    var BinRestrictTransactionEnum = (function () {
        function BinRestrictTransactionEnum() {
        }
        BinRestrictTransactionEnum.brtNoRestrictions = "brtNoRestrictions";
        BinRestrictTransactionEnum.brtAllTrans = "brtAllTrans";
        BinRestrictTransactionEnum.brtInboundTrans = "brtInboundTrans";
        BinRestrictTransactionEnum.brtOutboundTrans = "brtOutboundTrans";
        BinRestrictTransactionEnum.brtAllExceptInventoryTrans = "brtAllExceptInventoryTrans";
        return BinRestrictTransactionEnum;
    })();
    SAPB1.BinRestrictTransactionEnum = BinRestrictTransactionEnum;
    var BinRestrictionBatchEnum = (function () {
        function BinRestrictionBatchEnum() {
        }
        BinRestrictionBatchEnum.brbNoRestrictions = "brbNoRestrictions";
        BinRestrictionBatchEnum.brbSingleBatch = "brbSingleBatch";
        return BinRestrictionBatchEnum;
    })();
    SAPB1.BinRestrictionBatchEnum = BinRestrictionBatchEnum;
    var BlanketAgreementDatePeriodsEnum = (function () {
        function BlanketAgreementDatePeriodsEnum() {
        }
        BlanketAgreementDatePeriodsEnum.Daily = "Daily";
        BlanketAgreementDatePeriodsEnum.Weekly = "Weekly";
        BlanketAgreementDatePeriodsEnum.Monthly = "Monthly";
        BlanketAgreementDatePeriodsEnum.Quarterly = "Quarterly";
        BlanketAgreementDatePeriodsEnum.Semiannually = "Semiannually";
        BlanketAgreementDatePeriodsEnum.Annually = "Annually";
        BlanketAgreementDatePeriodsEnum.OneTime = "OneTime";
        return BlanketAgreementDatePeriodsEnum;
    })();
    SAPB1.BlanketAgreementDatePeriodsEnum = BlanketAgreementDatePeriodsEnum;
    var BlanketAgreementDocTypeEnum = (function () {
        function BlanketAgreementDocTypeEnum() {
        }
        BlanketAgreementDocTypeEnum.ARInvoice = "ARInvoice";
        BlanketAgreementDocTypeEnum.ARCreditMemo = "ARCreditMemo";
        BlanketAgreementDocTypeEnum.Delivery = "Delivery";
        BlanketAgreementDocTypeEnum.Return = "Return";
        BlanketAgreementDocTypeEnum.SalesOrder = "SalesOrder";
        BlanketAgreementDocTypeEnum.APInvoice = "APInvoice";
        BlanketAgreementDocTypeEnum.APCreditMemo = "APCreditMemo";
        BlanketAgreementDocTypeEnum.GoodsReceiptPO = "GoodsReceiptPO";
        BlanketAgreementDocTypeEnum.GoodsReturn = "GoodsReturn";
        BlanketAgreementDocTypeEnum.PurchaseOrder = "PurchaseOrder";
        BlanketAgreementDocTypeEnum.SalesQuotation = "SalesQuotation";
        BlanketAgreementDocTypeEnum.APCorrectionInvoice = "APCorrectionInvoice";
        BlanketAgreementDocTypeEnum.APCorrectionInvoiceReversal = "APCorrectionInvoiceReversal";
        BlanketAgreementDocTypeEnum.ARCorrectionInvoice = "ARCorrectionInvoice";
        BlanketAgreementDocTypeEnum.ARCorrectionInvoiceReversal = "ARCorrectionInvoiceReversal";
        BlanketAgreementDocTypeEnum.ARDownPayment = "ARDownPayment";
        BlanketAgreementDocTypeEnum.APDownPayment = "APDownPayment";
        BlanketAgreementDocTypeEnum.PurchaseQuotation = "PurchaseQuotation";
        return BlanketAgreementDocTypeEnum;
    })();
    SAPB1.BlanketAgreementDocTypeEnum = BlanketAgreementDocTypeEnum;
    var BlanketAgreementMethodEnum = (function () {
        function BlanketAgreementMethodEnum() {
        }
        BlanketAgreementMethodEnum.amItem = "amItem";
        BlanketAgreementMethodEnum.amMonetary = "amMonetary";
        return BlanketAgreementMethodEnum;
    })();
    SAPB1.BlanketAgreementMethodEnum = BlanketAgreementMethodEnum;
    var BlanketAgreementStatusEnum = (function () {
        function BlanketAgreementStatusEnum() {
        }
        BlanketAgreementStatusEnum.asApproved = "asApproved";
        BlanketAgreementStatusEnum.asOnHold = "asOnHold";
        BlanketAgreementStatusEnum.asDraft = "asDraft";
        BlanketAgreementStatusEnum.asTerminated = "asTerminated";
        return BlanketAgreementStatusEnum;
    })();
    SAPB1.BlanketAgreementStatusEnum = BlanketAgreementStatusEnum;
    var BlanketAgreementTypeEnum = (function () {
        function BlanketAgreementTypeEnum() {
        }
        BlanketAgreementTypeEnum.atGeneral = "atGeneral";
        BlanketAgreementTypeEnum.atSpecific = "atSpecific";
        return BlanketAgreementTypeEnum;
    })();
    SAPB1.BlanketAgreementTypeEnum = BlanketAgreementTypeEnum;
    var BoAPARDocumentTypes = (function () {
        function BoAPARDocumentTypes() {
        }
        BoAPARDocumentTypes.bodt_Invoice = "bodt_Invoice";
        BoAPARDocumentTypes.bodt_CreditNote = "bodt_CreditNote";
        BoAPARDocumentTypes.bodt_DeliveryNote = "bodt_DeliveryNote";
        BoAPARDocumentTypes.bodt_Return = "bodt_Return";
        BoAPARDocumentTypes.bodt_Order = "bodt_Order";
        BoAPARDocumentTypes.bodt_PurchaseInvoice = "bodt_PurchaseInvoice";
        BoAPARDocumentTypes.bodt_PurchaseCreditNote = "bodt_PurchaseCreditNote";
        BoAPARDocumentTypes.bodt_PurchaseDeliveryNote = "bodt_PurchaseDeliveryNote";
        BoAPARDocumentTypes.bodt_PurchaseReturn = "bodt_PurchaseReturn";
        BoAPARDocumentTypes.bodt_PurchaseOrder = "bodt_PurchaseOrder";
        BoAPARDocumentTypes.bodt_Quotation = "bodt_Quotation";
        BoAPARDocumentTypes.bodt_CorrectionAPInvoice = "bodt_CorrectionAPInvoice";
        BoAPARDocumentTypes.bodt_CorrectionARInvoice = "bodt_CorrectionARInvoice";
        BoAPARDocumentTypes.bodt_Zero = "bodt_Zero";
        BoAPARDocumentTypes.bodt_MinusOne = "bodt_MinusOne";
        BoAPARDocumentTypes.bodt_PurchaseQutation = "bodt_PurchaseQutation";
        return BoAPARDocumentTypes;
    })();
    SAPB1.BoAPARDocumentTypes = BoAPARDocumentTypes;
    var BoAccountTypes = (function () {
        function BoAccountTypes() {
        }
        BoAccountTypes.at_Expenses = "at_Expenses";
        BoAccountTypes.at_Other = "at_Other";
        BoAccountTypes.at_Revenues = "at_Revenues";
        return BoAccountTypes;
    })();
    SAPB1.BoAccountTypes = BoAccountTypes;
    var BoActivities = (function () {
        function BoActivities() {
        }
        BoActivities.cn_Conversation = "cn_Conversation";
        BoActivities.cn_Meeting = "cn_Meeting";
        BoActivities.cn_Task = "cn_Task";
        BoActivities.cn_Other = "cn_Other";
        BoActivities.cn_Note = "cn_Note";
        BoActivities.cn_Campaign = "cn_Campaign";
        return BoActivities;
    })();
    SAPB1.BoActivities = BoActivities;
    var BoAdEpnsDistribMethods = (function () {
        function BoAdEpnsDistribMethods() {
        }
        BoAdEpnsDistribMethods.aedm_None = "aedm_None";
        BoAdEpnsDistribMethods.aedm_Quantity = "aedm_Quantity";
        BoAdEpnsDistribMethods.aedm_Volume = "aedm_Volume";
        BoAdEpnsDistribMethods.aedm_Weight = "aedm_Weight";
        BoAdEpnsDistribMethods.aedm_Equally = "aedm_Equally";
        BoAdEpnsDistribMethods.aedm_RowTotal = "aedm_RowTotal";
        return BoAdEpnsDistribMethods;
    })();
    SAPB1.BoAdEpnsDistribMethods = BoAdEpnsDistribMethods;
    var BoAdEpnsTaxTypes = (function () {
        function BoAdEpnsTaxTypes() {
        }
        BoAdEpnsTaxTypes.aext_NormalTax = "aext_NormalTax";
        BoAdEpnsTaxTypes.aext_NoTax = "aext_NoTax";
        BoAdEpnsTaxTypes.aext_UseTax = "aext_UseTax";
        return BoAdEpnsTaxTypes;
    })();
    SAPB1.BoAdEpnsTaxTypes = BoAdEpnsTaxTypes;
    var BoAddressType = (function () {
        function BoAddressType() {
        }
        BoAddressType.bo_ShipTo = "bo_ShipTo";
        BoAddressType.bo_BillTo = "bo_BillTo";
        return BoAddressType;
    })();
    SAPB1.BoAddressType = BoAddressType;
    var BoAeDistMthd = (function () {
        function BoAeDistMthd() {
        }
        BoAeDistMthd.aed_Equally = "aed_Equally";
        BoAeDistMthd.aed_LineTotal = "aed_LineTotal";
        BoAeDistMthd.aed_None = "aed_None";
        BoAeDistMthd.aed_Quantity = "aed_Quantity";
        BoAeDistMthd.aed_Volume = "aed_Volume";
        BoAeDistMthd.aed_Weight = "aed_Weight";
        return BoAeDistMthd;
    })();
    SAPB1.BoAeDistMthd = BoAeDistMthd;
    var BoAlertTypeforWHStockEnum = (function () {
        function BoAlertTypeforWHStockEnum() {
        }
        BoAlertTypeforWHStockEnum.atfwhs_WarningOnly = "atfwhs_WarningOnly";
        BoAlertTypeforWHStockEnum.atfwhs_Block = "atfwhs_Block";
        BoAlertTypeforWHStockEnum.atfwhs_NoMessage = "atfwhs_NoMessage";
        return BoAlertTypeforWHStockEnum;
    })();
    SAPB1.BoAlertTypeforWHStockEnum = BoAlertTypeforWHStockEnum;
    var BoAllocationByEnum = (function () {
        function BoAllocationByEnum() {
        }
        BoAllocationByEnum.ab_CashValueAfterCustoms = "ab_CashValueAfterCustoms";
        BoAllocationByEnum.ab_CashValueBeforeCustoms = "ab_CashValueBeforeCustoms";
        BoAllocationByEnum.ab_Equal = "ab_Equal";
        BoAllocationByEnum.ab_Quantity = "ab_Quantity";
        BoAllocationByEnum.ab_Volume = "ab_Volume";
        BoAllocationByEnum.ab_Weight = "ab_Weight";
        return BoAllocationByEnum;
    })();
    SAPB1.BoAllocationByEnum = BoAllocationByEnum;
    var BoApprovalRequestDecisionEnum = (function () {
        function BoApprovalRequestDecisionEnum() {
        }
        BoApprovalRequestDecisionEnum.ardPending = "ardPending";
        BoApprovalRequestDecisionEnum.ardApproved = "ardApproved";
        BoApprovalRequestDecisionEnum.ardNotApproved = "ardNotApproved";
        return BoApprovalRequestDecisionEnum;
    })();
    SAPB1.BoApprovalRequestDecisionEnum = BoApprovalRequestDecisionEnum;
    var BoApprovalRequestStatusEnum = (function () {
        function BoApprovalRequestStatusEnum() {
        }
        BoApprovalRequestStatusEnum.arsPending = "arsPending";
        BoApprovalRequestStatusEnum.arsApproved = "arsApproved";
        BoApprovalRequestStatusEnum.arsNotApproved = "arsNotApproved";
        BoApprovalRequestStatusEnum.arsGenerated = "arsGenerated";
        BoApprovalRequestStatusEnum.arsGeneratedByAuthorizer = "arsGeneratedByAuthorizer";
        BoApprovalRequestStatusEnum.arsCancelled = "arsCancelled";
        return BoApprovalRequestStatusEnum;
    })();
    SAPB1.BoApprovalRequestStatusEnum = BoApprovalRequestStatusEnum;
    var BoBOETypes = (function () {
        function BoBOETypes() {
        }
        BoBOETypes.bobt_Incoming = "bobt_Incoming";
        BoBOETypes.bobt_Outgoing = "bobt_Outgoing";
        return BoBOETypes;
    })();
    SAPB1.BoBOETypes = BoBOETypes;
    var BoBOTFromStatus = (function () {
        function BoBOTFromStatus() {
        }
        BoBOTFromStatus.btfs_Sent = "btfs_Sent";
        BoBOTFromStatus.btfs_Generated = "btfs_Generated";
        BoBOTFromStatus.btfs_Deposited = "btfs_Deposited";
        BoBOTFromStatus.btfs_Paid = "btfs_Paid";
        return BoBOTFromStatus;
    })();
    SAPB1.BoBOTFromStatus = BoBOTFromStatus;
    var BoBOTToStatus = (function () {
        function BoBOTToStatus() {
        }
        BoBOTToStatus.btts_Canceled = "btts_Canceled";
        BoBOTToStatus.btts_Generated = "btts_Generated";
        BoBOTToStatus.btts_Deposit = "btts_Deposit";
        BoBOTToStatus.btts_Paid = "btts_Paid";
        BoBOTToStatus.btts_Failed = "btts_Failed";
        BoBOTToStatus.btts_Closed = "btts_Closed";
        return BoBOTToStatus;
    })();
    SAPB1.BoBOTToStatus = BoBOTToStatus;
    var BoBarCodeStandardEnum = (function () {
        function BoBarCodeStandardEnum() {
        }
        BoBarCodeStandardEnum.rlbsan13 = "rlbsan13";
        BoBarCodeStandardEnum.rlbsCode39 = "rlbsCode39";
        BoBarCodeStandardEnum.rlbsCode128 = "rlbsCode128";
        return BoBarCodeStandardEnum;
    })();
    SAPB1.BoBarCodeStandardEnum = BoBarCodeStandardEnum;
    var BoBaseDateRateEnum = (function () {
        function BoBaseDateRateEnum() {
        }
        BoBaseDateRateEnum.bdr_PostingDate = "bdr_PostingDate";
        BoBaseDateRateEnum.bdr_TaxDate = "bdr_TaxDate";
        return BoBaseDateRateEnum;
    })();
    SAPB1.BoBaseDateRateEnum = BoBaseDateRateEnum;
    var BoBaselineDate = (function () {
        function BoBaselineDate() {
        }
        BoBaselineDate.bld_ClosingDate = "bld_ClosingDate";
        BoBaselineDate.bld_PostingDate = "bld_PostingDate";
        BoBaselineDate.bld_SystemDate = "bld_SystemDate";
        BoBaselineDate.bld_TaxDate = "bld_TaxDate";
        return BoBaselineDate;
    })();
    SAPB1.BoBaselineDate = BoBaselineDate;
    var BoBlockBudget = (function () {
        function BoBlockBudget() {
        }
        BoBlockBudget.bb_OnlyAnnualAlert = "bb_OnlyAnnualAlert";
        BoBlockBudget.bb_MonthlyAlertOnly = "bb_MonthlyAlertOnly";
        BoBlockBudget.bb_Block = "bb_Block";
        return BoBlockBudget;
    })();
    SAPB1.BoBlockBudget = BoBlockBudget;
    var BoBoeStatus = (function () {
        function BoBoeStatus() {
        }
        BoBoeStatus.boes_Created = "boes_Created";
        BoBoeStatus.boes_Sent = "boes_Sent";
        BoBoeStatus.boes_Deposited = "boes_Deposited";
        BoBoeStatus.boes_Paid = "boes_Paid";
        BoBoeStatus.boes_Cancelled = "boes_Cancelled";
        BoBoeStatus.boes_Closed = "boes_Closed";
        BoBoeStatus.boes_Failed = "boes_Failed";
        return BoBoeStatus;
    })();
    SAPB1.BoBoeStatus = BoBoeStatus;
    var BoBpAccountTypes = (function () {
        function BoBpAccountTypes() {
        }
        BoBpAccountTypes.bpat_General = "bpat_General";
        BoBpAccountTypes.bpat_DownPayment = "bpat_DownPayment";
        BoBpAccountTypes.bpat_AssetsAccount = "bpat_AssetsAccount";
        BoBpAccountTypes.bpat_Receivable = "bpat_Receivable";
        BoBpAccountTypes.bpat_Payable = "bpat_Payable";
        BoBpAccountTypes.bpat_OnCollection = "bpat_OnCollection";
        BoBpAccountTypes.bpat_Presentation = "bpat_Presentation";
        BoBpAccountTypes.bpat_AssetsPayable = "bpat_AssetsPayable";
        BoBpAccountTypes.bpat_Discounted = "bpat_Discounted";
        BoBpAccountTypes.bpat_Unpaid = "bpat_Unpaid";
        BoBpAccountTypes.bpat_OpenDebts = "bpat_OpenDebts";
        BoBpAccountTypes.bpat_Domestic = "bpat_Domestic";
        BoBpAccountTypes.bpat_Foreign = "bpat_Foreign";
        return BoBpAccountTypes;
    })();
    SAPB1.BoBpAccountTypes = BoBpAccountTypes;
    var BoBpsDocTypes = (function () {
        function BoBpsDocTypes() {
        }
        BoBpsDocTypes.bpdt_PaymentReference = "bpdt_PaymentReference";
        BoBpsDocTypes.bpdt_ISR = "bpdt_ISR";
        BoBpsDocTypes.bpdt_DocNum = "bpdt_DocNum";
        return BoBpsDocTypes;
    })();
    SAPB1.BoBpsDocTypes = BoBpsDocTypes;
    var BoBudgetAlert = (function () {
        function BoBudgetAlert() {
        }
        BoBudgetAlert.ba_AnnualAlert = "ba_AnnualAlert";
        BoBudgetAlert.ba_MonthlyAlert = "ba_MonthlyAlert";
        return BoBudgetAlert;
    })();
    SAPB1.BoBudgetAlert = BoBudgetAlert;
    var BoBusinessAreaEnum = (function () {
        function BoBusinessAreaEnum() {
        }
        BoBusinessAreaEnum.baSales = "baSales";
        BoBusinessAreaEnum.baPurchase = "baPurchase";
        BoBusinessAreaEnum.baSalesAndPurchase = "baSalesAndPurchase";
        return BoBusinessAreaEnum;
    })();
    SAPB1.BoBusinessAreaEnum = BoBusinessAreaEnum;
    var BoBusinessPartnerGroupTypes = (function () {
        function BoBusinessPartnerGroupTypes() {
        }
        BoBusinessPartnerGroupTypes.bbpgt_CustomerGroup = "bbpgt_CustomerGroup";
        BoBusinessPartnerGroupTypes.bbpgt_VendorGroup = "bbpgt_VendorGroup";
        return BoBusinessPartnerGroupTypes;
    })();
    SAPB1.BoBusinessPartnerGroupTypes = BoBusinessPartnerGroupTypes;
    var BoBusinessPartnerTypes = (function () {
        function BoBusinessPartnerTypes() {
        }
        BoBusinessPartnerTypes.garAll = "garAll";
        BoBusinessPartnerTypes.garCompany = "garCompany";
        BoBusinessPartnerTypes.garPrivate = "garPrivate";
        BoBusinessPartnerTypes.garGovernment = "garGovernment";
        return BoBusinessPartnerTypes;
    })();
    SAPB1.BoBusinessPartnerTypes = BoBusinessPartnerTypes;
    var BoCardCompanyTypes = (function () {
        function BoCardCompanyTypes() {
        }
        BoCardCompanyTypes.cCompany = "cCompany";
        BoCardCompanyTypes.cPrivate = "cPrivate";
        BoCardCompanyTypes.cGovernment = "cGovernment";
        return BoCardCompanyTypes;
    })();
    SAPB1.BoCardCompanyTypes = BoCardCompanyTypes;
    var BoCardTypes = (function () {
        function BoCardTypes() {
        }
        BoCardTypes.cCustomer = "cCustomer";
        BoCardTypes.cSupplier = "cSupplier";
        BoCardTypes.cLid = "cLid";
        return BoCardTypes;
    })();
    SAPB1.BoCardTypes = BoCardTypes;
    var BoChangeLogEnum = (function () {
        function BoChangeLogEnum() {
        }
        BoChangeLogEnum.clChartOfAccounts = "clChartOfAccounts";
        BoChangeLogEnum.clBusinessPartners = "clBusinessPartners";
        BoChangeLogEnum.clItems = "clItems";
        BoChangeLogEnum.clVatGroups = "clVatGroups";
        BoChangeLogEnum.clUsers = "clUsers";
        BoChangeLogEnum.clInvoices = "clInvoices";
        BoChangeLogEnum.clCreditNotes = "clCreditNotes";
        BoChangeLogEnum.clDeliveryNotes = "clDeliveryNotes";
        BoChangeLogEnum.clReturns = "clReturns";
        BoChangeLogEnum.clOrders = "clOrders";
        BoChangeLogEnum.clPurchaseInvoices = "clPurchaseInvoices";
        BoChangeLogEnum.clPurchaseCreditNotes = "clPurchaseCreditNotes";
        BoChangeLogEnum.clPurchaseDeliveryNotes = "clPurchaseDeliveryNotes";
        BoChangeLogEnum.clPurchaseReturns = "clPurchaseReturns";
        BoChangeLogEnum.clPurchaseOrders = "clPurchaseOrders";
        BoChangeLogEnum.clQuotations = "clQuotations";
        BoChangeLogEnum.clIncomingPayments = "clIncomingPayments";
        BoChangeLogEnum.clJournalEntries = "clJournalEntries";
        BoChangeLogEnum.clCreditCards = "clCreditCards";
        BoChangeLogEnum.clAdminInfo = "clAdminInfo";
        BoChangeLogEnum.clVendorPayments = "clVendorPayments";
        BoChangeLogEnum.clItemGroups = "clItemGroups";
        BoChangeLogEnum.clInventoryGeneralEntry = "clInventoryGeneralEntry";
        BoChangeLogEnum.clInventoryGeneralExit = "clInventoryGeneralExit";
        BoChangeLogEnum.clWarehouses = "clWarehouses";
        BoChangeLogEnum.clProductTrees = "clProductTrees";
        BoChangeLogEnum.clStockTransfers = "clStockTransfers";
        BoChangeLogEnum.clFinancePeriods = "clFinancePeriods";
        BoChangeLogEnum.clAdditionalExpenses = "clAdditionalExpenses";
        BoChangeLogEnum.clPickLists = "clPickLists";
        BoChangeLogEnum.clMaterialRevaluation = "clMaterialRevaluation";
        BoChangeLogEnum.clCorrectionPurchaseInvoice = "clCorrectionPurchaseInvoice";
        BoChangeLogEnum.clCorrectionPurchaseInvoiceReversal = "clCorrectionPurchaseInvoiceReversal";
        BoChangeLogEnum.clCorrectionInvoice = "clCorrectionInvoice";
        BoChangeLogEnum.clCorrectionInvoiceReversal = "clCorrectionInvoiceReversal";
        BoChangeLogEnum.clEmployeesInfo = "clEmployeesInfo";
        BoChangeLogEnum.clCustomerEquipmentCards = "clCustomerEquipmentCards";
        BoChangeLogEnum.clWithholdingTaxCodes = "clWithholdingTaxCodes";
        BoChangeLogEnum.clBillOfExchange = "clBillOfExchange";
        BoChangeLogEnum.clServiceCalls = "clServiceCalls";
        BoChangeLogEnum.clProductionOrders = "clProductionOrders";
        BoChangeLogEnum.clDownPayments = "clDownPayments";
        BoChangeLogEnum.clPurchaseDownPayments = "clPurchaseDownPayments";
        BoChangeLogEnum.clPeriodCategory = "clPeriodCategory";
        BoChangeLogEnum.clHouseBankAccounts = "clHouseBankAccounts";
        BoChangeLogEnum.clSalesTaxInvoice = "clSalesTaxInvoice";
        BoChangeLogEnum.clPurchaseTaxInvoice = "clPurchaseTaxInvoice";
        BoChangeLogEnum.clExternalBankOperationCodes = "clExternalBankOperationCodes";
        BoChangeLogEnum.clInternalBankOperationCodes = "clInternalBankOperationCodes";
        BoChangeLogEnum.clOutgoingExciseInvoice = "clOutgoingExciseInvoice";
        BoChangeLogEnum.clIncomingExciseInvoice = "clIncomingExciseInvoice";
        BoChangeLogEnum.clInventoryTransferRequests = "clInventoryTransferRequests";
        BoChangeLogEnum.clPurchaseQuotation = "clPurchaseQuotation";
        BoChangeLogEnum.clUDO = "clUDO";
        return BoChangeLogEnum;
    })();
    SAPB1.BoChangeLogEnum = BoChangeLogEnum;
    var BoCheckDepositTypeEnum = (function () {
        function BoCheckDepositTypeEnum() {
        }
        BoCheckDepositTypeEnum.cdtCashChecks = "cdtCashChecks";
        BoCheckDepositTypeEnum.cdtPostdatedChecks = "cdtPostdatedChecks";
        return BoCheckDepositTypeEnum;
    })();
    SAPB1.BoCheckDepositTypeEnum = BoCheckDepositTypeEnum;
    var BoClosingDateProcedureBaseDateEnum = (function () {
        function BoClosingDateProcedureBaseDateEnum() {
        }
        BoClosingDateProcedureBaseDateEnum.bocpdbld_BaseSystemDate = "bocpdbld_BaseSystemDate";
        BoClosingDateProcedureBaseDateEnum.bocpdbld_PostingDate = "bocpdbld_PostingDate";
        return BoClosingDateProcedureBaseDateEnum;
    })();
    SAPB1.BoClosingDateProcedureBaseDateEnum = BoClosingDateProcedureBaseDateEnum;
    var BoClosingDateProcedureDueMonthEnum = (function () {
        function BoClosingDateProcedureDueMonthEnum() {
        }
        BoClosingDateProcedureDueMonthEnum.bocpddm_HalfMonth = "bocpddm_HalfMonth";
        BoClosingDateProcedureDueMonthEnum.bocpddm_MonthEnd = "bocpddm_MonthEnd";
        BoClosingDateProcedureDueMonthEnum.bocpddm_MonthStart = "bocpddm_MonthStart";
        BoClosingDateProcedureDueMonthEnum.bocpddm_None = "bocpddm_None";
        return BoClosingDateProcedureDueMonthEnum;
    })();
    SAPB1.BoClosingDateProcedureDueMonthEnum = BoClosingDateProcedureDueMonthEnum;
    var BoCockpitTypeEnum = (function () {
        function BoCockpitTypeEnum() {
        }
        BoCockpitTypeEnum.cptt_UserCockpit = "cptt_UserCockpit";
        BoCockpitTypeEnum.cptt_TemplateCockpit = "cptt_TemplateCockpit";
        return BoCockpitTypeEnum;
    })();
    SAPB1.BoCockpitTypeEnum = BoCockpitTypeEnum;
    var BoConsumptionMethod = (function () {
        function BoConsumptionMethod() {
        }
        BoConsumptionMethod.cm_BackwardForward = "cm_BackwardForward";
        BoConsumptionMethod.cm_ForwardBackward = "cm_ForwardBackward";
        return BoConsumptionMethod;
    })();
    SAPB1.BoConsumptionMethod = BoConsumptionMethod;
    var BoContractTypes = (function () {
        function BoContractTypes() {
        }
        BoContractTypes.ct_Customer = "ct_Customer";
        BoContractTypes.ct_ItemGroup = "ct_ItemGroup";
        BoContractTypes.ct_SerialNumber = "ct_SerialNumber";
        return BoContractTypes;
    })();
    SAPB1.BoContractTypes = BoContractTypes;
    var BoCorInvItemStatus = (function () {
        function BoCorInvItemStatus() {
        }
        BoCorInvItemStatus.ciis_Was = "ciis_Was";
        BoCorInvItemStatus.ciis_ShouldBe = "ciis_ShouldBe";
        return BoCorInvItemStatus;
    })();
    SAPB1.BoCorInvItemStatus = BoCorInvItemStatus;
    var BoCpCardAcct = (function () {
        function BoCpCardAcct() {
        }
        BoCpCardAcct.cfp_Card = "cfp_Card";
        BoCpCardAcct.cfp_Account = "cfp_Account";
        return BoCpCardAcct;
    })();
    SAPB1.BoCpCardAcct = BoCpCardAcct;
    var BoCurrencyCheck = (function () {
        function BoCurrencyCheck() {
        }
        BoCurrencyCheck.cc_Block = "cc_Block";
        BoCurrencyCheck.cc_NoMessage = "cc_NoMessage";
        return BoCurrencyCheck;
    })();
    SAPB1.BoCurrencyCheck = BoCurrencyCheck;
    var BoCurrencySources = (function () {
        function BoCurrencySources() {
        }
        BoCurrencySources.bocs_LocalCurrency = "bocs_LocalCurrency";
        BoCurrencySources.bocs_SystemCurrency = "bocs_SystemCurrency";
        BoCurrencySources.bocs_BPCurrency = "bocs_BPCurrency";
        return BoCurrencySources;
    })();
    SAPB1.BoCurrencySources = BoCurrencySources;
    var BoDataSourceEnum = (function () {
        function BoDataSourceEnum() {
        }
        BoDataSourceEnum.rldsFreeText = "rldsFreeText";
        BoDataSourceEnum.rldsSystemVariable = "rldsSystemVariable";
        BoDataSourceEnum.rldsDatabase = "rldsDatabase";
        BoDataSourceEnum.rldsFormula = "rldsFormula";
        return BoDataSourceEnum;
    })();
    SAPB1.BoDataSourceEnum = BoDataSourceEnum;
    var BoDateTemplate = (function () {
        function BoDateTemplate() {
        }
        BoDateTemplate.dt_DDMMYY = "dt_DDMMYY";
        BoDateTemplate.dt_DDMMCCYY = "dt_DDMMCCYY";
        BoDateTemplate.dt_MMDDYY = "dt_MMDDYY";
        BoDateTemplate.dt_MMDDCCYY = "dt_MMDDCCYY";
        BoDateTemplate.dt_CCYYMMDD = "dt_CCYYMMDD";
        BoDateTemplate.dt_DDMonthYYYY = "dt_DDMonthYYYY";
        return BoDateTemplate;
    })();
    SAPB1.BoDateTemplate = BoDateTemplate;
    var BoDeductionTaxGroupCodeEnum = (function () {
        function BoDeductionTaxGroupCodeEnum() {
        }
        BoDeductionTaxGroupCodeEnum.dtgcInterestReceivers = "dtgcInterestReceivers";
        BoDeductionTaxGroupCodeEnum.dtgcEmployeeReceivingCommission = "dtgcEmployeeReceivingCommission";
        BoDeductionTaxGroupCodeEnum.dtgcWritersPrice = "dtgcWritersPrice";
        BoDeductionTaxGroupCodeEnum.dtgcPaidServices = "dtgcPaidServices";
        BoDeductionTaxGroupCodeEnum.dtgcPaymentsToForeignCitizens = "dtgcPaymentsToForeignCitizens";
        BoDeductionTaxGroupCodeEnum.dtgcPaymentsForCitizensInForeignCountries = "dtgcPaymentsForCitizensInForeignCountries";
        BoDeductionTaxGroupCodeEnum.dtgcInvalidPaymentFromCompensationFund = "dtgcInvalidPaymentFromCompensationFund";
        BoDeductionTaxGroupCodeEnum.dtgcRepaymentToEmployerFromCompensationFund = "dtgcRepaymentToEmployerFromCompensationFund";
        BoDeductionTaxGroupCodeEnum.dtgcRentalPayments = "dtgcRentalPayments";
        BoDeductionTaxGroupCodeEnum.dtgcPaymentsFromStudyFund = "dtgcPaymentsFromStudyFund";
        BoDeductionTaxGroupCodeEnum.dtgcDividendPayments = "dtgcDividendPayments";
        return BoDeductionTaxGroupCodeEnum;
    })();
    SAPB1.BoDeductionTaxGroupCodeEnum = BoDeductionTaxGroupCodeEnum;
    var BoDefaultBatchStatus = (function () {
        function BoDefaultBatchStatus() {
        }
        BoDefaultBatchStatus.dbs_Released = "dbs_Released";
        BoDefaultBatchStatus.dbs_NotAccessible = "dbs_NotAccessible";
        BoDefaultBatchStatus.dbs_Locked = "dbs_Locked";
        return BoDefaultBatchStatus;
    })();
    SAPB1.BoDefaultBatchStatus = BoDefaultBatchStatus;
    var BoDepositAccountTypeEnum = (function () {
        function BoDepositAccountTypeEnum() {
        }
        BoDepositAccountTypeEnum.datBankAccount = "datBankAccount";
        BoDepositAccountTypeEnum.datBusinessPartner = "datBusinessPartner";
        return BoDepositAccountTypeEnum;
    })();
    SAPB1.BoDepositAccountTypeEnum = BoDepositAccountTypeEnum;
    var BoDepositCheckEnum = (function () {
        function BoDepositCheckEnum() {
        }
        BoDepositCheckEnum.dtNo = "dtNo";
        BoDepositCheckEnum.dcAsCash = "dcAsCash";
        BoDepositCheckEnum.dtAsPostdated = "dtAsPostdated";
        return BoDepositCheckEnum;
    })();
    SAPB1.BoDepositCheckEnum = BoDepositCheckEnum;
    var BoDepositPostingTypes = (function () {
        function BoDepositPostingTypes() {
        }
        BoDepositPostingTypes.dpt_Collection = "dpt_Collection";
        BoDepositPostingTypes.dpt_Discounted = "dpt_Discounted";
        return BoDepositPostingTypes;
    })();
    SAPB1.BoDepositPostingTypes = BoDepositPostingTypes;
    var BoDepositTypeEnum = (function () {
        function BoDepositTypeEnum() {
        }
        BoDepositTypeEnum.dtChecks = "dtChecks";
        BoDepositTypeEnum.dtCredit = "dtCredit";
        BoDepositTypeEnum.dtCash = "dtCash";
        BoDepositTypeEnum.dtBOE = "dtBOE";
        return BoDepositTypeEnum;
    })();
    SAPB1.BoDepositTypeEnum = BoDepositTypeEnum;
    var BoDocItemType = (function () {
        function BoDocItemType() {
        }
        BoDocItemType.dit_Item = "dit_Item";
        BoDocItemType.dit_Resource = "dit_Resource";
        return BoDocItemType;
    })();
    SAPB1.BoDocItemType = BoDocItemType;
    var BoDocLineType = (function () {
        function BoDocLineType() {
        }
        BoDocLineType.dlt_Regular = "dlt_Regular";
        BoDocLineType.dlt_Alternative = "dlt_Alternative";
        return BoDocLineType;
    })();
    SAPB1.BoDocLineType = BoDocLineType;
    var BoDocSpecialLineType = (function () {
        function BoDocSpecialLineType() {
        }
        BoDocSpecialLineType.dslt_Text = "dslt_Text";
        BoDocSpecialLineType.dslt_Subtotal = "dslt_Subtotal";
        return BoDocSpecialLineType;
    })();
    SAPB1.BoDocSpecialLineType = BoDocSpecialLineType;
    var BoDocSummaryTypes = (function () {
        function BoDocSummaryTypes() {
        }
        BoDocSummaryTypes.dNoSummary = "dNoSummary";
        BoDocSummaryTypes.dByItems = "dByItems";
        BoDocSummaryTypes.dByDocuments = "dByDocuments";
        return BoDocSummaryTypes;
    })();
    SAPB1.BoDocSummaryTypes = BoDocSummaryTypes;
    var BoDocWhsAutoIssueMethod = (function () {
        function BoDocWhsAutoIssueMethod() {
        }
        BoDocWhsAutoIssueMethod.whsBinSingleChoiceOnly = "whsBinSingleChoiceOnly";
        BoDocWhsAutoIssueMethod.whsBinBinCodeOrder = "whsBinBinCodeOrder";
        BoDocWhsAutoIssueMethod.whsBinAltSortCodeOrder = "whsBinAltSortCodeOrder";
        BoDocWhsAutoIssueMethod.whsBinQtyDescendingOrder = "whsBinQtyDescendingOrder";
        BoDocWhsAutoIssueMethod.whsBinQtyAscendingOrder = "whsBinQtyAscendingOrder";
        BoDocWhsAutoIssueMethod.whsBinFIFO = "whsBinFIFO";
        BoDocWhsAutoIssueMethod.whsBinLIFO = "whsBinLIFO";
        return BoDocWhsAutoIssueMethod;
    })();
    SAPB1.BoDocWhsAutoIssueMethod = BoDocWhsAutoIssueMethod;
    var BoDocWhsUpdateTypes = (function () {
        function BoDocWhsUpdateTypes() {
        }
        BoDocWhsUpdateTypes.dwh_No = "dwh_No";
        BoDocWhsUpdateTypes.dwh_OrdersFromVendors = "dwh_OrdersFromVendors";
        BoDocWhsUpdateTypes.dwh_CustomerOrders = "dwh_CustomerOrders";
        BoDocWhsUpdateTypes.dwh_Consignment = "dwh_Consignment";
        BoDocWhsUpdateTypes.dwh_Stock = "dwh_Stock";
        return BoDocWhsUpdateTypes;
    })();
    SAPB1.BoDocWhsUpdateTypes = BoDocWhsUpdateTypes;
    var BoDocumentLinePickStatus = (function () {
        function BoDocumentLinePickStatus() {
        }
        BoDocumentLinePickStatus.dlps_Picked = "dlps_Picked";
        BoDocumentLinePickStatus.dlps_NotPicked = "dlps_NotPicked";
        BoDocumentLinePickStatus.dlps_ReleasedForPicking = "dlps_ReleasedForPicking";
        BoDocumentLinePickStatus.dlps_PartiallyPicked = "dlps_PartiallyPicked";
        return BoDocumentLinePickStatus;
    })();
    SAPB1.BoDocumentLinePickStatus = BoDocumentLinePickStatus;
    var BoDocumentSubType = (function () {
        function BoDocumentSubType() {
        }
        BoDocumentSubType.bod_None = "bod_None";
        BoDocumentSubType.bod_InvoiceExempt = "bod_InvoiceExempt";
        BoDocumentSubType.bod_DebitMemo = "bod_DebitMemo";
        BoDocumentSubType.bod_Bill = "bod_Bill";
        BoDocumentSubType.bod_ExemptBill = "bod_ExemptBill";
        BoDocumentSubType.bod_PurchaseDebitMemo = "bod_PurchaseDebitMemo";
        BoDocumentSubType.bod_ExportInvoice = "bod_ExportInvoice";
        return BoDocumentSubType;
    })();
    SAPB1.BoDocumentSubType = BoDocumentSubType;
    var BoDocumentTypes = (function () {
        function BoDocumentTypes() {
        }
        BoDocumentTypes.dDocument_Items = "dDocument_Items";
        BoDocumentTypes.dDocument_Service = "dDocument_Service";
        return BoDocumentTypes;
    })();
    SAPB1.BoDocumentTypes = BoDocumentTypes;
    var BoDueDateEnum = (function () {
        function BoDueDateEnum() {
        }
        BoDueDateEnum.boddDateOfPaymentRun = "boddDateOfPaymentRun";
        BoDueDateEnum.boddDueDateOfInvoice = "boddDueDateOfInvoice";
        BoDueDateEnum.boddPaymentTerms = "boddPaymentTerms";
        return BoDueDateEnum;
    })();
    SAPB1.BoDueDateEnum = BoDueDateEnum;
    var BoDurations = (function () {
        function BoDurations() {
        }
        BoDurations.du_Minuts = "du_Minuts";
        BoDurations.du_Hours = "du_Hours";
        BoDurations.du_Days = "du_Days";
        return BoDurations;
    })();
    SAPB1.BoDurations = BoDurations;
    var BoExtensionErrorActionEnum = (function () {
        function BoExtensionErrorActionEnum() {
        }
        BoExtensionErrorActionEnum.eeaStop = "eeaStop";
        BoExtensionErrorActionEnum.eeaIgnore = "eeaIgnore";
        BoExtensionErrorActionEnum.eeaPrompt = "eeaPrompt";
        return BoExtensionErrorActionEnum;
    })();
    SAPB1.BoExtensionErrorActionEnum = BoExtensionErrorActionEnum;
    var BoFatherCardTypes = (function () {
        function BoFatherCardTypes() {
        }
        BoFatherCardTypes.cPayments_sum = "cPayments_sum";
        BoFatherCardTypes.cDelivery_sum = "cDelivery_sum";
        return BoFatherCardTypes;
    })();
    SAPB1.BoFatherCardTypes = BoFatherCardTypes;
    var BoFieldTypes = (function () {
        function BoFieldTypes() {
        }
        BoFieldTypes.db_Alpha = "db_Alpha";
        BoFieldTypes.db_Memo = "db_Memo";
        BoFieldTypes.db_Numeric = "db_Numeric";
        BoFieldTypes.db_Date = "db_Date";
        BoFieldTypes.db_Float = "db_Float";
        return BoFieldTypes;
    })();
    SAPB1.BoFieldTypes = BoFieldTypes;
    var BoFldSubTypes = (function () {
        function BoFldSubTypes() {
        }
        BoFldSubTypes.st_None = "st_None";
        BoFldSubTypes.st_Address = "st_Address";
        BoFldSubTypes.st_Phone = "st_Phone";
        BoFldSubTypes.st_Time = "st_Time";
        BoFldSubTypes.st_Rate = "st_Rate";
        BoFldSubTypes.st_Sum = "st_Sum";
        BoFldSubTypes.st_Price = "st_Price";
        BoFldSubTypes.st_Quantity = "st_Quantity";
        BoFldSubTypes.st_Percentage = "st_Percentage";
        BoFldSubTypes.st_Measurement = "st_Measurement";
        BoFldSubTypes.st_Link = "st_Link";
        BoFldSubTypes.st_Image = "st_Image";
        return BoFldSubTypes;
    })();
    SAPB1.BoFldSubTypes = BoFldSubTypes;
    var BoForecastViewType = (function () {
        function BoForecastViewType() {
        }
        BoForecastViewType.fvtDaily = "fvtDaily";
        BoForecastViewType.fvtWeekly = "fvtWeekly";
        BoForecastViewType.fvtMonthly = "fvtMonthly";
        return BoForecastViewType;
    })();
    SAPB1.BoForecastViewType = BoForecastViewType;
    var BoFormattedSearchActionEnum = (function () {
        function BoFormattedSearchActionEnum() {
        }
        BoFormattedSearchActionEnum.bofsaNone = "bofsaNone";
        BoFormattedSearchActionEnum.bofsaQuery = "bofsaQuery";
        BoFormattedSearchActionEnum.bofsaValidValues = "bofsaValidValues";
        return BoFormattedSearchActionEnum;
    })();
    SAPB1.BoFormattedSearchActionEnum = BoFormattedSearchActionEnum;
    var BoFrequency = (function () {
        function BoFrequency() {
        }
        BoFrequency.bof_Daily = "bof_Daily";
        BoFrequency.bof_Weekly = "bof_Weekly";
        BoFrequency.bof_Every4Weeks = "bof_Every4Weeks";
        BoFrequency.bof_Monthly = "bof_Monthly";
        BoFrequency.bof_Quarterly = "bof_Quarterly";
        BoFrequency.bof_HalfYearly = "bof_HalfYearly";
        BoFrequency.bof_Annually = "bof_Annually";
        BoFrequency.bof_OneTime = "bof_OneTime";
        BoFrequency.bof_EveryXDays = "bof_EveryXDays";
        return BoFrequency;
    })();
    SAPB1.BoFrequency = BoFrequency;
    var BoGLMethods = (function () {
        function BoGLMethods() {
        }
        BoGLMethods.glm_WH = "glm_WH";
        BoGLMethods.glm_ItemClass = "glm_ItemClass";
        BoGLMethods.glm_ItemLevel = "glm_ItemLevel";
        return BoGLMethods;
    })();
    SAPB1.BoGLMethods = BoGLMethods;
    var BoGenderTypes = (function () {
        function BoGenderTypes() {
        }
        BoGenderTypes.gt_Female = "gt_Female";
        BoGenderTypes.gt_Male = "gt_Male";
        BoGenderTypes.gt_Undefined = "gt_Undefined";
        return BoGenderTypes;
    })();
    SAPB1.BoGenderTypes = BoGenderTypes;
    var BoGridTypeEnum = (function () {
        function BoGridTypeEnum() {
        }
        BoGridTypeEnum.gtCombination = "gtCombination";
        BoGridTypeEnum.gtContinuousLine = "gtContinuousLine";
        BoGridTypeEnum.gtBrokenLine = "gtBrokenLine";
        BoGridTypeEnum.gtDots = "gtDots";
        return BoGridTypeEnum;
    })();
    SAPB1.BoGridTypeEnum = BoGridTypeEnum;
    var BoHorizontalAlignmentEnum = (function () {
        function BoHorizontalAlignmentEnum() {
        }
        BoHorizontalAlignmentEnum.rlhjRight = "rlhjRight";
        BoHorizontalAlignmentEnum.rlhjLeft = "rlhjLeft";
        BoHorizontalAlignmentEnum.rlhjCentralized = "rlhjCentralized";
        BoHorizontalAlignmentEnum.rlhjLanguageDependent = "rlhjLanguageDependent";
        return BoHorizontalAlignmentEnum;
    })();
    SAPB1.BoHorizontalAlignmentEnum = BoHorizontalAlignmentEnum;
    var BoInventorySystem = (function () {
        function BoInventorySystem() {
        }
        BoInventorySystem.bis_MovingAverage = "bis_MovingAverage";
        BoInventorySystem.bis_Standard = "bis_Standard";
        BoInventorySystem.bis_FIFO = "bis_FIFO";
        BoInventorySystem.bis_SNB = "bis_SNB";
        return BoInventorySystem;
    })();
    SAPB1.BoInventorySystem = BoInventorySystem;
    var BoIssueMethod = (function () {
        function BoIssueMethod() {
        }
        BoIssueMethod.im_Backflush = "im_Backflush";
        BoIssueMethod.im_Manual = "im_Manual";
        return BoIssueMethod;
    })();
    SAPB1.BoIssueMethod = BoIssueMethod;
    var BoItemTreeTypes = (function () {
        function BoItemTreeTypes() {
        }
        BoItemTreeTypes.iNotATree = "iNotATree";
        BoItemTreeTypes.iAssemblyTree = "iAssemblyTree";
        BoItemTreeTypes.iSalesTree = "iSalesTree";
        BoItemTreeTypes.iProductionTree = "iProductionTree";
        BoItemTreeTypes.iTemplateTree = "iTemplateTree";
        BoItemTreeTypes.iIngredient = "iIngredient";
        return BoItemTreeTypes;
    })();
    SAPB1.BoItemTreeTypes = BoItemTreeTypes;
    var BoLineBreakEnum = (function () {
        function BoLineBreakEnum() {
        }
        BoLineBreakEnum.rlsAllowOverflow = "rlsAllowOverflow";
        BoLineBreakEnum.rlsAdjustToCell = "rlsAdjustToCell";
        BoLineBreakEnum.rlsDivideIntoRows = "rlsDivideIntoRows";
        return BoLineBreakEnum;
    })();
    SAPB1.BoLineBreakEnum = BoLineBreakEnum;
    var BoMRPComponentWarehouse = (function () {
        function BoMRPComponentWarehouse() {
        }
        BoMRPComponentWarehouse.bomcw_BOM = "bomcw_BOM";
        BoMRPComponentWarehouse.bomcw_Parent = "bomcw_Parent";
        return BoMRPComponentWarehouse;
    })();
    SAPB1.BoMRPComponentWarehouse = BoMRPComponentWarehouse;
    var BoManageMethod = (function () {
        function BoManageMethod() {
        }
        BoManageMethod.bomm_OnEveryTransaction = "bomm_OnEveryTransaction";
        BoManageMethod.bomm_OnReleaseOnly = "bomm_OnReleaseOnly";
        return BoManageMethod;
    })();
    SAPB1.BoManageMethod = BoManageMethod;
    var BoMaterialTypes = (function () {
        function BoMaterialTypes() {
        }
        BoMaterialTypes.mt_GoodsForReseller = "mt_GoodsForReseller";
        BoMaterialTypes.mt_FinishedGoods = "mt_FinishedGoods";
        BoMaterialTypes.mt_GoodsInProcess = "mt_GoodsInProcess";
        BoMaterialTypes.mt_RawMaterial = "mt_RawMaterial";
        BoMaterialTypes.mt_Package = "mt_Package";
        BoMaterialTypes.mt_SubProduct = "mt_SubProduct";
        BoMaterialTypes.mt_IntermediateMaterial = "mt_IntermediateMaterial";
        BoMaterialTypes.mt_ConsumerMaterial = "mt_ConsumerMaterial";
        BoMaterialTypes.mt_FixedAsset = "mt_FixedAsset";
        BoMaterialTypes.mt_Service = "mt_Service";
        BoMaterialTypes.mt_OtherInput = "mt_OtherInput";
        BoMaterialTypes.mt_Other = "mt_Other";
        return BoMaterialTypes;
    })();
    SAPB1.BoMaterialTypes = BoMaterialTypes;
    var BoMeritalStatuses = (function () {
        function BoMeritalStatuses() {
        }
        BoMeritalStatuses.mts_Single = "mts_Single";
        BoMeritalStatuses.mts_Married = "mts_Married";
        BoMeritalStatuses.mts_Divorced = "mts_Divorced";
        BoMeritalStatuses.mts_Widowed = "mts_Widowed";
        return BoMeritalStatuses;
    })();
    SAPB1.BoMeritalStatuses = BoMeritalStatuses;
    var BoMsgPriorities = (function () {
        function BoMsgPriorities() {
        }
        BoMsgPriorities.pr_Low = "pr_Low";
        BoMsgPriorities.pr_Normal = "pr_Normal";
        BoMsgPriorities.pr_High = "pr_High";
        return BoMsgPriorities;
    })();
    SAPB1.BoMsgPriorities = BoMsgPriorities;
    var BoMsgRcpTypes = (function () {
        function BoMsgRcpTypes() {
        }
        BoMsgRcpTypes.rt_RandomUser = "rt_RandomUser";
        BoMsgRcpTypes.rt_ContactPerson = "rt_ContactPerson";
        BoMsgRcpTypes.rt_InternalUser = "rt_InternalUser";
        return BoMsgRcpTypes;
    })();
    SAPB1.BoMsgRcpTypes = BoMsgRcpTypes;
    var BoORCTPaymentTypeEnum = (function () {
        function BoORCTPaymentTypeEnum() {
        }
        BoORCTPaymentTypeEnum.bopt_None = "bopt_None";
        BoORCTPaymentTypeEnum.bopt_Electronic = "bopt_Electronic";
        BoORCTPaymentTypeEnum.bopt_Post = "bopt_Post";
        BoORCTPaymentTypeEnum.bopt_Telegraph = "bopt_Telegraph";
        BoORCTPaymentTypeEnum.bopt_Express = "bopt_Express";
        return BoORCTPaymentTypeEnum;
    })();
    SAPB1.BoORCTPaymentTypeEnum = BoORCTPaymentTypeEnum;
    var BoObjectTypes = (function () {
        function BoObjectTypes() {
        }
        BoObjectTypes.oChartOfAccounts = "oChartOfAccounts";
        BoObjectTypes.oBusinessPartners = "oBusinessPartners";
        BoObjectTypes.oBanks = "oBanks";
        BoObjectTypes.oItems = "oItems";
        BoObjectTypes.oVatGroups = "oVatGroups";
        BoObjectTypes.oPriceLists = "oPriceLists";
        BoObjectTypes.oSpecialPrices = "oSpecialPrices";
        BoObjectTypes.oItemProperties = "oItemProperties";
        BoObjectTypes.oBusinessPartnerGroups = "oBusinessPartnerGroups";
        BoObjectTypes.oUsers = "oUsers";
        BoObjectTypes.oInvoices = "oInvoices";
        BoObjectTypes.oCreditNotes = "oCreditNotes";
        BoObjectTypes.oDeliveryNotes = "oDeliveryNotes";
        BoObjectTypes.oReturns = "oReturns";
        BoObjectTypes.oOrders = "oOrders";
        BoObjectTypes.oPurchaseInvoices = "oPurchaseInvoices";
        BoObjectTypes.oPurchaseCreditNotes = "oPurchaseCreditNotes";
        BoObjectTypes.oPurchaseDeliveryNotes = "oPurchaseDeliveryNotes";
        BoObjectTypes.oPurchaseReturns = "oPurchaseReturns";
        BoObjectTypes.oPurchaseOrders = "oPurchaseOrders";
        BoObjectTypes.oQuotations = "oQuotations";
        BoObjectTypes.oIncomingPayments = "oIncomingPayments";
        BoObjectTypes.oJournalVouchers = "oJournalVouchers";
        BoObjectTypes.oJournalEntries = "oJournalEntries";
        BoObjectTypes.oStockTakings = "oStockTakings";
        BoObjectTypes.oContacts = "oContacts";
        BoObjectTypes.oCreditCards = "oCreditCards";
        BoObjectTypes.oCurrencyCodes = "oCurrencyCodes";
        BoObjectTypes.oPaymentTermsTypes = "oPaymentTermsTypes";
        BoObjectTypes.oBankPages = "oBankPages";
        BoObjectTypes.oManufacturers = "oManufacturers";
        BoObjectTypes.oVendorPayments = "oVendorPayments";
        BoObjectTypes.oLandedCostsCodes = "oLandedCostsCodes";
        BoObjectTypes.oShippingTypes = "oShippingTypes";
        BoObjectTypes.oLengthMeasures = "oLengthMeasures";
        BoObjectTypes.oWeightMeasures = "oWeightMeasures";
        BoObjectTypes.oItemGroups = "oItemGroups";
        BoObjectTypes.oSalesPersons = "oSalesPersons";
        BoObjectTypes.oCustomsGroups = "oCustomsGroups";
        BoObjectTypes.oChecksforPayment = "oChecksforPayment";
        BoObjectTypes.oInventoryGenEntry = "oInventoryGenEntry";
        BoObjectTypes.oInventoryGenExit = "oInventoryGenExit";
        BoObjectTypes.oWarehouses = "oWarehouses";
        BoObjectTypes.oCommissionGroups = "oCommissionGroups";
        BoObjectTypes.oProductTrees = "oProductTrees";
        BoObjectTypes.oStockTransfer = "oStockTransfer";
        BoObjectTypes.oWorkOrders = "oWorkOrders";
        BoObjectTypes.oCreditPaymentMethods = "oCreditPaymentMethods";
        BoObjectTypes.oCreditCardPayments = "oCreditCardPayments";
        BoObjectTypes.oAlternateCatNum = "oAlternateCatNum";
        BoObjectTypes.oBudget = "oBudget";
        BoObjectTypes.oBudgetDistribution = "oBudgetDistribution";
        BoObjectTypes.oMessages = "oMessages";
        BoObjectTypes.oBudgetScenarios = "oBudgetScenarios";
        BoObjectTypes.oUserDefaultGroups = "oUserDefaultGroups";
        BoObjectTypes.oSalesOpportunities = "oSalesOpportunities";
        BoObjectTypes.oSalesStages = "oSalesStages";
        BoObjectTypes.oActivityTypes = "oActivityTypes";
        BoObjectTypes.oActivityLocations = "oActivityLocations";
        BoObjectTypes.oDrafts = "oDrafts";
        BoObjectTypes.oDeductionTaxHierarchies = "oDeductionTaxHierarchies";
        BoObjectTypes.oDeductionTaxGroups = "oDeductionTaxGroups";
        BoObjectTypes.oAdditionalExpenses = "oAdditionalExpenses";
        BoObjectTypes.oSalesTaxAuthorities = "oSalesTaxAuthorities";
        BoObjectTypes.oSalesTaxAuthoritiesTypes = "oSalesTaxAuthoritiesTypes";
        BoObjectTypes.oSalesTaxCodes = "oSalesTaxCodes";
        BoObjectTypes.oQueryCategories = "oQueryCategories";
        BoObjectTypes.oFactoringIndicators = "oFactoringIndicators";
        BoObjectTypes.oPaymentsDrafts = "oPaymentsDrafts";
        BoObjectTypes.oAccountSegmentations = "oAccountSegmentations";
        BoObjectTypes.oAccountSegmentationCategories = "oAccountSegmentationCategories";
        BoObjectTypes.oWarehouseLocations = "oWarehouseLocations";
        BoObjectTypes.oForms1099 = "oForms1099";
        BoObjectTypes.oInventoryCycles = "oInventoryCycles";
        BoObjectTypes.oWizardPaymentMethods = "oWizardPaymentMethods";
        BoObjectTypes.oBPPriorities = "oBPPriorities";
        BoObjectTypes.oDunningLetters = "oDunningLetters";
        BoObjectTypes.oUserFields = "oUserFields";
        BoObjectTypes.oUserTables = "oUserTables";
        BoObjectTypes.oPickLists = "oPickLists";
        BoObjectTypes.oPaymentRunExport = "oPaymentRunExport";
        BoObjectTypes.oUserQueries = "oUserQueries";
        BoObjectTypes.oMaterialRevaluation = "oMaterialRevaluation";
        BoObjectTypes.oCorrectionPurchaseInvoice = "oCorrectionPurchaseInvoice";
        BoObjectTypes.oCorrectionPurchaseInvoiceReversal = "oCorrectionPurchaseInvoiceReversal";
        BoObjectTypes.oCorrectionInvoice = "oCorrectionInvoice";
        BoObjectTypes.oCorrectionInvoiceReversal = "oCorrectionInvoiceReversal";
        BoObjectTypes.oContractTemplates = "oContractTemplates";
        BoObjectTypes.oEmployeesInfo = "oEmployeesInfo";
        BoObjectTypes.oCustomerEquipmentCards = "oCustomerEquipmentCards";
        BoObjectTypes.oWithholdingTaxCodes = "oWithholdingTaxCodes";
        BoObjectTypes.oBillOfExchangeTransactions = "oBillOfExchangeTransactions";
        BoObjectTypes.oKnowledgeBaseSolutions = "oKnowledgeBaseSolutions";
        BoObjectTypes.oServiceContracts = "oServiceContracts";
        BoObjectTypes.oServiceCalls = "oServiceCalls";
        BoObjectTypes.oUserKeys = "oUserKeys";
        BoObjectTypes.oQueue = "oQueue";
        BoObjectTypes.oSalesForecast = "oSalesForecast";
        BoObjectTypes.oTerritories = "oTerritories";
        BoObjectTypes.oIndustries = "oIndustries";
        BoObjectTypes.oProductionOrders = "oProductionOrders";
        BoObjectTypes.oDownPayments = "oDownPayments";
        BoObjectTypes.oPurchaseDownPayments = "oPurchaseDownPayments";
        BoObjectTypes.oPackagesTypes = "oPackagesTypes";
        BoObjectTypes.oUserObjectsMD = "oUserObjectsMD";
        BoObjectTypes.oTeams = "oTeams";
        BoObjectTypes.oRelationships = "oRelationships";
        BoObjectTypes.oUserPermissionTree = "oUserPermissionTree";
        BoObjectTypes.oActivityStatus = "oActivityStatus";
        BoObjectTypes.oChooseFromList = "oChooseFromList";
        BoObjectTypes.oFormattedSearches = "oFormattedSearches";
        BoObjectTypes.oAttachments2 = "oAttachments2";
        BoObjectTypes.oUserLanguages = "oUserLanguages";
        BoObjectTypes.oMultiLanguageTranslations = "oMultiLanguageTranslations";
        BoObjectTypes.oDynamicSystemStrings = "oDynamicSystemStrings";
        BoObjectTypes.oHouseBankAccounts = "oHouseBankAccounts";
        BoObjectTypes.oBusinessPlaces = "oBusinessPlaces";
        BoObjectTypes.oLocalEra = "oLocalEra";
        BoObjectTypes.oNotaFiscalCFOP = "oNotaFiscalCFOP";
        BoObjectTypes.oNotaFiscalCST = "oNotaFiscalCST";
        BoObjectTypes.oNotaFiscalUsage = "oNotaFiscalUsage";
        BoObjectTypes.oClosingDateProcedure = "oClosingDateProcedure";
        BoObjectTypes.oBPFiscalRegistryID = "oBPFiscalRegistryID";
        BoObjectTypes.oSalesTaxInvoice = "oSalesTaxInvoice";
        BoObjectTypes.oPurchaseTaxInvoice = "oPurchaseTaxInvoice";
        BoObjectTypes.oPurchaseQuotations = "oPurchaseQuotations";
        BoObjectTypes.oStockTransferDraft = "oStockTransferDraft";
        BoObjectTypes.oInventoryTransferRequest = "oInventoryTransferRequest";
        BoObjectTypes.oPurchaseRequest = "oPurchaseRequest";
        return BoObjectTypes;
    })();
    SAPB1.BoObjectTypes = BoObjectTypes;
    var BoOpenIncPayment = (function () {
        function BoOpenIncPayment() {
        }
        BoOpenIncPayment.oip_BankTransfer = "oip_BankTransfer";
        BoOpenIncPayment.oip_Cash = "oip_Cash";
        BoOpenIncPayment.oip_Checks = "oip_Checks";
        BoOpenIncPayment.oip_Credit = "oip_Credit";
        BoOpenIncPayment.oip_No = "oip_No";
        return BoOpenIncPayment;
    })();
    SAPB1.BoOpenIncPayment = BoOpenIncPayment;
    var BoOperationEnum = (function () {
        function BoOperationEnum() {
        }
        BoOperationEnum.rloNone = "rloNone";
        BoOperationEnum.rloAddition = "rloAddition";
        BoOperationEnum.rloSubtraction = "rloSubtraction";
        BoOperationEnum.rloMultiplication = "rloMultiplication";
        BoOperationEnum.rloDivision = "rloDivision";
        BoOperationEnum.rloPercentage = "rloPercentage";
        BoOperationEnum.rloLeftPartCharacters = "rloLeftPartCharacters";
        BoOperationEnum.rloRightPartMantissa = "rloRightPartMantissa";
        BoOperationEnum.rloRound = "rloRound";
        BoOperationEnum.rloConcat = "rloConcat";
        BoOperationEnum.rloRight = "rloRight";
        BoOperationEnum.rloLeft = "rloLeft";
        BoOperationEnum.rloSentence = "rloSentence";
        BoOperationEnum.rloLength = "rloLength";
        BoOperationEnum.rloCurrency = "rloCurrency";
        BoOperationEnum.rloNumber = "rloNumber";
        BoOperationEnum.rloLessThan = "rloLessThan";
        BoOperationEnum.rloLessOrEqual = "rloLessOrEqual";
        BoOperationEnum.rloEqual = "rloEqual";
        BoOperationEnum.rloNotEqual = "rloNotEqual";
        BoOperationEnum.rloGreaterOrEqual = "rloGreaterOrEqual";
        BoOperationEnum.rloGreaterThan = "rloGreaterThan";
        return BoOperationEnum;
    })();
    SAPB1.BoOperationEnum = BoOperationEnum;
    var BoOpexStatus = (function () {
        function BoOpexStatus() {
        }
        BoOpexStatus.bos_Open = "bos_Open";
        BoOpexStatus.bos_Close = "bos_Close";
        return BoOpexStatus;
    })();
    SAPB1.BoOpexStatus = BoOpexStatus;
    var BoOrientationEnum = (function () {
        function BoOrientationEnum() {
        }
        BoOrientationEnum.ortVertical = "ortVertical";
        BoOrientationEnum.ortHorizontal = "ortHorizontal";
        return BoOrientationEnum;
    })();
    SAPB1.BoOrientationEnum = BoOrientationEnum;
    var BoPayTermDueTypes = (function () {
        function BoPayTermDueTypes() {
        }
        BoPayTermDueTypes.pdt_MonthEnd = "pdt_MonthEnd";
        BoPayTermDueTypes.pdt_HalfMonth = "pdt_HalfMonth";
        BoPayTermDueTypes.pdt_MonthStart = "pdt_MonthStart";
        BoPayTermDueTypes.pdt_None = "pdt_None";
        return BoPayTermDueTypes;
    })();
    SAPB1.BoPayTermDueTypes = BoPayTermDueTypes;
    var BoPaymentMeansEnum = (function () {
        function BoPaymentMeansEnum() {
        }
        BoPaymentMeansEnum.bopmCheck = "bopmCheck";
        BoPaymentMeansEnum.bopmBankTransfer = "bopmBankTransfer";
        BoPaymentMeansEnum.bopmBillOfExchange = "bopmBillOfExchange";
        return BoPaymentMeansEnum;
    })();
    SAPB1.BoPaymentMeansEnum = BoPaymentMeansEnum;
    var BoPaymentPriorities = (function () {
        function BoPaymentPriorities() {
        }
        BoPaymentPriorities.bopp_Priority_1 = "bopp_Priority_1";
        BoPaymentPriorities.bopp_Priority_2 = "bopp_Priority_2";
        BoPaymentPriorities.bopp_Priority_3 = "bopp_Priority_3";
        BoPaymentPriorities.bopp_Priority_4 = "bopp_Priority_4";
        BoPaymentPriorities.bopp_Priority_5 = "bopp_Priority_5";
        BoPaymentPriorities.bopp_Priority_6 = "bopp_Priority_6";
        return BoPaymentPriorities;
    })();
    SAPB1.BoPaymentPriorities = BoPaymentPriorities;
    var BoPaymentTypeEnum = (function () {
        function BoPaymentTypeEnum() {
        }
        BoPaymentTypeEnum.boptIncoming = "boptIncoming";
        BoPaymentTypeEnum.boptOutgoing = "boptOutgoing";
        return BoPaymentTypeEnum;
    })();
    SAPB1.BoPaymentTypeEnum = BoPaymentTypeEnum;
    var BoPaymentsObjectType = (function () {
        function BoPaymentsObjectType() {
        }
        BoPaymentsObjectType.bopot_IncomingPayments = "bopot_IncomingPayments";
        BoPaymentsObjectType.bopot_OutgoingPayments = "bopot_OutgoingPayments";
        return BoPaymentsObjectType;
    })();
    SAPB1.BoPaymentsObjectType = BoPaymentsObjectType;
    var BoPermission = (function () {
        function BoPermission() {
        }
        BoPermission.boper_Full = "boper_Full";
        BoPermission.boper_ReadOnly = "boper_ReadOnly";
        BoPermission.boper_None = "boper_None";
        BoPermission.boper_Various = "boper_Various";
        BoPermission.boper_Undefined = "boper_Undefined";
        return BoPermission;
    })();
    SAPB1.BoPermission = BoPermission;
    var BoPickStatus = (function () {
        function BoPickStatus() {
        }
        BoPickStatus.ps_Released = "ps_Released";
        BoPickStatus.ps_Picked = "ps_Picked";
        BoPickStatus.ps_PartiallyPicked = "ps_PartiallyPicked";
        BoPickStatus.ps_PartiallyDelivered = "ps_PartiallyDelivered";
        BoPickStatus.ps_Closed = "ps_Closed";
        return BoPickStatus;
    })();
    SAPB1.BoPickStatus = BoPickStatus;
    var BoPictureSizeEnum = (function () {
        function BoPictureSizeEnum() {
        }
        BoPictureSizeEnum.rlpsOriginalSize = "rlpsOriginalSize";
        BoPictureSizeEnum.rlpsFitFieldSizeNonProportionally = "rlpsFitFieldSizeNonProportionally";
        BoPictureSizeEnum.rlpsFitFieldSizeProportionally = "rlpsFitFieldSizeProportionally";
        BoPictureSizeEnum.rlpsFitFieldHeight = "rlpsFitFieldHeight";
        BoPictureSizeEnum.rlpsFitFieldWidth = "rlpsFitFieldWidth";
        return BoPictureSizeEnum;
    })();
    SAPB1.BoPictureSizeEnum = BoPictureSizeEnum;
    var BoPlanningSystem = (function () {
        function BoPlanningSystem() {
        }
        BoPlanningSystem.bop_MRP = "bop_MRP";
        BoPlanningSystem.bop_None = "bop_None";
        return BoPlanningSystem;
    })();
    SAPB1.BoPlanningSystem = BoPlanningSystem;
    var BoPriceListGroupNum = (function () {
        function BoPriceListGroupNum() {
        }
        BoPriceListGroupNum.boplgn_Group1 = "boplgn_Group1";
        BoPriceListGroupNum.boplgn_Group2 = "boplgn_Group2";
        BoPriceListGroupNum.boplgn_Group3 = "boplgn_Group3";
        BoPriceListGroupNum.boplgn_Group4 = "boplgn_Group4";
        return BoPriceListGroupNum;
    })();
    SAPB1.BoPriceListGroupNum = BoPriceListGroupNum;
    var BoPrintReceiptEnum = (function () {
        function BoPrintReceiptEnum() {
        }
        BoPrintReceiptEnum.boprcAlways = "boprcAlways";
        BoPrintReceiptEnum.boprcNo = "boprcNo";
        BoPrintReceiptEnum.boprcOnlyWhenAdding = "boprcOnlyWhenAdding";
        return BoPrintReceiptEnum;
    })();
    SAPB1.BoPrintReceiptEnum = BoPrintReceiptEnum;
    var BoProcurementMethod = (function () {
        function BoProcurementMethod() {
        }
        BoProcurementMethod.bom_Buy = "bom_Buy";
        BoProcurementMethod.bom_Make = "bom_Make";
        return BoProcurementMethod;
    })();
    SAPB1.BoProcurementMethod = BoProcurementMethod;
    var BoProductSources = (function () {
        function BoProductSources() {
        }
        BoProductSources.bps_PurchasedFromDomVendor = "bps_PurchasedFromDomVendor";
        BoProductSources.bps_ImportedByCompany = "bps_ImportedByCompany";
        BoProductSources.bps_ImportedGoodsPurchasedFromDomVendor = "bps_ImportedGoodsPurchasedFromDomVendor";
        BoProductSources.bps_ProducedByCompany = "bps_ProducedByCompany";
        return BoProductSources;
    })();
    SAPB1.BoProductSources = BoProductSources;
    var BoProductionOrderOriginEnum = (function () {
        function BoProductionOrderOriginEnum() {
        }
        BoProductionOrderOriginEnum.bopooManual = "bopooManual";
        BoProductionOrderOriginEnum.bopooMRP = "bopooMRP";
        BoProductionOrderOriginEnum.bopooSalesOrder = "bopooSalesOrder";
        return BoProductionOrderOriginEnum;
    })();
    SAPB1.BoProductionOrderOriginEnum = BoProductionOrderOriginEnum;
    var BoProductionOrderStatusEnum = (function () {
        function BoProductionOrderStatusEnum() {
        }
        BoProductionOrderStatusEnum.boposPlanned = "boposPlanned";
        BoProductionOrderStatusEnum.boposReleased = "boposReleased";
        BoProductionOrderStatusEnum.boposClosed = "boposClosed";
        BoProductionOrderStatusEnum.boposCancelled = "boposCancelled";
        return BoProductionOrderStatusEnum;
    })();
    SAPB1.BoProductionOrderStatusEnum = BoProductionOrderStatusEnum;
    var BoProductionOrderTypeEnum = (function () {
        function BoProductionOrderTypeEnum() {
        }
        BoProductionOrderTypeEnum.bopotStandard = "bopotStandard";
        BoProductionOrderTypeEnum.bopotSpecial = "bopotSpecial";
        BoProductionOrderTypeEnum.bopotDisassembly = "bopotDisassembly";
        return BoProductionOrderTypeEnum;
    })();
    SAPB1.BoProductionOrderTypeEnum = BoProductionOrderTypeEnum;
    var BoQueryTypeEnum = (function () {
        function BoQueryTypeEnum() {
        }
        BoQueryTypeEnum.qtRegular = "qtRegular";
        BoQueryTypeEnum.qtWizard = "qtWizard";
        return BoQueryTypeEnum;
    })();
    SAPB1.BoQueryTypeEnum = BoQueryTypeEnum;
    var BoRcptCredTypes = (function () {
        function BoRcptCredTypes() {
        }
        BoRcptCredTypes.cr_Regular = "cr_Regular";
        BoRcptCredTypes.cr_Telephone = "cr_Telephone";
        BoRcptCredTypes.cr_InternetTransaction = "cr_InternetTransaction";
        return BoRcptCredTypes;
    })();
    SAPB1.BoRcptCredTypes = BoRcptCredTypes;
    var BoRcptInvTypes = (function () {
        function BoRcptInvTypes() {
        }
        BoRcptInvTypes.it_AllTransactions = "it_AllTransactions";
        BoRcptInvTypes.it_OpeningBalance = "it_OpeningBalance";
        BoRcptInvTypes.it_ClosingBalance = "it_ClosingBalance";
        BoRcptInvTypes.it_Invoice = "it_Invoice";
        BoRcptInvTypes.it_CredItnote = "it_CredItnote";
        BoRcptInvTypes.it_TaxInvoice = "it_TaxInvoice";
        BoRcptInvTypes.it_Return = "it_Return";
        BoRcptInvTypes.it_PurchaseInvoice = "it_PurchaseInvoice";
        BoRcptInvTypes.it_PurchaseCreditNote = "it_PurchaseCreditNote";
        BoRcptInvTypes.it_PurchaseDeliveryNote = "it_PurchaseDeliveryNote";
        BoRcptInvTypes.it_PurchaseReturn = "it_PurchaseReturn";
        BoRcptInvTypes.it_Receipt = "it_Receipt";
        BoRcptInvTypes.it_Deposit = "it_Deposit";
        BoRcptInvTypes.it_JournalEntry = "it_JournalEntry";
        BoRcptInvTypes.it_PaymentAdvice = "it_PaymentAdvice";
        BoRcptInvTypes.it_ChequesForPayment = "it_ChequesForPayment";
        BoRcptInvTypes.it_StockReconciliations = "it_StockReconciliations";
        BoRcptInvTypes.it_GeneralReceiptToStock = "it_GeneralReceiptToStock";
        BoRcptInvTypes.it_GeneralReleaseFromStock = "it_GeneralReleaseFromStock";
        BoRcptInvTypes.it_TransferBetweenWarehouses = "it_TransferBetweenWarehouses";
        BoRcptInvTypes.it_WorkInstructions = "it_WorkInstructions";
        BoRcptInvTypes.it_DeferredDeposit = "it_DeferredDeposit";
        BoRcptInvTypes.it_CorrectionInvoice = "it_CorrectionInvoice";
        BoRcptInvTypes.it_APCorrectionInvoice = "it_APCorrectionInvoice";
        BoRcptInvTypes.it_ARCorrectionInvoice = "it_ARCorrectionInvoice";
        BoRcptInvTypes.it_DownPayment = "it_DownPayment";
        BoRcptInvTypes.it_PurchaseDownPayment = "it_PurchaseDownPayment";
        return BoRcptInvTypes;
    })();
    SAPB1.BoRcptInvTypes = BoRcptInvTypes;
    var BoRcptTypes = (function () {
        function BoRcptTypes() {
        }
        BoRcptTypes.rCustomer = "rCustomer";
        BoRcptTypes.rAccount = "rAccount";
        BoRcptTypes.rSupplier = "rSupplier";
        return BoRcptTypes;
    })();
    SAPB1.BoRcptTypes = BoRcptTypes;
    var BoRemindUnits = (function () {
        function BoRemindUnits() {
        }
        BoRemindUnits.reu_Days = "reu_Days";
        BoRemindUnits.reu_Weeks = "reu_Weeks";
        BoRemindUnits.reu_Month = "reu_Month";
        return BoRemindUnits;
    })();
    SAPB1.BoRemindUnits = BoRemindUnits;
    var BoReportLayoutItemTypeEnum = (function () {
        function BoReportLayoutItemTypeEnum() {
        }
        BoReportLayoutItemTypeEnum.rlitPageHeader = "rlitPageHeader";
        BoReportLayoutItemTypeEnum.rlitStartOfReport = "rlitStartOfReport";
        BoReportLayoutItemTypeEnum.rlitRepetitiveAreaHeader = "rlitRepetitiveAreaHeader";
        BoReportLayoutItemTypeEnum.rlitRepetitiveArea = "rlitRepetitiveArea";
        BoReportLayoutItemTypeEnum.rlitRepetitiveAreaFooter = "rlitRepetitiveAreaFooter";
        BoReportLayoutItemTypeEnum.rlitEndOfReport = "rlitEndOfReport";
        BoReportLayoutItemTypeEnum.rlitPageFooter = "rlitPageFooter";
        BoReportLayoutItemTypeEnum.rlitTextField = "rlitTextField";
        BoReportLayoutItemTypeEnum.rlitPictureField = "rlitPictureField";
        BoReportLayoutItemTypeEnum.rlitUserField = "rlitUserField";
        return BoReportLayoutItemTypeEnum;
    })();
    SAPB1.BoReportLayoutItemTypeEnum = BoReportLayoutItemTypeEnum;
    var BoResolutionUnits = (function () {
        function BoResolutionUnits() {
        }
        BoResolutionUnits.rsu_Days = "rsu_Days";
        BoResolutionUnits.rsu_Hours = "rsu_Hours";
        return BoResolutionUnits;
    })();
    SAPB1.BoResolutionUnits = BoResolutionUnits;
    var BoResponseUnit = (function () {
        function BoResponseUnit() {
        }
        BoResponseUnit.boru_Day = "boru_Day";
        BoResponseUnit.boru_Hour = "boru_Hour";
        return BoResponseUnit;
    })();
    SAPB1.BoResponseUnit = BoResponseUnit;
    var BoRoleInTeam = (function () {
        function BoRoleInTeam() {
        }
        BoRoleInTeam.borit_Leader = "borit_Leader";
        BoRoleInTeam.borit_Member = "borit_Member";
        return BoRoleInTeam;
    })();
    SAPB1.BoRoleInTeam = BoRoleInTeam;
    var BoRoundingMethod = (function () {
        function BoRoundingMethod() {
        }
        BoRoundingMethod.borm_FixedEnding = "borm_FixedEnding";
        BoRoundingMethod.borm_FixedInterval = "borm_FixedInterval";
        BoRoundingMethod.borm_NoRounding = "borm_NoRounding";
        BoRoundingMethod.borm_RoundToFullAmount = "borm_RoundToFullAmount";
        BoRoundingMethod.borm_RoundToFullDecAmount = "borm_RoundToFullDecAmount";
        BoRoundingMethod.borm_RoundToFullTensAmount = "borm_RoundToFullTensAmount";
        return BoRoundingMethod;
    })();
    SAPB1.BoRoundingMethod = BoRoundingMethod;
    var BoRoundingRule = (function () {
        function BoRoundingRule() {
        }
        BoRoundingRule.borrRoundDown = "borrRoundDown";
        BoRoundingRule.borrRoundOff = "borrRoundOff";
        BoRoundingRule.borrRoundUp = "borrRoundUp";
        return BoRoundingRule;
    })();
    SAPB1.BoRoundingRule = BoRoundingRule;
    var BoSalaryCostUnits = (function () {
        function BoSalaryCostUnits() {
        }
        BoSalaryCostUnits.scu_Hour = "scu_Hour";
        BoSalaryCostUnits.scu_Day = "scu_Day";
        BoSalaryCostUnits.scu_Week = "scu_Week";
        BoSalaryCostUnits.scu_Month = "scu_Month";
        BoSalaryCostUnits.scu_Year = "scu_Year";
        BoSalaryCostUnits.scu_Semimonthly = "scu_Semimonthly";
        BoSalaryCostUnits.scu_Biweekly = "scu_Biweekly";
        return BoSalaryCostUnits;
    })();
    SAPB1.BoSalaryCostUnits = BoSalaryCostUnits;
    var BoSerialNumberStatus = (function () {
        function BoSerialNumberStatus() {
        }
        BoSerialNumberStatus.sns_Active = "sns_Active";
        BoSerialNumberStatus.sns_InLab = "sns_InLab";
        BoSerialNumberStatus.sns_Loaned = "sns_Loaned";
        BoSerialNumberStatus.sns_Returned = "sns_Returned";
        BoSerialNumberStatus.sns_Terminated = "sns_Terminated";
        return BoSerialNumberStatus;
    })();
    SAPB1.BoSerialNumberStatus = BoSerialNumberStatus;
    var BoSeriesGroupEnum = (function () {
        function BoSeriesGroupEnum() {
        }
        BoSeriesGroupEnum.sg_Group1 = "sg_Group1";
        BoSeriesGroupEnum.sg_Group2 = "sg_Group2";
        BoSeriesGroupEnum.sg_Group3 = "sg_Group3";
        BoSeriesGroupEnum.sg_Group4 = "sg_Group4";
        BoSeriesGroupEnum.sg_Group5 = "sg_Group5";
        BoSeriesGroupEnum.sg_Group6 = "sg_Group6";
        BoSeriesGroupEnum.sg_Group7 = "sg_Group7";
        BoSeriesGroupEnum.sg_Group8 = "sg_Group8";
        BoSeriesGroupEnum.sg_Group9 = "sg_Group9";
        BoSeriesGroupEnum.sg_Group10 = "sg_Group10";
        return BoSeriesGroupEnum;
    })();
    SAPB1.BoSeriesGroupEnum = BoSeriesGroupEnum;
    var BoSeriesTypeEnum = (function () {
        function BoSeriesTypeEnum() {
        }
        BoSeriesTypeEnum.stDocument = "stDocument";
        BoSeriesTypeEnum.stBusinessPartner = "stBusinessPartner";
        BoSeriesTypeEnum.stItem = "stItem";
        return BoSeriesTypeEnum;
    })();
    SAPB1.BoSeriesTypeEnum = BoSeriesTypeEnum;
    var BoServicePaymentMethods = (function () {
        function BoServicePaymentMethods() {
        }
        BoServicePaymentMethods.spmAccreditedToBankAccount = "spmAccreditedToBankAccount";
        BoServicePaymentMethods.spmBankTransfer = "spmBankTransfer";
        BoServicePaymentMethods.spmOther = "spmOther";
        return BoServicePaymentMethods;
    })();
    SAPB1.BoServicePaymentMethods = BoServicePaymentMethods;
    var BoServiceSupplyMethods = (function () {
        function BoServiceSupplyMethods() {
        }
        BoServiceSupplyMethods.ssmImmediate = "ssmImmediate";
        BoServiceSupplyMethods.ssmToMoreResumptions = "ssmToMoreResumptions";
        return BoServiceSupplyMethods;
    })();
    SAPB1.BoServiceSupplyMethods = BoServiceSupplyMethods;
    var BoServiceTypes = (function () {
        function BoServiceTypes() {
        }
        BoServiceTypes.bst_Regular = "bst_Regular";
        BoServiceTypes.bst_Warranty = "bst_Warranty";
        return BoServiceTypes;
    })();
    SAPB1.BoServiceTypes = BoServiceTypes;
    var BoSoClosedInTypes = (function () {
        function BoSoClosedInTypes() {
        }
        BoSoClosedInTypes.sos_Months = "sos_Months";
        BoSoClosedInTypes.sos_Weeks = "sos_Weeks";
        BoSoClosedInTypes.sos_Days = "sos_Days";
        return BoSoClosedInTypes;
    })();
    SAPB1.BoSoClosedInTypes = BoSoClosedInTypes;
    var BoSoOsStatus = (function () {
        function BoSoOsStatus() {
        }
        BoSoOsStatus.sos_Open = "sos_Open";
        BoSoOsStatus.sos_Missed = "sos_Missed";
        BoSoOsStatus.sos_Sold = "sos_Sold";
        return BoSoOsStatus;
    })();
    SAPB1.BoSoOsStatus = BoSoOsStatus;
    var BoSoStatus = (function () {
        function BoSoStatus() {
        }
        BoSoStatus.so_Open = "so_Open";
        BoSoStatus.so_Closed = "so_Closed";
        return BoSoStatus;
    })();
    SAPB1.BoSoStatus = BoSoStatus;
    var BoSortTypeEnum = (function () {
        function BoSortTypeEnum() {
        }
        BoSortTypeEnum.rlstAlpha = "rlstAlpha";
        BoSortTypeEnum.rlstNumeric = "rlstNumeric";
        BoSortTypeEnum.rlstMoney = "rlstMoney";
        BoSortTypeEnum.rlstDate = "rlstDate";
        return BoSortTypeEnum;
    })();
    SAPB1.BoSortTypeEnum = BoSortTypeEnum;
    var BoStatus = (function () {
        function BoStatus() {
        }
        BoStatus.bost_Open = "bost_Open";
        BoStatus.bost_Close = "bost_Close";
        BoStatus.bost_Paid = "bost_Paid";
        BoStatus.bost_Delivered = "bost_Delivered";
        return BoStatus;
    })();
    SAPB1.BoStatus = BoStatus;
    var BoStckTrnDir = (function () {
        function BoStckTrnDir() {
        }
        BoStckTrnDir.bos_TransferToTechnician = "bos_TransferToTechnician";
        BoStckTrnDir.bos_TransferFromTechnician = "bos_TransferFromTechnician";
        return BoStckTrnDir;
    })();
    SAPB1.BoStckTrnDir = BoStckTrnDir;
    var BoSubPeriodTypeEnum = (function () {
        function BoSubPeriodTypeEnum() {
        }
        BoSubPeriodTypeEnum.spt_Year = "spt_Year";
        BoSubPeriodTypeEnum.spt_Quarters = "spt_Quarters";
        BoSubPeriodTypeEnum.spt_Months = "spt_Months";
        BoSubPeriodTypeEnum.spt_Days = "spt_Days";
        return BoSubPeriodTypeEnum;
    })();
    SAPB1.BoSubPeriodTypeEnum = BoSubPeriodTypeEnum;
    var BoSvcCallPriorities = (function () {
        function BoSvcCallPriorities() {
        }
        BoSvcCallPriorities.scp_Low = "scp_Low";
        BoSvcCallPriorities.scp_Medium = "scp_Medium";
        BoSvcCallPriorities.scp_High = "scp_High";
        return BoSvcCallPriorities;
    })();
    SAPB1.BoSvcCallPriorities = BoSvcCallPriorities;
    var BoSvcContractStatus = (function () {
        function BoSvcContractStatus() {
        }
        BoSvcContractStatus.scs_Approved = "scs_Approved";
        BoSvcContractStatus.scs_Draft = "scs_Draft";
        BoSvcContractStatus.scs_Frozen = "scs_Frozen";
        BoSvcContractStatus.scs_Terminated = "scs_Terminated";
        return BoSvcContractStatus;
    })();
    SAPB1.BoSvcContractStatus = BoSvcContractStatus;
    var BoSvcEpxDocTypes = (function () {
        function BoSvcEpxDocTypes() {
        }
        BoSvcEpxDocTypes.edt_Invoice = "edt_Invoice";
        BoSvcEpxDocTypes.edt_Delivery = "edt_Delivery";
        BoSvcEpxDocTypes.edt_Return = "edt_Return";
        BoSvcEpxDocTypes.edt_StockTransfer = "edt_StockTransfer";
        BoSvcEpxDocTypes.edt_CreditMemo = "edt_CreditMemo";
        BoSvcEpxDocTypes.edt_Order = "edt_Order";
        return BoSvcEpxDocTypes;
    })();
    SAPB1.BoSvcEpxDocTypes = BoSvcEpxDocTypes;
    var BoSvcExpPartTypes = (function () {
        function BoSvcExpPartTypes() {
        }
        BoSvcExpPartTypes.sep_Inventory = "sep_Inventory";
        BoSvcExpPartTypes.sep_NonInventory = "sep_NonInventory";
        return BoSvcExpPartTypes;
    })();
    SAPB1.BoSvcExpPartTypes = BoSvcExpPartTypes;
    var BoTCDConditionEnum = (function () {
        function BoTCDConditionEnum() {
        }
        BoTCDConditionEnum.tcdcNone = "tcdcNone";
        BoTCDConditionEnum.tcdcFederalTaxID = "tcdcFederalTaxID";
        BoTCDConditionEnum.tcdcShipToAddress = "tcdcShipToAddress";
        BoTCDConditionEnum.tcdcShipToStreePOBox = "tcdcShipToStreePOBox";
        BoTCDConditionEnum.tcdcShipToCity = "tcdcShipToCity";
        BoTCDConditionEnum.tcdcShipToZipCode = "tcdcShipToZipCode";
        BoTCDConditionEnum.tcdcShipToCounty = "tcdcShipToCounty";
        BoTCDConditionEnum.tcdcShipToState = "tcdcShipToState";
        BoTCDConditionEnum.tcdcShipToCountry = "tcdcShipToCountry";
        BoTCDConditionEnum.tcdcItem = "tcdcItem";
        BoTCDConditionEnum.tcdcItemGroup = "tcdcItemGroup";
        BoTCDConditionEnum.tcdcBusinessPartner = "tcdcBusinessPartner";
        BoTCDConditionEnum.tcdcCustomerGroup = "tcdcCustomerGroup";
        BoTCDConditionEnum.tcdcVendorGroup = "tcdcVendorGroup";
        BoTCDConditionEnum.tcdcWarehouse = "tcdcWarehouse";
        BoTCDConditionEnum.tcdcGLAccount = "tcdcGLAccount";
        BoTCDConditionEnum.tcdcCustomerEquTax = "tcdcCustomerEquTax";
        BoTCDConditionEnum.tcdcTaxStatus = "tcdcTaxStatus";
        BoTCDConditionEnum.tcdcFreight = "tcdcFreight";
        BoTCDConditionEnum.tcdcUDF = "tcdcUDF";
        BoTCDConditionEnum.tcdcBranchNumber = "tcdcBranchNumber";
        return BoTCDConditionEnum;
    })();
    SAPB1.BoTCDConditionEnum = BoTCDConditionEnum;
    var BoTCDDocumentTypeEnum = (function () {
        function BoTCDDocumentTypeEnum() {
        }
        BoTCDDocumentTypeEnum.tcddtItem = "tcddtItem";
        BoTCDDocumentTypeEnum.tcddtService = "tcddtService";
        BoTCDDocumentTypeEnum.tcddtItemAndService = "tcddtItemAndService";
        return BoTCDDocumentTypeEnum;
    })();
    SAPB1.BoTCDDocumentTypeEnum = BoTCDDocumentTypeEnum;
    var BoTaxInvoiceTypes = (function () {
        function BoTaxInvoiceTypes() {
        }
        BoTaxInvoiceTypes.botit_AlterationCorrectionInvoice = "botit_AlterationCorrectionInvoice";
        BoTaxInvoiceTypes.botit_AlterationInvoice = "botit_AlterationInvoice";
        BoTaxInvoiceTypes.botit_CorrectionInvoice = "botit_CorrectionInvoice";
        BoTaxInvoiceTypes.botit_Invoice = "botit_Invoice";
        BoTaxInvoiceTypes.botit_JournalEntry = "botit_JournalEntry";
        BoTaxInvoiceTypes.botit_Payment = "botit_Payment";
        return BoTaxInvoiceTypes;
    })();
    SAPB1.BoTaxInvoiceTypes = BoTaxInvoiceTypes;
    var BoTaxPostAccEnum = (function () {
        function BoTaxPostAccEnum() {
        }
        BoTaxPostAccEnum.tpa_Default = "tpa_Default";
        BoTaxPostAccEnum.tpa_SalesTaxAccount = "tpa_SalesTaxAccount";
        BoTaxPostAccEnum.tpa_PurchaseTaxAccount = "tpa_PurchaseTaxAccount";
        return BoTaxPostAccEnum;
    })();
    SAPB1.BoTaxPostAccEnum = BoTaxPostAccEnum;
    var BoTaxRoundingRuleTypes = (function () {
        function BoTaxRoundingRuleTypes() {
        }
        BoTaxRoundingRuleTypes.trr_RoundDown = "trr_RoundDown";
        BoTaxRoundingRuleTypes.trr_RoundUp = "trr_RoundUp";
        BoTaxRoundingRuleTypes.trr_RoundOff = "trr_RoundOff";
        BoTaxRoundingRuleTypes.trr_CompanyDefault = "trr_CompanyDefault";
        return BoTaxRoundingRuleTypes;
    })();
    SAPB1.BoTaxRoundingRuleTypes = BoTaxRoundingRuleTypes;
    var BoTaxTypes = (function () {
        function BoTaxTypes() {
        }
        BoTaxTypes.tt_Yes = "tt_Yes";
        BoTaxTypes.tt_No = "tt_No";
        BoTaxTypes.tt_UseTax = "tt_UseTax";
        BoTaxTypes.tt_OffsetTax = "tt_OffsetTax";
        return BoTaxTypes;
    })();
    SAPB1.BoTaxTypes = BoTaxTypes;
    var BoTimeTemplate = (function () {
        function BoTimeTemplate() {
        }
        BoTimeTemplate.tt_24H = "tt_24H";
        BoTimeTemplate.tt_12H = "tt_12H";
        return BoTimeTemplate;
    })();
    SAPB1.BoTimeTemplate = BoTimeTemplate;
    var BoTransactionTypeEnum = (function () {
        function BoTransactionTypeEnum() {
        }
        BoTransactionTypeEnum.botrntComplete = "botrntComplete";
        BoTransactionTypeEnum.botrntReject = "botrntReject";
        return BoTransactionTypeEnum;
    })();
    SAPB1.BoTransactionTypeEnum = BoTransactionTypeEnum;
    var BoUDOObjType = (function () {
        function BoUDOObjType() {
        }
        BoUDOObjType.boud_Document = "boud_Document";
        BoUDOObjType.boud_MasterData = "boud_MasterData";
        return BoUDOObjType;
    })();
    SAPB1.BoUDOObjType = BoUDOObjType;
    var BoUPTOptions = (function () {
        function BoUPTOptions() {
        }
        BoUPTOptions.bou_FullNone = "bou_FullNone";
        BoUPTOptions.bou_FullReadNone = "bou_FullReadNone";
        return BoUPTOptions;
    })();
    SAPB1.BoUPTOptions = BoUPTOptions;
    var BoUTBTableType = (function () {
        function BoUTBTableType() {
        }
        BoUTBTableType.bott_Document = "bott_Document";
        BoUTBTableType.bott_DocumentLines = "bott_DocumentLines";
        BoUTBTableType.bott_MasterData = "bott_MasterData";
        BoUTBTableType.bott_MasterDataLines = "bott_MasterDataLines";
        BoUTBTableType.bott_NoObject = "bott_NoObject";
        return BoUTBTableType;
    })();
    SAPB1.BoUTBTableType = BoUTBTableType;
    var BoUniqueSerialNumber = (function () {
        function BoUniqueSerialNumber() {
        }
        BoUniqueSerialNumber.usn_None = "usn_None";
        BoUniqueSerialNumber.usn_MfrSerialNumber = "usn_MfrSerialNumber";
        BoUniqueSerialNumber.usn_SerialNumber = "usn_SerialNumber";
        BoUniqueSerialNumber.usn_LotNumber = "usn_LotNumber";
        return BoUniqueSerialNumber;
    })();
    SAPB1.BoUniqueSerialNumber = BoUniqueSerialNumber;
    var BoUserGroup = (function () {
        function BoUserGroup() {
        }
        BoUserGroup.ug_Regular = "ug_Regular";
        BoUserGroup.ug_Deleted = "ug_Deleted";
        return BoUserGroup;
    })();
    SAPB1.BoUserGroup = BoUserGroup;
    var BoVatCategoryEnum = (function () {
        function BoVatCategoryEnum() {
        }
        BoVatCategoryEnum.bovcInputTax = "bovcInputTax";
        BoVatCategoryEnum.bovcOutputTax = "bovcOutputTax";
        return BoVatCategoryEnum;
    })();
    SAPB1.BoVatCategoryEnum = BoVatCategoryEnum;
    var BoVatStatus = (function () {
        function BoVatStatus() {
        }
        BoVatStatus.vExempted = "vExempted";
        BoVatStatus.vLiable = "vLiable";
        BoVatStatus.vEC = "vEC";
        return BoVatStatus;
    })();
    SAPB1.BoVatStatus = BoVatStatus;
    var BoVerticalAlignmentEnum = (function () {
        function BoVerticalAlignmentEnum() {
        }
        BoVerticalAlignmentEnum.rlvaTop = "rlvaTop";
        BoVerticalAlignmentEnum.rlvaBottom = "rlvaBottom";
        BoVerticalAlignmentEnum.rlvaCentralized = "rlvaCentralized";
        return BoVerticalAlignmentEnum;
    })();
    SAPB1.BoVerticalAlignmentEnum = BoVerticalAlignmentEnum;
    var BoWorkOrderStat = (function () {
        function BoWorkOrderStat() {
        }
        BoWorkOrderStat.wk_ProductComplete = "wk_ProductComplete";
        BoWorkOrderStat.wk_WorkInstruction = "wk_WorkInstruction";
        BoWorkOrderStat.wk_WorkOrder = "wk_WorkOrder";
        return BoWorkOrderStat;
    })();
    SAPB1.BoWorkOrderStat = BoWorkOrderStat;
    var BoYesNoEnum = (function () {
        function BoYesNoEnum() {
        }
        BoYesNoEnum.tNO = "tNO";
        BoYesNoEnum.tYES = "tYES";
        return BoYesNoEnum;
    })();
    SAPB1.BoYesNoEnum = BoYesNoEnum;
    var BrazilMultiIndexerTypes = (function () {
        function BrazilMultiIndexerTypes() {
        }
        BrazilMultiIndexerTypes.bmitInvalid = "bmitInvalid";
        BrazilMultiIndexerTypes.bmitIncomeNature = "bmitIncomeNature";
        return BrazilMultiIndexerTypes;
    })();
    SAPB1.BrazilMultiIndexerTypes = BrazilMultiIndexerTypes;
    var BrazilNumericIndexerTypes = (function () {
        function BrazilNumericIndexerTypes() {
        }
        BrazilNumericIndexerTypes.bnitInvalid = "bnitInvalid";
        BrazilNumericIndexerTypes.bnitBeverageCommercialBrand = "bnitBeverageCommercialBrand";
        BrazilNumericIndexerTypes.bnitFuelGroup = "bnitFuelGroup";
        BrazilNumericIndexerTypes.bnitNatureOfCompany = "bnitNatureOfCompany";
        BrazilNumericIndexerTypes.bnitEconomicActivityType = "bnitEconomicActivityType";
        BrazilNumericIndexerTypes.bnitCooperativeAssociationType = "bnitCooperativeAssociationType";
        BrazilNumericIndexerTypes.bnitProfitTaxation = "bnitProfitTaxation";
        BrazilNumericIndexerTypes.bnitCompanyQualification = "bnitCompanyQualification";
        BrazilNumericIndexerTypes.bnitDeclarerType = "bnitDeclarerType";
        BrazilNumericIndexerTypes.bnitEnvironmentType = "bnitEnvironmentType";
        BrazilNumericIndexerTypes.bnitTributaryType = "bnitTributaryType";
        BrazilNumericIndexerTypes.bnitTributaryRegimeCode = "bnitTributaryRegimeCode";
        BrazilNumericIndexerTypes.bnitIncomeNatureTable = "bnitIncomeNatureTable";
        BrazilNumericIndexerTypes.bnitIncomeNatureCode = "bnitIncomeNatureCode";
        BrazilNumericIndexerTypes.bnitExportationDocumentType = "bnitExportationDocumentType";
        BrazilNumericIndexerTypes.bnitExportationNature = "bnitExportationNature";
        BrazilNumericIndexerTypes.bnitLadingBillType = "bnitLadingBillType";
        return BrazilNumericIndexerTypes;
    })();
    SAPB1.BrazilNumericIndexerTypes = BrazilNumericIndexerTypes;
    var BrazilStringIndexerTypes = (function () {
        function BrazilStringIndexerTypes() {
        }
        BrazilStringIndexerTypes.bsitInvalid = "bsitInvalid";
        BrazilStringIndexerTypes.bsitBeverageTable = "bsitBeverageTable";
        BrazilStringIndexerTypes.bsitNatureOfCalculationBase = "bsitNatureOfCalculationBase";
        BrazilStringIndexerTypes.bsitCreditOrigin = "bsitCreditOrigin";
        BrazilStringIndexerTypes.bsitBeverageGroup = "bsitBeverageGroup";
        BrazilStringIndexerTypes.bsitCreditContributionOrigin = "bsitCreditContributionOrigin";
        BrazilStringIndexerTypes.bsitIPIPeriod = "bsitIPIPeriod";
        BrazilStringIndexerTypes.bsitSPEDProfile = "bsitSPEDProfile";
        BrazilStringIndexerTypes.bsitImportationDocumentType = "bsitImportationDocumentType";
        BrazilStringIndexerTypes.bsitReferentialAccountCode = "bsitReferentialAccountCode";
        return BrazilStringIndexerTypes;
    })();
    SAPB1.BrazilStringIndexerTypes = BrazilStringIndexerTypes;
    var CalculateInterestMethodEnum = (function () {
        function CalculateInterestMethodEnum() {
        }
        CalculateInterestMethodEnum.cimOnRemainingAmount = "cimOnRemainingAmount";
        CalculateInterestMethodEnum.cimOnOriginalSum = "cimOnOriginalSum";
        return CalculateInterestMethodEnum;
    })();
    SAPB1.CalculateInterestMethodEnum = CalculateInterestMethodEnum;
    var CalculationBaseEnum = (function () {
        function CalculationBaseEnum() {
        }
        CalculationBaseEnum.cbYearly = "cbYearly";
        CalculationBaseEnum.cbMonthly = "cbMonthly";
        return CalculationBaseEnum;
    })();
    SAPB1.CalculationBaseEnum = CalculationBaseEnum;
    var CallMessageStatusEnum = (function () {
        function CallMessageStatusEnum() {
        }
        CallMessageStatusEnum.cmsUnread = "cmsUnread";
        CallMessageStatusEnum.cmsRead = "cmsRead";
        return CallMessageStatusEnum;
    })();
    SAPB1.CallMessageStatusEnum = CallMessageStatusEnum;
    var CallMessageTypeEnum = (function () {
        function CallMessageTypeEnum() {
        }
        CallMessageTypeEnum.cmtInformation = "cmtInformation";
        CallMessageTypeEnum.cmtWarning = "cmtWarning";
        CallMessageTypeEnum.cmtError = "cmtError";
        return CallMessageTypeEnum;
    })();
    SAPB1.CallMessageTypeEnum = CallMessageTypeEnum;
    var CampaignAssignToEnum = (function () {
        function CampaignAssignToEnum() {
        }
        CampaignAssignToEnum.catUser = "catUser";
        CampaignAssignToEnum.catEmployee = "catEmployee";
        return CampaignAssignToEnum;
    })();
    SAPB1.CampaignAssignToEnum = CampaignAssignToEnum;
    var CampaignBPStatusEnum = (function () {
        function CampaignBPStatusEnum() {
        }
        CampaignBPStatusEnum.cbpsActive = "cbpsActive";
        CampaignBPStatusEnum.cbpsInactive = "cbpsInactive";
        return CampaignBPStatusEnum;
    })();
    SAPB1.CampaignBPStatusEnum = CampaignBPStatusEnum;
    var CampaignItemTypeEnum = (function () {
        function CampaignItemTypeEnum() {
        }
        CampaignItemTypeEnum.citItems = "citItems";
        CampaignItemTypeEnum.citLabel = "citLabel";
        CampaignItemTypeEnum.citTravel = "citTravel";
        return CampaignItemTypeEnum;
    })();
    SAPB1.CampaignItemTypeEnum = CampaignItemTypeEnum;
    var CampaignStatusEnum = (function () {
        function CampaignStatusEnum() {
        }
        CampaignStatusEnum.csOpen = "csOpen";
        CampaignStatusEnum.csFinished = "csFinished";
        CampaignStatusEnum.csCanceled = "csCanceled";
        return CampaignStatusEnum;
    })();
    SAPB1.CampaignStatusEnum = CampaignStatusEnum;
    var CampaignTypeEnum = (function () {
        function CampaignTypeEnum() {
        }
        CampaignTypeEnum.ctEmail = "ctEmail";
        CampaignTypeEnum.ctMail = "ctMail";
        CampaignTypeEnum.ctFax = "ctFax";
        CampaignTypeEnum.ctPhoneCall = "ctPhoneCall";
        CampaignTypeEnum.ctMeeting = "ctMeeting";
        CampaignTypeEnum.ctSMS = "ctSMS";
        CampaignTypeEnum.ctWeb = "ctWeb";
        CampaignTypeEnum.ctOthers = "ctOthers";
        return CampaignTypeEnum;
    })();
    SAPB1.CampaignTypeEnum = CampaignTypeEnum;
    var CancelStatusEnum = (function () {
        function CancelStatusEnum() {
        }
        CancelStatusEnum.csYes = "csYes";
        CancelStatusEnum.csNo = "csNo";
        CancelStatusEnum.csCancellation = "csCancellation";
        return CancelStatusEnum;
    })();
    SAPB1.CancelStatusEnum = CancelStatusEnum;
    var ClosingOptionEnum = (function () {
        function ClosingOptionEnum() {
        }
        ClosingOptionEnum.coByCurrentSystemDate = "coByCurrentSystemDate";
        ClosingOptionEnum.coByOriginalDocumentDate = "coByOriginalDocumentDate";
        ClosingOptionEnum.coBySpecifiedDate = "coBySpecifiedDate";
        return ClosingOptionEnum;
    })();
    SAPB1.ClosingOptionEnum = ClosingOptionEnum;
    var ContractSequenceEnum = (function () {
        function ContractSequenceEnum() {
        }
        ContractSequenceEnum.cs_Monthly = "cs_Monthly";
        ContractSequenceEnum.cs_Quarterly = "cs_Quarterly";
        ContractSequenceEnum.cs_SemiAnnually = "cs_SemiAnnually";
        ContractSequenceEnum.cs_Yearly = "cs_Yearly";
        return ContractSequenceEnum;
    })();
    SAPB1.ContractSequenceEnum = ContractSequenceEnum;
    var CounterTypeEnum = (function () {
        function CounterTypeEnum() {
        }
        CounterTypeEnum.ctUser = "ctUser";
        CounterTypeEnum.ctEmployee = "ctEmployee";
        return CounterTypeEnum;
    })();
    SAPB1.CounterTypeEnum = CounterTypeEnum;
    var CountingDocumentStatusEnum = (function () {
        function CountingDocumentStatusEnum() {
        }
        CountingDocumentStatusEnum.cdsOpen = "cdsOpen";
        CountingDocumentStatusEnum.cdsClosed = "cdsClosed";
        return CountingDocumentStatusEnum;
    })();
    SAPB1.CountingDocumentStatusEnum = CountingDocumentStatusEnum;
    var CountingLineStatusEnum = (function () {
        function CountingLineStatusEnum() {
        }
        CountingLineStatusEnum.clsOpen = "clsOpen";
        CountingLineStatusEnum.clsClosed = "clsClosed";
        return CountingLineStatusEnum;
    })();
    SAPB1.CountingLineStatusEnum = CountingLineStatusEnum;
    var CountingTypeEnum = (function () {
        function CountingTypeEnum() {
        }
        CountingTypeEnum.ctSingleCounter = "ctSingleCounter";
        CountingTypeEnum.ctMultipleCounters = "ctMultipleCounters";
        return CountingTypeEnum;
    })();
    SAPB1.CountingTypeEnum = CountingTypeEnum;
    var CreateMethodEnum = (function () {
        function CreateMethodEnum() {
        }
        CreateMethodEnum.cmManual = "cmManual";
        CreateMethodEnum.cmAutomatic = "cmAutomatic";
        return CreateMethodEnum;
    })();
    SAPB1.CreateMethodEnum = CreateMethodEnum;
    var CurrenciesDecimalsEnum = (function () {
        function CurrenciesDecimalsEnum() {
        }
        CurrenciesDecimalsEnum.cd1Digit = "cd1Digit";
        CurrenciesDecimalsEnum.cd2Digits = "cd2Digits";
        CurrenciesDecimalsEnum.cd3Digits = "cd3Digits";
        CurrenciesDecimalsEnum.cd4Digits = "cd4Digits";
        CurrenciesDecimalsEnum.cd5Digits = "cd5Digits";
        CurrenciesDecimalsEnum.cd6Digits = "cd6Digits";
        CurrenciesDecimalsEnum.cdDefault = "cdDefault";
        CurrenciesDecimalsEnum.cdWithoutDecimals = "cdWithoutDecimals";
        return CurrenciesDecimalsEnum;
    })();
    SAPB1.CurrenciesDecimalsEnum = CurrenciesDecimalsEnum;
    var CycleCountDeterminationCycleByEnum = (function () {
        function CycleCountDeterminationCycleByEnum() {
        }
        CycleCountDeterminationCycleByEnum.ccdcbItemGroup = "ccdcbItemGroup";
        CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel1 = "ccdcbWarehouseSublevel1";
        CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel2 = "ccdcbWarehouseSublevel2";
        CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel3 = "ccdcbWarehouseSublevel3";
        CycleCountDeterminationCycleByEnum.ccdcbWarehouseSublevel4 = "ccdcbWarehouseSublevel4";
        return CycleCountDeterminationCycleByEnum;
    })();
    SAPB1.CycleCountDeterminationCycleByEnum = CycleCountDeterminationCycleByEnum;
    var DepreciationCalculationBaseEnum = (function () {
        function DepreciationCalculationBaseEnum() {
        }
        DepreciationCalculationBaseEnum.dcbAcquisitionValue = "dcbAcquisitionValue";
        DepreciationCalculationBaseEnum.dcbNetBookValue = "dcbNetBookValue";
        return DepreciationCalculationBaseEnum;
    })();
    SAPB1.DepreciationCalculationBaseEnum = DepreciationCalculationBaseEnum;
    var DepreciationMethodEnum = (function () {
        function DepreciationMethodEnum() {
        }
        DepreciationMethodEnum.dmNoDepreciation = "dmNoDepreciation";
        DepreciationMethodEnum.dmStraightLine = "dmStraightLine";
        DepreciationMethodEnum.dmStraightLinePeriodControl = "dmStraightLinePeriodControl";
        DepreciationMethodEnum.dmDecliningBalance = "dmDecliningBalance";
        DepreciationMethodEnum.dmMultilevel = "dmMultilevel";
        DepreciationMethodEnum.dmImmediateWriteOff = "dmImmediateWriteOff";
        DepreciationMethodEnum.dmSpecialDepreciation = "dmSpecialDepreciation";
        DepreciationMethodEnum.dmManualDepreciation = "dmManualDepreciation";
        DepreciationMethodEnum.dmAccelerated = "dmAccelerated";
        return DepreciationMethodEnum;
    })();
    SAPB1.DepreciationMethodEnum = DepreciationMethodEnum;
    var DirectDebitTypeEnum = (function () {
        function DirectDebitTypeEnum() {
        }
        DirectDebitTypeEnum.ddtCORE = "ddtCORE";
        DirectDebitTypeEnum.ddtB2B = "ddtB2B";
        DirectDebitTypeEnum.ddtCOR1 = "ddtCOR1";
        return DirectDebitTypeEnum;
    })();
    SAPB1.DirectDebitTypeEnum = DirectDebitTypeEnum;
    var DiscountGroupBaseObjectEnum = (function () {
        function DiscountGroupBaseObjectEnum() {
        }
        DiscountGroupBaseObjectEnum.dgboNone = "dgboNone";
        DiscountGroupBaseObjectEnum.dgboItemGroups = "dgboItemGroups";
        DiscountGroupBaseObjectEnum.dgboItemProperties = "dgboItemProperties";
        DiscountGroupBaseObjectEnum.dgboManufacturer = "dgboManufacturer";
        DiscountGroupBaseObjectEnum.dgboItems = "dgboItems";
        return DiscountGroupBaseObjectEnum;
    })();
    SAPB1.DiscountGroupBaseObjectEnum = DiscountGroupBaseObjectEnum;
    var DiscountGroupDiscountTypeEnum = (function () {
        function DiscountGroupDiscountTypeEnum() {
        }
        DiscountGroupDiscountTypeEnum.dgdt_Fixed = "dgdt_Fixed";
        DiscountGroupDiscountTypeEnum.dgdt_Variable = "dgdt_Variable";
        return DiscountGroupDiscountTypeEnum;
    })();
    SAPB1.DiscountGroupDiscountTypeEnum = DiscountGroupDiscountTypeEnum;
    var DiscountGroupRelationsEnum = (function () {
        function DiscountGroupRelationsEnum() {
        }
        DiscountGroupRelationsEnum.dgrLowestDiscount = "dgrLowestDiscount";
        DiscountGroupRelationsEnum.dgrHighestDiscount = "dgrHighestDiscount";
        DiscountGroupRelationsEnum.dgrAverageDiscount = "dgrAverageDiscount";
        DiscountGroupRelationsEnum.dgrDiscountTotals = "dgrDiscountTotals";
        DiscountGroupRelationsEnum.dgrMultipliedDiscount = "dgrMultipliedDiscount";
        return DiscountGroupRelationsEnum;
    })();
    SAPB1.DiscountGroupRelationsEnum = DiscountGroupRelationsEnum;
    var DiscountGroupTypeEnum = (function () {
        function DiscountGroupTypeEnum() {
        }
        DiscountGroupTypeEnum.dgt_AllBPs = "dgt_AllBPs";
        DiscountGroupTypeEnum.dgt_CustomerGroup = "dgt_CustomerGroup";
        DiscountGroupTypeEnum.dgt_VendorGroup = "dgt_VendorGroup";
        DiscountGroupTypeEnum.dgt_SpecificBP = "dgt_SpecificBP";
        return DiscountGroupTypeEnum;
    })();
    SAPB1.DiscountGroupTypeEnum = DiscountGroupTypeEnum;
    var DocumentAuthorizationStatusEnum = (function () {
        function DocumentAuthorizationStatusEnum() {
        }
        DocumentAuthorizationStatusEnum.dasWithout = "dasWithout";
        DocumentAuthorizationStatusEnum.dasPending = "dasPending";
        DocumentAuthorizationStatusEnum.dasApproved = "dasApproved";
        DocumentAuthorizationStatusEnum.dasRejected = "dasRejected";
        DocumentAuthorizationStatusEnum.dasGenerated = "dasGenerated";
        DocumentAuthorizationStatusEnum.dasGeneratedbyAuthorizer = "dasGeneratedbyAuthorizer";
        DocumentAuthorizationStatusEnum.dasCancelled = "dasCancelled";
        return DocumentAuthorizationStatusEnum;
    })();
    SAPB1.DocumentAuthorizationStatusEnum = DocumentAuthorizationStatusEnum;
    var DocumentDeliveryTypeEnum = (function () {
        function DocumentDeliveryTypeEnum() {
        }
        DocumentDeliveryTypeEnum.ddtNoneSeleted = "ddtNoneSeleted";
        DocumentDeliveryTypeEnum.ddtCreateOnlineDocument = "ddtCreateOnlineDocument";
        DocumentDeliveryTypeEnum.ddtPostToAribaNetwork = "ddtPostToAribaNetwork";
        return DocumentDeliveryTypeEnum;
    })();
    SAPB1.DocumentDeliveryTypeEnum = DocumentDeliveryTypeEnum;
    var DomesticBankAccountValidationEnum = (function () {
        function DomesticBankAccountValidationEnum() {
        }
        DomesticBankAccountValidationEnum.dbavNone = "dbavNone";
        DomesticBankAccountValidationEnum.dbavBelgium = "dbavBelgium";
        DomesticBankAccountValidationEnum.dbavSpain = "dbavSpain";
        DomesticBankAccountValidationEnum.dbavFrance = "dbavFrance";
        DomesticBankAccountValidationEnum.dbavItaly = "dbavItaly";
        DomesticBankAccountValidationEnum.dbavNetherlands = "dbavNetherlands";
        DomesticBankAccountValidationEnum.dbavPortugal = "dbavPortugal";
        return DomesticBankAccountValidationEnum;
    })();
    SAPB1.DomesticBankAccountValidationEnum = DomesticBankAccountValidationEnum;
    var DownPaymentTypeEnum = (function () {
        function DownPaymentTypeEnum() {
        }
        DownPaymentTypeEnum.dptRequest = "dptRequest";
        DownPaymentTypeEnum.dptInvoice = "dptInvoice";
        return DownPaymentTypeEnum;
    })();
    SAPB1.DownPaymentTypeEnum = DownPaymentTypeEnum;
    var DrawingMethodEnum = (function () {
        function DrawingMethodEnum() {
        }
        DrawingMethodEnum.dmAll = "dmAll";
        DrawingMethodEnum.dmNone = "dmNone";
        DrawingMethodEnum.dmQuantity = "dmQuantity";
        DrawingMethodEnum.dmTotal = "dmTotal";
        return DrawingMethodEnum;
    })();
    SAPB1.DrawingMethodEnum = DrawingMethodEnum;
    var DueDateTypesEnum = (function () {
        function DueDateTypesEnum() {
        }
        DueDateTypesEnum.ddtAfterTimePeriod = "ddtAfterTimePeriod";
        DueDateTypesEnum.ddtByDates = "ddtByDates";
        return DueDateTypesEnum;
    })();
    SAPB1.DueDateTypesEnum = DueDateTypesEnum;
    var DunningLetterTypeEnum = (function () {
        function DunningLetterTypeEnum() {
        }
        DunningLetterTypeEnum.dltDunningLetter1 = "dltDunningLetter1";
        DunningLetterTypeEnum.dltDunningLetter2 = "dltDunningLetter2";
        DunningLetterTypeEnum.dltDunningLetter3 = "dltDunningLetter3";
        DunningLetterTypeEnum.dltDunningLetter4 = "dltDunningLetter4";
        DunningLetterTypeEnum.dltDunningLetter5 = "dltDunningLetter5";
        DunningLetterTypeEnum.dltDunningLetter6 = "dltDunningLetter6";
        DunningLetterTypeEnum.dltDunningLetter7 = "dltDunningLetter7";
        DunningLetterTypeEnum.dltDunningLetter8 = "dltDunningLetter8";
        DunningLetterTypeEnum.dltDunningLetter9 = "dltDunningLetter9";
        DunningLetterTypeEnum.dltDunningLetter10 = "dltDunningLetter10";
        DunningLetterTypeEnum.dltDunningALL = "dltDunningALL";
        return DunningLetterTypeEnum;
    })();
    SAPB1.DunningLetterTypeEnum = DunningLetterTypeEnum;
    var ECDPostingTypeEnum = (function () {
        function ECDPostingTypeEnum() {
        }
        ECDPostingTypeEnum.ecdNormal = "ecdNormal";
        ECDPostingTypeEnum.ecdStatement = "ecdStatement";
        return ECDPostingTypeEnum;
    })();
    SAPB1.ECDPostingTypeEnum = ECDPostingTypeEnum;
    var EDocGenerationTypeEnum = (function () {
        function EDocGenerationTypeEnum() {
        }
        EDocGenerationTypeEnum.edocGenerate = "edocGenerate";
        EDocGenerationTypeEnum.edocGenerateLater = "edocGenerateLater";
        EDocGenerationTypeEnum.edocNotRelevant = "edocNotRelevant";
        return EDocGenerationTypeEnum;
    })();
    SAPB1.EDocGenerationTypeEnum = EDocGenerationTypeEnum;
    var EDocStatusEnum = (function () {
        function EDocStatusEnum() {
        }
        EDocStatusEnum.edoc_New = "edoc_New";
        EDocStatusEnum.edoc_Pending = "edoc_Pending";
        EDocStatusEnum.edoc_Sent = "edoc_Sent";
        EDocStatusEnum.edoc_Error = "edoc_Error";
        EDocStatusEnum.edoc_Ok = "edoc_Ok";
        return EDocStatusEnum;
    })();
    SAPB1.EDocStatusEnum = EDocStatusEnum;
    var ElecCommStatusEnum = (function () {
        function ElecCommStatusEnum() {
        }
        ElecCommStatusEnum.ecsApproved = "ecsApproved";
        ElecCommStatusEnum.ecsPendingApproval = "ecsPendingApproval";
        ElecCommStatusEnum.ecsRejected = "ecsRejected";
        return ElecCommStatusEnum;
    })();
    SAPB1.ElecCommStatusEnum = ElecCommStatusEnum;
    var EmployeeExemptionUnitEnum = (function () {
        function EmployeeExemptionUnitEnum() {
        }
        EmployeeExemptionUnitEnum.eeu_None = "eeu_None";
        EmployeeExemptionUnitEnum.eeu_Yearly = "eeu_Yearly";
        EmployeeExemptionUnitEnum.eeu_Monthly = "eeu_Monthly";
        EmployeeExemptionUnitEnum.eeu_Weekly = "eeu_Weekly";
        EmployeeExemptionUnitEnum.eeu_Daily = "eeu_Daily";
        return EmployeeExemptionUnitEnum;
    })();
    SAPB1.EmployeeExemptionUnitEnum = EmployeeExemptionUnitEnum;
    var EmployeePaymentMethodEnum = (function () {
        function EmployeePaymentMethodEnum() {
        }
        EmployeePaymentMethodEnum.epm_None = "epm_None";
        EmployeePaymentMethodEnum.epm_BankTransfer = "epm_BankTransfer";
        return EmployeePaymentMethodEnum;
    })();
    SAPB1.EmployeePaymentMethodEnum = EmployeePaymentMethodEnum;
    var EmployeeTransferProcessingStatusEnum = (function () {
        function EmployeeTransferProcessingStatusEnum() {
        }
        EmployeeTransferProcessingStatusEnum.etps_New = "etps_New";
        EmployeeTransferProcessingStatusEnum.etps_Sent = "etps_Sent";
        EmployeeTransferProcessingStatusEnum.etps_Accepted = "etps_Accepted";
        EmployeeTransferProcessingStatusEnum.etps_Error = "etps_Error";
        return EmployeeTransferProcessingStatusEnum;
    })();
    SAPB1.EmployeeTransferProcessingStatusEnum = EmployeeTransferProcessingStatusEnum;
    var EmployeeTransferStatusEnum = (function () {
        function EmployeeTransferStatusEnum() {
        }
        EmployeeTransferStatusEnum.ets_New = "ets_New";
        EmployeeTransferStatusEnum.ets_Processing = "ets_Processing";
        EmployeeTransferStatusEnum.ets_Sent = "ets_Sent";
        EmployeeTransferStatusEnum.ets_Received = "ets_Received";
        EmployeeTransferStatusEnum.ets_Accepted = "ets_Accepted";
        EmployeeTransferStatusEnum.ets_Error = "ets_Error";
        return EmployeeTransferStatusEnum;
    })();
    SAPB1.EmployeeTransferStatusEnum = EmployeeTransferStatusEnum;
    var EndTypeEnum = (function () {
        function EndTypeEnum() {
        }
        EndTypeEnum.etNoEndDate = "etNoEndDate";
        EndTypeEnum.etByCounter = "etByCounter";
        EndTypeEnum.etByDate = "etByDate";
        return EndTypeEnum;
    })();
    SAPB1.EndTypeEnum = EndTypeEnum;
    var ExchangeRateSelectEnum = (function () {
        function ExchangeRateSelectEnum() {
        }
        ExchangeRateSelectEnum.ierFromInovice = "ierFromInovice";
        ExchangeRateSelectEnum.ierCurrentRate = "ierCurrentRate";
        return ExchangeRateSelectEnum;
    })();
    SAPB1.ExchangeRateSelectEnum = ExchangeRateSelectEnum;
    var ExternalCallStatusEnum = (function () {
        function ExternalCallStatusEnum() {
        }
        ExternalCallStatusEnum.ecsNew = "ecsNew";
        ExternalCallStatusEnum.ecsInProcess = "ecsInProcess";
        ExternalCallStatusEnum.ecsCompleted = "ecsCompleted";
        ExternalCallStatusEnum.ecsConfirmed = "ecsConfirmed";
        ExternalCallStatusEnum.ecsFailed = "ecsFailed";
        return ExternalCallStatusEnum;
    })();
    SAPB1.ExternalCallStatusEnum = ExternalCallStatusEnum;
    var FreightTypeEnum = (function () {
        function FreightTypeEnum() {
        }
        FreightTypeEnum.ftShipping = "ftShipping";
        FreightTypeEnum.ftInsurance = "ftInsurance";
        FreightTypeEnum.ftOther = "ftOther";
        FreightTypeEnum.ftSpecial = "ftSpecial";
        return FreightTypeEnum;
    })();
    SAPB1.FreightTypeEnum = FreightTypeEnum;
    var GTSResponseToExceedingEnum = (function () {
        function GTSResponseToExceedingEnum() {
        }
        GTSResponseToExceedingEnum.Block = "Block";
        GTSResponseToExceedingEnum.Split = "Split";
        return GTSResponseToExceedingEnum;
    })();
    SAPB1.GTSResponseToExceedingEnum = GTSResponseToExceedingEnum;
    var GetGLAccountByEnum = (function () {
        function GetGLAccountByEnum() {
        }
        GetGLAccountByEnum.gglab_General = "gglab_General";
        GetGLAccountByEnum.gglab_Warehouse = "gglab_Warehouse";
        GetGLAccountByEnum.gglab_ItemGroup = "gglab_ItemGroup";
        return GetGLAccountByEnum;
    })();
    SAPB1.GetGLAccountByEnum = GetGLAccountByEnum;
    var GovPayCodePeriodicityEnum = (function () {
        function GovPayCodePeriodicityEnum() {
        }
        GovPayCodePeriodicityEnum.gpcpMonth = "gpcpMonth";
        GovPayCodePeriodicityEnum.gpcpQuarter = "gpcpQuarter";
        GovPayCodePeriodicityEnum.gpcpHalfMonth = "gpcpHalfMonth";
        GovPayCodePeriodicityEnum.gpcpTenDays = "gpcpTenDays";
        return GovPayCodePeriodicityEnum;
    })();
    SAPB1.GovPayCodePeriodicityEnum = GovPayCodePeriodicityEnum;
    var GovPayCodeSPEDCategoryEnum = (function () {
        function GovPayCodeSPEDCategoryEnum() {
        }
        GovPayCodeSPEDCategoryEnum.gpcscICMS = "gpcscICMS";
        GovPayCodeSPEDCategoryEnum.gpcscICMSST = "gpcscICMSST";
        GovPayCodeSPEDCategoryEnum.gpcscIPI = "gpcscIPI";
        GovPayCodeSPEDCategoryEnum.gpcscISS = "gpcscISS";
        GovPayCodeSPEDCategoryEnum.gpcscPIS = "gpcscPIS";
        GovPayCodeSPEDCategoryEnum.gpcscCOFINS = "gpcscCOFINS";
        GovPayCodeSPEDCategoryEnum.gpcsPISST = "gpcsPISST";
        GovPayCodeSPEDCategoryEnum.gpcsCONFINSST = "gpcsCONFINSST";
        return GovPayCodeSPEDCategoryEnum;
    })();
    SAPB1.GovPayCodeSPEDCategoryEnum = GovPayCodeSPEDCategoryEnum;
    var GroupingMethodEnum = (function () {
        function GroupingMethodEnum() {
        }
        GroupingMethodEnum.gmPerInvoice = "gmPerInvoice";
        GroupingMethodEnum.gmPerDunningLevel = "gmPerDunningLevel";
        GroupingMethodEnum.gmPerBP = "gmPerBP";
        return GroupingMethodEnum;
    })();
    SAPB1.GroupingMethodEnum = GroupingMethodEnum;
    var InstallmentPaymentsPossiblityEnum = (function () {
        function InstallmentPaymentsPossiblityEnum() {
        }
        InstallmentPaymentsPossiblityEnum.ippCr = "ippCr";
        InstallmentPaymentsPossiblityEnum.ippNo = "ippNo";
        InstallmentPaymentsPossiblityEnum.ippRd = "ippRd";
        InstallmentPaymentsPossiblityEnum.ippYes = "ippYes";
        return InstallmentPaymentsPossiblityEnum;
    })();
    SAPB1.InstallmentPaymentsPossiblityEnum = InstallmentPaymentsPossiblityEnum;
    var IntrastatConfigurationEnum = (function () {
        function IntrastatConfigurationEnum() {
        }
        IntrastatConfigurationEnum.enAdditionalMeasureUnit = "enAdditionalMeasureUnit";
        IntrastatConfigurationEnum.enCommodityCodes = "enCommodityCodes";
        IntrastatConfigurationEnum.enCustomProcedures = "enCustomProcedures";
        IntrastatConfigurationEnum.enIncoterms = "enIncoterms";
        IntrastatConfigurationEnum.enNatureOfTransactions = "enNatureOfTransactions";
        IntrastatConfigurationEnum.enPortsOfEntryAndExit = "enPortsOfEntryAndExit";
        IntrastatConfigurationEnum.enServiceCodes = "enServiceCodes";
        IntrastatConfigurationEnum.enStatisticalProcedures = "enStatisticalProcedures";
        IntrastatConfigurationEnum.enTransportModes = "enTransportModes";
        IntrastatConfigurationEnum.enRegions = "enRegions";
        return IntrastatConfigurationEnum;
    })();
    SAPB1.IntrastatConfigurationEnum = IntrastatConfigurationEnum;
    var InvBaseDocTypeEnum = (function () {
        function InvBaseDocTypeEnum() {
        }
        InvBaseDocTypeEnum.Default = "Default";
        InvBaseDocTypeEnum.Empty = "Empty";
        InvBaseDocTypeEnum.PurchaseDeliveryNotes = "PurchaseDeliveryNotes";
        InvBaseDocTypeEnum.InventoryGeneralEntry = "InventoryGeneralEntry";
        InvBaseDocTypeEnum.WarehouseTransfers = "WarehouseTransfers";
        InvBaseDocTypeEnum.InventoryTransferRequest = "InventoryTransferRequest";
        return InvBaseDocTypeEnum;
    })();
    SAPB1.InvBaseDocTypeEnum = InvBaseDocTypeEnum;
    var InventoryAccountTypeEnum = (function () {
        function InventoryAccountTypeEnum() {
        }
        InventoryAccountTypeEnum.iatExpenses = "iatExpenses";
        InventoryAccountTypeEnum.iatRevenues = "iatRevenues";
        InventoryAccountTypeEnum.iatExemptIncome = "iatExemptIncome";
        InventoryAccountTypeEnum.iatInventory = "iatInventory";
        InventoryAccountTypeEnum.iatCost = "iatCost";
        InventoryAccountTypeEnum.iatTransfer = "iatTransfer";
        InventoryAccountTypeEnum.iatVarience = "iatVarience";
        InventoryAccountTypeEnum.iatPriceDifference = "iatPriceDifference";
        InventoryAccountTypeEnum.iatNegativeInventoryAdjustment = "iatNegativeInventoryAdjustment";
        InventoryAccountTypeEnum.iatDecreasing = "iatDecreasing";
        InventoryAccountTypeEnum.iatIncreasing = "iatIncreasing";
        InventoryAccountTypeEnum.iatReturning = "iatReturning";
        InventoryAccountTypeEnum.iatEURevenues = "iatEURevenues";
        InventoryAccountTypeEnum.iatEUExpenses = "iatEUExpenses";
        InventoryAccountTypeEnum.iatForeignRevenue = "iatForeignRevenue";
        InventoryAccountTypeEnum.iatForeignExpens = "iatForeignExpens";
        InventoryAccountTypeEnum.iatPurchase = "iatPurchase";
        InventoryAccountTypeEnum.iatPAReturn = "iatPAReturn";
        InventoryAccountTypeEnum.iatPurchaseOffset = "iatPurchaseOffset";
        InventoryAccountTypeEnum.iatExchangeRateDifferences = "iatExchangeRateDifferences";
        InventoryAccountTypeEnum.iatGoodsClearing = "iatGoodsClearing";
        InventoryAccountTypeEnum.iatGLDecrease = "iatGLDecrease";
        InventoryAccountTypeEnum.iatGLIncrease = "iatGLIncrease";
        InventoryAccountTypeEnum.iatWip = "iatWip";
        InventoryAccountTypeEnum.iatWipVariance = "iatWipVariance";
        InventoryAccountTypeEnum.iatWipOffsetProfitAndLoss = "iatWipOffsetProfitAndLoss";
        InventoryAccountTypeEnum.iatInventoryOffsetProfitAndLoss = "iatInventoryOffsetProfitAndLoss";
        InventoryAccountTypeEnum.iatStockInflationAdjust = "iatStockInflationAdjust";
        InventoryAccountTypeEnum.iatStockInflationOffset = "iatStockInflationOffset";
        InventoryAccountTypeEnum.iatCostInflation = "iatCostInflation";
        InventoryAccountTypeEnum.iatCostInflationOffset = "iatCostInflationOffset";
        InventoryAccountTypeEnum.iatExpenseClearing = "iatExpenseClearing";
        InventoryAccountTypeEnum.iatExpenseOffsetting = "iatExpenseOffsetting";
        InventoryAccountTypeEnum.iatStockInTransit = "iatStockInTransit";
        InventoryAccountTypeEnum.iatShippedGoods = "iatShippedGoods";
        InventoryAccountTypeEnum.iatVATInRevenue = "iatVATInRevenue";
        InventoryAccountTypeEnum.iatSalesCredit = "iatSalesCredit";
        InventoryAccountTypeEnum.iatPurchaseCredit = "iatPurchaseCredit";
        InventoryAccountTypeEnum.iatExemptedCredits = "iatExemptedCredits";
        InventoryAccountTypeEnum.iatSalesCreditForeign = "iatSalesCreditForeign";
        InventoryAccountTypeEnum.iatForeignPurchaseCredit = "iatForeignPurchaseCredit";
        InventoryAccountTypeEnum.iatSalesCreditEU = "iatSalesCreditEU";
        InventoryAccountTypeEnum.iatEUPurchaseCredit = "iatEUPurchaseCredit";
        InventoryAccountTypeEnum.iatPurchaseBalance = "iatPurchaseBalance";
        InventoryAccountTypeEnum.iatWHIncomingCenvat = "iatWHIncomingCenvat";
        InventoryAccountTypeEnum.iatWHOutgoingCenvat = "iatWHOutgoingCenvat";
        InventoryAccountTypeEnum.iatFreeOfChargeSales = "iatFreeOfChargeSales";
        InventoryAccountTypeEnum.iatFreeOfChargePurchase = "iatFreeOfChargePurchase";
        return InventoryAccountTypeEnum;
    })();
    SAPB1.InventoryAccountTypeEnum = InventoryAccountTypeEnum;
    var InventoryCycleTypeEnum = (function () {
        function InventoryCycleTypeEnum() {
        }
        InventoryCycleTypeEnum.ictCylce = "ictCylce";
        InventoryCycleTypeEnum.ictMRP = "ictMRP";
        return InventoryCycleTypeEnum;
    })();
    SAPB1.InventoryCycleTypeEnum = InventoryCycleTypeEnum;
    var InventoryOpeningBalancePriceSourceEnum = (function () {
        function InventoryOpeningBalancePriceSourceEnum() {
        }
        InventoryOpeningBalancePriceSourceEnum.iobpsByPriceList = "iobpsByPriceList";
        InventoryOpeningBalancePriceSourceEnum.iobpsLastEvaluatedPrice = "iobpsLastEvaluatedPrice";
        InventoryOpeningBalancePriceSourceEnum.iobpsItemCost = "iobpsItemCost";
        return InventoryOpeningBalancePriceSourceEnum;
    })();
    SAPB1.InventoryOpeningBalancePriceSourceEnum = InventoryOpeningBalancePriceSourceEnum;
    var InventoryPostingCopyOptionEnum = (function () {
        function InventoryPostingCopyOptionEnum() {
        }
        InventoryPostingCopyOptionEnum.ipcoNoCountersDiff = "ipcoNoCountersDiff";
        InventoryPostingCopyOptionEnum.ipcoIndividual1CountedQuantity = "ipcoIndividual1CountedQuantity";
        InventoryPostingCopyOptionEnum.ipcoIndividual2CountedQuantity = "ipcoIndividual2CountedQuantity";
        InventoryPostingCopyOptionEnum.ipcoIndividual3CountedQuantity = "ipcoIndividual3CountedQuantity";
        InventoryPostingCopyOptionEnum.ipcoIndividual4CountedQuantity = "ipcoIndividual4CountedQuantity";
        InventoryPostingCopyOptionEnum.ipcoIndividual5CountedQuantity = "ipcoIndividual5CountedQuantity";
        InventoryPostingCopyOptionEnum.ipcoTeamCountedQuantity = "ipcoTeamCountedQuantity";
        return InventoryPostingCopyOptionEnum;
    })();
    SAPB1.InventoryPostingCopyOptionEnum = InventoryPostingCopyOptionEnum;
    var InventoryPostingPriceSourceEnum = (function () {
        function InventoryPostingPriceSourceEnum() {
        }
        InventoryPostingPriceSourceEnum.ippsByPriceList = "ippsByPriceList";
        InventoryPostingPriceSourceEnum.ippsLastEvaluatedPrice = "ippsLastEvaluatedPrice";
        InventoryPostingPriceSourceEnum.ippsItemCost = "ippsItemCost";
        return InventoryPostingPriceSourceEnum;
    })();
    SAPB1.InventoryPostingPriceSourceEnum = InventoryPostingPriceSourceEnum;
    var IssuePrimarilyByEnum = (function () {
        function IssuePrimarilyByEnum() {
        }
        IssuePrimarilyByEnum.ipbSerialAndBatchNumbers = "ipbSerialAndBatchNumbers";
        IssuePrimarilyByEnum.ipbBinLocations = "ipbBinLocations";
        return IssuePrimarilyByEnum;
    })();
    SAPB1.IssuePrimarilyByEnum = IssuePrimarilyByEnum;
    var ItemClassEnum = (function () {
        function ItemClassEnum() {
        }
        ItemClassEnum.itcService = "itcService";
        ItemClassEnum.itcMaterial = "itcMaterial";
        return ItemClassEnum;
    })();
    SAPB1.ItemClassEnum = ItemClassEnum;
    var ItemTypeEnum = (function () {
        function ItemTypeEnum() {
        }
        ItemTypeEnum.itItems = "itItems";
        ItemTypeEnum.itLabor = "itLabor";
        ItemTypeEnum.itTravel = "itTravel";
        ItemTypeEnum.itFixedAssets = "itFixedAssets";
        return ItemTypeEnum;
    })();
    SAPB1.ItemTypeEnum = ItemTypeEnum;
    var ItemUoMTypeEnum = (function () {
        function ItemUoMTypeEnum() {
        }
        ItemUoMTypeEnum.iutPurchasing = "iutPurchasing";
        ItemUoMTypeEnum.iutSales = "iutSales";
        ItemUoMTypeEnum.iutInventory = "iutInventory";
        return ItemUoMTypeEnum;
    })();
    SAPB1.ItemUoMTypeEnum = ItemUoMTypeEnum;
    var KPITypeEnum = (function () {
        function KPITypeEnum() {
        }
        KPITypeEnum.asSingle = "asSingle";
        KPITypeEnum.asQuarterly = "asQuarterly";
        KPITypeEnum.asMonthly = "asMonthly";
        KPITypeEnum.asMultiple = "asMultiple";
        return KPITypeEnum;
    })();
    SAPB1.KPITypeEnum = KPITypeEnum;
    var LCCostTypeEnum = (function () {
        function LCCostTypeEnum() {
        }
        LCCostTypeEnum.asFixedCosts = "asFixedCosts";
        LCCostTypeEnum.asVariableCosts = "asVariableCosts";
        return LCCostTypeEnum;
    })();
    SAPB1.LCCostTypeEnum = LCCostTypeEnum;
    var LandedCostAllocationByEnum = (function () {
        function LandedCostAllocationByEnum() {
        }
        LandedCostAllocationByEnum.asCashValueBeforeCustoms = "asCashValueBeforeCustoms";
        LandedCostAllocationByEnum.asCashValueAfterCustoms = "asCashValueAfterCustoms";
        LandedCostAllocationByEnum.asQuantity = "asQuantity";
        LandedCostAllocationByEnum.asWeight = "asWeight";
        LandedCostAllocationByEnum.asVolume = "asVolume";
        LandedCostAllocationByEnum.asEqual = "asEqual";
        return LandedCostAllocationByEnum;
    })();
    SAPB1.LandedCostAllocationByEnum = LandedCostAllocationByEnum;
    var LandedCostBaseDocumentTypeEnum = (function () {
        function LandedCostBaseDocumentTypeEnum() {
        }
        LandedCostBaseDocumentTypeEnum.asDefault = "asDefault";
        LandedCostBaseDocumentTypeEnum.asEmpty = "asEmpty";
        LandedCostBaseDocumentTypeEnum.asGoodsReceiptPO = "asGoodsReceiptPO";
        LandedCostBaseDocumentTypeEnum.asLandedCosts = "asLandedCosts";
        LandedCostBaseDocumentTypeEnum.asPurchaseInvoice = "asPurchaseInvoice";
        return LandedCostBaseDocumentTypeEnum;
    })();
    SAPB1.LandedCostBaseDocumentTypeEnum = LandedCostBaseDocumentTypeEnum;
    var LandedCostDocStatusEnum = (function () {
        function LandedCostDocStatusEnum() {
        }
        LandedCostDocStatusEnum.lcOpen = "lcOpen";
        LandedCostDocStatusEnum.lcClosed = "lcClosed";
        return LandedCostDocStatusEnum;
    })();
    SAPB1.LandedCostDocStatusEnum = LandedCostDocStatusEnum;
    var LegalDataLineTypeEnum = (function () {
        function LegalDataLineTypeEnum() {
        }
        LegalDataLineTypeEnum.ldlt_DocumentTotal = "ldlt_DocumentTotal";
        LegalDataLineTypeEnum.ldlt_TaxPerLine = "ldlt_TaxPerLine";
        LegalDataLineTypeEnum.ldlt_TotalTax = "ldlt_TotalTax";
        return LegalDataLineTypeEnum;
    })();
    SAPB1.LegalDataLineTypeEnum = LegalDataLineTypeEnum;
    var LicenseTypeEnum = (function () {
        function LicenseTypeEnum() {
        }
        LicenseTypeEnum.lkIdirect = "lkIdirect";
        LicenseTypeEnum.lkSOAIndirect = "lkSOAIndirect";
        LicenseTypeEnum.lkSOA = "lkSOA";
        LicenseTypeEnum.lkB1iIndirect = "lkB1iIndirect";
        LicenseTypeEnum.lkB1i = "lkB1i";
        return LicenseTypeEnum;
    })();
    SAPB1.LicenseTypeEnum = LicenseTypeEnum;
    var LicenseUpdateTypeEnum = (function () {
        function LicenseUpdateTypeEnum() {
        }
        LicenseUpdateTypeEnum.ultAssign = "ultAssign";
        LicenseUpdateTypeEnum.ultRemove = "ultRemove";
        return LicenseUpdateTypeEnum;
    })();
    SAPB1.LicenseUpdateTypeEnum = LicenseUpdateTypeEnum;
    var LineTypeEnum = (function () {
        function LineTypeEnum() {
        }
        LineTypeEnum.ltDocument = "ltDocument ";
        LineTypeEnum.ltRounding = "ltRounding";
        LineTypeEnum.ltVat = "ltVat";
        return LineTypeEnum;
    })();
    SAPB1.LineTypeEnum = LineTypeEnum;
    var LinkedDocTypeEnum = (function () {
        function LinkedDocTypeEnum() {
        }
        LinkedDocTypeEnum.ldtEmptyLink = "ldtEmptyLink";
        LinkedDocTypeEnum.ldtSalesOpportunitiesLink = "ldtSalesOpportunitiesLink";
        LinkedDocTypeEnum.ldtSalesQuotationsLink = "ldtSalesQuotationsLink";
        LinkedDocTypeEnum.ldtSalesOrdersLink = "ldtSalesOrdersLink";
        LinkedDocTypeEnum.ldtDeliveriesLink = "ldtDeliveriesLink";
        LinkedDocTypeEnum.ldtARInvoicesLink = "ldtARInvoicesLink";
        return LinkedDocTypeEnum;
    })();
    SAPB1.LinkedDocTypeEnum = LinkedDocTypeEnum;
    var MultipleCounterRoleEnum = (function () {
        function MultipleCounterRoleEnum() {
        }
        MultipleCounterRoleEnum.mcrTeamCounter = "mcrTeamCounter";
        MultipleCounterRoleEnum.mcrIndividualCounter = "mcrIndividualCounter";
        return MultipleCounterRoleEnum;
    })();
    SAPB1.MultipleCounterRoleEnum = MultipleCounterRoleEnum;
    var OperationCode347Enum = (function () {
        function OperationCode347Enum() {
        }
        OperationCode347Enum.ocGoodsOrServiciesAcquisitions = "ocGoodsOrServiciesAcquisitions";
        OperationCode347Enum.ocPublicEntitiesAcquisitions = "ocPublicEntitiesAcquisitions";
        OperationCode347Enum.ocTravelAgenciesPurchases = "ocTravelAgenciesPurchases";
        OperationCode347Enum.ocSalesOrServicesRevenues = "ocSalesOrServicesRevenues";
        OperationCode347Enum.ocPublicSubsidies = "ocPublicSubsidies";
        OperationCode347Enum.ocTravelAgenciesSales = "ocTravelAgenciesSales";
        return OperationCode347Enum;
    })();
    SAPB1.OperationCode347Enum = OperationCode347Enum;
    var OperationCodeTypeEnum = (function () {
        function OperationCodeTypeEnum() {
        }
        OperationCodeTypeEnum.octSummaryInvoicesEntry = "octSummaryInvoicesEntry";
        OperationCodeTypeEnum.octSummaryReceiptsEntry = "octSummaryReceiptsEntry";
        OperationCodeTypeEnum.octInvoicewithSeveralVATRates = "octInvoicewithSeveralVATRates";
        OperationCodeTypeEnum.octCorrectionInvoice = "octCorrectionInvoice";
        OperationCodeTypeEnum.octDueVATPendingInvoiceIssuance = "octDueVATPendingInvoiceIssuance";
        OperationCodeTypeEnum.octExpensesIncurredbyTravelAgentforCustomers = "octExpensesIncurredbyTravelAgentforCustomers";
        OperationCodeTypeEnum.octSpecialRegulationforVATGroup = "octSpecialRegulationforVATGroup";
        OperationCodeTypeEnum.octSpecialRegulationforGoldInvestment = "octSpecialRegulationforGoldInvestment";
        OperationCodeTypeEnum.octReverseChargeProcedure = "octReverseChargeProcedure";
        OperationCodeTypeEnum.octUnsummarizedReceipts = "octUnsummarizedReceipts";
        OperationCodeTypeEnum.octIdentificationofErrorTransactions = "octIdentificationofErrorTransactions";
        OperationCodeTypeEnum.octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation = "octTransactionswithEntrepreneursIssuingReceiptsforAgriculturalCompensation";
        OperationCodeTypeEnum.octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties = "octServiceInvoicingbyTravelAgenciesonBehalfofThirdParties";
        OperationCodeTypeEnum.octBusinessOfficeRental = "octBusinessOfficeRental";
        OperationCodeTypeEnum.octSubsidies = "octSubsidies";
        OperationCodeTypeEnum.octIncomingPaymentsforIndustrialandIntellectualPropertyRights = "octIncomingPaymentsforIndustrialandIntellectualPropertyRights";
        OperationCodeTypeEnum.octInsuranceTransactions = "octInsuranceTransactions";
        OperationCodeTypeEnum.octPurchasesfromTravelAgencies = "octPurchasesfromTravelAgencies";
        OperationCodeTypeEnum.octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla = "octTransactionsSubjecttoProductionServiceandImportTaxesinCeutaandMelilla";
        return OperationCodeTypeEnum;
    })();
    SAPB1.OperationCodeTypeEnum = OperationCodeTypeEnum;
    var OpportunityTypeEnum = (function () {
        function OpportunityTypeEnum() {
        }
        OpportunityTypeEnum.boOpSales = "boOpSales";
        OpportunityTypeEnum.boOpPurchasing = "boOpPurchasing";
        return OpportunityTypeEnum;
    })();
    SAPB1.OpportunityTypeEnum = OpportunityTypeEnum;
    var PaymentInvoiceTypeEnum = (function () {
        function PaymentInvoiceTypeEnum() {
        }
        PaymentInvoiceTypeEnum.itARInvoice = "itARInvoice";
        PaymentInvoiceTypeEnum.itARDownPaymentInvoice = "itARDownPaymentInvoice";
        return PaymentInvoiceTypeEnum;
    })();
    SAPB1.PaymentInvoiceTypeEnum = PaymentInvoiceTypeEnum;
    var PaymentMeansTypeEnum = (function () {
        function PaymentMeansTypeEnum() {
        }
        PaymentMeansTypeEnum.pmtNotAssigned = "pmtNotAssigned";
        PaymentMeansTypeEnum.pmtChecks = "pmtChecks";
        PaymentMeansTypeEnum.pmtBankTransfer = "pmtBankTransfer";
        PaymentMeansTypeEnum.pmtCash = "pmtCash";
        PaymentMeansTypeEnum.pmtCreditCard = "pmtCreditCard";
        return PaymentMeansTypeEnum;
    })();
    SAPB1.PaymentMeansTypeEnum = PaymentMeansTypeEnum;
    var PaymentRunExportRowTypeEnum = (function () {
        function PaymentRunExportRowTypeEnum() {
        }
        PaymentRunExportRowTypeEnum.prtGeneral = "prtGeneral";
        PaymentRunExportRowTypeEnum.prtPayOnAccount = "prtPayOnAccount";
        PaymentRunExportRowTypeEnum.prtPayToAccount = "prtPayToAccount";
        return PaymentRunExportRowTypeEnum;
    })();
    SAPB1.PaymentRunExportRowTypeEnum = PaymentRunExportRowTypeEnum;
    var PaymentsAuthorizationStatusEnum = (function () {
        function PaymentsAuthorizationStatusEnum() {
        }
        PaymentsAuthorizationStatusEnum.pasWithout = "pasWithout";
        PaymentsAuthorizationStatusEnum.pasPending = "pasPending";
        PaymentsAuthorizationStatusEnum.pasApproved = "pasApproved";
        PaymentsAuthorizationStatusEnum.pasRejected = "pasRejected";
        PaymentsAuthorizationStatusEnum.pasGenerated = "pasGenerated";
        PaymentsAuthorizationStatusEnum.pasGeneratedbyAuthorizer = "pasGeneratedbyAuthorizer";
        PaymentsAuthorizationStatusEnum.pasCancelled = "pasCancelled";
        return PaymentsAuthorizationStatusEnum;
    })();
    SAPB1.PaymentsAuthorizationStatusEnum = PaymentsAuthorizationStatusEnum;
    var PeriodStatusEnum = (function () {
        function PeriodStatusEnum() {
        }
        PeriodStatusEnum.ltUnlocked = "ltUnlocked";
        PeriodStatusEnum.ltUnlockedExceptSales = "ltUnlockedExceptSales";
        PeriodStatusEnum.ltPeriodClosing = "ltPeriodClosing";
        PeriodStatusEnum.ltLocked = "ltLocked";
        return PeriodStatusEnum;
    })();
    SAPB1.PeriodStatusEnum = PeriodStatusEnum;
    var PostingMethodEnum = (function () {
        function PostingMethodEnum() {
        }
        PostingMethodEnum.pmGLAccountBankAccount = "pmGLAccountBankAccount";
        PostingMethodEnum.pmBussinessPartnerBankAccount = "pmBussinessPartnerBankAccount";
        PostingMethodEnum.pmInterimAccountBankAccount = "pmInterimAccountBankAccount";
        PostingMethodEnum.pmExternalReconciliation = "pmExternalReconciliation";
        PostingMethodEnum.pmIgnore = "pmIgnore";
        return PostingMethodEnum;
    })();
    SAPB1.PostingMethodEnum = PostingMethodEnum;
    var PostingOfDepreciationEnum = (function () {
        function PostingOfDepreciationEnum() {
        }
        PostingOfDepreciationEnum.podDirectPosting = "podDirectPosting";
        PostingOfDepreciationEnum.podIndirectPosting = "podIndirectPosting";
        return PostingOfDepreciationEnum;
    })();
    SAPB1.PostingOfDepreciationEnum = PostingOfDepreciationEnum;
    var PriceProceedMethodEnum = (function () {
        function PriceProceedMethodEnum() {
        }
        PriceProceedMethodEnum.ppmRemove = "ppmRemove";
        PriceProceedMethodEnum.ppmUpdate = "ppmUpdate";
        PriceProceedMethodEnum.ppmKeepCorresponding = "ppmKeepCorresponding";
        PriceProceedMethodEnum.ppmKeepAll = "ppmKeepAll";
        return PriceProceedMethodEnum;
    })();
    SAPB1.PriceProceedMethodEnum = PriceProceedMethodEnum;
    var PrintOnEnum = (function () {
        function PrintOnEnum() {
        }
        PrintOnEnum.poBlankPaper = "poBlankPaper";
        PrintOnEnum.poDefault = "poDefault";
        PrintOnEnum.poOverflowBlankPaper = "poOverflowBlankPaper";
        PrintOnEnum.poOverflowCheckStock = "poOverflowCheckStock";
        return PrintOnEnum;
    })();
    SAPB1.PrintOnEnum = PrintOnEnum;
    var PrintStatusEnum = (function () {
        function PrintStatusEnum() {
        }
        PrintStatusEnum.psNo = "psNo";
        PrintStatusEnum.psYes = "psYes";
        PrintStatusEnum.psAmended = "psAmended";
        return PrintStatusEnum;
    })();
    SAPB1.PrintStatusEnum = PrintStatusEnum;
    var ProductionItemType = (function () {
        function ProductionItemType() {
        }
        ProductionItemType.pit_Item = "pit_Item";
        ProductionItemType.pit_Resource = "pit_Resource";
        ProductionItemType.pit_Text = "pit_Text";
        return ProductionItemType;
    })();
    SAPB1.ProductionItemType = ProductionItemType;
    var ReceivingBinLocationsMethodEnum = (function () {
        function ReceivingBinLocationsMethodEnum() {
        }
        ReceivingBinLocationsMethodEnum.rblmBinLocationCodeOrder = "rblmBinLocationCodeOrder";
        ReceivingBinLocationsMethodEnum.rblmAlternativeSortCodeOrder = "rblmAlternativeSortCodeOrder";
        return ReceivingBinLocationsMethodEnum;
    })();
    SAPB1.ReceivingBinLocationsMethodEnum = ReceivingBinLocationsMethodEnum;
    var ReceivingUpToMethodEnum = (function () {
        function ReceivingUpToMethodEnum() {
        }
        ReceivingUpToMethodEnum.rutmBothMaxQtyAndWeight = "rutmBothMaxQtyAndWeight";
        ReceivingUpToMethodEnum.rutmMaximumQty = "rutmMaximumQty";
        ReceivingUpToMethodEnum.rutmMaximumWeight = "rutmMaximumWeight";
        return ReceivingUpToMethodEnum;
    })();
    SAPB1.ReceivingUpToMethodEnum = ReceivingUpToMethodEnum;
    var ReconciliationAccountTypeEnum = (function () {
        function ReconciliationAccountTypeEnum() {
        }
        ReconciliationAccountTypeEnum.rat_GLAccount = "rat_GLAccount";
        ReconciliationAccountTypeEnum.rat_BusinessPartner = "rat_BusinessPartner";
        return ReconciliationAccountTypeEnum;
    })();
    SAPB1.ReconciliationAccountTypeEnum = ReconciliationAccountTypeEnum;
    var RecurrenceDayOfWeekEnum = (function () {
        function RecurrenceDayOfWeekEnum() {
        }
        RecurrenceDayOfWeekEnum.rdowDay = "rdowDay";
        RecurrenceDayOfWeekEnum.rdowWeekDay = "rdowWeekDay";
        RecurrenceDayOfWeekEnum.rdowWeekendDay = "rdowWeekendDay";
        RecurrenceDayOfWeekEnum.rdowSun = "rdowSun";
        RecurrenceDayOfWeekEnum.rdowMon = "rdowMon";
        RecurrenceDayOfWeekEnum.rdowTue = "rdowTue";
        RecurrenceDayOfWeekEnum.rdowWed = "rdowWed";
        RecurrenceDayOfWeekEnum.rdowThu = "rdowThu";
        RecurrenceDayOfWeekEnum.rdowFri = "rdowFri";
        RecurrenceDayOfWeekEnum.rdowSat = "rdowSat";
        return RecurrenceDayOfWeekEnum;
    })();
    SAPB1.RecurrenceDayOfWeekEnum = RecurrenceDayOfWeekEnum;
    var RecurrencePatternEnum = (function () {
        function RecurrencePatternEnum() {
        }
        RecurrencePatternEnum.rpNone = "rpNone";
        RecurrencePatternEnum.rpDaily = "rpDaily";
        RecurrencePatternEnum.rpWeekly = "rpWeekly";
        RecurrencePatternEnum.rpMonthly = "rpMonthly";
        RecurrencePatternEnum.rpAnnually = "rpAnnually";
        return RecurrencePatternEnum;
    })();
    SAPB1.RecurrencePatternEnum = RecurrencePatternEnum;
    var RecurrenceSequenceEnum = (function () {
        function RecurrenceSequenceEnum() {
        }
        RecurrenceSequenceEnum.rsFirst = "rsFirst";
        RecurrenceSequenceEnum.rsSecond = "rsSecond";
        RecurrenceSequenceEnum.rsThird = "rsThird";
        RecurrenceSequenceEnum.rsFourth = "rsFourth";
        RecurrenceSequenceEnum.rsLast = "rsLast";
        return RecurrenceSequenceEnum;
    })();
    SAPB1.RecurrenceSequenceEnum = RecurrenceSequenceEnum;
    var RepeatOptionEnum = (function () {
        function RepeatOptionEnum() {
        }
        RepeatOptionEnum.roByDate = "roByDate";
        RepeatOptionEnum.roByWeekDay = "roByWeekDay";
        return RepeatOptionEnum;
    })();
    SAPB1.RepeatOptionEnum = RepeatOptionEnum;
    var Report349CodeListEnum = (function () {
        function Report349CodeListEnum() {
        }
        Report349CodeListEnum.r349cA = "r349cA";
        Report349CodeListEnum.r349cE = "r349cE";
        Report349CodeListEnum.r349cEmpty = "r349cEmpty";
        Report349CodeListEnum.r349cH = "r349cH";
        Report349CodeListEnum.r349cI = "r349cI";
        Report349CodeListEnum.r349cM = "r349cM";
        Report349CodeListEnum.r349cS = "r349cS";
        Report349CodeListEnum.r349cT = "r349cT";
        return Report349CodeListEnum;
    })();
    SAPB1.Report349CodeListEnum = Report349CodeListEnum;
    var ReportLayoutCategoryEnum = (function () {
        function ReportLayoutCategoryEnum() {
        }
        ReportLayoutCategoryEnum.rlcPLD = "rlcPLD";
        ReportLayoutCategoryEnum.rlcCrystal = "rlcCrystal";
        ReportLayoutCategoryEnum.rlcLegalList = "rlcLegalList";
        ReportLayoutCategoryEnum.rlcUserDefinedType = "rlcUserDefinedType";
        return ReportLayoutCategoryEnum;
    })();
    SAPB1.ReportLayoutCategoryEnum = ReportLayoutCategoryEnum;
    var ResidenceNumberTypeEnum = (function () {
        function ResidenceNumberTypeEnum() {
        }
        ResidenceNumberTypeEnum.rntSpanishFiscalID = "rntSpanishFiscalID";
        ResidenceNumberTypeEnum.rntVATRegistrationNumber = "rntVATRegistrationNumber";
        ResidenceNumberTypeEnum.rntPassport = "rntPassport";
        ResidenceNumberTypeEnum.rntFiscalIDIssuedbytheResidenceCountry = "rntFiscalIDIssuedbytheResidenceCountry";
        ResidenceNumberTypeEnum.rntCertificateofFiscalResidence = "rntCertificateofFiscalResidence";
        ResidenceNumberTypeEnum.rntOtherDocument = "rntOtherDocument";
        return ResidenceNumberTypeEnum;
    })();
    SAPB1.ResidenceNumberTypeEnum = ResidenceNumberTypeEnum;
    var RetirementMethodEnum = (function () {
        function RetirementMethodEnum() {
        }
        RetirementMethodEnum.rmGross = "rmGross";
        RetirementMethodEnum.rmNet = "rmNet";
        return RetirementMethodEnum;
    })();
    SAPB1.RetirementMethodEnum = RetirementMethodEnum;
    var RetirementPeriodControlEnum = (function () {
        function RetirementPeriodControlEnum() {
        }
        RetirementPeriodControlEnum.rpcProRataTemporis = "rpcProRataTemporis";
        RetirementPeriodControlEnum.rpcHalfYearConvention = "rpcHalfYearConvention";
        RetirementPeriodControlEnum.rpcOnlyAfterEndOfUsefulLife = "rpcOnlyAfterEndOfUsefulLife";
        return RetirementPeriodControlEnum;
    })();
    SAPB1.RetirementPeriodControlEnum = RetirementPeriodControlEnum;
    var RetirementProRataTypeEnum = (function () {
        function RetirementProRataTypeEnum() {
        }
        RetirementProRataTypeEnum.rprtExactlyDailyBase = "rprtExactlyDailyBase";
        RetirementProRataTypeEnum.rprtLastDayOfPriorPeriod = "rprtLastDayOfPriorPeriod";
        RetirementProRataTypeEnum.rprtLastDayOfCurrentPeriod = "rprtLastDayOfCurrentPeriod";
        return RetirementProRataTypeEnum;
    })();
    SAPB1.RetirementProRataTypeEnum = RetirementProRataTypeEnum;
    var ReturnTypeEnum = (function () {
        function ReturnTypeEnum() {
        }
        ReturnTypeEnum.rt26Q = "rt26Q";
        ReturnTypeEnum.rt27Q = "rt27Q";
        return ReturnTypeEnum;
    })();
    SAPB1.ReturnTypeEnum = ReturnTypeEnum;
    var RoundingContextEnum = (function () {
        function RoundingContextEnum() {
        }
        RoundingContextEnum.rcSum = "rcSum";
        RoundingContextEnum.rcPrice = "rcPrice";
        RoundingContextEnum.rcRate = "rcRate";
        RoundingContextEnum.rcQuantity = "rcQuantity";
        RoundingContextEnum.rcMeasure = "rcMeasure";
        RoundingContextEnum.rcPercent = "rcPercent";
        RoundingContextEnum.rcTax = "rcTax";
        RoundingContextEnum.rcTaxPerGroup = "rcTaxPerGroup";
        RoundingContextEnum.rcBudgetSum = "rcBudgetSum";
        RoundingContextEnum.rcPriceListSum = "rcPriceListSum";
        RoundingContextEnum.rcRealAmountInPayment = "rcRealAmountInPayment";
        RoundingContextEnum.rcStockSumRoundUp = "rcStockSumRoundUp";
        RoundingContextEnum.rcDocHeaderTotal = "rcDocHeaderTotal";
        RoundingContextEnum.rcVatReportAmount = "rcVatReportAmount";
        RoundingContextEnum.rcLineGrossTotal = "rcLineGrossTotal";
        RoundingContextEnum.rcExpenseTotal = "rcExpenseTotal";
        RoundingContextEnum.rcWTax = "rcWTax";
        RoundingContextEnum.rcBASCode = "rcBASCode";
        RoundingContextEnum.rcTaxForPrice = "rcTaxForPrice";
        return RoundingContextEnum;
    })();
    SAPB1.RoundingContextEnum = RoundingContextEnum;
    var RoundingSysEnum = (function () {
        function RoundingSysEnum() {
        }
        RoundingSysEnum.rsNoRounding = "rsNoRounding";
        RoundingSysEnum.rsRoundToFiveHundredth = "rsRoundToFiveHundredth";
        RoundingSysEnum.rsRoundToOne = "rsRoundToOne";
        RoundingSysEnum.rsRoundToTen = "rsRoundToTen";
        RoundingSysEnum.rsRoundToTenHundredth = "rsRoundToTenHundredth";
        return RoundingSysEnum;
    })();
    SAPB1.RoundingSysEnum = RoundingSysEnum;
    var RoundingTypeEnum = (function () {
        function RoundingTypeEnum() {
        }
        RoundingTypeEnum.rt_TruncatedAU = "rt_TruncatedAU";
        RoundingTypeEnum.rt_CommercialValues = "rt_CommercialValues";
        RoundingTypeEnum.rt_NoRounding = "rt_NoRounding";
        return RoundingTypeEnum;
    })();
    SAPB1.RoundingTypeEnum = RoundingTypeEnum;
    var SEPASequenceTypeEnum = (function () {
        function SEPASequenceTypeEnum() {
        }
        SEPASequenceTypeEnum.sstOOFF = "sstOOFF";
        SEPASequenceTypeEnum.sstFRST = "sstFRST";
        SEPASequenceTypeEnum.sstRCUR = "sstRCUR";
        SEPASequenceTypeEnum.sstFNAL = "sstFNAL";
        return SEPASequenceTypeEnum;
    })();
    SAPB1.SEPASequenceTypeEnum = SEPASequenceTypeEnum;
    var SPEDContabilAccountPurposeCode = (function () {
        function SPEDContabilAccountPurposeCode() {
        }
        SPEDContabilAccountPurposeCode.spedContasDeAtivo = "spedContasDeAtivo";
        SPEDContabilAccountPurposeCode.spedContasDePassivo = "spedContasDePassivo";
        SPEDContabilAccountPurposeCode.spedPatrimonioLiquido = "spedPatrimonioLiquido";
        SPEDContabilAccountPurposeCode.spedContasDeResultado = "spedContasDeResultado";
        SPEDContabilAccountPurposeCode.spedContasDeCompensacao = "spedContasDeCompensacao";
        SPEDContabilAccountPurposeCode.spedOutras = "spedOutras";
        return SPEDContabilAccountPurposeCode;
    })();
    SAPB1.SPEDContabilAccountPurposeCode = SPEDContabilAccountPurposeCode;
    var SPEDContabilQualificationCodeEnum = (function () {
        function SPEDContabilQualificationCodeEnum() {
        }
        SPEDContabilQualificationCodeEnum.spedNA = "spedNA";
        SPEDContabilQualificationCodeEnum.spedDiretor = "spedDiretor";
        SPEDContabilQualificationCodeEnum.spedConselheiroDeAdministracao = "spedConselheiroDeAdministracao";
        SPEDContabilQualificationCodeEnum.spedAdministrador = "spedAdministrador";
        SPEDContabilQualificationCodeEnum.spedAdministradorDoGrupo = "spedAdministradorDoGrupo";
        SPEDContabilQualificationCodeEnum.spedAdministradorDeSociedadeFiliada = "spedAdministradorDeSociedadeFiliada";
        SPEDContabilQualificationCodeEnum.spedAdministradorJudicialPessoaFisica = "spedAdministradorJudicialPessoaFisica";
        SPEDContabilQualificationCodeEnum.spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel = "spedAdministradorJudicialPessoaJuridicaProfissionalResponsavel";
        SPEDContabilQualificationCodeEnum.spedAdministradorJudicialGestor = "spedAdministradorJudicialGestor";
        SPEDContabilQualificationCodeEnum.spedGestorJudicial = "spedGestorJudicial";
        SPEDContabilQualificationCodeEnum.spedProcurador = "spedProcurador";
        SPEDContabilQualificationCodeEnum.spedInventariante = "spedInventariante";
        SPEDContabilQualificationCodeEnum.spedLiquidante = "spedLiquidante";
        SPEDContabilQualificationCodeEnum.spedInterventor = "spedInterventor";
        SPEDContabilQualificationCodeEnum.spedEmpresario = "spedEmpresario";
        SPEDContabilQualificationCodeEnum.spedContador = "spedContador";
        SPEDContabilQualificationCodeEnum.spedOutros = "spedOutros";
        return SPEDContabilQualificationCodeEnum;
    })();
    SAPB1.SPEDContabilQualificationCodeEnum = SPEDContabilQualificationCodeEnum;
    var Services = (function () {
        function Services() {
        }
        Services.MessagesService = "MessagesService";
        Services.CompanyService = "CompanyService";
        Services.SeriesService = "SeriesService";
        Services.ReportLayoutsService = "ReportLayoutsService";
        Services.FormPreferencesService = "FormPreferencesService";
        Services.AccountsService = "AccountsService";
        Services.BusinessPartnersService = "BusinessPartnersService";
        return Services;
    })();
    SAPB1.Services = Services;
    var ShaamGroupEnum = (function () {
        function ShaamGroupEnum() {
        }
        ShaamGroupEnum.sgServicesAndAsset = "sgServicesAndAsset";
        ShaamGroupEnum.sgAgriculturalProducts = "sgAgriculturalProducts";
        ShaamGroupEnum.sgInsuranceCommissions = "sgInsuranceCommissions";
        ShaamGroupEnum.sgWHTaxInstructions = "sgWHTaxInstructions";
        ShaamGroupEnum.sgInterestExchangeRateDiffs = "sgInterestExchangeRateDiffs";
        return ShaamGroupEnum;
    })();
    SAPB1.ShaamGroupEnum = ShaamGroupEnum;
    var SortOrderEnum = (function () {
        function SortOrderEnum() {
        }
        SortOrderEnum.soAscending = "soAscending";
        SortOrderEnum.soDescending = "soDescending";
        return SortOrderEnum;
    })();
    SAPB1.SortOrderEnum = SortOrderEnum;
    var SourceCurrencyEnum = (function () {
        function SourceCurrencyEnum() {
        }
        SourceCurrencyEnum.sc_PrimaryCurrency = "sc_PrimaryCurrency";
        SourceCurrencyEnum.sc_AdditionalCurrency1 = "sc_AdditionalCurrency1";
        SourceCurrencyEnum.sc_AdditionalCurrency2 = "sc_AdditionalCurrency2";
        return SourceCurrencyEnum;
    })();
    SAPB1.SourceCurrencyEnum = SourceCurrencyEnum;
    var SpecialDepreciationCalculationMethodEnum = (function () {
        function SpecialDepreciationCalculationMethodEnum() {
        }
        SpecialDepreciationCalculationMethodEnum.spcmAdditional = "spcmAdditional";
        SpecialDepreciationCalculationMethodEnum.spcmAlternative = "spcmAlternative";
        return SpecialDepreciationCalculationMethodEnum;
    })();
    SAPB1.SpecialDepreciationCalculationMethodEnum = SpecialDepreciationCalculationMethodEnum;
    var SpecialDepreciationMaximumFlagEnum = (function () {
        function SpecialDepreciationMaximumFlagEnum() {
        }
        SpecialDepreciationMaximumFlagEnum.spmfPercentage = "spmfPercentage";
        SpecialDepreciationMaximumFlagEnum.spmfAmount = "spmfAmount";
        return SpecialDepreciationMaximumFlagEnum;
    })();
    SAPB1.SpecialDepreciationMaximumFlagEnum = SpecialDepreciationMaximumFlagEnum;
    var SpecialProductTypeEnum = (function () {
        function SpecialProductTypeEnum() {
        }
        SpecialProductTypeEnum.sptMT = "sptMT";
        SpecialProductTypeEnum.sptIO = "sptIO";
        return SpecialProductTypeEnum;
    })();
    SAPB1.SpecialProductTypeEnum = SpecialProductTypeEnum;
    var StockTransferAuthorizationStatusEnum = (function () {
        function StockTransferAuthorizationStatusEnum() {
        }
        StockTransferAuthorizationStatusEnum.sasWithout = "sasWithout";
        StockTransferAuthorizationStatusEnum.sasPending = "sasPending";
        StockTransferAuthorizationStatusEnum.sasApproved = "sasApproved";
        StockTransferAuthorizationStatusEnum.sasRejected = "sasRejected";
        StockTransferAuthorizationStatusEnum.sasGenerated = "sasGenerated";
        StockTransferAuthorizationStatusEnum.sasGeneratedbyAuthorizer = "sasGeneratedbyAuthorizer";
        StockTransferAuthorizationStatusEnum.sasCancelled = "sasCancelled";
        return StockTransferAuthorizationStatusEnum;
    })();
    SAPB1.StockTransferAuthorizationStatusEnum = StockTransferAuthorizationStatusEnum;
    var StraightLineCalculationMethodEnum = (function () {
        function StraightLineCalculationMethodEnum() {
        }
        StraightLineCalculationMethodEnum.slcmAuquisitionValueDividedByTotalUsefulLife = "slcmAuquisitionValueDividedByTotalUsefulLife";
        StraightLineCalculationMethodEnum.slcmPercentageOfAcquisitionValue = "slcmPercentageOfAcquisitionValue";
        StraightLineCalculationMethodEnum.slcmNetBookValueDividedByRemainingLife = "slcmNetBookValueDividedByRemainingLife";
        return StraightLineCalculationMethodEnum;
    })();
    SAPB1.StraightLineCalculationMethodEnum = StraightLineCalculationMethodEnum;
    var StraightLinePeriodControlDepreciationPeriodsEnum = (function () {
        function StraightLinePeriodControlDepreciationPeriodsEnum() {
        }
        StraightLinePeriodControlDepreciationPeriodsEnum.slpcdpStandard = "slpcdpStandard";
        StraightLinePeriodControlDepreciationPeriodsEnum.slpcdpIndividual = "slpcdpIndividual";
        return StraightLinePeriodControlDepreciationPeriodsEnum;
    })();
    SAPB1.StraightLinePeriodControlDepreciationPeriodsEnum = StraightLinePeriodControlDepreciationPeriodsEnum;
    var SubsequentAcquisitionPeriodControlEnum = (function () {
        function SubsequentAcquisitionPeriodControlEnum() {
        }
        SubsequentAcquisitionPeriodControlEnum.sapcProRataTemporis = "sapcProRataTemporis";
        SubsequentAcquisitionPeriodControlEnum.sapcHalfYearConvention = "sapcHalfYearConvention";
        SubsequentAcquisitionPeriodControlEnum.sapcFullYear = "sapcFullYear";
        return SubsequentAcquisitionPeriodControlEnum;
    })();
    SAPB1.SubsequentAcquisitionPeriodControlEnum = SubsequentAcquisitionPeriodControlEnum;
    var SubsequentAcquisitionProRataTypeEnum = (function () {
        function SubsequentAcquisitionProRataTypeEnum() {
        }
        SubsequentAcquisitionProRataTypeEnum.saprtExactlyDailyBase = "saprtExactlyDailyBase";
        SubsequentAcquisitionProRataTypeEnum.saprtFirstDayOfCurrentPeriod = "saprtFirstDayOfCurrentPeriod";
        SubsequentAcquisitionProRataTypeEnum.saprtFirstDayOfNextPeriod = "saprtFirstDayOfNextPeriod";
        return SubsequentAcquisitionProRataTypeEnum;
    })();
    SAPB1.SubsequentAcquisitionProRataTypeEnum = SubsequentAcquisitionProRataTypeEnum;
    var TargetGroupsDetailStatusEnum = (function () {
        function TargetGroupsDetailStatusEnum() {
        }
        TargetGroupsDetailStatusEnum.tdsActive = "tdsActive";
        TargetGroupsDetailStatusEnum.tdsInactive = "tdsInactive";
        return TargetGroupsDetailStatusEnum;
    })();
    SAPB1.TargetGroupsDetailStatusEnum = TargetGroupsDetailStatusEnum;
    var TaxCalcSysEnum = (function () {
        function TaxCalcSysEnum() {
        }
        TaxCalcSysEnum.PreconfiguredFormulaWithJurisdictionSupport = "PreconfiguredFormulaWithJurisdictionSupport";
        TaxCalcSysEnum.UserDefinedFormula = "UserDefinedFormula";
        TaxCalcSysEnum.PreconfiguredFormula = "PreconfiguredFormula";
        return TaxCalcSysEnum;
    })();
    SAPB1.TaxCalcSysEnum = TaxCalcSysEnum;
    var TaxCodeDeterminationTCDByUsageTypeEnum = (function () {
        function TaxCodeDeterminationTCDByUsageTypeEnum() {
        }
        TaxCodeDeterminationTCDByUsageTypeEnum.tcdbutDefaultSales = "tcdbutDefaultSales";
        TaxCodeDeterminationTCDByUsageTypeEnum.tcdbutDefaultPurchase = "tcdbutDefaultPurchase";
        TaxCodeDeterminationTCDByUsageTypeEnum.tcdbutLine = "tcdbutLine";
        return TaxCodeDeterminationTCDByUsageTypeEnum;
    })();
    SAPB1.TaxCodeDeterminationTCDByUsageTypeEnum = TaxCodeDeterminationTCDByUsageTypeEnum;
    var TaxCodeDeterminationTCDDefaultWTTypeEnum = (function () {
        function TaxCodeDeterminationTCDDefaultWTTypeEnum() {
        }
        TaxCodeDeterminationTCDDefaultWTTypeEnum.tcddwttDefaultSales = "tcddwttDefaultSales";
        TaxCodeDeterminationTCDDefaultWTTypeEnum.tcddwttDefaultPurchase = "tcddwttDefaultPurchase";
        TaxCodeDeterminationTCDDefaultWTTypeEnum.tcddwttLine = "tcddwttLine";
        return TaxCodeDeterminationTCDDefaultWTTypeEnum;
    })();
    SAPB1.TaxCodeDeterminationTCDDefaultWTTypeEnum = TaxCodeDeterminationTCDDefaultWTTypeEnum;
    var TaxCodeDeterminationTCDTypeEnum = (function () {
        function TaxCodeDeterminationTCDTypeEnum() {
        }
        TaxCodeDeterminationTCDTypeEnum.tcdtMaterialItem = "tcdtMaterialItem";
        TaxCodeDeterminationTCDTypeEnum.tcdtServiceItem = "tcdtServiceItem";
        TaxCodeDeterminationTCDTypeEnum.tcdtServiceDocument = "tcdtServiceDocument";
        TaxCodeDeterminationTCDTypeEnum.tcdtWithholdingTax = "tcdtWithholdingTax";
        return TaxCodeDeterminationTCDTypeEnum;
    })();
    SAPB1.TaxCodeDeterminationTCDTypeEnum = TaxCodeDeterminationTCDTypeEnum;
    var TaxInvoiceReportLineTypeEnum = (function () {
        function TaxInvoiceReportLineTypeEnum() {
        }
        TaxInvoiceReportLineTypeEnum.LineOfBusinessPlace = "LineOfBusinessPlace";
        TaxInvoiceReportLineTypeEnum.LineOfBusinessPartner = "LineOfBusinessPartner";
        TaxInvoiceReportLineTypeEnum.LineOfDocument = "LineOfDocument";
        TaxInvoiceReportLineTypeEnum.LineOfItem = "LineOfItem";
        return TaxInvoiceReportLineTypeEnum;
    })();
    SAPB1.TaxInvoiceReportLineTypeEnum = TaxInvoiceReportLineTypeEnum;
    var TaxInvoiceReportNTSApprovedEnum = (function () {
        function TaxInvoiceReportNTSApprovedEnum() {
        }
        TaxInvoiceReportNTSApprovedEnum.NotApproved = "NotApproved";
        TaxInvoiceReportNTSApprovedEnum.Approved = "Approved";
        return TaxInvoiceReportNTSApprovedEnum;
    })();
    SAPB1.TaxInvoiceReportNTSApprovedEnum = TaxInvoiceReportNTSApprovedEnum;
    var TaxRateDeterminationEnum = (function () {
        function TaxRateDeterminationEnum() {
        }
        TaxRateDeterminationEnum.trd_PostingDate = "trd_PostingDate";
        TaxRateDeterminationEnum.trd_DocumentDate = "trd_DocumentDate";
        return TaxRateDeterminationEnum;
    })();
    SAPB1.TaxRateDeterminationEnum = TaxRateDeterminationEnum;
    var TaxReportFilterApArDocumentType = (function () {
        function TaxReportFilterApArDocumentType() {
        }
        TaxReportFilterApArDocumentType.trfadt_APDocuments = "trfadt_APDocuments";
        TaxReportFilterApArDocumentType.trfadt_ARDocuments = "trfadt_ARDocuments";
        return TaxReportFilterApArDocumentType;
    })();
    SAPB1.TaxReportFilterApArDocumentType = TaxReportFilterApArDocumentType;
    var TaxReportFilterDeclarationType = (function () {
        function TaxReportFilterDeclarationType() {
        }
        TaxReportFilterDeclarationType.trfdt_Original = "trfdt_Original";
        TaxReportFilterDeclarationType.trfdt_Substitute = "trfdt_Substitute";
        TaxReportFilterDeclarationType.trfdt_Complementary = "trfdt_Complementary";
        return TaxReportFilterDeclarationType;
    })();
    SAPB1.TaxReportFilterDeclarationType = TaxReportFilterDeclarationType;
    var TaxReportFilterDocumentType = (function () {
        function TaxReportFilterDocumentType() {
        }
        TaxReportFilterDocumentType.trfdt_ARInvoices = "trfdt_ARInvoices";
        TaxReportFilterDocumentType.trfdt_ARCreditMemos = "trfdt_ARCreditMemos";
        TaxReportFilterDocumentType.trfdt_APInvoices = "trfdt_APInvoices";
        TaxReportFilterDocumentType.trfdt_APCreditMemos = "trfdt_APCreditMemos";
        TaxReportFilterDocumentType.trfdt_IncomingPayments = "trfdt_IncomingPayments";
        TaxReportFilterDocumentType.trfdt_JournalEntries = "trfdt_JournalEntries";
        TaxReportFilterDocumentType.trfdt_OutgoingPayments = "trfdt_OutgoingPayments";
        TaxReportFilterDocumentType.trfdt_ChecksforPayment = "trfdt_ChecksforPayment";
        TaxReportFilterDocumentType.trfdt_InventoryTransfers = "trfdt_InventoryTransfers";
        TaxReportFilterDocumentType.trfdt_ARDownPayment = "trfdt_ARDownPayment";
        TaxReportFilterDocumentType.trfdt_APDownPayment = "trfdt_APDownPayment";
        return TaxReportFilterDocumentType;
    })();
    SAPB1.TaxReportFilterDocumentType = TaxReportFilterDocumentType;
    var TaxReportFilterPeriod = (function () {
        function TaxReportFilterPeriod() {
        }
        TaxReportFilterPeriod.trfP_Quarter = "trfP_Quarter";
        TaxReportFilterPeriod.trfP_Year = "trfP_Year";
        TaxReportFilterPeriod.trfP_Month = "trfP_Month";
        TaxReportFilterPeriod.trfP_NULL = "trfP_NULL";
        return TaxReportFilterPeriod;
    })();
    SAPB1.TaxReportFilterPeriod = TaxReportFilterPeriod;
    var TaxReportFilterQuarterOrDates = (function () {
        function TaxReportFilterQuarterOrDates() {
        }
        TaxReportFilterQuarterOrDates.trfqd_Interval = "trfqd_Interval";
        TaxReportFilterQuarterOrDates.trfqd_Date = "trfqd_Date";
        return TaxReportFilterQuarterOrDates;
    })();
    SAPB1.TaxReportFilterQuarterOrDates = TaxReportFilterQuarterOrDates;
    var TaxReportFilterReportLayoutType = (function () {
        function TaxReportFilterReportLayoutType() {
        }
        TaxReportFilterReportLayoutType.trfrlt_RegisterBookLayout = "trfrlt_RegisterBookLayout";
        TaxReportFilterReportLayoutType.trfrlt_DeclarationLayout = "trfrlt_DeclarationLayout";
        return TaxReportFilterReportLayoutType;
    })();
    SAPB1.TaxReportFilterReportLayoutType = TaxReportFilterReportLayoutType;
    var TaxReportFilterType = (function () {
        function TaxReportFilterType() {
        }
        TaxReportFilterType.trft_TaxReport = "trft_TaxReport";
        TaxReportFilterType.trft_WTReport = "trft_WTReport";
        TaxReportFilterType.trft_Report347 = "trft_Report347";
        TaxReportFilterType.trft_Report349 = "trft_Report349";
        TaxReportFilterType.trft_ReconciliationReport = "trft_ReconciliationReport";
        TaxReportFilterType.trft_StampTax = "trft_StampTax";
        TaxReportFilterType.trft_SalesReport = "trft_SalesReport";
        TaxReportFilterType.trft_None = "trft_None";
        TaxReportFilterType.trft_BoxReport = "trft_BoxReport";
        TaxReportFilterType.trft_AppendixOP = "trft_AppendixOP";
        TaxReportFilterType.trft_AnnualSalesReport = "trft_AnnualSalesReport";
        TaxReportFilterType.trft_VATRefundReport = "trft_VATRefundReport";
        return TaxReportFilterType;
    })();
    SAPB1.TaxReportFilterType = TaxReportFilterType;
    var TaxTypeBlackListEnum = (function () {
        function TaxTypeBlackListEnum() {
        }
        TaxTypeBlackListEnum.ttblExcluded = "ttblExcluded";
        TaxTypeBlackListEnum.ttblExempt = "ttblExempt";
        TaxTypeBlackListEnum.ttblNonSubject = "ttblNonSubject";
        TaxTypeBlackListEnum.ttblNotTaxable = "ttblNotTaxable";
        TaxTypeBlackListEnum.ttblTaxable = "ttblTaxable";
        return TaxTypeBlackListEnum;
    })();
    SAPB1.TaxTypeBlackListEnum = TaxTypeBlackListEnum;
    var ThreatLevelEnum = (function () {
        function ThreatLevelEnum() {
        }
        ThreatLevelEnum.tlLow = "tlLow";
        ThreatLevelEnum.tlMedium = "tlMedium";
        ThreatLevelEnum.tlHigh = "tlHigh";
        return ThreatLevelEnum;
    })();
    SAPB1.ThreatLevelEnum = ThreatLevelEnum;
    var TransTypesEnum = (function () {
        function TransTypesEnum() {
        }
        TransTypesEnum.ttAllTransactions = "ttAllTransactions";
        TransTypesEnum.ttOpeningBalance = "ttOpeningBalance";
        TransTypesEnum.ttClosingBalance = "ttClosingBalance";
        TransTypesEnum.ttARInvoice = "ttARInvoice";
        TransTypesEnum.ttARCredItnote = "ttARCredItnote";
        TransTypesEnum.ttDelivery = "ttDelivery";
        TransTypesEnum.ttReturn = "ttReturn";
        TransTypesEnum.ttAPInvoice = "ttAPInvoice";
        TransTypesEnum.ttAPCreditNote = "ttAPCreditNote";
        TransTypesEnum.ttPurchaseDeliveryNote = "ttPurchaseDeliveryNote";
        TransTypesEnum.ttPurchaseReturn = "ttPurchaseReturn";
        TransTypesEnum.ttReceipt = "ttReceipt";
        TransTypesEnum.ttDeposit = "ttDeposit";
        TransTypesEnum.ttJournalEntry = "ttJournalEntry";
        TransTypesEnum.ttVendorPayment = "ttVendorPayment";
        TransTypesEnum.ttChequesForPayment = "ttChequesForPayment";
        TransTypesEnum.ttStockList = "ttStockList";
        TransTypesEnum.ttGeneralReceiptToStock = "ttGeneralReceiptToStock";
        TransTypesEnum.ttGeneralReleaseFromStock = "ttGeneralReleaseFromStock";
        TransTypesEnum.ttTransferBetweenWarehouses = "ttTransferBetweenWarehouses";
        TransTypesEnum.ttWorkInstructions = "ttWorkInstructions";
        TransTypesEnum.ttLandedCosts = "ttLandedCosts";
        TransTypesEnum.ttDeferredDeposit = "ttDeferredDeposit";
        TransTypesEnum.ttCorrectionInvoice = "ttCorrectionInvoice";
        TransTypesEnum.ttInventoryValuation = "ttInventoryValuation";
        TransTypesEnum.ttAPCorrectionInvoice = "ttAPCorrectionInvoice";
        TransTypesEnum.ttAPCorrectionInvoiceReversal = "ttAPCorrectionInvoiceReversal";
        TransTypesEnum.ttARCorrectionInvoice = "ttARCorrectionInvoice";
        TransTypesEnum.ttARCorrectionInvoiceReversal = "ttARCorrectionInvoiceReversal";
        TransTypesEnum.ttBoETransaction = "ttBoETransaction";
        TransTypesEnum.ttProductionOrder = "ttProductionOrder";
        TransTypesEnum.ttDownPayment = "ttDownPayment";
        TransTypesEnum.ttPurchaseDownPayment = "ttPurchaseDownPayment";
        TransTypesEnum.ttInternalReconciliation = "ttInternalReconciliation";
        return TransTypesEnum;
    })();
    SAPB1.TransTypesEnum = TransTypesEnum;
    var TransferSourcePeriodControlEnum = (function () {
        function TransferSourcePeriodControlEnum() {
        }
        TransferSourcePeriodControlEnum.tspcProRataTemporis = "tspcProRataTemporis";
        return TransferSourcePeriodControlEnum;
    })();
    SAPB1.TransferSourcePeriodControlEnum = TransferSourcePeriodControlEnum;
    var TransferSourceProRataTypeEnum = (function () {
        function TransferSourceProRataTypeEnum() {
        }
        TransferSourceProRataTypeEnum.tsprtExactlyDailyBase = "tsprtExactlyDailyBase";
        TransferSourceProRataTypeEnum.tsprtLastDayOfPriorPeriod = "tsprtLastDayOfPriorPeriod";
        TransferSourceProRataTypeEnum.tsprtLastDayofCurrentPeriod = "tsprtLastDayofCurrentPeriod";
        return TransferSourceProRataTypeEnum;
    })();
    SAPB1.TransferSourceProRataTypeEnum = TransferSourceProRataTypeEnum;
    var TransferTargetPeriodControlEnum = (function () {
        function TransferTargetPeriodControlEnum() {
        }
        TransferTargetPeriodControlEnum.ttpcProRataTemporis = "ttpcProRataTemporis";
        return TransferTargetPeriodControlEnum;
    })();
    SAPB1.TransferTargetPeriodControlEnum = TransferTargetPeriodControlEnum;
    var TransferTargetProRataTypeEnum = (function () {
        function TransferTargetProRataTypeEnum() {
        }
        TransferTargetProRataTypeEnum.ttprtExactlyDailyBase = "ttprtExactlyDailyBase";
        TransferTargetProRataTypeEnum.ttprtFirstDayOfCurrentPeriod = "ttprtFirstDayOfCurrentPeriod";
        TransferTargetProRataTypeEnum.ttprtFirstDayOfNextPeriod = "ttprtFirstDayOfNextPeriod";
        return TransferTargetProRataTypeEnum;
    })();
    SAPB1.TransferTargetProRataTypeEnum = TransferTargetProRataTypeEnum;
    var TranslationCategoryEnum = (function () {
        function TranslationCategoryEnum() {
        }
        TranslationCategoryEnum.asCRReport = "asCRReport";
        TranslationCategoryEnum.asMenuItem = "asMenuItem";
        TranslationCategoryEnum.asEFMItem = "asEFMItem";
        return TranslationCategoryEnum;
    })();
    SAPB1.TranslationCategoryEnum = TranslationCategoryEnum;
    var TypeOfAdvancedRulesEnum = (function () {
        function TypeOfAdvancedRulesEnum() {
        }
        TypeOfAdvancedRulesEnum.toarGeneral = "toarGeneral";
        TypeOfAdvancedRulesEnum.toarWarehouse = "toarWarehouse";
        TypeOfAdvancedRulesEnum.toarItemGroup = "toarItemGroup";
        return TypeOfAdvancedRulesEnum;
    })();
    SAPB1.TypeOfAdvancedRulesEnum = TypeOfAdvancedRulesEnum;
    var TypeOfOperationEnum = (function () {
        function TypeOfOperationEnum() {
        }
        TypeOfOperationEnum.tooProfessionalServices = "tooProfessionalServices";
        TypeOfOperationEnum.tooRentingAssets = "tooRentingAssets";
        TypeOfOperationEnum.tooOthers = "tooOthers";
        return TypeOfOperationEnum;
    })();
    SAPB1.TypeOfOperationEnum = TypeOfOperationEnum;
    var UserActionTypeEnum = (function () {
        function UserActionTypeEnum() {
        }
        UserActionTypeEnum.actionLogin = "actionLogin";
        UserActionTypeEnum.actionLoginFail = "actionLoginFail";
        UserActionTypeEnum.actionLogoff = "actionLogoff";
        UserActionTypeEnum.actionCreateUser = "actionCreateUser";
        UserActionTypeEnum.actionRemoveUser = "actionRemoveUser";
        UserActionTypeEnum.actionSelectSU = "actionSelectSU";
        UserActionTypeEnum.actionDeselectSU = "actionDeselectSU";
        UserActionTypeEnum.actionLock = "actionLock";
        UserActionTypeEnum.actionUnlock = "actionUnlock";
        UserActionTypeEnum.actionChPasswd = "actionChPasswd";
        UserActionTypeEnum.actionUnlockFail = "actionUnlockFail";
        return UserActionTypeEnum;
    })();
    SAPB1.UserActionTypeEnum = UserActionTypeEnum;
    var UserMenuItemTypeEnum = (function () {
        function UserMenuItemTypeEnum() {
        }
        UserMenuItemTypeEnum.umitForm = "umitForm";
        UserMenuItemTypeEnum.umitQuery = "umitQuery";
        UserMenuItemTypeEnum.umitFolder = "umitFolder";
        UserMenuItemTypeEnum.umitReport = "umitReport";
        UserMenuItemTypeEnum.umitLink = "umitLink";
        return UserMenuItemTypeEnum;
    })();
    SAPB1.UserMenuItemTypeEnum = UserMenuItemTypeEnum;
    var UserQueryTypeEnum = (function () {
        function UserQueryTypeEnum() {
        }
        UserQueryTypeEnum.uqtRegular = "uqtRegular";
        UserQueryTypeEnum.uqtWizard = "uqtWizard";
        UserQueryTypeEnum.uqtGenerator = "uqtGenerator";
        UserQueryTypeEnum.uqtStoredProcedure = "uqtStoredProcedure";
        return UserQueryTypeEnum;
    })();
    SAPB1.UserQueryTypeEnum = UserQueryTypeEnum;
    var VatGroupsTaxRegionEnum = (function () {
        function VatGroupsTaxRegionEnum() {
        }
        VatGroupsTaxRegionEnum.vgtrPT = "vgtrPT";
        VatGroupsTaxRegionEnum.vgtrPT_AC = "vgtrPT_AC";
        VatGroupsTaxRegionEnum.vgtrPT_MA = "vgtrPT_MA";
        return VatGroupsTaxRegionEnum;
    })();
    SAPB1.VatGroupsTaxRegionEnum = VatGroupsTaxRegionEnum;
    var WithholdingTaxCodeBaseTypeEnum = (function () {
        function WithholdingTaxCodeBaseTypeEnum() {
        }
        WithholdingTaxCodeBaseTypeEnum.wtcbt_Gross = "wtcbt_Gross";
        WithholdingTaxCodeBaseTypeEnum.wtcbt_Net = "wtcbt_Net";
        WithholdingTaxCodeBaseTypeEnum.wtcbt_VAT = "wtcbt_VAT";
        return WithholdingTaxCodeBaseTypeEnum;
    })();
    SAPB1.WithholdingTaxCodeBaseTypeEnum = WithholdingTaxCodeBaseTypeEnum;
    var WithholdingTaxCodeCategoryEnum = (function () {
        function WithholdingTaxCodeCategoryEnum() {
        }
        WithholdingTaxCodeCategoryEnum.wtcc_Invoice = "wtcc_Invoice";
        WithholdingTaxCodeCategoryEnum.wtcc_Payment = "wtcc_Payment";
        return WithholdingTaxCodeCategoryEnum;
    })();
    SAPB1.WithholdingTaxCodeCategoryEnum = WithholdingTaxCodeCategoryEnum;
    var WithholdingTypeEnum = (function () {
        function WithholdingTypeEnum() {
        }
        WithholdingTypeEnum.wt_VatWithholding = "wt_VatWithholding";
        WithholdingTypeEnum.wt_IncomeTaxWithholding = "wt_IncomeTaxWithholding";
        return WithholdingTypeEnum;
    })();
    SAPB1.WithholdingTypeEnum = WithholdingTypeEnum;
    var ChartOfAccount = (function () {
        function ChartOfAccount() {
        }
        return ChartOfAccount;
    })();
    SAPB1.ChartOfAccount = ChartOfAccount;
    var ChartOfAccountKey = (function () {
        function ChartOfAccountKey() {
        }
        return ChartOfAccountKey;
    })();
    SAPB1.ChartOfAccountKey = ChartOfAccountKey;
    var BusinessPartnerGroup = (function () {
        function BusinessPartnerGroup() {
        }
        return BusinessPartnerGroup;
    })();
    SAPB1.BusinessPartnerGroup = BusinessPartnerGroup;
    var BusinessPartnerGroupKey = (function () {
        function BusinessPartnerGroupKey() {
        }
        return BusinessPartnerGroupKey;
    })();
    SAPB1.BusinessPartnerGroupKey = BusinessPartnerGroupKey;
    var Activity = (function () {
        function Activity() {
        }
        return Activity;
    })();
    SAPB1.Activity = Activity;
    var ActivityKey = (function () {
        function ActivityKey() {
        }
        return ActivityKey;
    })();
    SAPB1.ActivityKey = ActivityKey;
    var ActivityParams = (function () {
        function ActivityParams() {
        }
        return ActivityParams;
    })();
    SAPB1.ActivityParams = ActivityParams;
    var ActivityInstanceParams = (function () {
        function ActivityInstanceParams() {
        }
        return ActivityInstanceParams;
    })();
    SAPB1.ActivityInstanceParams = ActivityInstanceParams;
    var ActivityInstancesListParams = (function () {
        function ActivityInstancesListParams() {
        }
        return ActivityInstancesListParams;
    })();
    SAPB1.ActivityInstancesListParams = ActivityInstancesListParams;
    var SalesStage = (function () {
        function SalesStage() {
        }
        return SalesStage;
    })();
    SAPB1.SalesStage = SalesStage;
    var SalesStageKey = (function () {
        function SalesStageKey() {
        }
        return SalesStageKey;
    })();
    SAPB1.SalesStageKey = SalesStageKey;
    var ActivityType = (function () {
        function ActivityType() {
        }
        return ActivityType;
    })();
    SAPB1.ActivityType = ActivityType;
    var ActivityTypeKey = (function () {
        function ActivityTypeKey() {
        }
        return ActivityTypeKey;
    })();
    SAPB1.ActivityTypeKey = ActivityTypeKey;
    var ActivityLocation = (function () {
        function ActivityLocation() {
        }
        return ActivityLocation;
    })();
    SAPB1.ActivityLocation = ActivityLocation;
    var ActivityLocationKey = (function () {
        function ActivityLocationKey() {
        }
        return ActivityLocationKey;
    })();
    SAPB1.ActivityLocationKey = ActivityLocationKey;
    var DocumentParams = (function () {
        function DocumentParams() {
        }
        return DocumentParams;
    })();
    SAPB1.DocumentParams = DocumentParams;
    var Document = (function () {
        function Document() {
        }
        return Document;
    })();
    SAPB1.Document = Document;
    var DocumentKey = (function () {
        function DocumentKey() {
        }
        return DocumentKey;
    })();
    SAPB1.DocumentKey = DocumentKey;
    var Document_ApprovalRequest = (function () {
        function Document_ApprovalRequest() {
        }
        return Document_ApprovalRequest;
    })();
    SAPB1.Document_ApprovalRequest = Document_ApprovalRequest;
    var DocumentLine = (function () {
        function DocumentLine() {
        }
        return DocumentLine;
    })();
    SAPB1.DocumentLine = DocumentLine;
    var LineTaxJurisdiction = (function () {
        function LineTaxJurisdiction() {
        }
        return LineTaxJurisdiction;
    })();
    SAPB1.LineTaxJurisdiction = LineTaxJurisdiction;
    var DocumentLineAdditionalExpense = (function () {
        function DocumentLineAdditionalExpense() {
        }
        return DocumentLineAdditionalExpense;
    })();
    SAPB1.DocumentLineAdditionalExpense = DocumentLineAdditionalExpense;
    var LineExpenseTaxJurisdiction = (function () {
        function LineExpenseTaxJurisdiction() {
        }
        return LineExpenseTaxJurisdiction;
    })();
    SAPB1.LineExpenseTaxJurisdiction = LineExpenseTaxJurisdiction;
    var WithholdingTaxLine = (function () {
        function WithholdingTaxLine() {
        }
        return WithholdingTaxLine;
    })();
    SAPB1.WithholdingTaxLine = WithholdingTaxLine;
    var SerialNumber = (function () {
        function SerialNumber() {
        }
        return SerialNumber;
    })();
    SAPB1.SerialNumber = SerialNumber;
    var BatchNumber = (function () {
        function BatchNumber() {
        }
        return BatchNumber;
    })();
    SAPB1.BatchNumber = BatchNumber;
    var DocumentLinesBinAllocation = (function () {
        function DocumentLinesBinAllocation() {
        }
        return DocumentLinesBinAllocation;
    })();
    SAPB1.DocumentLinesBinAllocation = DocumentLinesBinAllocation;
    var DocumentAdditionalExpense = (function () {
        function DocumentAdditionalExpense() {
        }
        return DocumentAdditionalExpense;
    })();
    SAPB1.DocumentAdditionalExpense = DocumentAdditionalExpense;
    var DocExpenseTaxJurisdiction = (function () {
        function DocExpenseTaxJurisdiction() {
        }
        return DocExpenseTaxJurisdiction;
    })();
    SAPB1.DocExpenseTaxJurisdiction = DocExpenseTaxJurisdiction;
    var WithholdingTaxData = (function () {
        function WithholdingTaxData() {
        }
        return WithholdingTaxData;
    })();
    SAPB1.WithholdingTaxData = WithholdingTaxData;
    var DocumentPackage = (function () {
        function DocumentPackage() {
        }
        return DocumentPackage;
    })();
    SAPB1.DocumentPackage = DocumentPackage;
    var DocumentPackageItem = (function () {
        function DocumentPackageItem() {
        }
        return DocumentPackageItem;
    })();
    SAPB1.DocumentPackageItem = DocumentPackageItem;
    var DocumentSpecialLine = (function () {
        function DocumentSpecialLine() {
        }
        return DocumentSpecialLine;
    })();
    SAPB1.DocumentSpecialLine = DocumentSpecialLine;
    var DocumentInstallment = (function () {
        function DocumentInstallment() {
        }
        return DocumentInstallment;
    })();
    SAPB1.DocumentInstallment = DocumentInstallment;
    var DownPaymentToDraw = (function () {
        function DownPaymentToDraw() {
        }
        return DownPaymentToDraw;
    })();
    SAPB1.DownPaymentToDraw = DownPaymentToDraw;
    var DownPaymentToDrawDetails = (function () {
        function DownPaymentToDrawDetails() {
        }
        return DownPaymentToDrawDetails;
    })();
    SAPB1.DownPaymentToDrawDetails = DownPaymentToDrawDetails;
    var TaxExtension = (function () {
        function TaxExtension() {
        }
        return TaxExtension;
    })();
    SAPB1.TaxExtension = TaxExtension;
    var AddressExtension = (function () {
        function AddressExtension() {
        }
        return AddressExtension;
    })();
    SAPB1.AddressExtension = AddressExtension;
    var DeductionTaxHierarchy = (function () {
        function DeductionTaxHierarchy() {
        }
        return DeductionTaxHierarchy;
    })();
    SAPB1.DeductionTaxHierarchy = DeductionTaxHierarchy;
    var DeductionTaxHierarchyKey = (function () {
        function DeductionTaxHierarchyKey() {
        }
        return DeductionTaxHierarchyKey;
    })();
    SAPB1.DeductionTaxHierarchyKey = DeductionTaxHierarchyKey;
    var DeductionTaxHierarchies_Line = (function () {
        function DeductionTaxHierarchies_Line() {
        }
        return DeductionTaxHierarchies_Line;
    })();
    SAPB1.DeductionTaxHierarchies_Line = DeductionTaxHierarchies_Line;
    var DeductionTaxGroupParams = (function () {
        function DeductionTaxGroupParams() {
        }
        return DeductionTaxGroupParams;
    })();
    SAPB1.DeductionTaxGroupParams = DeductionTaxGroupParams;
    var DeductionTaxGroup = (function () {
        function DeductionTaxGroup() {
        }
        return DeductionTaxGroup;
    })();
    SAPB1.DeductionTaxGroup = DeductionTaxGroup;
    var DeductionTaxGroupKey = (function () {
        function DeductionTaxGroupKey() {
        }
        return DeductionTaxGroupKey;
    })();
    SAPB1.DeductionTaxGroupKey = DeductionTaxGroupKey;
    var UserParams = (function () {
        function UserParams() {
        }
        return UserParams;
    })();
    SAPB1.UserParams = UserParams;
    var User = (function () {
        function User() {
        }
        return User;
    })();
    SAPB1.User = User;
    var UserKey = (function () {
        function UserKey() {
        }
        return UserKey;
    })();
    SAPB1.UserKey = UserKey;
    var UserPermissionItem = (function () {
        function UserPermissionItem() {
        }
        return UserPermissionItem;
    })();
    SAPB1.UserPermissionItem = UserPermissionItem;
    var UserActionRecordItem = (function () {
        function UserActionRecordItem() {
        }
        return UserActionRecordItem;
    })();
    SAPB1.UserActionRecordItem = UserActionRecordItem;
    var UserBranchAssignmentItem = (function () {
        function UserBranchAssignmentItem() {
        }
        return UserBranchAssignmentItem;
    })();
    SAPB1.UserBranchAssignmentItem = UserBranchAssignmentItem;
    var ApprovalStage = (function () {
        function ApprovalStage() {
        }
        return ApprovalStage;
    })();
    SAPB1.ApprovalStage = ApprovalStage;
    var ApprovalStageKey = (function () {
        function ApprovalStageKey() {
        }
        return ApprovalStageKey;
    })();
    SAPB1.ApprovalStageKey = ApprovalStageKey;
    var ApprovalStageApprover = (function () {
        function ApprovalStageApprover() {
        }
        return ApprovalStageApprover;
    })();
    SAPB1.ApprovalStageApprover = ApprovalStageApprover;
    var ApprovalStageParams = (function () {
        function ApprovalStageParams() {
        }
        return ApprovalStageParams;
    })();
    SAPB1.ApprovalStageParams = ApprovalStageParams;
    var ApprovalTemplate = (function () {
        function ApprovalTemplate() {
        }
        return ApprovalTemplate;
    })();
    SAPB1.ApprovalTemplate = ApprovalTemplate;
    var ApprovalTemplateKey = (function () {
        function ApprovalTemplateKey() {
        }
        return ApprovalTemplateKey;
    })();
    SAPB1.ApprovalTemplateKey = ApprovalTemplateKey;
    var ApprovalTemplateUser = (function () {
        function ApprovalTemplateUser() {
        }
        return ApprovalTemplateUser;
    })();
    SAPB1.ApprovalTemplateUser = ApprovalTemplateUser;
    var ApprovalTemplateStage = (function () {
        function ApprovalTemplateStage() {
        }
        return ApprovalTemplateStage;
    })();
    SAPB1.ApprovalTemplateStage = ApprovalTemplateStage;
    var ApprovalTemplateDocument = (function () {
        function ApprovalTemplateDocument() {
        }
        return ApprovalTemplateDocument;
    })();
    SAPB1.ApprovalTemplateDocument = ApprovalTemplateDocument;
    var ApprovalTemplateTerm = (function () {
        function ApprovalTemplateTerm() {
        }
        return ApprovalTemplateTerm;
    })();
    SAPB1.ApprovalTemplateTerm = ApprovalTemplateTerm;
    var ApprovalTemplateQuery = (function () {
        function ApprovalTemplateQuery() {
        }
        return ApprovalTemplateQuery;
    })();
    SAPB1.ApprovalTemplateQuery = ApprovalTemplateQuery;
    var ApprovalTemplateParams = (function () {
        function ApprovalTemplateParams() {
        }
        return ApprovalTemplateParams;
    })();
    SAPB1.ApprovalTemplateParams = ApprovalTemplateParams;
    var AdditionalExpense = (function () {
        function AdditionalExpense() {
        }
        return AdditionalExpense;
    })();
    SAPB1.AdditionalExpense = AdditionalExpense;
    var AdditionalExpenseKey = (function () {
        function AdditionalExpenseKey() {
        }
        return AdditionalExpenseKey;
    })();
    SAPB1.AdditionalExpenseKey = AdditionalExpenseKey;
    var StockTransferParams = (function () {
        function StockTransferParams() {
        }
        return StockTransferParams;
    })();
    SAPB1.StockTransferParams = StockTransferParams;
    var StockTransfer = (function () {
        function StockTransfer() {
        }
        return StockTransfer;
    })();
    SAPB1.StockTransfer = StockTransfer;
    var StockTransferKey = (function () {
        function StockTransferKey() {
        }
        return StockTransferKey;
    })();
    SAPB1.StockTransferKey = StockTransferKey;
    var StockTransfer_ApprovalRequest = (function () {
        function StockTransfer_ApprovalRequest() {
        }
        return StockTransfer_ApprovalRequest;
    })();
    SAPB1.StockTransfer_ApprovalRequest = StockTransfer_ApprovalRequest;
    var StockTransferLine = (function () {
        function StockTransferLine() {
        }
        return StockTransferLine;
    })();
    SAPB1.StockTransferLine = StockTransferLine;
    var StockTransferLinesBinAllocation = (function () {
        function StockTransferLinesBinAllocation() {
        }
        return StockTransferLinesBinAllocation;
    })();
    SAPB1.StockTransferLinesBinAllocation = StockTransferLinesBinAllocation;
    var StockTransferTaxExtension = (function () {
        function StockTransferTaxExtension() {
        }
        return StockTransferTaxExtension;
    })();
    SAPB1.StockTransferTaxExtension = StockTransferTaxExtension;
    var SalesTaxAuthorityParams = (function () {
        function SalesTaxAuthorityParams() {
        }
        return SalesTaxAuthorityParams;
    })();
    SAPB1.SalesTaxAuthorityParams = SalesTaxAuthorityParams;
    var SalesTaxAuthority = (function () {
        function SalesTaxAuthority() {
        }
        return SalesTaxAuthority;
    })();
    SAPB1.SalesTaxAuthority = SalesTaxAuthority;
    var SalesTaxAuthorityKey = (function () {
        function SalesTaxAuthorityKey() {
        }
        return SalesTaxAuthorityKey;
    })();
    SAPB1.SalesTaxAuthorityKey = SalesTaxAuthorityKey;
    var TaxDefinition = (function () {
        function TaxDefinition() {
        }
        return TaxDefinition;
    })();
    SAPB1.TaxDefinition = TaxDefinition;
    var SalesTaxAuthoritiesType = (function () {
        function SalesTaxAuthoritiesType() {
        }
        return SalesTaxAuthoritiesType;
    })();
    SAPB1.SalesTaxAuthoritiesType = SalesTaxAuthoritiesType;
    var SalesTaxAuthoritiesTypeKey = (function () {
        function SalesTaxAuthoritiesTypeKey() {
        }
        return SalesTaxAuthoritiesTypeKey;
    })();
    SAPB1.SalesTaxAuthoritiesTypeKey = SalesTaxAuthoritiesTypeKey;
    var SalesTaxCode = (function () {
        function SalesTaxCode() {
        }
        return SalesTaxCode;
    })();
    SAPB1.SalesTaxCode = SalesTaxCode;
    var SalesTaxCodeKey = (function () {
        function SalesTaxCodeKey() {
        }
        return SalesTaxCodeKey;
    })();
    SAPB1.SalesTaxCodeKey = SalesTaxCodeKey;
    var SalesTaxCodes_Line = (function () {
        function SalesTaxCodes_Line() {
        }
        return SalesTaxCodes_Line;
    })();
    SAPB1.SalesTaxCodes_Line = SalesTaxCodes_Line;
    var Country = (function () {
        function Country() {
        }
        return Country;
    })();
    SAPB1.Country = Country;
    var CountryKey = (function () {
        function CountryKey() {
        }
        return CountryKey;
    })();
    SAPB1.CountryKey = CountryKey;
    var CountryParams = (function () {
        function CountryParams() {
        }
        return CountryParams;
    })();
    SAPB1.CountryParams = CountryParams;
    var QueryCategory = (function () {
        function QueryCategory() {
        }
        return QueryCategory;
    })();
    SAPB1.QueryCategory = QueryCategory;
    var QueryCategoryKey = (function () {
        function QueryCategoryKey() {
        }
        return QueryCategoryKey;
    })();
    SAPB1.QueryCategoryKey = QueryCategoryKey;
    var FactoringIndicator = (function () {
        function FactoringIndicator() {
        }
        return FactoringIndicator;
    })();
    SAPB1.FactoringIndicator = FactoringIndicator;
    var FactoringIndicatorKey = (function () {
        function FactoringIndicatorKey() {
        }
        return FactoringIndicatorKey;
    })();
    SAPB1.FactoringIndicatorKey = FactoringIndicatorKey;
    var PaymentParams = (function () {
        function PaymentParams() {
        }
        return PaymentParams;
    })();
    SAPB1.PaymentParams = PaymentParams;
    var Payment = (function () {
        function Payment() {
        }
        return Payment;
    })();
    SAPB1.Payment = Payment;
    var PaymentKey = (function () {
        function PaymentKey() {
        }
        return PaymentKey;
    })();
    SAPB1.PaymentKey = PaymentKey;
    var PaymentCheck = (function () {
        function PaymentCheck() {
        }
        return PaymentCheck;
    })();
    SAPB1.PaymentCheck = PaymentCheck;
    var PaymentInvoice = (function () {
        function PaymentInvoice() {
        }
        return PaymentInvoice;
    })();
    SAPB1.PaymentInvoice = PaymentInvoice;
    var PaymentCreditCard = (function () {
        function PaymentCreditCard() {
        }
        return PaymentCreditCard;
    })();
    SAPB1.PaymentCreditCard = PaymentCreditCard;
    var PaymentAccount = (function () {
        function PaymentAccount() {
        }
        return PaymentAccount;
    })();
    SAPB1.PaymentAccount = PaymentAccount;
    var BillOfExchange = (function () {
        function BillOfExchange() {
        }
        return BillOfExchange;
    })();
    SAPB1.BillOfExchange = BillOfExchange;
    var CashFlowAssignment = (function () {
        function CashFlowAssignment() {
        }
        return CashFlowAssignment;
    })();
    SAPB1.CashFlowAssignment = CashFlowAssignment;
    var Payments_ApprovalRequest = (function () {
        function Payments_ApprovalRequest() {
        }
        return Payments_ApprovalRequest;
    })();
    SAPB1.Payments_ApprovalRequest = Payments_ApprovalRequest;
    var AccountSegmentationParams = (function () {
        function AccountSegmentationParams() {
        }
        return AccountSegmentationParams;
    })();
    SAPB1.AccountSegmentationParams = AccountSegmentationParams;
    var AccountSegmentation = (function () {
        function AccountSegmentation() {
        }
        return AccountSegmentation;
    })();
    SAPB1.AccountSegmentation = AccountSegmentation;
    var AccountSegmentationKey = (function () {
        function AccountSegmentationKey() {
        }
        return AccountSegmentationKey;
    })();
    SAPB1.AccountSegmentationKey = AccountSegmentationKey;
    var AccountSegmentationsCategory = (function () {
        function AccountSegmentationsCategory() {
        }
        return AccountSegmentationsCategory;
    })();
    SAPB1.AccountSegmentationsCategory = AccountSegmentationsCategory;
    var AccountSegmentationCategory = (function () {
        function AccountSegmentationCategory() {
        }
        return AccountSegmentationCategory;
    })();
    SAPB1.AccountSegmentationCategory = AccountSegmentationCategory;
    var AccountSegmentationCategoryKey = (function () {
        function AccountSegmentationCategoryKey() {
        }
        return AccountSegmentationCategoryKey;
    })();
    SAPB1.AccountSegmentationCategoryKey = AccountSegmentationCategoryKey;
    var WarehouseLocation = (function () {
        function WarehouseLocation() {
        }
        return WarehouseLocation;
    })();
    SAPB1.WarehouseLocation = WarehouseLocation;
    var WarehouseLocationKey = (function () {
        function WarehouseLocationKey() {
        }
        return WarehouseLocationKey;
    })();
    SAPB1.WarehouseLocationKey = WarehouseLocationKey;
    var Forms1099 = (function () {
        function Forms1099() {
        }
        return Forms1099;
    })();
    SAPB1.Forms1099 = Forms1099;
    var Forms1099Key = (function () {
        function Forms1099Key() {
        }
        return Forms1099Key;
    })();
    SAPB1.Forms1099Key = Forms1099Key;
    var Boxes1099 = (function () {
        function Boxes1099() {
        }
        return Boxes1099;
    })();
    SAPB1.Boxes1099 = Boxes1099;
    var InventoryCycles = (function () {
        function InventoryCycles() {
        }
        return InventoryCycles;
    })();
    SAPB1.InventoryCycles = InventoryCycles;
    var InventoryCyclesKey = (function () {
        function InventoryCyclesKey() {
        }
        return InventoryCyclesKey;
    })();
    SAPB1.InventoryCyclesKey = InventoryCyclesKey;
    var InventoryCyclesParams = (function () {
        function InventoryCyclesParams() {
        }
        return InventoryCyclesParams;
    })();
    SAPB1.InventoryCyclesParams = InventoryCyclesParams;
    var WizardPaymentMethodParams = (function () {
        function WizardPaymentMethodParams() {
        }
        return WizardPaymentMethodParams;
    })();
    SAPB1.WizardPaymentMethodParams = WizardPaymentMethodParams;
    var WizardPaymentMethod = (function () {
        function WizardPaymentMethod() {
        }
        return WizardPaymentMethod;
    })();
    SAPB1.WizardPaymentMethod = WizardPaymentMethod;
    var WizardPaymentMethodKey = (function () {
        function WizardPaymentMethodKey() {
        }
        return WizardPaymentMethodKey;
    })();
    SAPB1.WizardPaymentMethodKey = WizardPaymentMethodKey;
    var CurrencyRestriction = (function () {
        function CurrencyRestriction() {
        }
        return CurrencyRestriction;
    })();
    SAPB1.CurrencyRestriction = CurrencyRestriction;
    var BPPriority = (function () {
        function BPPriority() {
        }
        return BPPriority;
    })();
    SAPB1.BPPriority = BPPriority;
    var BPPriorityKey = (function () {
        function BPPriorityKey() {
        }
        return BPPriorityKey;
    })();
    SAPB1.BPPriorityKey = BPPriorityKey;
    var DunningLetter = (function () {
        function DunningLetter() {
        }
        return DunningLetter;
    })();
    SAPB1.DunningLetter = DunningLetter;
    var DunningLetterKey = (function () {
        function DunningLetterKey() {
        }
        return DunningLetterKey;
    })();
    SAPB1.DunningLetterKey = DunningLetterKey;
    var UserFieldMD = (function () {
        function UserFieldMD() {
        }
        return UserFieldMD;
    })();
    SAPB1.UserFieldMD = UserFieldMD;
    var UserFieldMDKey = (function () {
        function UserFieldMDKey() {
        }
        return UserFieldMDKey;
    })();
    SAPB1.UserFieldMDKey = UserFieldMDKey;
    var ValidValueMD = (function () {
        function ValidValueMD() {
        }
        return ValidValueMD;
    })();
    SAPB1.ValidValueMD = ValidValueMD;
    var UserFieldMDParams = (function () {
        function UserFieldMDParams() {
        }
        return UserFieldMDParams;
    })();
    SAPB1.UserFieldMDParams = UserFieldMDParams;
    var UserTablesMD = (function () {
        function UserTablesMD() {
        }
        return UserTablesMD;
    })();
    SAPB1.UserTablesMD = UserTablesMD;
    var UserTablesMDKey = (function () {
        function UserTablesMDKey() {
        }
        return UserTablesMDKey;
    })();
    SAPB1.UserTablesMDKey = UserTablesMDKey;
    var PickListParams = (function () {
        function PickListParams() {
        }
        return PickListParams;
    })();
    SAPB1.PickListParams = PickListParams;
    var PickList = (function () {
        function PickList() {
        }
        return PickList;
    })();
    SAPB1.PickList = PickList;
    var PickListKey = (function () {
        function PickListKey() {
        }
        return PickListKey;
    })();
    SAPB1.PickListKey = PickListKey;
    var PickListsLine = (function () {
        function PickListsLine() {
        }
        return PickListsLine;
    })();
    SAPB1.PickListsLine = PickListsLine;
    var PaymentRunExport = (function () {
        function PaymentRunExport() {
        }
        return PaymentRunExport;
    })();
    SAPB1.PaymentRunExport = PaymentRunExport;
    var PaymentRunExportKey = (function () {
        function PaymentRunExportKey() {
        }
        return PaymentRunExportKey;
    })();
    SAPB1.PaymentRunExportKey = PaymentRunExportKey;
    var PaymentRunExport_Line = (function () {
        function PaymentRunExport_Line() {
        }
        return PaymentRunExport_Line;
    })();
    SAPB1.PaymentRunExport_Line = PaymentRunExport_Line;
    var UserQuery = (function () {
        function UserQuery() {
        }
        return UserQuery;
    })();
    SAPB1.UserQuery = UserQuery;
    var UserQueryKey = (function () {
        function UserQueryKey() {
        }
        return UserQueryKey;
    })();
    SAPB1.UserQueryKey = UserQueryKey;
    var MaterialRevaluationParams = (function () {
        function MaterialRevaluationParams() {
        }
        return MaterialRevaluationParams;
    })();
    SAPB1.MaterialRevaluationParams = MaterialRevaluationParams;
    var MaterialRevaluation = (function () {
        function MaterialRevaluation() {
        }
        return MaterialRevaluation;
    })();
    SAPB1.MaterialRevaluation = MaterialRevaluation;
    var MaterialRevaluationKey = (function () {
        function MaterialRevaluationKey() {
        }
        return MaterialRevaluationKey;
    })();
    SAPB1.MaterialRevaluationKey = MaterialRevaluationKey;
    var MaterialRevaluationLine = (function () {
        function MaterialRevaluationLine() {
        }
        return MaterialRevaluationLine;
    })();
    SAPB1.MaterialRevaluationLine = MaterialRevaluationLine;
    var FIFOLayer = (function () {
        function FIFOLayer() {
        }
        return FIFOLayer;
    })();
    SAPB1.FIFOLayer = FIFOLayer;
    var SNBLines = (function () {
        function SNBLines() {
        }
        return SNBLines;
    })();
    SAPB1.SNBLines = SNBLines;
    var ContractTemplate = (function () {
        function ContractTemplate() {
        }
        return ContractTemplate;
    })();
    SAPB1.ContractTemplate = ContractTemplate;
    var ContractTemplateKey = (function () {
        function ContractTemplateKey() {
        }
        return ContractTemplateKey;
    })();
    SAPB1.ContractTemplateKey = ContractTemplateKey;
    var EmployeeInfoParams = (function () {
        function EmployeeInfoParams() {
        }
        return EmployeeInfoParams;
    })();
    SAPB1.EmployeeInfoParams = EmployeeInfoParams;
    var EmployeeInfo = (function () {
        function EmployeeInfo() {
        }
        return EmployeeInfo;
    })();
    SAPB1.EmployeeInfo = EmployeeInfo;
    var EmployeeInfoKey = (function () {
        function EmployeeInfoKey() {
        }
        return EmployeeInfoKey;
    })();
    SAPB1.EmployeeInfoKey = EmployeeInfoKey;
    var EmployeeAbsenceInfo = (function () {
        function EmployeeAbsenceInfo() {
        }
        return EmployeeAbsenceInfo;
    })();
    SAPB1.EmployeeAbsenceInfo = EmployeeAbsenceInfo;
    var EmployeeEducationInfo = (function () {
        function EmployeeEducationInfo() {
        }
        return EmployeeEducationInfo;
    })();
    SAPB1.EmployeeEducationInfo = EmployeeEducationInfo;
    var EmployeeReviewsInfo = (function () {
        function EmployeeReviewsInfo() {
        }
        return EmployeeReviewsInfo;
    })();
    SAPB1.EmployeeReviewsInfo = EmployeeReviewsInfo;
    var EmployeePreviousEmpoymentInfo = (function () {
        function EmployeePreviousEmpoymentInfo() {
        }
        return EmployeePreviousEmpoymentInfo;
    })();
    SAPB1.EmployeePreviousEmpoymentInfo = EmployeePreviousEmpoymentInfo;
    var EmployeeRolesInfo = (function () {
        function EmployeeRolesInfo() {
        }
        return EmployeeRolesInfo;
    })();
    SAPB1.EmployeeRolesInfo = EmployeeRolesInfo;
    var EmployeeSavingsPaymentInfo = (function () {
        function EmployeeSavingsPaymentInfo() {
        }
        return EmployeeSavingsPaymentInfo;
    })();
    SAPB1.EmployeeSavingsPaymentInfo = EmployeeSavingsPaymentInfo;
    var CustomerEquipmentCard = (function () {
        function CustomerEquipmentCard() {
        }
        return CustomerEquipmentCard;
    })();
    SAPB1.CustomerEquipmentCard = CustomerEquipmentCard;
    var CustomerEquipmentCardKey = (function () {
        function CustomerEquipmentCardKey() {
        }
        return CustomerEquipmentCardKey;
    })();
    SAPB1.CustomerEquipmentCardKey = CustomerEquipmentCardKey;
    var WithholdingTaxCodeParams = (function () {
        function WithholdingTaxCodeParams() {
        }
        return WithholdingTaxCodeParams;
    })();
    SAPB1.WithholdingTaxCodeParams = WithholdingTaxCodeParams;
    var WithholdingTaxCode = (function () {
        function WithholdingTaxCode() {
        }
        return WithholdingTaxCode;
    })();
    SAPB1.WithholdingTaxCode = WithholdingTaxCode;
    var WithholdingTaxCodeKey = (function () {
        function WithholdingTaxCodeKey() {
        }
        return WithholdingTaxCodeKey;
    })();
    SAPB1.WithholdingTaxCodeKey = WithholdingTaxCodeKey;
    var WithholdingTaxCodes_Line = (function () {
        function WithholdingTaxCodes_Line() {
        }
        return WithholdingTaxCodes_Line;
    })();
    SAPB1.WithholdingTaxCodes_Line = WithholdingTaxCodes_Line;
    var ProgressiveTax_Line = (function () {
        function ProgressiveTax_Line() {
        }
        return ProgressiveTax_Line;
    })();
    SAPB1.ProgressiveTax_Line = ProgressiveTax_Line;
    var WithholdingTaxCodes_ValueRange_Line = (function () {
        function WithholdingTaxCodes_ValueRange_Line() {
        }
        return WithholdingTaxCodes_ValueRange_Line;
    })();
    SAPB1.WithholdingTaxCodes_ValueRange_Line = WithholdingTaxCodes_ValueRange_Line;
    var BillOfExchangeTransactionParams = (function () {
        function BillOfExchangeTransactionParams() {
        }
        return BillOfExchangeTransactionParams;
    })();
    SAPB1.BillOfExchangeTransactionParams = BillOfExchangeTransactionParams;
    var BillOfExchangeTransaction = (function () {
        function BillOfExchangeTransaction() {
        }
        return BillOfExchangeTransaction;
    })();
    SAPB1.BillOfExchangeTransaction = BillOfExchangeTransaction;
    var BillOfExchangeTransactionKey = (function () {
        function BillOfExchangeTransactionKey() {
        }
        return BillOfExchangeTransactionKey;
    })();
    SAPB1.BillOfExchangeTransactionKey = BillOfExchangeTransactionKey;
    var BillOfExchangeTransactionLine = (function () {
        function BillOfExchangeTransactionLine() {
        }
        return BillOfExchangeTransactionLine;
    })();
    SAPB1.BillOfExchangeTransactionLine = BillOfExchangeTransactionLine;
    var BillOfExchangeTransDeposit = (function () {
        function BillOfExchangeTransDeposit() {
        }
        return BillOfExchangeTransDeposit;
    })();
    SAPB1.BillOfExchangeTransDeposit = BillOfExchangeTransDeposit;
    var BillOfExchangeTransBankPage = (function () {
        function BillOfExchangeTransBankPage() {
        }
        return BillOfExchangeTransBankPage;
    })();
    SAPB1.BillOfExchangeTransBankPage = BillOfExchangeTransBankPage;
    var KnowledgeBaseSolution = (function () {
        function KnowledgeBaseSolution() {
        }
        return KnowledgeBaseSolution;
    })();
    SAPB1.KnowledgeBaseSolution = KnowledgeBaseSolution;
    var KnowledgeBaseSolutionKey = (function () {
        function KnowledgeBaseSolutionKey() {
        }
        return KnowledgeBaseSolutionKey;
    })();
    SAPB1.KnowledgeBaseSolutionKey = KnowledgeBaseSolutionKey;
    var ServiceContract = (function () {
        function ServiceContract() {
        }
        return ServiceContract;
    })();
    SAPB1.ServiceContract = ServiceContract;
    var ServiceContractKey = (function () {
        function ServiceContractKey() {
        }
        return ServiceContractKey;
    })();
    SAPB1.ServiceContractKey = ServiceContractKey;
    var ServiceContract_Line = (function () {
        function ServiceContract_Line() {
        }
        return ServiceContract_Line;
    })();
    SAPB1.ServiceContract_Line = ServiceContract_Line;
    var ServiceCallParams = (function () {
        function ServiceCallParams() {
        }
        return ServiceCallParams;
    })();
    SAPB1.ServiceCallParams = ServiceCallParams;
    var ServiceCall = (function () {
        function ServiceCall() {
        }
        return ServiceCall;
    })();
    SAPB1.ServiceCall = ServiceCall;
    var ServiceCallKey = (function () {
        function ServiceCallKey() {
        }
        return ServiceCallKey;
    })();
    SAPB1.ServiceCallKey = ServiceCallKey;
    var ServiceCallActivity = (function () {
        function ServiceCallActivity() {
        }
        return ServiceCallActivity;
    })();
    SAPB1.ServiceCallActivity = ServiceCallActivity;
    var ServiceCallInventoryExpense = (function () {
        function ServiceCallInventoryExpense() {
        }
        return ServiceCallInventoryExpense;
    })();
    SAPB1.ServiceCallInventoryExpense = ServiceCallInventoryExpense;
    var ServiceCallSolution = (function () {
        function ServiceCallSolution() {
        }
        return ServiceCallSolution;
    })();
    SAPB1.ServiceCallSolution = ServiceCallSolution;
    var UserKeysMD = (function () {
        function UserKeysMD() {
        }
        return UserKeysMD;
    })();
    SAPB1.UserKeysMD = UserKeysMD;
    var UserKeysMDKey = (function () {
        function UserKeysMDKey() {
        }
        return UserKeysMDKey;
    })();
    SAPB1.UserKeysMDKey = UserKeysMDKey;
    var UserKeysMD_Element = (function () {
        function UserKeysMD_Element() {
        }
        return UserKeysMD_Element;
    })();
    SAPB1.UserKeysMD_Element = UserKeysMD_Element;
    var Queue = (function () {
        function Queue() {
        }
        return Queue;
    })();
    SAPB1.Queue = Queue;
    var QueueKey = (function () {
        function QueueKey() {
        }
        return QueueKey;
    })();
    SAPB1.QueueKey = QueueKey;
    var QueueMember = (function () {
        function QueueMember() {
        }
        return QueueMember;
    })();
    SAPB1.QueueMember = QueueMember;
    var SalesForecastParams = (function () {
        function SalesForecastParams() {
        }
        return SalesForecastParams;
    })();
    SAPB1.SalesForecastParams = SalesForecastParams;
    var SalesForecast = (function () {
        function SalesForecast() {
        }
        return SalesForecast;
    })();
    SAPB1.SalesForecast = SalesForecast;
    var SalesForecastKey = (function () {
        function SalesForecastKey() {
        }
        return SalesForecastKey;
    })();
    SAPB1.SalesForecastKey = SalesForecastKey;
    var SalesForecastLine = (function () {
        function SalesForecastLine() {
        }
        return SalesForecastLine;
    })();
    SAPB1.SalesForecastLine = SalesForecastLine;
    var BusinessPartnerParams = (function () {
        function BusinessPartnerParams() {
        }
        return BusinessPartnerParams;
    })();
    SAPB1.BusinessPartnerParams = BusinessPartnerParams;
    var BusinessPartner = (function () {
        function BusinessPartner() {
        }
        return BusinessPartner;
    })();
    SAPB1.BusinessPartner = BusinessPartner;
    var BusinessPartnerKey = (function () {
        function BusinessPartnerKey() {
        }
        return BusinessPartnerKey;
    })();
    SAPB1.BusinessPartnerKey = BusinessPartnerKey;
    var BPAddress = (function () {
        function BPAddress() {
        }
        return BPAddress;
    })();
    SAPB1.BPAddress = BPAddress;
    var ContactEmployee = (function () {
        function ContactEmployee() {
        }
        return ContactEmployee;
    })();
    SAPB1.ContactEmployee = ContactEmployee;
    var BPAccountReceivablePayble = (function () {
        function BPAccountReceivablePayble() {
        }
        return BPAccountReceivablePayble;
    })();
    SAPB1.BPAccountReceivablePayble = BPAccountReceivablePayble;
    var BPPaymentMethod = (function () {
        function BPPaymentMethod() {
        }
        return BPPaymentMethod;
    })();
    SAPB1.BPPaymentMethod = BPPaymentMethod;
    var BPWithholdingTax = (function () {
        function BPWithholdingTax() {
        }
        return BPWithholdingTax;
    })();
    SAPB1.BPWithholdingTax = BPWithholdingTax;
    var BPPaymentDate = (function () {
        function BPPaymentDate() {
        }
        return BPPaymentDate;
    })();
    SAPB1.BPPaymentDate = BPPaymentDate;
    var BPBranchAssignmentItem = (function () {
        function BPBranchAssignmentItem() {
        }
        return BPBranchAssignmentItem;
    })();
    SAPB1.BPBranchAssignmentItem = BPBranchAssignmentItem;
    var BPBankAccount = (function () {
        function BPBankAccount() {
        }
        return BPBankAccount;
    })();
    SAPB1.BPBankAccount = BPBankAccount;
    var BPFiscalTaxID = (function () {
        function BPFiscalTaxID() {
        }
        return BPFiscalTaxID;
    })();
    SAPB1.BPFiscalTaxID = BPFiscalTaxID;
    var DiscountGroup = (function () {
        function DiscountGroup() {
        }
        return DiscountGroup;
    })();
    SAPB1.DiscountGroup = DiscountGroup;
    var BPIntrastatExtension = (function () {
        function BPIntrastatExtension() {
        }
        return BPIntrastatExtension;
    })();
    SAPB1.BPIntrastatExtension = BPIntrastatExtension;
    var OpenningBalanceAccount = (function () {
        function OpenningBalanceAccount() {
        }
        return OpenningBalanceAccount;
    })();
    SAPB1.OpenningBalanceAccount = OpenningBalanceAccount;
    var BPCode = (function () {
        function BPCode() {
        }
        return BPCode;
    })();
    SAPB1.BPCode = BPCode;
    var Territory = (function () {
        function Territory() {
        }
        return Territory;
    })();
    SAPB1.Territory = Territory;
    var TerritoryKey = (function () {
        function TerritoryKey() {
        }
        return TerritoryKey;
    })();
    SAPB1.TerritoryKey = TerritoryKey;
    var Industry = (function () {
        function Industry() {
        }
        return Industry;
    })();
    SAPB1.Industry = Industry;
    var IndustryKey = (function () {
        function IndustryKey() {
        }
        return IndustryKey;
    })();
    SAPB1.IndustryKey = IndustryKey;
    var ProductionOrderParams = (function () {
        function ProductionOrderParams() {
        }
        return ProductionOrderParams;
    })();
    SAPB1.ProductionOrderParams = ProductionOrderParams;
    var ProductionOrder = (function () {
        function ProductionOrder() {
        }
        return ProductionOrder;
    })();
    SAPB1.ProductionOrder = ProductionOrder;
    var ProductionOrderKey = (function () {
        function ProductionOrderKey() {
        }
        return ProductionOrderKey;
    })();
    SAPB1.ProductionOrderKey = ProductionOrderKey;
    var ProductionOrderLine = (function () {
        function ProductionOrderLine() {
        }
        return ProductionOrderLine;
    })();
    SAPB1.ProductionOrderLine = ProductionOrderLine;
    var ProductionOrdersSalesOrderLine = (function () {
        function ProductionOrdersSalesOrderLine() {
        }
        return ProductionOrdersSalesOrderLine;
    })();
    SAPB1.ProductionOrdersSalesOrderLine = ProductionOrdersSalesOrderLine;
    var PackagesType = (function () {
        function PackagesType() {
        }
        return PackagesType;
    })();
    SAPB1.PackagesType = PackagesType;
    var PackagesTypeKey = (function () {
        function PackagesTypeKey() {
        }
        return PackagesTypeKey;
    })();
    SAPB1.PackagesTypeKey = PackagesTypeKey;
    var UserObjectsMD = (function () {
        function UserObjectsMD() {
        }
        return UserObjectsMD;
    })();
    SAPB1.UserObjectsMD = UserObjectsMD;
    var UserObjectsMDKey = (function () {
        function UserObjectsMDKey() {
        }
        return UserObjectsMDKey;
    })();
    SAPB1.UserObjectsMDKey = UserObjectsMDKey;
    var UserObjectMD_ChildTable = (function () {
        function UserObjectMD_ChildTable() {
        }
        return UserObjectMD_ChildTable;
    })();
    SAPB1.UserObjectMD_ChildTable = UserObjectMD_ChildTable;
    var UserObjectMD_FindColumn = (function () {
        function UserObjectMD_FindColumn() {
        }
        return UserObjectMD_FindColumn;
    })();
    SAPB1.UserObjectMD_FindColumn = UserObjectMD_FindColumn;
    var UserObjectMD_FormColumn = (function () {
        function UserObjectMD_FormColumn() {
        }
        return UserObjectMD_FormColumn;
    })();
    SAPB1.UserObjectMD_FormColumn = UserObjectMD_FormColumn;
    var UserObjectMD_EnhancedFormColumn = (function () {
        function UserObjectMD_EnhancedFormColumn() {
        }
        return UserObjectMD_EnhancedFormColumn;
    })();
    SAPB1.UserObjectMD_EnhancedFormColumn = UserObjectMD_EnhancedFormColumn;
    var Team = (function () {
        function Team() {
        }
        return Team;
    })();
    SAPB1.Team = Team;
    var TeamKey = (function () {
        function TeamKey() {
        }
        return TeamKey;
    })();
    SAPB1.TeamKey = TeamKey;
    var TeamMember = (function () {
        function TeamMember() {
        }
        return TeamMember;
    })();
    SAPB1.TeamMember = TeamMember;
    var Relationship = (function () {
        function Relationship() {
        }
        return Relationship;
    })();
    SAPB1.Relationship = Relationship;
    var RelationshipKey = (function () {
        function RelationshipKey() {
        }
        return RelationshipKey;
    })();
    SAPB1.RelationshipKey = RelationshipKey;
    var UserPermissionTree = (function () {
        function UserPermissionTree() {
        }
        return UserPermissionTree;
    })();
    SAPB1.UserPermissionTree = UserPermissionTree;
    var UserPermissionTreeKey = (function () {
        function UserPermissionTreeKey() {
        }
        return UserPermissionTreeKey;
    })();
    SAPB1.UserPermissionTreeKey = UserPermissionTreeKey;
    var UserPermissionForm = (function () {
        function UserPermissionForm() {
        }
        return UserPermissionForm;
    })();
    SAPB1.UserPermissionForm = UserPermissionForm;
    var ActivityStatus = (function () {
        function ActivityStatus() {
        }
        return ActivityStatus;
    })();
    SAPB1.ActivityStatus = ActivityStatus;
    var ActivityStatusKey = (function () {
        function ActivityStatusKey() {
        }
        return ActivityStatusKey;
    })();
    SAPB1.ActivityStatusKey = ActivityStatusKey;
    var ChooseFromList = (function () {
        function ChooseFromList() {
        }
        return ChooseFromList;
    })();
    SAPB1.ChooseFromList = ChooseFromList;
    var ChooseFromListKey = (function () {
        function ChooseFromListKey() {
        }
        return ChooseFromListKey;
    })();
    SAPB1.ChooseFromListKey = ChooseFromListKey;
    var ChooseFromList_Line = (function () {
        function ChooseFromList_Line() {
        }
        return ChooseFromList_Line;
    })();
    SAPB1.ChooseFromList_Line = ChooseFromList_Line;
    var FormattedSearche = (function () {
        function FormattedSearche() {
        }
        return FormattedSearche;
    })();
    SAPB1.FormattedSearche = FormattedSearche;
    var FormattedSearcheKey = (function () {
        function FormattedSearcheKey() {
        }
        return FormattedSearcheKey;
    })();
    SAPB1.FormattedSearcheKey = FormattedSearcheKey;
    var Attachments2 = (function () {
        function Attachments2() {
        }
        return Attachments2;
    })();
    SAPB1.Attachments2 = Attachments2;
    var Attachments2Key = (function () {
        function Attachments2Key() {
        }
        return Attachments2Key;
    })();
    SAPB1.Attachments2Key = Attachments2Key;
    var Attachments2_Line = (function () {
        function Attachments2_Line() {
        }
        return Attachments2_Line;
    })();
    SAPB1.Attachments2_Line = Attachments2_Line;
    var UserLanguage = (function () {
        function UserLanguage() {
        }
        return UserLanguage;
    })();
    SAPB1.UserLanguage = UserLanguage;
    var UserLanguageKey = (function () {
        function UserLanguageKey() {
        }
        return UserLanguageKey;
    })();
    SAPB1.UserLanguageKey = UserLanguageKey;
    var MultiLanguageTranslation = (function () {
        function MultiLanguageTranslation() {
        }
        return MultiLanguageTranslation;
    })();
    SAPB1.MultiLanguageTranslation = MultiLanguageTranslation;
    var MultiLanguageTranslationKey = (function () {
        function MultiLanguageTranslationKey() {
        }
        return MultiLanguageTranslationKey;
    })();
    SAPB1.MultiLanguageTranslationKey = MultiLanguageTranslationKey;
    var TranslationsInUserLanguage = (function () {
        function TranslationsInUserLanguage() {
        }
        return TranslationsInUserLanguage;
    })();
    SAPB1.TranslationsInUserLanguage = TranslationsInUserLanguage;
    var DynamicSystemStringParams = (function () {
        function DynamicSystemStringParams() {
        }
        return DynamicSystemStringParams;
    })();
    SAPB1.DynamicSystemStringParams = DynamicSystemStringParams;
    var DynamicSystemString = (function () {
        function DynamicSystemString() {
        }
        return DynamicSystemString;
    })();
    SAPB1.DynamicSystemString = DynamicSystemString;
    var DynamicSystemStringKey = (function () {
        function DynamicSystemStringKey() {
        }
        return DynamicSystemStringKey;
    })();
    SAPB1.DynamicSystemStringKey = DynamicSystemStringKey;
    var HouseBankAccount = (function () {
        function HouseBankAccount() {
        }
        return HouseBankAccount;
    })();
    SAPB1.HouseBankAccount = HouseBankAccount;
    var HouseBankAccountKey = (function () {
        function HouseBankAccountKey() {
        }
        return HouseBankAccountKey;
    })();
    SAPB1.HouseBankAccountKey = HouseBankAccountKey;
    var BusinessPlaceParams = (function () {
        function BusinessPlaceParams() {
        }
        return BusinessPlaceParams;
    })();
    SAPB1.BusinessPlaceParams = BusinessPlaceParams;
    var BusinessPlace = (function () {
        function BusinessPlace() {
        }
        return BusinessPlace;
    })();
    SAPB1.BusinessPlace = BusinessPlace;
    var BusinessPlaceKey = (function () {
        function BusinessPlaceKey() {
        }
        return BusinessPlaceKey;
    })();
    SAPB1.BusinessPlaceKey = BusinessPlaceKey;
    var BusinessPlaceIENumber = (function () {
        function BusinessPlaceIENumber() {
        }
        return BusinessPlaceIENumber;
    })();
    SAPB1.BusinessPlaceIENumber = BusinessPlaceIENumber;
    var BusinessPlaceTributaryInfo = (function () {
        function BusinessPlaceTributaryInfo() {
        }
        return BusinessPlaceTributaryInfo;
    })();
    SAPB1.BusinessPlaceTributaryInfo = BusinessPlaceTributaryInfo;
    var LocalEra = (function () {
        function LocalEra() {
        }
        return LocalEra;
    })();
    SAPB1.LocalEra = LocalEra;
    var LocalEraKey = (function () {
        function LocalEraKey() {
        }
        return LocalEraKey;
    })();
    SAPB1.LocalEraKey = LocalEraKey;
    var SalesTaxInvoice = (function () {
        function SalesTaxInvoice() {
        }
        return SalesTaxInvoice;
    })();
    SAPB1.SalesTaxInvoice = SalesTaxInvoice;
    var SalesTaxInvoiceKey = (function () {
        function SalesTaxInvoiceKey() {
        }
        return SalesTaxInvoiceKey;
    })();
    SAPB1.SalesTaxInvoiceKey = SalesTaxInvoiceKey;
    var SalesTaxInvoiceLine = (function () {
        function SalesTaxInvoiceLine() {
        }
        return SalesTaxInvoiceLine;
    })();
    SAPB1.SalesTaxInvoiceLine = SalesTaxInvoiceLine;
    var SalesTaxInvoiceOperationCode = (function () {
        function SalesTaxInvoiceOperationCode() {
        }
        return SalesTaxInvoiceOperationCode;
    })();
    SAPB1.SalesTaxInvoiceOperationCode = SalesTaxInvoiceOperationCode;
    var PurchaseTaxInvoice = (function () {
        function PurchaseTaxInvoice() {
        }
        return PurchaseTaxInvoice;
    })();
    SAPB1.PurchaseTaxInvoice = PurchaseTaxInvoice;
    var PurchaseTaxInvoiceKey = (function () {
        function PurchaseTaxInvoiceKey() {
        }
        return PurchaseTaxInvoiceKey;
    })();
    SAPB1.PurchaseTaxInvoiceKey = PurchaseTaxInvoiceKey;
    var PurchaseTaxInvoiceLine = (function () {
        function PurchaseTaxInvoiceLine() {
        }
        return PurchaseTaxInvoiceLine;
    })();
    SAPB1.PurchaseTaxInvoiceLine = PurchaseTaxInvoiceLine;
    var PurchaseTaxInvoiceOperationCode = (function () {
        function PurchaseTaxInvoiceOperationCode() {
        }
        return PurchaseTaxInvoiceOperationCode;
    })();
    SAPB1.PurchaseTaxInvoiceOperationCode = PurchaseTaxInvoiceOperationCode;
    var Bank = (function () {
        function Bank() {
        }
        return Bank;
    })();
    SAPB1.Bank = Bank;
    var BankKey = (function () {
        function BankKey() {
        }
        return BankKey;
    })();
    SAPB1.BankKey = BankKey;
    var JournalEntryParams = (function () {
        function JournalEntryParams() {
        }
        return JournalEntryParams;
    })();
    SAPB1.JournalEntryParams = JournalEntryParams;
    var JournalEntry = (function () {
        function JournalEntry() {
        }
        return JournalEntry;
    })();
    SAPB1.JournalEntry = JournalEntry;
    var JournalEntryKey = (function () {
        function JournalEntryKey() {
        }
        return JournalEntryKey;
    })();
    SAPB1.JournalEntryKey = JournalEntryKey;
    var JournalEntryLine = (function () {
        function JournalEntryLine() {
        }
        return JournalEntryLine;
    })();
    SAPB1.JournalEntryLine = JournalEntryLine;
    var Contact = (function () {
        function Contact() {
        }
        return Contact;
    })();
    SAPB1.Contact = Contact;
    var ContactKey = (function () {
        function ContactKey() {
        }
        return ContactKey;
    })();
    SAPB1.ContactKey = ContactKey;
    var CreditCard = (function () {
        function CreditCard() {
        }
        return CreditCard;
    })();
    SAPB1.CreditCard = CreditCard;
    var CreditCardKey = (function () {
        function CreditCardKey() {
        }
        return CreditCardKey;
    })();
    SAPB1.CreditCardKey = CreditCardKey;
    var Currency = (function () {
        function Currency() {
        }
        return Currency;
    })();
    SAPB1.Currency = Currency;
    var CurrencyKey = (function () {
        function CurrencyKey() {
        }
        return CurrencyKey;
    })();
    SAPB1.CurrencyKey = CurrencyKey;
    var ItemParams = (function () {
        function ItemParams() {
        }
        return ItemParams;
    })();
    SAPB1.ItemParams = ItemParams;
    var Item = (function () {
        function Item() {
        }
        return Item;
    })();
    SAPB1.Item = Item;
    var ItemKey = (function () {
        function ItemKey() {
        }
        return ItemKey;
    })();
    SAPB1.ItemKey = ItemKey;
    var ItemPrice = (function () {
        function ItemPrice() {
        }
        return ItemPrice;
    })();
    SAPB1.ItemPrice = ItemPrice;
    var UoMPrice = (function () {
        function UoMPrice() {
        }
        return UoMPrice;
    })();
    SAPB1.UoMPrice = UoMPrice;
    var ItemWarehouseInfo = (function () {
        function ItemWarehouseInfo() {
        }
        return ItemWarehouseInfo;
    })();
    SAPB1.ItemWarehouseInfo = ItemWarehouseInfo;
    var ItemCycleCount = (function () {
        function ItemCycleCount() {
        }
        return ItemCycleCount;
    })();
    SAPB1.ItemCycleCount = ItemCycleCount;
    var ItemPreferredVendor = (function () {
        function ItemPreferredVendor() {
        }
        return ItemPreferredVendor;
    })();
    SAPB1.ItemPreferredVendor = ItemPreferredVendor;
    var ItemLocalizationInfo = (function () {
        function ItemLocalizationInfo() {
        }
        return ItemLocalizationInfo;
    })();
    SAPB1.ItemLocalizationInfo = ItemLocalizationInfo;
    var ItemProject = (function () {
        function ItemProject() {
        }
        return ItemProject;
    })();
    SAPB1.ItemProject = ItemProject;
    var ItemDistributionRule = (function () {
        function ItemDistributionRule() {
        }
        return ItemDistributionRule;
    })();
    SAPB1.ItemDistributionRule = ItemDistributionRule;
    var ItemAttributeGroups = (function () {
        function ItemAttributeGroups() {
        }
        return ItemAttributeGroups;
    })();
    SAPB1.ItemAttributeGroups = ItemAttributeGroups;
    var ItemDepreciationParameter = (function () {
        function ItemDepreciationParameter() {
        }
        return ItemDepreciationParameter;
    })();
    SAPB1.ItemDepreciationParameter = ItemDepreciationParameter;
    var ItemPeriodControl = (function () {
        function ItemPeriodControl() {
        }
        return ItemPeriodControl;
    })();
    SAPB1.ItemPeriodControl = ItemPeriodControl;
    var ItemUnitOfMeasurement = (function () {
        function ItemUnitOfMeasurement() {
        }
        return ItemUnitOfMeasurement;
    })();
    SAPB1.ItemUnitOfMeasurement = ItemUnitOfMeasurement;
    var ItemUoMPackage = (function () {
        function ItemUoMPackage() {
        }
        return ItemUoMPackage;
    })();
    SAPB1.ItemUoMPackage = ItemUoMPackage;
    var ItemBarCode = (function () {
        function ItemBarCode() {
        }
        return ItemBarCode;
    })();
    SAPB1.ItemBarCode = ItemBarCode;
    var ItemIntrastatExtension = (function () {
        function ItemIntrastatExtension() {
        }
        return ItemIntrastatExtension;
    })();
    SAPB1.ItemIntrastatExtension = ItemIntrastatExtension;
    var PaymentTermsType = (function () {
        function PaymentTermsType() {
        }
        return PaymentTermsType;
    })();
    SAPB1.PaymentTermsType = PaymentTermsType;
    var PaymentTermsTypeKey = (function () {
        function PaymentTermsTypeKey() {
        }
        return PaymentTermsTypeKey;
    })();
    SAPB1.PaymentTermsTypeKey = PaymentTermsTypeKey;
    var BankPage = (function () {
        function BankPage() {
        }
        return BankPage;
    })();
    SAPB1.BankPage = BankPage;
    var BankPageKey = (function () {
        function BankPageKey() {
        }
        return BankPageKey;
    })();
    SAPB1.BankPageKey = BankPageKey;
    var Manufacturer = (function () {
        function Manufacturer() {
        }
        return Manufacturer;
    })();
    SAPB1.Manufacturer = Manufacturer;
    var ManufacturerKey = (function () {
        function ManufacturerKey() {
        }
        return ManufacturerKey;
    })();
    SAPB1.ManufacturerKey = ManufacturerKey;
    var LandedCostsCode = (function () {
        function LandedCostsCode() {
        }
        return LandedCostsCode;
    })();
    SAPB1.LandedCostsCode = LandedCostsCode;
    var LandedCostsCodeKey = (function () {
        function LandedCostsCodeKey() {
        }
        return LandedCostsCodeKey;
    })();
    SAPB1.LandedCostsCodeKey = LandedCostsCodeKey;
    var ShippingType = (function () {
        function ShippingType() {
        }
        return ShippingType;
    })();
    SAPB1.ShippingType = ShippingType;
    var ShippingTypeKey = (function () {
        function ShippingTypeKey() {
        }
        return ShippingTypeKey;
    })();
    SAPB1.ShippingTypeKey = ShippingTypeKey;
    var VatGroup = (function () {
        function VatGroup() {
        }
        return VatGroup;
    })();
    SAPB1.VatGroup = VatGroup;
    var VatGroupKey = (function () {
        function VatGroupKey() {
        }
        return VatGroupKey;
    })();
    SAPB1.VatGroupKey = VatGroupKey;
    var VatGroups_Line = (function () {
        function VatGroups_Line() {
        }
        return VatGroups_Line;
    })();
    SAPB1.VatGroups_Line = VatGroups_Line;
    var LengthMeasure = (function () {
        function LengthMeasure() {
        }
        return LengthMeasure;
    })();
    SAPB1.LengthMeasure = LengthMeasure;
    var LengthMeasureKey = (function () {
        function LengthMeasureKey() {
        }
        return LengthMeasureKey;
    })();
    SAPB1.LengthMeasureKey = LengthMeasureKey;
    var WeightMeasure = (function () {
        function WeightMeasure() {
        }
        return WeightMeasure;
    })();
    SAPB1.WeightMeasure = WeightMeasure;
    var WeightMeasureKey = (function () {
        function WeightMeasureKey() {
        }
        return WeightMeasureKey;
    })();
    SAPB1.WeightMeasureKey = WeightMeasureKey;
    var ItemGroupParams = (function () {
        function ItemGroupParams() {
        }
        return ItemGroupParams;
    })();
    SAPB1.ItemGroupParams = ItemGroupParams;
    var ItemGroups = (function () {
        function ItemGroups() {
        }
        return ItemGroups;
    })();
    SAPB1.ItemGroups = ItemGroups;
    var ItemGroupsKey = (function () {
        function ItemGroupsKey() {
        }
        return ItemGroupsKey;
    })();
    SAPB1.ItemGroupsKey = ItemGroupsKey;
    var ItemGroupsWarehouseInfo = (function () {
        function ItemGroupsWarehouseInfo() {
        }
        return ItemGroupsWarehouseInfo;
    })();
    SAPB1.ItemGroupsWarehouseInfo = ItemGroupsWarehouseInfo;
    var SalesPerson = (function () {
        function SalesPerson() {
        }
        return SalesPerson;
    })();
    SAPB1.SalesPerson = SalesPerson;
    var SalesPersonKey = (function () {
        function SalesPersonKey() {
        }
        return SalesPersonKey;
    })();
    SAPB1.SalesPersonKey = SalesPersonKey;
    var CustomsGroup = (function () {
        function CustomsGroup() {
        }
        return CustomsGroup;
    })();
    SAPB1.CustomsGroup = CustomsGroup;
    var CustomsGroupKey = (function () {
        function CustomsGroupKey() {
        }
        return CustomsGroupKey;
    })();
    SAPB1.CustomsGroupKey = CustomsGroupKey;
    var ChecksforPayment = (function () {
        function ChecksforPayment() {
        }
        return ChecksforPayment;
    })();
    SAPB1.ChecksforPayment = ChecksforPayment;
    var ChecksforPaymentKey = (function () {
        function ChecksforPaymentKey() {
        }
        return ChecksforPaymentKey;
    })();
    SAPB1.ChecksforPaymentKey = ChecksforPaymentKey;
    var ChecksforPaymentLine = (function () {
        function ChecksforPaymentLine() {
        }
        return ChecksforPaymentLine;
    })();
    SAPB1.ChecksforPaymentLine = ChecksforPaymentLine;
    var PriceList = (function () {
        function PriceList() {
        }
        return PriceList;
    })();
    SAPB1.PriceList = PriceList;
    var PriceListKey = (function () {
        function PriceListKey() {
        }
        return PriceListKey;
    })();
    SAPB1.PriceListKey = PriceListKey;
    var ProfitCenter = (function () {
        function ProfitCenter() {
        }
        return ProfitCenter;
    })();
    SAPB1.ProfitCenter = ProfitCenter;
    var ProfitCenterKey = (function () {
        function ProfitCenterKey() {
        }
        return ProfitCenterKey;
    })();
    SAPB1.ProfitCenterKey = ProfitCenterKey;
    var ProfitCenterParams = (function () {
        function ProfitCenterParams() {
        }
        return ProfitCenterParams;
    })();
    SAPB1.ProfitCenterParams = ProfitCenterParams;
    var Project = (function () {
        function Project() {
        }
        return Project;
    })();
    SAPB1.Project = Project;
    var ProjectKey = (function () {
        function ProjectKey() {
        }
        return ProjectKey;
    })();
    SAPB1.ProjectKey = ProjectKey;
    var ProjectParams = (function () {
        function ProjectParams() {
        }
        return ProjectParams;
    })();
    SAPB1.ProjectParams = ProjectParams;
    var Warehouse = (function () {
        function Warehouse() {
        }
        return Warehouse;
    })();
    SAPB1.Warehouse = Warehouse;
    var WarehouseKey = (function () {
        function WarehouseKey() {
        }
        return WarehouseKey;
    })();
    SAPB1.WarehouseKey = WarehouseKey;
    var CommissionGroup = (function () {
        function CommissionGroup() {
        }
        return CommissionGroup;
    })();
    SAPB1.CommissionGroup = CommissionGroup;
    var CommissionGroupKey = (function () {
        function CommissionGroupKey() {
        }
        return CommissionGroupKey;
    })();
    SAPB1.CommissionGroupKey = CommissionGroupKey;
    var ProductTreeParams = (function () {
        function ProductTreeParams() {
        }
        return ProductTreeParams;
    })();
    SAPB1.ProductTreeParams = ProductTreeParams;
    var ProductTree = (function () {
        function ProductTree() {
        }
        return ProductTree;
    })();
    SAPB1.ProductTree = ProductTree;
    var ProductTreeKey = (function () {
        function ProductTreeKey() {
        }
        return ProductTreeKey;
    })();
    SAPB1.ProductTreeKey = ProductTreeKey;
    var ProductTreeLine = (function () {
        function ProductTreeLine() {
        }
        return ProductTreeLine;
    })();
    SAPB1.ProductTreeLine = ProductTreeLine;
    var WorkOrder = (function () {
        function WorkOrder() {
        }
        return WorkOrder;
    })();
    SAPB1.WorkOrder = WorkOrder;
    var WorkOrderKey = (function () {
        function WorkOrderKey() {
        }
        return WorkOrderKey;
    })();
    SAPB1.WorkOrderKey = WorkOrderKey;
    var WorkOrder_Line = (function () {
        function WorkOrder_Line() {
        }
        return WorkOrder_Line;
    })();
    SAPB1.WorkOrder_Line = WorkOrder_Line;
    var SpecialPriceParams = (function () {
        function SpecialPriceParams() {
        }
        return SpecialPriceParams;
    })();
    SAPB1.SpecialPriceParams = SpecialPriceParams;
    var SpecialPrice = (function () {
        function SpecialPrice() {
        }
        return SpecialPrice;
    })();
    SAPB1.SpecialPrice = SpecialPrice;
    var SpecialPriceKey = (function () {
        function SpecialPriceKey() {
        }
        return SpecialPriceKey;
    })();
    SAPB1.SpecialPriceKey = SpecialPriceKey;
    var SpecialPriceDataArea = (function () {
        function SpecialPriceDataArea() {
        }
        return SpecialPriceDataArea;
    })();
    SAPB1.SpecialPriceDataArea = SpecialPriceDataArea;
    var SpecialPriceQuantityArea = (function () {
        function SpecialPriceQuantityArea() {
        }
        return SpecialPriceQuantityArea;
    })();
    SAPB1.SpecialPriceQuantityArea = SpecialPriceQuantityArea;
    var CreditPaymentMethod = (function () {
        function CreditPaymentMethod() {
        }
        return CreditPaymentMethod;
    })();
    SAPB1.CreditPaymentMethod = CreditPaymentMethod;
    var CreditPaymentMethodKey = (function () {
        function CreditPaymentMethodKey() {
        }
        return CreditPaymentMethodKey;
    })();
    SAPB1.CreditPaymentMethodKey = CreditPaymentMethodKey;
    var CreditCardPayment = (function () {
        function CreditCardPayment() {
        }
        return CreditCardPayment;
    })();
    SAPB1.CreditCardPayment = CreditCardPayment;
    var CreditCardPaymentKey = (function () {
        function CreditCardPaymentKey() {
        }
        return CreditCardPaymentKey;
    })();
    SAPB1.CreditCardPaymentKey = CreditCardPaymentKey;
    var AlternateCatNum = (function () {
        function AlternateCatNum() {
        }
        return AlternateCatNum;
    })();
    SAPB1.AlternateCatNum = AlternateCatNum;
    var AlternateCatNumKey = (function () {
        function AlternateCatNumKey() {
        }
        return AlternateCatNumKey;
    })();
    SAPB1.AlternateCatNumKey = AlternateCatNumKey;
    var BudgetParams = (function () {
        function BudgetParams() {
        }
        return BudgetParams;
    })();
    SAPB1.BudgetParams = BudgetParams;
    var Budget = (function () {
        function Budget() {
        }
        return Budget;
    })();
    SAPB1.Budget = Budget;
    var BudgetKey = (function () {
        function BudgetKey() {
        }
        return BudgetKey;
    })();
    SAPB1.BudgetKey = BudgetKey;
    var BudgetLine = (function () {
        function BudgetLine() {
        }
        return BudgetLine;
    })();
    SAPB1.BudgetLine = BudgetLine;
    var BudgetCostAccountingLine = (function () {
        function BudgetCostAccountingLine() {
        }
        return BudgetCostAccountingLine;
    })();
    SAPB1.BudgetCostAccountingLine = BudgetCostAccountingLine;
    var BudgetDistribution = (function () {
        function BudgetDistribution() {
        }
        return BudgetDistribution;
    })();
    SAPB1.BudgetDistribution = BudgetDistribution;
    var BudgetDistributionKey = (function () {
        function BudgetDistributionKey() {
        }
        return BudgetDistributionKey;
    })();
    SAPB1.BudgetDistributionKey = BudgetDistributionKey;
    var ItemProperty = (function () {
        function ItemProperty() {
        }
        return ItemProperty;
    })();
    SAPB1.ItemProperty = ItemProperty;
    var ItemPropertyKey = (function () {
        function ItemPropertyKey() {
        }
        return ItemPropertyKey;
    })();
    SAPB1.ItemPropertyKey = ItemPropertyKey;
    var AlertManagement = (function () {
        function AlertManagement() {
        }
        return AlertManagement;
    })();
    SAPB1.AlertManagement = AlertManagement;
    var AlertManagementKey = (function () {
        function AlertManagementKey() {
        }
        return AlertManagementKey;
    })();
    SAPB1.AlertManagementKey = AlertManagementKey;
    var AlertManagementRecipient = (function () {
        function AlertManagementRecipient() {
        }
        return AlertManagementRecipient;
    })();
    SAPB1.AlertManagementRecipient = AlertManagementRecipient;
    var AlertManagementDocument = (function () {
        function AlertManagementDocument() {
        }
        return AlertManagementDocument;
    })();
    SAPB1.AlertManagementDocument = AlertManagementDocument;
    var AlertManagementParams = (function () {
        function AlertManagementParams() {
        }
        return AlertManagementParams;
    })();
    SAPB1.AlertManagementParams = AlertManagementParams;
    var Message = (function () {
        function Message() {
        }
        return Message;
    })();
    SAPB1.Message = Message;
    var MessageDataColumn = (function () {
        function MessageDataColumn() {
        }
        return MessageDataColumn;
    })();
    SAPB1.MessageDataColumn = MessageDataColumn;
    var MessageDataLine = (function () {
        function MessageDataLine() {
        }
        return MessageDataLine;
    })();
    SAPB1.MessageDataLine = MessageDataLine;
    var Recipient = (function () {
        function Recipient() {
        }
        return Recipient;
    })();
    SAPB1.Recipient = Recipient;
    var MessageHeader = (function () {
        function MessageHeader() {
        }
        return MessageHeader;
    })();
    SAPB1.MessageHeader = MessageHeader;
    var BudgetScenario = (function () {
        function BudgetScenario() {
        }
        return BudgetScenario;
    })();
    SAPB1.BudgetScenario = BudgetScenario;
    var BudgetScenarioKey = (function () {
        function BudgetScenarioKey() {
        }
        return BudgetScenarioKey;
    })();
    SAPB1.BudgetScenarioKey = BudgetScenarioKey;
    var UserDefaultGroup = (function () {
        function UserDefaultGroup() {
        }
        return UserDefaultGroup;
    })();
    SAPB1.UserDefaultGroup = UserDefaultGroup;
    var UserDefaultGroupKey = (function () {
        function UserDefaultGroupKey() {
        }
        return UserDefaultGroupKey;
    })();
    SAPB1.UserDefaultGroupKey = UserDefaultGroupKey;
    var SalesOpportunitiesParams = (function () {
        function SalesOpportunitiesParams() {
        }
        return SalesOpportunitiesParams;
    })();
    SAPB1.SalesOpportunitiesParams = SalesOpportunitiesParams;
    var SalesOpportunities = (function () {
        function SalesOpportunities() {
        }
        return SalesOpportunities;
    })();
    SAPB1.SalesOpportunities = SalesOpportunities;
    var SalesOpportunitiesKey = (function () {
        function SalesOpportunitiesKey() {
        }
        return SalesOpportunitiesKey;
    })();
    SAPB1.SalesOpportunitiesKey = SalesOpportunitiesKey;
    var SalesOpportunitiesLine = (function () {
        function SalesOpportunitiesLine() {
        }
        return SalesOpportunitiesLine;
    })();
    SAPB1.SalesOpportunitiesLine = SalesOpportunitiesLine;
    var SalesOpportunitiesCompetitionItem = (function () {
        function SalesOpportunitiesCompetitionItem() {
        }
        return SalesOpportunitiesCompetitionItem;
    })();
    SAPB1.SalesOpportunitiesCompetitionItem = SalesOpportunitiesCompetitionItem;
    var SalesOpportunitiesPartner = (function () {
        function SalesOpportunitiesPartner() {
        }
        return SalesOpportunitiesPartner;
    })();
    SAPB1.SalesOpportunitiesPartner = SalesOpportunitiesPartner;
    var SalesOpportunitiesInterest = (function () {
        function SalesOpportunitiesInterest() {
        }
        return SalesOpportunitiesInterest;
    })();
    SAPB1.SalesOpportunitiesInterest = SalesOpportunitiesInterest;
    var SalesOpportunitiesReason = (function () {
        function SalesOpportunitiesReason() {
        }
        return SalesOpportunitiesReason;
    })();
    SAPB1.SalesOpportunitiesReason = SalesOpportunitiesReason;
    var UDO_MD_STUDENTS = (function () {
        function UDO_MD_STUDENTS() {
        }
        return UDO_MD_STUDENTS;
    })();
    SAPB1.UDO_MD_STUDENTS = UDO_MD_STUDENTS;
    var UDO_MD_STUDENTSKey = (function () {
        function UDO_MD_STUDENTSKey() {
        }
        return UDO_MD_STUDENTSKey;
    })();
    SAPB1.UDO_MD_STUDENTSKey = UDO_MD_STUDENTSKey;
    var UDO_MDLINES1 = (function () {
        function UDO_MDLINES1() {
        }
        return UDO_MDLINES1;
    })();
    SAPB1.UDO_MDLINES1 = UDO_MDLINES1;
    var UDO_MDLINES2 = (function () {
        function UDO_MDLINES2() {
        }
        return UDO_MDLINES2;
    })();
    SAPB1.UDO_MDLINES2 = UDO_MDLINES2;
    var UDO_MD_STUDENTSParams = (function () {
        function UDO_MD_STUDENTSParams() {
        }
        return UDO_MD_STUDENTSParams;
    })();
    SAPB1.UDO_MD_STUDENTSParams = UDO_MD_STUDENTSParams;
    var InvokeParams = (function () {
        function InvokeParams() {
        }
        return InvokeParams;
    })();
    SAPB1.InvokeParams = InvokeParams;
    var TestSL0 = (function () {
        function TestSL0() {
        }
        return TestSL0;
    })();
    SAPB1.TestSL0 = TestSL0;
    var TestSL0Key = (function () {
        function TestSL0Key() {
        }
        return TestSL0Key;
    })();
    SAPB1.TestSL0Key = TestSL0Key;
    var TestSL0Params = (function () {
        function TestSL0Params() {
        }
        return TestSL0Params;
    })();
    SAPB1.TestSL0Params = TestSL0Params;
    var TestSL1 = (function () {
        function TestSL1() {
        }
        return TestSL1;
    })();
    SAPB1.TestSL1 = TestSL1;
    var TestSL1Key = (function () {
        function TestSL1Key() {
        }
        return TestSL1Key;
    })();
    SAPB1.TestSL1Key = TestSL1Key;
    var TestSL1Params = (function () {
        function TestSL1Params() {
        }
        return TestSL1Params;
    })();
    SAPB1.TestSL1Params = TestSL1Params;
    var B1Session = (function () {
        function B1Session() {
        }
        return B1Session;
    })();
    SAPB1.B1Session = B1Session;
    var B1SessionKey = (function () {
        function B1SessionKey() {
        }
        return B1SessionKey;
    })();
    SAPB1.B1SessionKey = B1SessionKey;
    var ItemPriceParams = (function () {
        function ItemPriceParams() {
        }
        return ItemPriceParams;
    })();
    SAPB1.ItemPriceParams = ItemPriceParams;
    var ItemPriceReturnParams = (function () {
        function ItemPriceReturnParams() {
        }
        return ItemPriceReturnParams;
    })();
    SAPB1.ItemPriceReturnParams = ItemPriceReturnParams;
    var AdvancedGLAccountParams = (function () {
        function AdvancedGLAccountParams() {
        }
        return AdvancedGLAccountParams;
    })();
    SAPB1.AdvancedGLAccountParams = AdvancedGLAccountParams;
    var AdvancedGLAccountReturnParams = (function () {
        function AdvancedGLAccountReturnParams() {
        }
        return AdvancedGLAccountReturnParams;
    })();
    SAPB1.AdvancedGLAccountReturnParams = AdvancedGLAccountReturnParams;
    var CompanyInfo = (function () {
        function CompanyInfo() {
        }
        return CompanyInfo;
    })();
    SAPB1.CompanyInfo = CompanyInfo;
    var AdminInfo = (function () {
        function AdminInfo() {
        }
        return AdminInfo;
    })();
    SAPB1.AdminInfo = AdminInfo;
    var ExtendedAdminInfo = (function () {
        function ExtendedAdminInfo() {
        }
        return ExtendedAdminInfo;
    })();
    SAPB1.ExtendedAdminInfo = ExtendedAdminInfo;
    var PathAdmin = (function () {
        function PathAdmin() {
        }
        return PathAdmin;
    })();
    SAPB1.PathAdmin = PathAdmin;
    var PeriodCategory = (function () {
        function PeriodCategory() {
        }
        return PeriodCategory;
    })();
    SAPB1.PeriodCategory = PeriodCategory;
    var WIPMapping = (function () {
        function WIPMapping() {
        }
        return WIPMapping;
    })();
    SAPB1.WIPMapping = WIPMapping;
    var PeriodCategoryParams = (function () {
        function PeriodCategoryParams() {
        }
        return PeriodCategoryParams;
    })();
    SAPB1.PeriodCategoryParams = PeriodCategoryParams;
    var FinancePeriod = (function () {
        function FinancePeriod() {
        }
        return FinancePeriod;
    })();
    SAPB1.FinancePeriod = FinancePeriod;
    var FinancePeriodParams = (function () {
        function FinancePeriodParams() {
        }
        return FinancePeriodParams;
    })();
    SAPB1.FinancePeriodParams = FinancePeriodParams;
    var RecordsetParams = (function () {
        function RecordsetParams() {
        }
        return RecordsetParams;
    })();
    SAPB1.RecordsetParams = RecordsetParams;
    var FeatureStatus = (function () {
        function FeatureStatus() {
        }
        return FeatureStatus;
    })();
    SAPB1.FeatureStatus = FeatureStatus;
    var TableInfo = (function () {
        function TableInfo() {
        }
        return TableInfo;
    })();
    SAPB1.TableInfo = TableInfo;
    var Blob = (function () {
        function Blob() {
        }
        return Blob;
    })();
    SAPB1.Blob = Blob;
    var BlobParams = (function () {
        function BlobParams() {
        }
        return BlobParams;
    })();
    SAPB1.BlobParams = BlobParams;
    var BlobTableKeySegment = (function () {
        function BlobTableKeySegment() {
        }
        return BlobTableKeySegment;
    })();
    SAPB1.BlobTableKeySegment = BlobTableKeySegment;
    var UpdateUserLicenseParams = (function () {
        function UpdateUserLicenseParams() {
        }
        return UpdateUserLicenseParams;
    })();
    SAPB1.UpdateUserLicenseParams = UpdateUserLicenseParams;
    var DecimalData = (function () {
        function DecimalData() {
        }
        return DecimalData;
    })();
    SAPB1.DecimalData = DecimalData;
    var RoundedData = (function () {
        function RoundedData() {
        }
        return RoundedData;
    })();
    SAPB1.RoundedData = RoundedData;
    var HttpCommandEnum = (function () {
        function HttpCommandEnum() {
        }
        HttpCommandEnum.POST = "POST";
        HttpCommandEnum.GET = "GET";
        HttpCommandEnum.DELETE = "DELETE";
        HttpCommandEnum.PUT = "PUT";
        HttpCommandEnum.PATCH = "PATCH";
        return HttpCommandEnum;
    })();
    SAPB1.HttpCommandEnum = HttpCommandEnum;
    var B1ObjActionEnum = (function () {
        function B1ObjActionEnum() {
        }
        B1ObjActionEnum.ADD = "Add";
        B1ObjActionEnum.UPDATE = "Update";
        B1ObjActionEnum.GET = "Get";
        B1ObjActionEnum.DELETE = "Delete";
        B1ObjActionEnum.ACTION = "Action";
        return B1ObjActionEnum;
    })();
    SAPB1.B1ObjActionEnum = B1ObjActionEnum;
    var LoginInfo = (function () {
        function LoginInfo() {
        }
        return LoginInfo;
    })();
    SAPB1.LoginInfo = LoginInfo;
    var Session = (function () {
        function Session() {
        }
        // Return type: SAPB1.B1Session
        Session.Login = function (loginInfo) {
            CallSL(B1ObjActionEnum.ACTION, "Login", "", [loginInfo]);
        };
        // Return type: void
        Session.Logout = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Logout", sessionId, [null]);
        };
        return Session;
    })();
    SAPB1.Session = Session;
    var PickListsService = (function () {
        function PickListsService() {
        }
        // Return type: void
        PickListsService.Close = function (PickList, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PickListsService_Close", sessionId, [PickList]);
        };
        return PickListsService;
    })();
    SAPB1.PickListsService = PickListsService;
    var MessagesService = (function () {
        function MessagesService() {
        }
        // Return type: Collection(SAPB1.MessageHeader)
        MessagesService.GetInbox = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "MessagesService_GetInbox", sessionId, [null]);
        };
        // Return type: Collection(SAPB1.MessageHeader)
        MessagesService.GetOutbox = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "MessagesService_GetOutbox", sessionId, [null]);
        };
        // Return type: Collection(SAPB1.MessageHeader)
        MessagesService.GetSentMessages = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "MessagesService_GetSentMessages", sessionId, [null]);
        };
        // Return type: SAPB1.MessageHeader
        MessagesService.SendMessage = function (Message, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "MessagesService_SendMessage", sessionId, [Message]);
        };
        return MessagesService;
    })();
    SAPB1.MessagesService = MessagesService;
    var CompanyService = (function () {
        function CompanyService() {
        }
        // Return type: SAPB1.CompanyInfo
        CompanyService.GetCompanyInfo = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetCompanyInfo", sessionId, [null]);
        };
        // Return type: void
        CompanyService.UpdateCompanyInfo = function (CompanyInfo, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_UpdateCompanyInfo", sessionId, [CompanyInfo]);
        };
        // Return type: SAPB1.AdminInfo
        CompanyService.GetAdminInfo = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetAdminInfo", sessionId, [null]);
        };
        // Return type: void
        CompanyService.UpdateAdminInfo = function (AdminInfo, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_UpdateAdminInfo", sessionId, [AdminInfo]);
        };
        // Return type: SAPB1.PeriodCategoryParams
        CompanyService.CreatePeriod = function (PeriodCategory, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_CreatePeriod", sessionId, [PeriodCategory]);
        };
        // Return type: Collection(SAPB1.PeriodCategoryParams)
        CompanyService.GetPeriods = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetPeriods", sessionId, [null]);
        };
        // Return type: SAPB1.PeriodCategory
        CompanyService.GetPeriod = function (PeriodCategoryParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetPeriod", sessionId, [PeriodCategoryParams]);
        };
        // Return type: void
        CompanyService.UpdatePeriod = function (PeriodCategory, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_UpdatePeriod", sessionId, [PeriodCategory]);
        };
        // Return type: Collection(SAPB1.FinancePeriod)
        CompanyService.GetFinancePeriods = function (PeriodCategoryParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetFinancePeriods", sessionId, [PeriodCategoryParams]);
        };
        // Return type: SAPB1.FinancePeriod
        CompanyService.GetFinancePeriod = function (FinancePeriodParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetFinancePeriod", sessionId, [FinancePeriodParams]);
        };
        // Return type: void
        CompanyService.UpdateFinancePeriod = function (FinancePeriod, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_UpdateFinancePeriod", sessionId, [FinancePeriod]);
        };
        // Return type: void
        CompanyService.RemoveFinancePeriod = function (FinancePeriodParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_RemoveFinancePeriod", sessionId, [FinancePeriodParams]);
        };
        // Return type: SAPB1.PeriodCategoryParams
        CompanyService.CreatePeriodWithFinanceParams = function (PeriodCategory, FinancePeriodParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_CreatePeriodWithFinanceParams", sessionId, [PeriodCategory, FinancePeriodParams]);
        };
        // Return type: Collection(SAPB1.FeatureStatus)
        CompanyService.GetFeaturesStatus = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetFeaturesStatus", sessionId, [null]);
        };
        // Return type: SAPB1.PathAdmin
        CompanyService.GetPathAdmin = function (sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetPathAdmin", sessionId, [null]);
        };
        // Return type: void
        CompanyService.UpdatePathAdmin = function (PathAdmin, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_UpdatePathAdmin", sessionId, [PathAdmin]);
        };
        // Return type: SAPB1.RoundedData
        CompanyService.RoundDecimal = function (DecimalData, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_RoundDecimal", sessionId, [DecimalData]);
        };
        // Return type: SAPB1.ItemPriceReturnParams
        CompanyService.GetItemPrice = function (ItemPriceParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetItemPrice", sessionId, [ItemPriceParams]);
        };
        // Return type: SAPB1.AdvancedGLAccountReturnParams
        CompanyService.GetAdvancedGLAccount = function (AdvancedGLAccountParams, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CompanyService_GetAdvancedGLAccount", sessionId, [AdvancedGLAccountParams]);
        };
        return CompanyService;
    })();
    SAPB1.CompanyService = CompanyService;
    var ChartOfAccountsEntity = (function () {
        function ChartOfAccountsEntity() {
        }
        ChartOfAccountsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ChartOfAccounts", sessionId, [obj]);
        };
        ChartOfAccountsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ChartOfAccounts('" + obj.Code + "')", sessionId, [obj]);
        };
        ChartOfAccountsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ChartOfAccounts('" + obj.Code + "')", sessionId, [obj]);
        };
        ChartOfAccountsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ChartOfAccounts('" + obj.Code + "')", sessionId, [obj]);
        };
        return ChartOfAccountsEntity;
    })();
    SAPB1.ChartOfAccountsEntity = ChartOfAccountsEntity;
    var BusinessPartnerGroupsEntity = (function () {
        function BusinessPartnerGroupsEntity() {
        }
        BusinessPartnerGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BusinessPartnerGroups", sessionId, [obj]);
        };
        BusinessPartnerGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BusinessPartnerGroups(" + obj.Code + ")", sessionId, [obj]);
        };
        BusinessPartnerGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BusinessPartnerGroups(" + obj.Code + ")", sessionId, [obj]);
        };
        BusinessPartnerGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BusinessPartnerGroups(" + obj.Code + ")", sessionId, [obj]);
        };
        return BusinessPartnerGroupsEntity;
    })();
    SAPB1.BusinessPartnerGroupsEntity = BusinessPartnerGroupsEntity;
    var ActivitiesEntity = (function () {
        function ActivitiesEntity() {
        }
        ActivitiesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Activities", sessionId, [obj]);
        };
        ActivitiesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Activities(" + obj.ActivityCode + ")", sessionId, [obj]);
        };
        ActivitiesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Activities(" + obj.ActivityCode + ")", sessionId, [obj]);
        };
        ActivitiesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Activities(" + obj.ActivityCode + ")", sessionId, [obj]);
        };
        return ActivitiesEntity;
    })();
    SAPB1.ActivitiesEntity = ActivitiesEntity;
    var SalesStagesEntity = (function () {
        function SalesStagesEntity() {
        }
        SalesStagesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesStages", sessionId, [obj]);
        };
        SalesStagesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesStages(" + obj.SequenceNo + ")", sessionId, [obj]);
        };
        SalesStagesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesStages(" + obj.SequenceNo + ")", sessionId, [obj]);
        };
        SalesStagesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesStages(" + obj.SequenceNo + ")", sessionId, [obj]);
        };
        return SalesStagesEntity;
    })();
    SAPB1.SalesStagesEntity = SalesStagesEntity;
    var ActivityTypesEntity = (function () {
        function ActivityTypesEntity() {
        }
        ActivityTypesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ActivityTypes", sessionId, [obj]);
        };
        ActivityTypesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ActivityTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        ActivityTypesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ActivityTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        ActivityTypesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ActivityTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        return ActivityTypesEntity;
    })();
    SAPB1.ActivityTypesEntity = ActivityTypesEntity;
    var ActivityLocationsEntity = (function () {
        function ActivityLocationsEntity() {
        }
        ActivityLocationsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ActivityLocations", sessionId, [obj]);
        };
        ActivityLocationsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ActivityLocations(" + obj.Code + ")", sessionId, [obj]);
        };
        ActivityLocationsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ActivityLocations(" + obj.Code + ")", sessionId, [obj]);
        };
        ActivityLocationsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ActivityLocations(" + obj.Code + ")", sessionId, [obj]);
        };
        return ActivityLocationsEntity;
    })();
    SAPB1.ActivityLocationsEntity = ActivityLocationsEntity;
    var DraftsEntity = (function () {
        function DraftsEntity() {
        }
        DraftsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Drafts", sessionId, [obj]);
        };
        DraftsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Drafts(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DraftsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Drafts(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DraftsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Drafts(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DraftsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        DraftsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Drafts(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return DraftsEntity;
    })();
    SAPB1.DraftsEntity = DraftsEntity;
    var DeductionTaxHierarchiesEntity = (function () {
        function DeductionTaxHierarchiesEntity() {
        }
        DeductionTaxHierarchiesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "DeductionTaxHierarchies", sessionId, [obj]);
        };
        DeductionTaxHierarchiesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "DeductionTaxHierarchies(" + obj.AbsEntry + ")", sessionId, [obj]);
        };
        DeductionTaxHierarchiesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "DeductionTaxHierarchies(" + obj.AbsEntry + ")", sessionId, [obj]);
        };
        DeductionTaxHierarchiesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "DeductionTaxHierarchies(" + obj.AbsEntry + ")", sessionId, [obj]);
        };
        return DeductionTaxHierarchiesEntity;
    })();
    SAPB1.DeductionTaxHierarchiesEntity = DeductionTaxHierarchiesEntity;
    var DeductionTaxGroupsEntity = (function () {
        function DeductionTaxGroupsEntity() {
        }
        DeductionTaxGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "DeductionTaxGroups", sessionId, [obj]);
        };
        DeductionTaxGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "DeductionTaxGroups(" + obj.GroupKey + ")", sessionId, [obj]);
        };
        DeductionTaxGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "DeductionTaxGroups(" + obj.GroupKey + ")", sessionId, [obj]);
        };
        DeductionTaxGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "DeductionTaxGroups(" + obj.GroupKey + ")", sessionId, [obj]);
        };
        return DeductionTaxGroupsEntity;
    })();
    SAPB1.DeductionTaxGroupsEntity = DeductionTaxGroupsEntity;
    var UsersEntity = (function () {
        function UsersEntity() {
        }
        UsersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Users", sessionId, [obj]);
        };
        UsersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Users(" + obj.InternalKey + ")", sessionId, [obj]);
        };
        UsersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Users(" + obj.InternalKey + ")", sessionId, [obj]);
        };
        UsersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Users(" + obj.InternalKey + ")", sessionId, [obj]);
        };
        UsersEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Users(" + obj.InternalKey + ")/Close", sessionId, [obj]);
        };
        return UsersEntity;
    })();
    SAPB1.UsersEntity = UsersEntity;
    var ApprovalStagesEntity = (function () {
        function ApprovalStagesEntity() {
        }
        ApprovalStagesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ApprovalStages", sessionId, [obj]);
        };
        ApprovalStagesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ApprovalStages(" + obj.Code + ")", sessionId, [obj]);
        };
        ApprovalStagesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ApprovalStages(" + obj.Code + ")", sessionId, [obj]);
        };
        ApprovalStagesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ApprovalStages(" + obj.Code + ")", sessionId, [obj]);
        };
        return ApprovalStagesEntity;
    })();
    SAPB1.ApprovalStagesEntity = ApprovalStagesEntity;
    var ApprovalTemplatesEntity = (function () {
        function ApprovalTemplatesEntity() {
        }
        ApprovalTemplatesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ApprovalTemplates", sessionId, [obj]);
        };
        ApprovalTemplatesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ApprovalTemplates(" + obj.Code + ")", sessionId, [obj]);
        };
        ApprovalTemplatesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ApprovalTemplates(" + obj.Code + ")", sessionId, [obj]);
        };
        ApprovalTemplatesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ApprovalTemplates(" + obj.Code + ")", sessionId, [obj]);
        };
        return ApprovalTemplatesEntity;
    })();
    SAPB1.ApprovalTemplatesEntity = ApprovalTemplatesEntity;
    var AdditionalExpensesEntity = (function () {
        function AdditionalExpensesEntity() {
        }
        AdditionalExpensesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "AdditionalExpenses", sessionId, [obj]);
        };
        AdditionalExpensesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "AdditionalExpenses(" + obj.ExpensCode + ")", sessionId, [obj]);
        };
        AdditionalExpensesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "AdditionalExpenses(" + obj.ExpensCode + ")", sessionId, [obj]);
        };
        AdditionalExpensesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "AdditionalExpenses(" + obj.ExpensCode + ")", sessionId, [obj]);
        };
        return AdditionalExpensesEntity;
    })();
    SAPB1.AdditionalExpensesEntity = AdditionalExpensesEntity;
    var InventoryTransferRequestsEntity = (function () {
        function InventoryTransferRequestsEntity() {
        }
        InventoryTransferRequestsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "InventoryTransferRequests", sessionId, [obj]);
        };
        InventoryTransferRequestsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "InventoryTransferRequests(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryTransferRequestsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "InventoryTransferRequests(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryTransferRequestsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "InventoryTransferRequests(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryTransferRequestsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "InventoryTransferRequests(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        InventoryTransferRequestsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "InventoryTransferRequests(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        return InventoryTransferRequestsEntity;
    })();
    SAPB1.InventoryTransferRequestsEntity = InventoryTransferRequestsEntity;
    var SalesTaxAuthoritiesEntity = (function () {
        function SalesTaxAuthoritiesEntity() {
        }
        SalesTaxAuthoritiesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesTaxAuthorities", sessionId, [obj]);
        };
        SalesTaxAuthoritiesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesTaxAuthorities(" + obj.Type + ", '" + obj.Code + "')", sessionId, [obj]);
        };
        SalesTaxAuthoritiesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesTaxAuthorities(" + obj.Type + ", '" + obj.Code + "')", sessionId, [obj]);
        };
        SalesTaxAuthoritiesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesTaxAuthorities(" + obj.Type + ", '" + obj.Code + "')", sessionId, [obj]);
        };
        return SalesTaxAuthoritiesEntity;
    })();
    SAPB1.SalesTaxAuthoritiesEntity = SalesTaxAuthoritiesEntity;
    var SalesTaxAuthoritiesTypesEntity = (function () {
        function SalesTaxAuthoritiesTypesEntity() {
        }
        SalesTaxAuthoritiesTypesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesTaxAuthoritiesTypes", sessionId, [obj]);
        };
        SalesTaxAuthoritiesTypesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesTaxAuthoritiesTypes(" + obj.Numerator + ")", sessionId, [obj]);
        };
        SalesTaxAuthoritiesTypesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesTaxAuthoritiesTypes(" + obj.Numerator + ")", sessionId, [obj]);
        };
        SalesTaxAuthoritiesTypesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesTaxAuthoritiesTypes(" + obj.Numerator + ")", sessionId, [obj]);
        };
        return SalesTaxAuthoritiesTypesEntity;
    })();
    SAPB1.SalesTaxAuthoritiesTypesEntity = SalesTaxAuthoritiesTypesEntity;
    var SalesTaxCodesEntity = (function () {
        function SalesTaxCodesEntity() {
        }
        SalesTaxCodesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesTaxCodes", sessionId, [obj]);
        };
        SalesTaxCodesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesTaxCodes('" + obj.Code + "')", sessionId, [obj]);
        };
        SalesTaxCodesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesTaxCodes('" + obj.Code + "')", sessionId, [obj]);
        };
        SalesTaxCodesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesTaxCodes('" + obj.Code + "')", sessionId, [obj]);
        };
        return SalesTaxCodesEntity;
    })();
    SAPB1.SalesTaxCodesEntity = SalesTaxCodesEntity;
    var CountriesEntity = (function () {
        function CountriesEntity() {
        }
        CountriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Countries", sessionId, [obj]);
        };
        CountriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Countries('" + obj.Code + "')", sessionId, [obj]);
        };
        CountriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Countries('" + obj.Code + "')", sessionId, [obj]);
        };
        CountriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Countries('" + obj.Code + "')", sessionId, [obj]);
        };
        return CountriesEntity;
    })();
    SAPB1.CountriesEntity = CountriesEntity;
    var InvoicesEntity = (function () {
        function InvoicesEntity() {
        }
        InvoicesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Invoices", sessionId, [obj]);
        };
        InvoicesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Invoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InvoicesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Invoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InvoicesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Invoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InvoicesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        InvoicesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Invoices(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return InvoicesEntity;
    })();
    SAPB1.InvoicesEntity = InvoicesEntity;
    var QueryCategoriesEntity = (function () {
        function QueryCategoriesEntity() {
        }
        QueryCategoriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "QueryCategories", sessionId, [obj]);
        };
        QueryCategoriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "QueryCategories(" + obj.Code + ")", sessionId, [obj]);
        };
        QueryCategoriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "QueryCategories(" + obj.Code + ")", sessionId, [obj]);
        };
        QueryCategoriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "QueryCategories(" + obj.Code + ")", sessionId, [obj]);
        };
        return QueryCategoriesEntity;
    })();
    SAPB1.QueryCategoriesEntity = QueryCategoriesEntity;
    var FactoringIndicatorsEntity = (function () {
        function FactoringIndicatorsEntity() {
        }
        FactoringIndicatorsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "FactoringIndicators", sessionId, [obj]);
        };
        FactoringIndicatorsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "FactoringIndicators('" + obj.IndicatorCode + "')", sessionId, [obj]);
        };
        FactoringIndicatorsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "FactoringIndicators('" + obj.IndicatorCode + "')", sessionId, [obj]);
        };
        FactoringIndicatorsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "FactoringIndicators('" + obj.IndicatorCode + "')", sessionId, [obj]);
        };
        return FactoringIndicatorsEntity;
    })();
    SAPB1.FactoringIndicatorsEntity = FactoringIndicatorsEntity;
    var CreditNotesEntity = (function () {
        function CreditNotesEntity() {
        }
        CreditNotesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CreditNotes", sessionId, [obj]);
        };
        CreditNotesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CreditNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CreditNotesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CreditNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CreditNotesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CreditNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CreditNotesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        CreditNotesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CreditNotes(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return CreditNotesEntity;
    })();
    SAPB1.CreditNotesEntity = CreditNotesEntity;
    var PaymentDraftsEntity = (function () {
        function PaymentDraftsEntity() {
        }
        PaymentDraftsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PaymentDrafts", sessionId, [obj]);
        };
        PaymentDraftsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PaymentDrafts(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PaymentDraftsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PaymentDrafts(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PaymentDraftsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PaymentDrafts(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PaymentDraftsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PaymentDrafts(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PaymentDraftsEntity;
    })();
    SAPB1.PaymentDraftsEntity = PaymentDraftsEntity;
    var AccountSegmentationsEntity = (function () {
        function AccountSegmentationsEntity() {
        }
        AccountSegmentationsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "AccountSegmentations", sessionId, [obj]);
        };
        AccountSegmentationsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "AccountSegmentations(" + obj.Numerator + ")", sessionId, [obj]);
        };
        AccountSegmentationsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "AccountSegmentations(" + obj.Numerator + ")", sessionId, [obj]);
        };
        AccountSegmentationsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "AccountSegmentations(" + obj.Numerator + ")", sessionId, [obj]);
        };
        return AccountSegmentationsEntity;
    })();
    SAPB1.AccountSegmentationsEntity = AccountSegmentationsEntity;
    var AccountSegmentationCategoriesEntity = (function () {
        function AccountSegmentationCategoriesEntity() {
        }
        AccountSegmentationCategoriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "AccountSegmentationCategories", sessionId, [obj]);
        };
        AccountSegmentationCategoriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "AccountSegmentationCategories(" + obj.SegmentID + ", '" + obj.Code + "')", sessionId, [obj]);
        };
        AccountSegmentationCategoriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "AccountSegmentationCategories(" + obj.SegmentID + ", '" + obj.Code + "')", sessionId, [obj]);
        };
        AccountSegmentationCategoriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "AccountSegmentationCategories(" + obj.SegmentID + ", '" + obj.Code + "')", sessionId, [obj]);
        };
        return AccountSegmentationCategoriesEntity;
    })();
    SAPB1.AccountSegmentationCategoriesEntity = AccountSegmentationCategoriesEntity;
    var WarehouseLocationsEntity = (function () {
        function WarehouseLocationsEntity() {
        }
        WarehouseLocationsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "WarehouseLocations", sessionId, [obj]);
        };
        WarehouseLocationsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "WarehouseLocations(" + obj.Code + ")", sessionId, [obj]);
        };
        WarehouseLocationsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "WarehouseLocations(" + obj.Code + ")", sessionId, [obj]);
        };
        WarehouseLocationsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "WarehouseLocations(" + obj.Code + ")", sessionId, [obj]);
        };
        return WarehouseLocationsEntity;
    })();
    SAPB1.WarehouseLocationsEntity = WarehouseLocationsEntity;
    var Forms1099Entity = (function () {
        function Forms1099Entity() {
        }
        Forms1099Entity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Forms1099", sessionId, [obj]);
        };
        Forms1099Entity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Forms1099(" + obj.FormCode + ")", sessionId, [obj]);
        };
        Forms1099Entity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Forms1099(" + obj.FormCode + ")", sessionId, [obj]);
        };
        Forms1099Entity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Forms1099(" + obj.FormCode + ")", sessionId, [obj]);
        };
        return Forms1099Entity;
    })();
    SAPB1.Forms1099Entity = Forms1099Entity;
    var InventoryCyclesEntity = (function () {
        function InventoryCyclesEntity() {
        }
        InventoryCyclesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "InventoryCycles", sessionId, [obj]);
        };
        InventoryCyclesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "InventoryCycles(" + obj.CycleCode + ")", sessionId, [obj]);
        };
        InventoryCyclesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "InventoryCycles(" + obj.CycleCode + ")", sessionId, [obj]);
        };
        InventoryCyclesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "InventoryCycles(" + obj.CycleCode + ")", sessionId, [obj]);
        };
        return InventoryCyclesEntity;
    })();
    SAPB1.InventoryCyclesEntity = InventoryCyclesEntity;
    var WizardPaymentMethodsEntity = (function () {
        function WizardPaymentMethodsEntity() {
        }
        WizardPaymentMethodsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "WizardPaymentMethods", sessionId, [obj]);
        };
        WizardPaymentMethodsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "WizardPaymentMethods('" + obj.PaymentMethodCode + "')", sessionId, [obj]);
        };
        WizardPaymentMethodsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "WizardPaymentMethods('" + obj.PaymentMethodCode + "')", sessionId, [obj]);
        };
        WizardPaymentMethodsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "WizardPaymentMethods('" + obj.PaymentMethodCode + "')", sessionId, [obj]);
        };
        return WizardPaymentMethodsEntity;
    })();
    SAPB1.WizardPaymentMethodsEntity = WizardPaymentMethodsEntity;
    var PurchaseRequestsEntity = (function () {
        function PurchaseRequestsEntity() {
        }
        PurchaseRequestsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseRequests", sessionId, [obj]);
        };
        PurchaseRequestsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseRequests(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseRequestsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseRequests(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseRequestsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseRequests(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseRequestsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseRequestsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseRequests(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseRequestsEntity;
    })();
    SAPB1.PurchaseRequestsEntity = PurchaseRequestsEntity;
    var DeliveryNotesEntity = (function () {
        function DeliveryNotesEntity() {
        }
        DeliveryNotesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "DeliveryNotes", sessionId, [obj]);
        };
        DeliveryNotesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "DeliveryNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DeliveryNotesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "DeliveryNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DeliveryNotesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "DeliveryNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DeliveryNotesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        DeliveryNotesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "DeliveryNotes(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return DeliveryNotesEntity;
    })();
    SAPB1.DeliveryNotesEntity = DeliveryNotesEntity;
    var BPPrioritiesEntity = (function () {
        function BPPrioritiesEntity() {
        }
        BPPrioritiesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BPPriorities", sessionId, [obj]);
        };
        BPPrioritiesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BPPriorities(" + obj.Priority + ")", sessionId, [obj]);
        };
        BPPrioritiesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BPPriorities(" + obj.Priority + ")", sessionId, [obj]);
        };
        BPPrioritiesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BPPriorities(" + obj.Priority + ")", sessionId, [obj]);
        };
        return BPPrioritiesEntity;
    })();
    SAPB1.BPPrioritiesEntity = BPPrioritiesEntity;
    var DunningLettersEntity = (function () {
        function DunningLettersEntity() {
        }
        DunningLettersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "DunningLetters", sessionId, [obj]);
        };
        DunningLettersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "DunningLetters(" + obj.RowNumber + ")", sessionId, [obj]);
        };
        DunningLettersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "DunningLetters(" + obj.RowNumber + ")", sessionId, [obj]);
        };
        DunningLettersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "DunningLetters(" + obj.RowNumber + ")", sessionId, [obj]);
        };
        return DunningLettersEntity;
    })();
    SAPB1.DunningLettersEntity = DunningLettersEntity;
    var UserFieldsMDEntity = (function () {
        function UserFieldsMDEntity() {
        }
        UserFieldsMDEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserFieldsMD", sessionId, [obj]);
        };
        UserFieldsMDEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserFieldsMD('" + obj.TableName + "', " + obj.FieldID + ")", sessionId, [obj]);
        };
        UserFieldsMDEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserFieldsMD('" + obj.TableName + "', " + obj.FieldID + ")", sessionId, [obj]);
        };
        UserFieldsMDEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserFieldsMD('" + obj.TableName + "', " + obj.FieldID + ")", sessionId, [obj]);
        };
        return UserFieldsMDEntity;
    })();
    SAPB1.UserFieldsMDEntity = UserFieldsMDEntity;
    var UserTablesMDEntity = (function () {
        function UserTablesMDEntity() {
        }
        UserTablesMDEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserTablesMD", sessionId, [obj]);
        };
        UserTablesMDEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserTablesMD('" + obj.TableName + "')", sessionId, [obj]);
        };
        UserTablesMDEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserTablesMD('" + obj.TableName + "')", sessionId, [obj]);
        };
        UserTablesMDEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserTablesMD('" + obj.TableName + "')", sessionId, [obj]);
        };
        return UserTablesMDEntity;
    })();
    SAPB1.UserTablesMDEntity = UserTablesMDEntity;
    var PickListsEntity = (function () {
        function PickListsEntity() {
        }
        PickListsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PickLists", sessionId, [obj]);
        };
        PickListsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PickLists(" + obj.Absoluteentry + ")", sessionId, [obj]);
        };
        PickListsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PickLists(" + obj.Absoluteentry + ")", sessionId, [obj]);
        };
        PickListsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PickLists(" + obj.Absoluteentry + ")", sessionId, [obj]);
        };
        return PickListsEntity;
    })();
    SAPB1.PickListsEntity = PickListsEntity;
    var PaymentRunExportEntity = (function () {
        function PaymentRunExportEntity() {
        }
        PaymentRunExportEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PaymentRunExport", sessionId, [obj]);
        };
        PaymentRunExportEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PaymentRunExport(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        PaymentRunExportEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PaymentRunExport(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        PaymentRunExportEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PaymentRunExport(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        return PaymentRunExportEntity;
    })();
    SAPB1.PaymentRunExportEntity = PaymentRunExportEntity;
    var ReturnsEntity = (function () {
        function ReturnsEntity() {
        }
        ReturnsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Returns", sessionId, [obj]);
        };
        ReturnsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Returns(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        ReturnsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Returns(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        ReturnsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Returns(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        ReturnsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        ReturnsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Returns(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return ReturnsEntity;
    })();
    SAPB1.ReturnsEntity = ReturnsEntity;
    var UserQueriesEntity = (function () {
        function UserQueriesEntity() {
        }
        UserQueriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserQueries", sessionId, [obj]);
        };
        UserQueriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserQueries(" + obj.InternalKey + ", " + obj.QueryCategory + ")", sessionId, [obj]);
        };
        UserQueriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserQueries(" + obj.InternalKey + ", " + obj.QueryCategory + ")", sessionId, [obj]);
        };
        UserQueriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserQueries(" + obj.InternalKey + ", " + obj.QueryCategory + ")", sessionId, [obj]);
        };
        return UserQueriesEntity;
    })();
    SAPB1.UserQueriesEntity = UserQueriesEntity;
    var MaterialRevaluationEntity = (function () {
        function MaterialRevaluationEntity() {
        }
        MaterialRevaluationEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "MaterialRevaluation", sessionId, [obj]);
        };
        MaterialRevaluationEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "MaterialRevaluation(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        MaterialRevaluationEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "MaterialRevaluation(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        MaterialRevaluationEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "MaterialRevaluation(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        MaterialRevaluationEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "MaterialRevaluation(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        MaterialRevaluationEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "MaterialRevaluation(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        return MaterialRevaluationEntity;
    })();
    SAPB1.MaterialRevaluationEntity = MaterialRevaluationEntity;
    var CorrectionInvoiceEntity = (function () {
        function CorrectionInvoiceEntity() {
        }
        CorrectionInvoiceEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CorrectionInvoice", sessionId, [obj]);
        };
        CorrectionInvoiceEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CorrectionInvoice(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionInvoiceEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CorrectionInvoice(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionInvoiceEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CorrectionInvoice(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionInvoiceEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        CorrectionInvoiceEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionInvoice(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return CorrectionInvoiceEntity;
    })();
    SAPB1.CorrectionInvoiceEntity = CorrectionInvoiceEntity;
    var CorrectionInvoiceReversalEntity = (function () {
        function CorrectionInvoiceReversalEntity() {
        }
        CorrectionInvoiceReversalEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CorrectionInvoiceReversal", sessionId, [obj]);
        };
        CorrectionInvoiceReversalEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CorrectionInvoiceReversal(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionInvoiceReversalEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CorrectionInvoiceReversal(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionInvoiceReversalEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CorrectionInvoiceReversal(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionInvoiceReversalEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        CorrectionInvoiceReversalEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionInvoiceReversal(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return CorrectionInvoiceReversalEntity;
    })();
    SAPB1.CorrectionInvoiceReversalEntity = CorrectionInvoiceReversalEntity;
    var CorrectionPurchaseInvoiceEntity = (function () {
        function CorrectionPurchaseInvoiceEntity() {
        }
        CorrectionPurchaseInvoiceEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CorrectionPurchaseInvoice", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoice(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return CorrectionPurchaseInvoiceEntity;
    })();
    SAPB1.CorrectionPurchaseInvoiceEntity = CorrectionPurchaseInvoiceEntity;
    var CorrectionPurchaseInvoiceReversalEntity = (function () {
        function CorrectionPurchaseInvoiceReversalEntity() {
        }
        CorrectionPurchaseInvoiceReversalEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CorrectionPurchaseInvoiceReversal", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceReversalEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceReversalEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceReversalEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceReversalEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        CorrectionPurchaseInvoiceReversalEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "CorrectionPurchaseInvoiceReversal(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return CorrectionPurchaseInvoiceReversalEntity;
    })();
    SAPB1.CorrectionPurchaseInvoiceReversalEntity = CorrectionPurchaseInvoiceReversalEntity;
    var OrdersEntity = (function () {
        function OrdersEntity() {
        }
        OrdersEntity.Add = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.ADD, "Orders", sessionId, routeId, [obj]);
        };
        OrdersEntity.Update = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.UPDATE, "Orders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
        };
        OrdersEntity.Delete = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.DELETE, "Orders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
        };
        OrdersEntity.Get = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.GET, "Orders(" + obj.DocEntry + ")", sessionId, routeId, [obj]);
        };
        OrdersEntity.Close = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/Close", sessionId, routeId, [obj]);
        };
        OrdersEntity.Cancel = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.ACTION, "Orders(" + obj.DocEntry + ")/Cancel", sessionId, routeId, [obj]);
        };
        return OrdersEntity;
    })();
    SAPB1.OrdersEntity = OrdersEntity;
    var ContractTemplatesEntity = (function () {
        function ContractTemplatesEntity() {
        }
        ContractTemplatesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ContractTemplates", sessionId, [obj]);
        };
        ContractTemplatesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ContractTemplates('" + obj.TemplateName + "')", sessionId, [obj]);
        };
        ContractTemplatesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ContractTemplates('" + obj.TemplateName + "')", sessionId, [obj]);
        };
        ContractTemplatesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ContractTemplates('" + obj.TemplateName + "')", sessionId, [obj]);
        };
        return ContractTemplatesEntity;
    })();
    SAPB1.ContractTemplatesEntity = ContractTemplatesEntity;
    var EmployeesInfoEntity = (function () {
        function EmployeesInfoEntity() {
        }
        EmployeesInfoEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "EmployeesInfo", sessionId, [obj]);
        };
        EmployeesInfoEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "EmployeesInfo(" + obj.EmployeeID + ")", sessionId, [obj]);
        };
        EmployeesInfoEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "EmployeesInfo(" + obj.EmployeeID + ")", sessionId, [obj]);
        };
        EmployeesInfoEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "EmployeesInfo(" + obj.EmployeeID + ")", sessionId, [obj]);
        };
        EmployeesInfoEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "EmployeesInfo(" + obj.EmployeeID + ")/Cancel", sessionId, [obj]);
        };
        EmployeesInfoEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "EmployeesInfo(" + obj.EmployeeID + ")/Close", sessionId, [obj]);
        };
        return EmployeesInfoEntity;
    })();
    SAPB1.EmployeesInfoEntity = EmployeesInfoEntity;
    var CustomerEquipmentCardsEntity = (function () {
        function CustomerEquipmentCardsEntity() {
        }
        CustomerEquipmentCardsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CustomerEquipmentCards", sessionId, [obj]);
        };
        CustomerEquipmentCardsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CustomerEquipmentCards(" + obj.EquipmentCardNum + ")", sessionId, [obj]);
        };
        CustomerEquipmentCardsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CustomerEquipmentCards(" + obj.EquipmentCardNum + ")", sessionId, [obj]);
        };
        CustomerEquipmentCardsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CustomerEquipmentCards(" + obj.EquipmentCardNum + ")", sessionId, [obj]);
        };
        return CustomerEquipmentCardsEntity;
    })();
    SAPB1.CustomerEquipmentCardsEntity = CustomerEquipmentCardsEntity;
    var WithholdingTaxCodesEntity = (function () {
        function WithholdingTaxCodesEntity() {
        }
        WithholdingTaxCodesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "WithholdingTaxCodes", sessionId, [obj]);
        };
        WithholdingTaxCodesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "WithholdingTaxCodes('" + obj.WTCode + "')", sessionId, [obj]);
        };
        WithholdingTaxCodesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "WithholdingTaxCodes('" + obj.WTCode + "')", sessionId, [obj]);
        };
        WithholdingTaxCodesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "WithholdingTaxCodes('" + obj.WTCode + "')", sessionId, [obj]);
        };
        return WithholdingTaxCodesEntity;
    })();
    SAPB1.WithholdingTaxCodesEntity = WithholdingTaxCodesEntity;
    var PurchaseInvoicesEntity = (function () {
        function PurchaseInvoicesEntity() {
        }
        PurchaseInvoicesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseInvoices", sessionId, [obj]);
        };
        PurchaseInvoicesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseInvoicesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseInvoicesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseInvoicesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseInvoicesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseInvoices(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseInvoicesEntity;
    })();
    SAPB1.PurchaseInvoicesEntity = PurchaseInvoicesEntity;
    var BillOfExchangeTransactionEntity = (function () {
        function BillOfExchangeTransactionEntity() {
        }
        BillOfExchangeTransactionEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BillOfExchangeTransaction", sessionId, [obj]);
        };
        BillOfExchangeTransactionEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BillOfExchangeTransaction(" + obj.BOETransactionkey + ")", sessionId, [obj]);
        };
        BillOfExchangeTransactionEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BillOfExchangeTransaction(" + obj.BOETransactionkey + ")", sessionId, [obj]);
        };
        BillOfExchangeTransactionEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BillOfExchangeTransaction(" + obj.BOETransactionkey + ")", sessionId, [obj]);
        };
        return BillOfExchangeTransactionEntity;
    })();
    SAPB1.BillOfExchangeTransactionEntity = BillOfExchangeTransactionEntity;
    var KnowledgeBaseSolutionsEntity = (function () {
        function KnowledgeBaseSolutionsEntity() {
        }
        KnowledgeBaseSolutionsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "KnowledgeBaseSolutions", sessionId, [obj]);
        };
        KnowledgeBaseSolutionsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "KnowledgeBaseSolutions(" + obj.SolutionCode + ")", sessionId, [obj]);
        };
        KnowledgeBaseSolutionsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "KnowledgeBaseSolutions(" + obj.SolutionCode + ")", sessionId, [obj]);
        };
        KnowledgeBaseSolutionsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "KnowledgeBaseSolutions(" + obj.SolutionCode + ")", sessionId, [obj]);
        };
        return KnowledgeBaseSolutionsEntity;
    })();
    SAPB1.KnowledgeBaseSolutionsEntity = KnowledgeBaseSolutionsEntity;
    var PurchaseCreditNotesEntity = (function () {
        function PurchaseCreditNotesEntity() {
        }
        PurchaseCreditNotesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseCreditNotes", sessionId, [obj]);
        };
        PurchaseCreditNotesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseCreditNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseCreditNotesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseCreditNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseCreditNotesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseCreditNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseCreditNotesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseCreditNotesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseCreditNotes(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseCreditNotesEntity;
    })();
    SAPB1.PurchaseCreditNotesEntity = PurchaseCreditNotesEntity;
    var ServiceContractsEntity = (function () {
        function ServiceContractsEntity() {
        }
        ServiceContractsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ServiceContracts", sessionId, [obj]);
        };
        ServiceContractsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ServiceContracts(" + obj.ContractID + ")", sessionId, [obj]);
        };
        ServiceContractsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ServiceContracts(" + obj.ContractID + ")", sessionId, [obj]);
        };
        ServiceContractsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ServiceContracts(" + obj.ContractID + ")", sessionId, [obj]);
        };
        return ServiceContractsEntity;
    })();
    SAPB1.ServiceContractsEntity = ServiceContractsEntity;
    var ServiceCallsEntity = (function () {
        function ServiceCallsEntity() {
        }
        ServiceCallsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ServiceCalls", sessionId, [obj]);
        };
        ServiceCallsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ServiceCalls(" + obj.ServiceCallID + ")", sessionId, [obj]);
        };
        ServiceCallsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ServiceCalls(" + obj.ServiceCallID + ")", sessionId, [obj]);
        };
        ServiceCallsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ServiceCalls(" + obj.ServiceCallID + ")", sessionId, [obj]);
        };
        ServiceCallsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "ServiceCalls(" + obj.ServiceCallID + ")/Close", sessionId, [obj]);
        };
        return ServiceCallsEntity;
    })();
    SAPB1.ServiceCallsEntity = ServiceCallsEntity;
    var UserKeysMDEntity = (function () {
        function UserKeysMDEntity() {
        }
        UserKeysMDEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserKeysMD", sessionId, [obj]);
        };
        UserKeysMDEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserKeysMD('" + obj.TableName + "', " + obj.KeyIndex + ")", sessionId, [obj]);
        };
        UserKeysMDEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserKeysMD('" + obj.TableName + "', " + obj.KeyIndex + ")", sessionId, [obj]);
        };
        UserKeysMDEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserKeysMD('" + obj.TableName + "', " + obj.KeyIndex + ")", sessionId, [obj]);
        };
        return UserKeysMDEntity;
    })();
    SAPB1.UserKeysMDEntity = UserKeysMDEntity;
    var QueueEntity = (function () {
        function QueueEntity() {
        }
        QueueEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Queue", sessionId, [obj]);
        };
        QueueEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Queue('" + obj.QueueID + "')", sessionId, [obj]);
        };
        QueueEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Queue('" + obj.QueueID + "')", sessionId, [obj]);
        };
        QueueEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Queue('" + obj.QueueID + "')", sessionId, [obj]);
        };
        return QueueEntity;
    })();
    SAPB1.QueueEntity = QueueEntity;
    var SalesForecastEntity = (function () {
        function SalesForecastEntity() {
        }
        SalesForecastEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesForecast", sessionId, [obj]);
        };
        SalesForecastEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesForecast(" + obj.Numerator + ")", sessionId, [obj]);
        };
        SalesForecastEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesForecast(" + obj.Numerator + ")", sessionId, [obj]);
        };
        SalesForecastEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesForecast(" + obj.Numerator + ")", sessionId, [obj]);
        };
        return SalesForecastEntity;
    })();
    SAPB1.SalesForecastEntity = SalesForecastEntity;
    var BusinessPartnersEntity = (function () {
        function BusinessPartnersEntity() {
        }
        BusinessPartnersEntity.Add = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.ADD, "BusinessPartners", sessionId, routeId, [obj]);
        };
        BusinessPartnersEntity.Update = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.UPDATE, "BusinessPartners('" + obj.CardCode + "')", sessionId, routeId, [obj]);
        };
        BusinessPartnersEntity.Delete = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.DELETE, "BusinessPartners('" + obj.CardCode + "')", sessionId, routeId, [obj]);
        };
        BusinessPartnersEntity.Get = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.GET, "BusinessPartners('" + obj.CardCode + "')", sessionId, routeId, [obj]);
        };
        return BusinessPartnersEntity;
    })();
    SAPB1.BusinessPartnersEntity = BusinessPartnersEntity;
    var PurchaseDeliveryNotesEntity = (function () {
        function PurchaseDeliveryNotesEntity() {
        }
        PurchaseDeliveryNotesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseDeliveryNotes", sessionId, [obj]);
        };
        PurchaseDeliveryNotesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseDeliveryNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseDeliveryNotesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseDeliveryNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseDeliveryNotesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseDeliveryNotes(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseDeliveryNotesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseDeliveryNotesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseDeliveryNotes(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseDeliveryNotesEntity;
    })();
    SAPB1.PurchaseDeliveryNotesEntity = PurchaseDeliveryNotesEntity;
    var TerritoriesEntity = (function () {
        function TerritoriesEntity() {
        }
        TerritoriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Territories", sessionId, [obj]);
        };
        TerritoriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Territories(" + obj.TerritoryID + ")", sessionId, [obj]);
        };
        TerritoriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Territories(" + obj.TerritoryID + ")", sessionId, [obj]);
        };
        TerritoriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Territories(" + obj.TerritoryID + ")", sessionId, [obj]);
        };
        return TerritoriesEntity;
    })();
    SAPB1.TerritoriesEntity = TerritoriesEntity;
    var IndustriesEntity = (function () {
        function IndustriesEntity() {
        }
        IndustriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Industries", sessionId, [obj]);
        };
        IndustriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Industries(" + obj.IndustryCode + ")", sessionId, [obj]);
        };
        IndustriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Industries(" + obj.IndustryCode + ")", sessionId, [obj]);
        };
        IndustriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Industries(" + obj.IndustryCode + ")", sessionId, [obj]);
        };
        return IndustriesEntity;
    })();
    SAPB1.IndustriesEntity = IndustriesEntity;
    var ProductionOrdersEntity = (function () {
        function ProductionOrdersEntity() {
        }
        ProductionOrdersEntity.Add = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.ADD, "ProductionOrders", sessionId, routeId, [obj]);
        };
        ProductionOrdersEntity.Update = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.UPDATE, "ProductionOrders(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
        };
        ProductionOrdersEntity.Delete = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.DELETE, "ProductionOrders(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
        };
        ProductionOrdersEntity.Get = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.GET, "ProductionOrders(" + obj.AbsoluteEntry + ")", sessionId, routeId, [obj]);
        };
        ProductionOrdersEntity.Cancel = function (obj, sessionId, routeId) {
            CallSL(B1ObjActionEnum.ACTION, "ProductionOrders(" + obj.AbsoluteEntry + ")/Cancel", sessionId, routeId, [obj]);
        };
        return ProductionOrdersEntity;
    })();
    SAPB1.ProductionOrdersEntity = ProductionOrdersEntity;
    var DownPaymentsEntity = (function () {
        function DownPaymentsEntity() {
        }
        DownPaymentsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "DownPayments", sessionId, [obj]);
        };
        DownPaymentsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "DownPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DownPaymentsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "DownPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DownPaymentsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "DownPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        DownPaymentsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        DownPaymentsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "DownPayments(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return DownPaymentsEntity;
    })();
    SAPB1.DownPaymentsEntity = DownPaymentsEntity;
    var PurchaseDownPaymentsEntity = (function () {
        function PurchaseDownPaymentsEntity() {
        }
        PurchaseDownPaymentsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseDownPayments", sessionId, [obj]);
        };
        PurchaseDownPaymentsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseDownPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseDownPaymentsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseDownPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseDownPaymentsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseDownPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseDownPaymentsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseDownPaymentsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseDownPayments(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseDownPaymentsEntity;
    })();
    SAPB1.PurchaseDownPaymentsEntity = PurchaseDownPaymentsEntity;
    var PackagesTypesEntity = (function () {
        function PackagesTypesEntity() {
        }
        PackagesTypesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PackagesTypes", sessionId, [obj]);
        };
        PackagesTypesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PackagesTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        PackagesTypesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PackagesTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        PackagesTypesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PackagesTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        return PackagesTypesEntity;
    })();
    SAPB1.PackagesTypesEntity = PackagesTypesEntity;
    var UserObjectsMDEntity = (function () {
        function UserObjectsMDEntity() {
        }
        UserObjectsMDEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserObjectsMD", sessionId, [obj]);
        };
        UserObjectsMDEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserObjectsMD('" + obj.Code + "')", sessionId, [obj]);
        };
        UserObjectsMDEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserObjectsMD('" + obj.Code + "')", sessionId, [obj]);
        };
        UserObjectsMDEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserObjectsMD('" + obj.Code + "')", sessionId, [obj]);
        };
        return UserObjectsMDEntity;
    })();
    SAPB1.UserObjectsMDEntity = UserObjectsMDEntity;
    var PurchaseReturnsEntity = (function () {
        function PurchaseReturnsEntity() {
        }
        PurchaseReturnsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseReturns", sessionId, [obj]);
        };
        PurchaseReturnsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseReturns(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseReturnsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseReturns(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseReturnsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseReturns(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseReturnsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseReturnsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseReturns(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseReturnsEntity;
    })();
    SAPB1.PurchaseReturnsEntity = PurchaseReturnsEntity;
    var TeamsEntity = (function () {
        function TeamsEntity() {
        }
        TeamsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Teams", sessionId, [obj]);
        };
        TeamsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Teams(" + obj.TeamID + ")", sessionId, [obj]);
        };
        TeamsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Teams(" + obj.TeamID + ")", sessionId, [obj]);
        };
        TeamsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Teams(" + obj.TeamID + ")", sessionId, [obj]);
        };
        return TeamsEntity;
    })();
    SAPB1.TeamsEntity = TeamsEntity;
    var RelationshipsEntity = (function () {
        function RelationshipsEntity() {
        }
        RelationshipsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Relationships", sessionId, [obj]);
        };
        RelationshipsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Relationships(" + obj.RelationshipCode + ")", sessionId, [obj]);
        };
        RelationshipsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Relationships(" + obj.RelationshipCode + ")", sessionId, [obj]);
        };
        RelationshipsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Relationships(" + obj.RelationshipCode + ")", sessionId, [obj]);
        };
        return RelationshipsEntity;
    })();
    SAPB1.RelationshipsEntity = RelationshipsEntity;
    var UserPermissionTreeEntity = (function () {
        function UserPermissionTreeEntity() {
        }
        UserPermissionTreeEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserPermissionTree", sessionId, [obj]);
        };
        UserPermissionTreeEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserPermissionTree('" + obj.PermissionID + "')", sessionId, [obj]);
        };
        UserPermissionTreeEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserPermissionTree('" + obj.PermissionID + "')", sessionId, [obj]);
        };
        UserPermissionTreeEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserPermissionTree('" + obj.PermissionID + "')", sessionId, [obj]);
        };
        return UserPermissionTreeEntity;
    })();
    SAPB1.UserPermissionTreeEntity = UserPermissionTreeEntity;
    var ActivityStatusesEntity = (function () {
        function ActivityStatusesEntity() {
        }
        ActivityStatusesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ActivityStatuses", sessionId, [obj]);
        };
        ActivityStatusesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ActivityStatuses(" + obj.StatusId + ")", sessionId, [obj]);
        };
        ActivityStatusesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ActivityStatuses(" + obj.StatusId + ")", sessionId, [obj]);
        };
        ActivityStatusesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ActivityStatuses(" + obj.StatusId + ")", sessionId, [obj]);
        };
        return ActivityStatusesEntity;
    })();
    SAPB1.ActivityStatusesEntity = ActivityStatusesEntity;
    var ChooseFromListEntity = (function () {
        function ChooseFromListEntity() {
        }
        ChooseFromListEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ChooseFromList", sessionId, [obj]);
        };
        ChooseFromListEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ChooseFromList('" + obj.ObjectName + "')", sessionId, [obj]);
        };
        ChooseFromListEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ChooseFromList('" + obj.ObjectName + "')", sessionId, [obj]);
        };
        ChooseFromListEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ChooseFromList('" + obj.ObjectName + "')", sessionId, [obj]);
        };
        return ChooseFromListEntity;
    })();
    SAPB1.ChooseFromListEntity = ChooseFromListEntity;
    var FormattedSearchesEntity = (function () {
        function FormattedSearchesEntity() {
        }
        FormattedSearchesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "FormattedSearches", sessionId, [obj]);
        };
        FormattedSearchesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "FormattedSearches(" + obj.Index + ")", sessionId, [obj]);
        };
        FormattedSearchesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "FormattedSearches(" + obj.Index + ")", sessionId, [obj]);
        };
        FormattedSearchesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "FormattedSearches(" + obj.Index + ")", sessionId, [obj]);
        };
        return FormattedSearchesEntity;
    })();
    SAPB1.FormattedSearchesEntity = FormattedSearchesEntity;
    var PurchaseOrdersEntity = (function () {
        function PurchaseOrdersEntity() {
        }
        PurchaseOrdersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseOrders", sessionId, [obj]);
        };
        PurchaseOrdersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseOrders(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseOrdersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseOrders(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseOrdersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseOrders(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseOrdersEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseOrdersEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseOrders(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseOrdersEntity;
    })();
    SAPB1.PurchaseOrdersEntity = PurchaseOrdersEntity;
    var Attachments2Entity = (function () {
        function Attachments2Entity() {
        }
        Attachments2Entity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Attachments2", sessionId, [obj]);
        };
        Attachments2Entity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Attachments2(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        Attachments2Entity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Attachments2(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        Attachments2Entity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Attachments2(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        return Attachments2Entity;
    })();
    SAPB1.Attachments2Entity = Attachments2Entity;
    var UserLanguagesEntity = (function () {
        function UserLanguagesEntity() {
        }
        UserLanguagesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserLanguages", sessionId, [obj]);
        };
        UserLanguagesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserLanguages(" + obj.Code + ")", sessionId, [obj]);
        };
        UserLanguagesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserLanguages(" + obj.Code + ")", sessionId, [obj]);
        };
        UserLanguagesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserLanguages(" + obj.Code + ")", sessionId, [obj]);
        };
        return UserLanguagesEntity;
    })();
    SAPB1.UserLanguagesEntity = UserLanguagesEntity;
    var MultiLanguageTranslationsEntity = (function () {
        function MultiLanguageTranslationsEntity() {
        }
        MultiLanguageTranslationsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "MultiLanguageTranslations", sessionId, [obj]);
        };
        MultiLanguageTranslationsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "MultiLanguageTranslations(" + obj.Numerator + ")", sessionId, [obj]);
        };
        MultiLanguageTranslationsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "MultiLanguageTranslations(" + obj.Numerator + ")", sessionId, [obj]);
        };
        MultiLanguageTranslationsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "MultiLanguageTranslations(" + obj.Numerator + ")", sessionId, [obj]);
        };
        return MultiLanguageTranslationsEntity;
    })();
    SAPB1.MultiLanguageTranslationsEntity = MultiLanguageTranslationsEntity;
    var DynamicSystemStringsEntity = (function () {
        function DynamicSystemStringsEntity() {
        }
        DynamicSystemStringsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "DynamicSystemStrings", sessionId, [obj]);
        };
        DynamicSystemStringsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "DynamicSystemStrings('" + obj.FormID + "', '" + obj.ItemID + "', '" + obj.ColumnID + "')", sessionId, [obj]);
        };
        DynamicSystemStringsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "DynamicSystemStrings('" + obj.FormID + "', '" + obj.ItemID + "', '" + obj.ColumnID + "')", sessionId, [obj]);
        };
        DynamicSystemStringsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "DynamicSystemStrings('" + obj.FormID + "', '" + obj.ItemID + "', '" + obj.ColumnID + "')", sessionId, [obj]);
        };
        return DynamicSystemStringsEntity;
    })();
    SAPB1.DynamicSystemStringsEntity = DynamicSystemStringsEntity;
    var QuotationsEntity = (function () {
        function QuotationsEntity() {
        }
        QuotationsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Quotations", sessionId, [obj]);
        };
        QuotationsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Quotations(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        QuotationsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Quotations(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        QuotationsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Quotations(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        QuotationsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        QuotationsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Quotations(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return QuotationsEntity;
    })();
    SAPB1.QuotationsEntity = QuotationsEntity;
    var HouseBankAccountsEntity = (function () {
        function HouseBankAccountsEntity() {
        }
        HouseBankAccountsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "HouseBankAccounts", sessionId, [obj]);
        };
        HouseBankAccountsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "HouseBankAccounts(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        HouseBankAccountsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "HouseBankAccounts(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        HouseBankAccountsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "HouseBankAccounts(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        return HouseBankAccountsEntity;
    })();
    SAPB1.HouseBankAccountsEntity = HouseBankAccountsEntity;
    var IncomingPaymentsEntity = (function () {
        function IncomingPaymentsEntity() {
        }
        IncomingPaymentsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "IncomingPayments", sessionId, [obj]);
        };
        IncomingPaymentsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "IncomingPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        IncomingPaymentsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "IncomingPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        IncomingPaymentsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "IncomingPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        IncomingPaymentsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "IncomingPayments(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return IncomingPaymentsEntity;
    })();
    SAPB1.IncomingPaymentsEntity = IncomingPaymentsEntity;
    var BusinessPlacesEntity = (function () {
        function BusinessPlacesEntity() {
        }
        BusinessPlacesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BusinessPlaces", sessionId, [obj]);
        };
        BusinessPlacesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BusinessPlaces(" + obj.BPLID + ")", sessionId, [obj]);
        };
        BusinessPlacesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BusinessPlaces(" + obj.BPLID + ")", sessionId, [obj]);
        };
        BusinessPlacesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BusinessPlaces(" + obj.BPLID + ")", sessionId, [obj]);
        };
        return BusinessPlacesEntity;
    })();
    SAPB1.BusinessPlacesEntity = BusinessPlacesEntity;
    var LocalEraEntity = (function () {
        function LocalEraEntity() {
        }
        LocalEraEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "LocalEra", sessionId, [obj]);
        };
        LocalEraEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "LocalEra('" + obj.Code + "')", sessionId, [obj]);
        };
        LocalEraEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "LocalEra('" + obj.Code + "')", sessionId, [obj]);
        };
        LocalEraEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "LocalEra('" + obj.Code + "')", sessionId, [obj]);
        };
        return LocalEraEntity;
    })();
    SAPB1.LocalEraEntity = LocalEraEntity;
    var SalesTaxInvoicesEntity = (function () {
        function SalesTaxInvoicesEntity() {
        }
        SalesTaxInvoicesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesTaxInvoices", sessionId, [obj]);
        };
        SalesTaxInvoicesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesTaxInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        SalesTaxInvoicesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesTaxInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        SalesTaxInvoicesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesTaxInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        return SalesTaxInvoicesEntity;
    })();
    SAPB1.SalesTaxInvoicesEntity = SalesTaxInvoicesEntity;
    var PurchaseTaxInvoicesEntity = (function () {
        function PurchaseTaxInvoicesEntity() {
        }
        PurchaseTaxInvoicesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseTaxInvoices", sessionId, [obj]);
        };
        PurchaseTaxInvoicesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseTaxInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseTaxInvoicesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseTaxInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseTaxInvoicesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseTaxInvoices(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        return PurchaseTaxInvoicesEntity;
    })();
    SAPB1.PurchaseTaxInvoicesEntity = PurchaseTaxInvoicesEntity;
    var BanksEntity = (function () {
        function BanksEntity() {
        }
        BanksEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Banks", sessionId, [obj]);
        };
        BanksEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Banks(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        BanksEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Banks(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        BanksEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Banks(" + obj.AbsoluteEntry + ")", sessionId, [obj]);
        };
        return BanksEntity;
    })();
    SAPB1.BanksEntity = BanksEntity;
    var JournalEntriesEntity = (function () {
        function JournalEntriesEntity() {
        }
        JournalEntriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "JournalEntries", sessionId, [obj]);
        };
        JournalEntriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "JournalEntries(" + obj.JdtNum + ")", sessionId, [obj]);
        };
        JournalEntriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "JournalEntries(" + obj.JdtNum + ")", sessionId, [obj]);
        };
        JournalEntriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "JournalEntries(" + obj.JdtNum + ")", sessionId, [obj]);
        };
        JournalEntriesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "JournalEntries(" + obj.JdtNum + ")/Cancel", sessionId, [obj]);
        };
        return JournalEntriesEntity;
    })();
    SAPB1.JournalEntriesEntity = JournalEntriesEntity;
    var ContactsEntity = (function () {
        function ContactsEntity() {
        }
        ContactsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Contacts", sessionId, [obj]);
        };
        ContactsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Contacts(" + obj.ContactCode + ")", sessionId, [obj]);
        };
        ContactsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Contacts(" + obj.ContactCode + ")", sessionId, [obj]);
        };
        ContactsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Contacts(" + obj.ContactCode + ")", sessionId, [obj]);
        };
        return ContactsEntity;
    })();
    SAPB1.ContactsEntity = ContactsEntity;
    var CreditCardsEntity = (function () {
        function CreditCardsEntity() {
        }
        CreditCardsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CreditCards", sessionId, [obj]);
        };
        CreditCardsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CreditCards(" + obj.CreditCardCode + ")", sessionId, [obj]);
        };
        CreditCardsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CreditCards(" + obj.CreditCardCode + ")", sessionId, [obj]);
        };
        CreditCardsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CreditCards(" + obj.CreditCardCode + ")", sessionId, [obj]);
        };
        return CreditCardsEntity;
    })();
    SAPB1.CreditCardsEntity = CreditCardsEntity;
    var CurrenciesEntity = (function () {
        function CurrenciesEntity() {
        }
        CurrenciesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Currencies", sessionId, [obj]);
        };
        CurrenciesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Currencies('" + obj.Code + "')", sessionId, [obj]);
        };
        CurrenciesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Currencies('" + obj.Code + "')", sessionId, [obj]);
        };
        CurrenciesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Currencies('" + obj.Code + "')", sessionId, [obj]);
        };
        return CurrenciesEntity;
    })();
    SAPB1.CurrenciesEntity = CurrenciesEntity;
    var ItemsEntity = (function () {
        function ItemsEntity() {
        }
        ItemsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Items", sessionId, [obj]);
        };
        ItemsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Items('" + obj.ItemCode + "')", sessionId, [obj]);
        };
        ItemsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Items('" + obj.ItemCode + "')", sessionId, [obj]);
        };
        ItemsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Items('" + obj.ItemCode + "')", sessionId, [obj]);
        };
        ItemsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "Items('" + obj.ItemCode + "')/Cancel", sessionId, [obj]);
        };
        return ItemsEntity;
    })();
    SAPB1.ItemsEntity = ItemsEntity;
    var PaymentTermsTypesEntity = (function () {
        function PaymentTermsTypesEntity() {
        }
        PaymentTermsTypesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PaymentTermsTypes", sessionId, [obj]);
        };
        PaymentTermsTypesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PaymentTermsTypes(" + obj.GroupNumber + ")", sessionId, [obj]);
        };
        PaymentTermsTypesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PaymentTermsTypes(" + obj.GroupNumber + ")", sessionId, [obj]);
        };
        PaymentTermsTypesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PaymentTermsTypes(" + obj.GroupNumber + ")", sessionId, [obj]);
        };
        return PaymentTermsTypesEntity;
    })();
    SAPB1.PaymentTermsTypesEntity = PaymentTermsTypesEntity;
    var BankPagesEntity = (function () {
        function BankPagesEntity() {
        }
        BankPagesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BankPages", sessionId, [obj]);
        };
        BankPagesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BankPages('" + obj.AccountCode + "', " + obj.Sequence + ")", sessionId, [obj]);
        };
        BankPagesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BankPages('" + obj.AccountCode + "', " + obj.Sequence + ")", sessionId, [obj]);
        };
        BankPagesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BankPages('" + obj.AccountCode + "', " + obj.Sequence + ")", sessionId, [obj]);
        };
        return BankPagesEntity;
    })();
    SAPB1.BankPagesEntity = BankPagesEntity;
    var ManufacturersEntity = (function () {
        function ManufacturersEntity() {
        }
        ManufacturersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Manufacturers", sessionId, [obj]);
        };
        ManufacturersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Manufacturers(" + obj.Code + ")", sessionId, [obj]);
        };
        ManufacturersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Manufacturers(" + obj.Code + ")", sessionId, [obj]);
        };
        ManufacturersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Manufacturers(" + obj.Code + ")", sessionId, [obj]);
        };
        return ManufacturersEntity;
    })();
    SAPB1.ManufacturersEntity = ManufacturersEntity;
    var VendorPaymentsEntity = (function () {
        function VendorPaymentsEntity() {
        }
        VendorPaymentsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "VendorPayments", sessionId, [obj]);
        };
        VendorPaymentsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "VendorPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        VendorPaymentsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "VendorPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        VendorPaymentsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "VendorPayments(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        VendorPaymentsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "VendorPayments(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return VendorPaymentsEntity;
    })();
    SAPB1.VendorPaymentsEntity = VendorPaymentsEntity;
    var LandedCostsCodesEntity = (function () {
        function LandedCostsCodesEntity() {
        }
        LandedCostsCodesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "LandedCostsCodes", sessionId, [obj]);
        };
        LandedCostsCodesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "LandedCostsCodes('" + obj.Code + "')", sessionId, [obj]);
        };
        LandedCostsCodesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "LandedCostsCodes('" + obj.Code + "')", sessionId, [obj]);
        };
        LandedCostsCodesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "LandedCostsCodes('" + obj.Code + "')", sessionId, [obj]);
        };
        return LandedCostsCodesEntity;
    })();
    SAPB1.LandedCostsCodesEntity = LandedCostsCodesEntity;
    var ShippingTypesEntity = (function () {
        function ShippingTypesEntity() {
        }
        ShippingTypesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ShippingTypes", sessionId, [obj]);
        };
        ShippingTypesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ShippingTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        ShippingTypesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ShippingTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        ShippingTypesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ShippingTypes(" + obj.Code + ")", sessionId, [obj]);
        };
        return ShippingTypesEntity;
    })();
    SAPB1.ShippingTypesEntity = ShippingTypesEntity;
    var VatGroupsEntity = (function () {
        function VatGroupsEntity() {
        }
        VatGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "VatGroups", sessionId, [obj]);
        };
        VatGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "VatGroups('" + obj.Code + "')", sessionId, [obj]);
        };
        VatGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "VatGroups('" + obj.Code + "')", sessionId, [obj]);
        };
        VatGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "VatGroups('" + obj.Code + "')", sessionId, [obj]);
        };
        return VatGroupsEntity;
    })();
    SAPB1.VatGroupsEntity = VatGroupsEntity;
    var LengthMeasuresEntity = (function () {
        function LengthMeasuresEntity() {
        }
        LengthMeasuresEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "LengthMeasures", sessionId, [obj]);
        };
        LengthMeasuresEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "LengthMeasures(" + obj.UnitCode + ")", sessionId, [obj]);
        };
        LengthMeasuresEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "LengthMeasures(" + obj.UnitCode + ")", sessionId, [obj]);
        };
        LengthMeasuresEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "LengthMeasures(" + obj.UnitCode + ")", sessionId, [obj]);
        };
        return LengthMeasuresEntity;
    })();
    SAPB1.LengthMeasuresEntity = LengthMeasuresEntity;
    var WeightMeasuresEntity = (function () {
        function WeightMeasuresEntity() {
        }
        WeightMeasuresEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "WeightMeasures", sessionId, [obj]);
        };
        WeightMeasuresEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "WeightMeasures(" + obj.UnitCode + ")", sessionId, [obj]);
        };
        WeightMeasuresEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "WeightMeasures(" + obj.UnitCode + ")", sessionId, [obj]);
        };
        WeightMeasuresEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "WeightMeasures(" + obj.UnitCode + ")", sessionId, [obj]);
        };
        return WeightMeasuresEntity;
    })();
    SAPB1.WeightMeasuresEntity = WeightMeasuresEntity;
    var ItemGroupsEntity = (function () {
        function ItemGroupsEntity() {
        }
        ItemGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ItemGroups", sessionId, [obj]);
        };
        ItemGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ItemGroups(" + obj.Number + ")", sessionId, [obj]);
        };
        ItemGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ItemGroups(" + obj.Number + ")", sessionId, [obj]);
        };
        ItemGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ItemGroups(" + obj.Number + ")", sessionId, [obj]);
        };
        return ItemGroupsEntity;
    })();
    SAPB1.ItemGroupsEntity = ItemGroupsEntity;
    var SalesPersonsEntity = (function () {
        function SalesPersonsEntity() {
        }
        SalesPersonsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesPersons", sessionId, [obj]);
        };
        SalesPersonsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesPersons(" + obj.SalesEmployeeCode + ")", sessionId, [obj]);
        };
        SalesPersonsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesPersons(" + obj.SalesEmployeeCode + ")", sessionId, [obj]);
        };
        SalesPersonsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesPersons(" + obj.SalesEmployeeCode + ")", sessionId, [obj]);
        };
        return SalesPersonsEntity;
    })();
    SAPB1.SalesPersonsEntity = SalesPersonsEntity;
    var PurchaseQuotationsEntity = (function () {
        function PurchaseQuotationsEntity() {
        }
        PurchaseQuotationsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PurchaseQuotations", sessionId, [obj]);
        };
        PurchaseQuotationsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PurchaseQuotations(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseQuotationsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PurchaseQuotations(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseQuotationsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PurchaseQuotations(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        PurchaseQuotationsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        PurchaseQuotationsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "PurchaseQuotations(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return PurchaseQuotationsEntity;
    })();
    SAPB1.PurchaseQuotationsEntity = PurchaseQuotationsEntity;
    var CustomsGroupsEntity = (function () {
        function CustomsGroupsEntity() {
        }
        CustomsGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CustomsGroups", sessionId, [obj]);
        };
        CustomsGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CustomsGroups(" + obj.Code + ")", sessionId, [obj]);
        };
        CustomsGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CustomsGroups(" + obj.Code + ")", sessionId, [obj]);
        };
        CustomsGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CustomsGroups(" + obj.Code + ")", sessionId, [obj]);
        };
        return CustomsGroupsEntity;
    })();
    SAPB1.CustomsGroupsEntity = CustomsGroupsEntity;
    var ChecksforPaymentEntity = (function () {
        function ChecksforPaymentEntity() {
        }
        ChecksforPaymentEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ChecksforPayment", sessionId, [obj]);
        };
        ChecksforPaymentEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ChecksforPayment(" + obj.CheckKey + ")", sessionId, [obj]);
        };
        ChecksforPaymentEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ChecksforPayment(" + obj.CheckKey + ")", sessionId, [obj]);
        };
        ChecksforPaymentEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ChecksforPayment(" + obj.CheckKey + ")", sessionId, [obj]);
        };
        return ChecksforPaymentEntity;
    })();
    SAPB1.ChecksforPaymentEntity = ChecksforPaymentEntity;
    var InventoryGenEntriesEntity = (function () {
        function InventoryGenEntriesEntity() {
        }
        InventoryGenEntriesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "InventoryGenEntries", sessionId, [obj]);
        };
        InventoryGenEntriesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "InventoryGenEntries(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryGenEntriesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "InventoryGenEntries(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryGenEntriesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "InventoryGenEntries(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryGenEntriesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        InventoryGenEntriesEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "InventoryGenEntries(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return InventoryGenEntriesEntity;
    })();
    SAPB1.InventoryGenEntriesEntity = InventoryGenEntriesEntity;
    var PriceListsEntity = (function () {
        function PriceListsEntity() {
        }
        PriceListsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "PriceLists", sessionId, [obj]);
        };
        PriceListsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "PriceLists(" + obj.PriceListNo + ")", sessionId, [obj]);
        };
        PriceListsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "PriceLists(" + obj.PriceListNo + ")", sessionId, [obj]);
        };
        PriceListsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "PriceLists(" + obj.PriceListNo + ")", sessionId, [obj]);
        };
        return PriceListsEntity;
    })();
    SAPB1.PriceListsEntity = PriceListsEntity;
    var InventoryGenExitsEntity = (function () {
        function InventoryGenExitsEntity() {
        }
        InventoryGenExitsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "InventoryGenExits", sessionId, [obj]);
        };
        InventoryGenExitsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "InventoryGenExits(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryGenExitsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "InventoryGenExits(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryGenExitsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "InventoryGenExits(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        InventoryGenExitsEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        InventoryGenExitsEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "InventoryGenExits(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        return InventoryGenExitsEntity;
    })();
    SAPB1.InventoryGenExitsEntity = InventoryGenExitsEntity;
    var ProfitCentersEntity = (function () {
        function ProfitCentersEntity() {
        }
        ProfitCentersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ProfitCenters", sessionId, [obj]);
        };
        ProfitCentersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ProfitCenters('" + obj.CenterCode + "')", sessionId, [obj]);
        };
        ProfitCentersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ProfitCenters('" + obj.CenterCode + "')", sessionId, [obj]);
        };
        ProfitCentersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ProfitCenters('" + obj.CenterCode + "')", sessionId, [obj]);
        };
        return ProfitCentersEntity;
    })();
    SAPB1.ProfitCentersEntity = ProfitCentersEntity;
    var ProjectsEntity = (function () {
        function ProjectsEntity() {
        }
        ProjectsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Projects", sessionId, [obj]);
        };
        ProjectsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Projects('" + obj.Code + "')", sessionId, [obj]);
        };
        ProjectsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Projects('" + obj.Code + "')", sessionId, [obj]);
        };
        ProjectsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Projects('" + obj.Code + "')", sessionId, [obj]);
        };
        return ProjectsEntity;
    })();
    SAPB1.ProjectsEntity = ProjectsEntity;
    var WarehousesEntity = (function () {
        function WarehousesEntity() {
        }
        WarehousesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Warehouses", sessionId, [obj]);
        };
        WarehousesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Warehouses('" + obj.WarehouseCode + "')", sessionId, [obj]);
        };
        WarehousesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Warehouses('" + obj.WarehouseCode + "')", sessionId, [obj]);
        };
        WarehousesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Warehouses('" + obj.WarehouseCode + "')", sessionId, [obj]);
        };
        return WarehousesEntity;
    })();
    SAPB1.WarehousesEntity = WarehousesEntity;
    var CommissionGroupsEntity = (function () {
        function CommissionGroupsEntity() {
        }
        CommissionGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CommissionGroups", sessionId, [obj]);
        };
        CommissionGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CommissionGroups(" + obj.CommissionGroupCode + ")", sessionId, [obj]);
        };
        CommissionGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CommissionGroups(" + obj.CommissionGroupCode + ")", sessionId, [obj]);
        };
        CommissionGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CommissionGroups(" + obj.CommissionGroupCode + ")", sessionId, [obj]);
        };
        return CommissionGroupsEntity;
    })();
    SAPB1.CommissionGroupsEntity = CommissionGroupsEntity;
    var ProductTreesEntity = (function () {
        function ProductTreesEntity() {
        }
        ProductTreesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ProductTrees", sessionId, [obj]);
        };
        ProductTreesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ProductTrees('" + obj.TreeCode + "')", sessionId, [obj]);
        };
        ProductTreesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ProductTrees('" + obj.TreeCode + "')", sessionId, [obj]);
        };
        ProductTreesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ProductTrees('" + obj.TreeCode + "')", sessionId, [obj]);
        };
        return ProductTreesEntity;
    })();
    SAPB1.ProductTreesEntity = ProductTreesEntity;
    var StockTransfersEntity = (function () {
        function StockTransfersEntity() {
        }
        StockTransfersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "StockTransfers", sessionId, [obj]);
        };
        StockTransfersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "StockTransfers(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        StockTransfersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "StockTransfers(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        StockTransfersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "StockTransfers(" + obj.DocEntry + ")", sessionId, [obj]);
        };
        StockTransfersEntity.Cancel = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "StockTransfers(" + obj.DocEntry + ")/Cancel", sessionId, [obj]);
        };
        StockTransfersEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "StockTransfers(" + obj.DocEntry + ")/Close", sessionId, [obj]);
        };
        return StockTransfersEntity;
    })();
    SAPB1.StockTransfersEntity = StockTransfersEntity;
    var WorkOrdersEntity = (function () {
        function WorkOrdersEntity() {
        }
        WorkOrdersEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "WorkOrders", sessionId, [obj]);
        };
        WorkOrdersEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "WorkOrders(" + obj.OrderNum + ")", sessionId, [obj]);
        };
        WorkOrdersEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "WorkOrders(" + obj.OrderNum + ")", sessionId, [obj]);
        };
        WorkOrdersEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "WorkOrders(" + obj.OrderNum + ")", sessionId, [obj]);
        };
        return WorkOrdersEntity;
    })();
    SAPB1.WorkOrdersEntity = WorkOrdersEntity;
    var SpecialPricesEntity = (function () {
        function SpecialPricesEntity() {
        }
        SpecialPricesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SpecialPrices", sessionId, [obj]);
        };
        SpecialPricesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SpecialPrices('" + obj.ItemCode + "', '" + obj.CardCode + "')", sessionId, [obj]);
        };
        SpecialPricesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SpecialPrices('" + obj.ItemCode + "', '" + obj.CardCode + "')", sessionId, [obj]);
        };
        SpecialPricesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SpecialPrices('" + obj.ItemCode + "', '" + obj.CardCode + "')", sessionId, [obj]);
        };
        return SpecialPricesEntity;
    })();
    SAPB1.SpecialPricesEntity = SpecialPricesEntity;
    var CreditPaymentMethodsEntity = (function () {
        function CreditPaymentMethodsEntity() {
        }
        CreditPaymentMethodsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CreditPaymentMethods", sessionId, [obj]);
        };
        CreditPaymentMethodsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CreditPaymentMethods(" + obj.PaymentMethodCode + ")", sessionId, [obj]);
        };
        CreditPaymentMethodsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CreditPaymentMethods(" + obj.PaymentMethodCode + ")", sessionId, [obj]);
        };
        CreditPaymentMethodsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CreditPaymentMethods(" + obj.PaymentMethodCode + ")", sessionId, [obj]);
        };
        return CreditPaymentMethodsEntity;
    })();
    SAPB1.CreditPaymentMethodsEntity = CreditPaymentMethodsEntity;
    var CreditCardPaymentsEntity = (function () {
        function CreditCardPaymentsEntity() {
        }
        CreditCardPaymentsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "CreditCardPayments", sessionId, [obj]);
        };
        CreditCardPaymentsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "CreditCardPayments('" + obj.DueDateCode + "')", sessionId, [obj]);
        };
        CreditCardPaymentsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "CreditCardPayments('" + obj.DueDateCode + "')", sessionId, [obj]);
        };
        CreditCardPaymentsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "CreditCardPayments('" + obj.DueDateCode + "')", sessionId, [obj]);
        };
        return CreditCardPaymentsEntity;
    })();
    SAPB1.CreditCardPaymentsEntity = CreditCardPaymentsEntity;
    var AlternateCatNumEntity = (function () {
        function AlternateCatNumEntity() {
        }
        AlternateCatNumEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "AlternateCatNum", sessionId, [obj]);
        };
        AlternateCatNumEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "AlternateCatNum('" + obj.ItemCode + "', '" + obj.CardCode + "', '" + obj.Substitute + "')", sessionId, [obj]);
        };
        AlternateCatNumEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "AlternateCatNum('" + obj.ItemCode + "', '" + obj.CardCode + "', '" + obj.Substitute + "')", sessionId, [obj]);
        };
        AlternateCatNumEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "AlternateCatNum('" + obj.ItemCode + "', '" + obj.CardCode + "', '" + obj.Substitute + "')", sessionId, [obj]);
        };
        return AlternateCatNumEntity;
    })();
    SAPB1.AlternateCatNumEntity = AlternateCatNumEntity;
    var BudgetsEntity = (function () {
        function BudgetsEntity() {
        }
        BudgetsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "Budgets", sessionId, [obj]);
        };
        BudgetsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "Budgets(" + obj.Numerator + ")", sessionId, [obj]);
        };
        BudgetsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "Budgets(" + obj.Numerator + ")", sessionId, [obj]);
        };
        BudgetsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "Budgets(" + obj.Numerator + ")", sessionId, [obj]);
        };
        return BudgetsEntity;
    })();
    SAPB1.BudgetsEntity = BudgetsEntity;
    var BudgetDistributionsEntity = (function () {
        function BudgetDistributionsEntity() {
        }
        BudgetDistributionsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BudgetDistributions", sessionId, [obj]);
        };
        BudgetDistributionsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BudgetDistributions(" + obj.DivisionCode + ")", sessionId, [obj]);
        };
        BudgetDistributionsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BudgetDistributions(" + obj.DivisionCode + ")", sessionId, [obj]);
        };
        BudgetDistributionsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BudgetDistributions(" + obj.DivisionCode + ")", sessionId, [obj]);
        };
        return BudgetDistributionsEntity;
    })();
    SAPB1.BudgetDistributionsEntity = BudgetDistributionsEntity;
    var ItemPropertiesEntity = (function () {
        function ItemPropertiesEntity() {
        }
        ItemPropertiesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "ItemProperties", sessionId, [obj]);
        };
        ItemPropertiesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "ItemProperties(" + obj.Number + ")", sessionId, [obj]);
        };
        ItemPropertiesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "ItemProperties(" + obj.Number + ")", sessionId, [obj]);
        };
        ItemPropertiesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "ItemProperties(" + obj.Number + ")", sessionId, [obj]);
        };
        return ItemPropertiesEntity;
    })();
    SAPB1.ItemPropertiesEntity = ItemPropertiesEntity;
    var AlertManagementsEntity = (function () {
        function AlertManagementsEntity() {
        }
        AlertManagementsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "AlertManagements", sessionId, [obj]);
        };
        AlertManagementsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "AlertManagements(" + obj.Code + ")", sessionId, [obj]);
        };
        AlertManagementsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "AlertManagements(" + obj.Code + ")", sessionId, [obj]);
        };
        AlertManagementsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "AlertManagements(" + obj.Code + ")", sessionId, [obj]);
        };
        return AlertManagementsEntity;
    })();
    SAPB1.AlertManagementsEntity = AlertManagementsEntity;
    var BudgetScenariosEntity = (function () {
        function BudgetScenariosEntity() {
        }
        BudgetScenariosEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "BudgetScenarios", sessionId, [obj]);
        };
        BudgetScenariosEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "BudgetScenarios(" + obj.Numerator + ")", sessionId, [obj]);
        };
        BudgetScenariosEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "BudgetScenarios(" + obj.Numerator + ")", sessionId, [obj]);
        };
        BudgetScenariosEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "BudgetScenarios(" + obj.Numerator + ")", sessionId, [obj]);
        };
        return BudgetScenariosEntity;
    })();
    SAPB1.BudgetScenariosEntity = BudgetScenariosEntity;
    var UserDefaultGroupsEntity = (function () {
        function UserDefaultGroupsEntity() {
        }
        UserDefaultGroupsEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "UserDefaultGroups", sessionId, [obj]);
        };
        UserDefaultGroupsEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "UserDefaultGroups('" + obj.Code + "')", sessionId, [obj]);
        };
        UserDefaultGroupsEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "UserDefaultGroups('" + obj.Code + "')", sessionId, [obj]);
        };
        UserDefaultGroupsEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "UserDefaultGroups('" + obj.Code + "')", sessionId, [obj]);
        };
        return UserDefaultGroupsEntity;
    })();
    SAPB1.UserDefaultGroupsEntity = UserDefaultGroupsEntity;
    var SalesOpportunitiesEntity = (function () {
        function SalesOpportunitiesEntity() {
        }
        SalesOpportunitiesEntity.Add = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ADD, "SalesOpportunities", sessionId, [obj]);
        };
        SalesOpportunitiesEntity.Update = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.UPDATE, "SalesOpportunities(" + obj.SequentialNo + ")", sessionId, [obj]);
        };
        SalesOpportunitiesEntity.Delete = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.DELETE, "SalesOpportunities(" + obj.SequentialNo + ")", sessionId, [obj]);
        };
        SalesOpportunitiesEntity.Get = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.GET, "SalesOpportunities(" + obj.SequentialNo + ")", sessionId, [obj]);
        };
        SalesOpportunitiesEntity.Close = function (obj, sessionId) {
            CallSL(B1ObjActionEnum.ACTION, "SalesOpportunities(" + obj.SequentialNo + ")/Close", sessionId, [obj]);
        };
        return SalesOpportunitiesEntity;
    })();
    SAPB1.SalesOpportunitiesEntity = SalesOpportunitiesEntity;
})(SAPB1 || (SAPB1 = {}));