/*****************************************************************************/
/* Home: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Home.events({
  'submit form#upload-image': function(e, tmpl) {
    e.preventDefault();
    // Get image.
    var file = tmpl.find('input[name="files"]').files[0];
    // Start uploading.
    Images.insert(file, function (err) {
      // Reset form.
      // OMG, we can't more simply reset form because KendoUpload:
      // http://www.telerik.com/forums/reset-file-upload-after-successful-upload-993b15088551
      //e.target.reset();
      $('input[name="files"]').parents(".t-upload").find(".t-upload-files").remove();
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
  $('input[name="files"]').kendoUpload({
    multiple: false,
    showFileList: false
  });
  $('button').kendoButton();
  $('#images-grid').kendoGrid();
};

Template.Home.destroyed = function () {
};