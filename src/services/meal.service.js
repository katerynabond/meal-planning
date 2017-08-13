MealService.$inject = ['$http'];

function MealService($http) {
    const baseUrl = 'http://localhost:9080/';
    return {
        getMeal: getMeal,
        getMealsForPlanning: getMealsForPlanning,
        addMeal: addMeal,
        removeMeal: removeMeal
    };

    function getMeal(date, course) {
        const url = `${baseUrl}meal/${date.toISOString()}/${course}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    };

    function getMealsForPlanning(week, course) {
        const url = `${baseUrl}meals/${week.toISOString()}/${course}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    };

    function addMeal(week, course, meal) {
        const url = `${baseUrl}plan/${week.toISOString()}/${course}`;
        return $http.post(url, { mealId: meal._id })
            .then(() => {
                return true;
            }, () => {
                return false;
            });
    };

    function removeMeal(week, course, meal) {
        const url = `${baseUrl}plan/${week.toISOString()}/${course}/${meal._id}`;
        return $http.delete(url)
            .then(() => {
                return true;
            }, () => {
                return false;
            });
    };
};



module.exports = MealService;