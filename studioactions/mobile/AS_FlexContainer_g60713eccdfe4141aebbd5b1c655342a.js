function AS_FlexContainer_g60713eccdfe4141aebbd5b1c655342a(eventobject) {
    var self = this;
    if (this.view.lblSeeAllRecentTransactions.text == "See All") {
        this.view.lblSeeAllRecentTransactions.text = "Hide All";
        self.view.transactionList.isVisible = true;
        self.view.sflxOffers.isVisible = false;
    } else {
        this.view.lblSeeAllRecentTransactions.text = "See All";
        self.view.transactionList.isVisible = false;
        self.view.sflxOffers.isVisible = true;
    }
}