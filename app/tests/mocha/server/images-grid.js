if (typeof MochaWeb !== 'undefined' && MochaWeb !== null) {
  MochaWeb.testOnly(function() {
    return describe('ImagesGrid', function() {
      return describe('addImage', function() {
        return it('adds new image into grid', function() {
          var countImages = Images.find().count();
          Images.insert('http://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png');
          chai.assert.equal(countImages + 1, Images.find().count());
        });
      });
    });
  });
}