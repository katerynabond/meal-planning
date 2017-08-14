function ImagesService() {
    return {
        loadImage: loadImage
    };

    function loadImage(name) {
        if (name) {
        return require('../images/'+name);
        } else {
            return undefined;
        }
    };
};

module.exports = ImagesService;