MealService.$inject = ['$http'];

function MealService($http) {
    const baseUrl = 'http://localhost:9080/meal';
    return {
        //label    function name
        getMeal: getMeal
    };

    function getMeal() {
        const url = `${baseUrl}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    }

}



module.exports = MealService;