function AS_FlexContainer_cb7a117c8c46472d8bacf4e8c47050bb(eventobject) {
    var self = this;

    function _ide_onClick_d0509616dc7547faaa058b90184bd76b_Callback() {}
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
        "animationEnd": _ide_onClick_d0509616dc7547faaa058b90184bd76b_Callback
    });
}