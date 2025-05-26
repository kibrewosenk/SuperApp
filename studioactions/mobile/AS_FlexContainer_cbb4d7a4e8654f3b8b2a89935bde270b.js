function AS_FlexContainer_cbb4d7a4e8654f3b8b2a89935bde270b(eventobject) {
    var self = this;
    var self = this;
    if (this.view.lblSeeAllRecentTransactions.text == "See All") {
        this.view.lblSeeAllRecentTransactions.text = "Hide All";
        self.view.transactionList.isVisible = true;
        self.view.segOtherServices.isVisible = false;
        self.view.flxTransactionSearch.isVisible = true;
        self.view.lblOtherServices.isVisible = fals;
    } else {
        this.view.lblSeeAllRecentTransactions.text = "See All";
        self.view.transactionList.isVisible = false;
        self.view.segOtherServices.isVisible = true;
        self.view.flxTransactionSearch.isVisible = true;
        self.view.lblOtherServices.isVisible = false;
    }
}