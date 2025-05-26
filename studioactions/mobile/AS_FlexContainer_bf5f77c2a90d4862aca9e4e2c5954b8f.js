function AS_FlexContainer_bf5f77c2a90d4862aca9e4e2c5954b8f(eventobject) {
    var self = this;

    function _ide_onClick_e0a5be6a917e425e975e888c6725c114_Callback() {}
    self.view.flxHumbergerMenu.animate(
    kony.ui.createAnimation({
        "100": {
            "centerX": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": _ide_onClick_e0a5be6a917e425e975e888c6725c114_Callback
    });
}