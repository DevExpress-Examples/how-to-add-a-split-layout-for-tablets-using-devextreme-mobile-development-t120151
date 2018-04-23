dxSample.Navigation = function (params) {

    $.each(dxSample.app.navigation, function (_, command) {
        command.option("root", false);
    })

    var viewModel = {
        commands: dxSample.app.navigation
    };

    return viewModel;
};