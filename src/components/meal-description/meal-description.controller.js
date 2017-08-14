MealDescriptionController.$inject = ['ImagesService'];

function MealDescriptionController(imagesService){
    var self = this;

    this.loadImage = imagesService.loadImage;
};


module.exports = MealDescriptionController;