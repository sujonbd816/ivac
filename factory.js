app.factory('LanguageService', function($http){
    return {
        get: function(){
            return $http.get(basepath+'/lang/language.json'); // You Have to give Correct Url either Local path or api etc

        }
    };
});