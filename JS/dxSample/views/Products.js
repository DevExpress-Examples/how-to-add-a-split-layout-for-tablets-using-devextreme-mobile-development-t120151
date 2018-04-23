dxSample.Products = function (params) {

    var viewModel = {
        categoryId: params.id,
        dataSource: new DevExpress.data.DataSource({
            pageSize: 10,
            load: function (loadOptions) {
                return $.getJSON('http://sampleservices.devexpress.com/api/Products', {
                    CategoryID: viewModel.categoryId,
                    skip: loadOptions.skip,
                    take: loadOptions.take,
                    searchString: ''
                });
            }
        }),

       
        selectedProductID: ko.observable(),
        navigateToDetails: function (productId) {
            this.selectedProductID(productId);
            dxSample.app.navigate({ view: 'Product_details', id: productId });
        }
    };

    return viewModel;
};