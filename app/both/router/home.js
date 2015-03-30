Router.route('/', {
  name: 'home',
  data: {
    images: Images.find()
  }
});