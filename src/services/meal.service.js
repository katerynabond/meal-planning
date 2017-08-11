MealService.$inject = ['$http'];

function MealService($http) {
    const baseUrl = 'http://localhost:9080/';
    return {
        getMeal: getMeal,
        getMealsForPlanning: getMealsForPlanning
    };

    function getMeal(date, course) {
        const url = `${baseUrl}meal/${date.toISOString()}/${course}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    };

    function getMealsForPlanning(course) {
        const url = `${baseUrl}meals/${course}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    };
};



module.exports = MealService;