function AS_TextField_e773a1a42ee746d6869b10ce628740b0(eventobject, changedtext) {
    var self = this;
    this.view.transactionList.segTransactionList.searchText(
    [{
        "textToSearch": this.view.txtTranscationSearch.text,
        "caseSensitive": false,
        "searchType": constants.SEGUI_SEARCH_CRITERIA_CONTAINS,
        "searchableWidgets": ["lblDate", "lblAccountNUmber", "lblAmount", "lblAccountName"]
    }], { //config parameter"updateSegment": true,
        "showHeaderFooter": true
    });
}