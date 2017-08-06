MealService.$inject = ['$http'];

function MealService($http) {
    const baseUrl = 'http://localhost:9080/meal';
    return {
        getMeal: getMeal
    };

    function getMeal(date, course) {
        const url = `${baseUrl}/${date.toISOString()}/${course}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    }
};



module.exports = MealService;