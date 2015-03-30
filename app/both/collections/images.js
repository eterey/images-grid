Images = new Mongo.Collection('images');

var imageStore = new FS.Store.S3('images', {
  bucket: 'images-grid',
  accessKeyId: 'AKIAI5VQS7Q4XRISWWGA',
  secretAccessKey: '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'
});

Images = new FS.Collection('images', {
  stores: [imageStore],
  filter: {
    maxSize: 1048576,  // in bytes
    allow: {
      contentTypes: ['image/*']  // allow only images in this FS.Collection
    }
  }
});