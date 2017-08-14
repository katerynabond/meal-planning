MealsListController.$inject = ['ImagesService'];

function MealsListController(imagesService) {

    this.loadImage = imagesService.loadImage;

};

module.exports = MealsListController;