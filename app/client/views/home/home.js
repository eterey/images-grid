/*****************************************************************************/
/* Home: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Home.events({
  'submit form#upload-image': function(e, tmpl) {
    e.preventDefault();
    // Get image.
    var file = tmpl.find('input[name="files"]').files[0];
    // Start uploading.
    Images.insert(file, function (err, fileObj) {
      // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP.
      // Reset form.
      e.target.reset();
      // Show error message if we really got an error.
      if (err) {
        alert(err);
      }
    });
  }
});

Template.Home.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
  //$('input[name="files"]').kendoUpload();
  //$('#images-grid').kendoGrid({
  //  dataSource: {
  //    type: 'odata',
  //    transport: {
  //      read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
  //    },
  //    pageSize: 20
  //  },
  //  height: 550,
  //  groupable: true,
  //  sortable: true,
  //  pageable: {
  //    refresh: true,
  //    pageSizes: true,
  //    buttonCount: 5
  //  },
  //  columns: [{
  //    field: "ContactName",
  //    title: "Contact Name",
  //    width: 200
  //  }, {
  //    field: "ContactTitle",
  //    title: "Contact Title"
  //  }, {
  //    field: "CompanyName",
  //    title: "Company Name"
  //  }, {
  //    field: "Country",
  //    width: 150
  //  }]
  //});
};

Template.Home.destroyed = function () {
};