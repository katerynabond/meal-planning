MealService.$inject = ['$http'];

function MealService($http) {
    const baseUrl = 'http://localhost:9080/meal';
    return {
        getMeal: getMeal,
        getMealsForPlanning: getMealsForPlanning
    };

    function getMeal(date, course) {
        const url = `${baseUrl}/${date.toISOString()}/${course}`;
        return $http.get(url)
            .then(response => {
                return response.data;
            })
    };

    function getMealsForPlanning(course) {
        return [
            {
                title: 'Kasha',
                description : 'Energizing and nutritious, buckwheat is available throughout the year and can be served as an alternative to rice or made into porridge.',
                calories: '100 Cal',
                cookingTime: '15 min',
                added: 0,
                likes: 23
            },
            {
                title: 'Kasha 2',
                description : 'Energizing and nutritious, buckwheat is available throughout the year and can be served as an alternative to rice or made into porridge.',
                calories: '100 Cal',
                cookingTime: '15 min',
                added: 1,
                likes: 23
            },
            {
                title: 'Kasha 3',
                description : 'Energizing and nutritious, buckwheat is available throughout the year and can be served as an alternative to rice or made into porridge.',
                calories: '100 Cal',
                cookingTime: '15 min',
                added: 0,
                likes: 66
            },
        ];
    };
};



module.exports = MealService;