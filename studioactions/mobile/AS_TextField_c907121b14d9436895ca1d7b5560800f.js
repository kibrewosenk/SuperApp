function AS_TextField_c907121b14d9436895ca1d7b5560800f(eventobject, changedtext) {
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