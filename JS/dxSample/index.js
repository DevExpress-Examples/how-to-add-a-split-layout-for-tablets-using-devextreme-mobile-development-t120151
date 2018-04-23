window.dxSample = window.dxSample || {};

$(function () {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    var device = DevExpress.devices.current(),
        startupView = "Navigation";

    if (device.phone) {
        startupView = "Categories";
    }

    var layoutSet = [
        { platform: "ios", tablet: true, controller: new DevExpress.framework.html.IOSSplitLayoutController() },
        { platform: "android", tablet: true, controller: new DevExpress.framework.html.AndroidSplitLayoutController() },
        { win8: false, phone: true, controller: new DevExpress.framework.html.NavBarController() },
        { win8: true, phone: true, root: true, controller: new DevExpress.framework.html.PivotLayoutController() },
        { platform: "android", phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() },
        { win8: true, phone: true, root: false, controller: new DevExpress.framework.html.SimpleLayoutController() }
    ];

    dxSample.app = new DevExpress.framework.html.HtmlApplication({
        namespace: dxSample,
        layoutSet: layoutSet,
        navigation: dxSample.config.navigation
    });

    dxSample.app.router.register(":view/:id", { view: startupView, id: undefined });

    dxSample.app.navigate();
});
