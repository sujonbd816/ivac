var app = angular.module('indian_visa', ['vcRecaptcha','ghiscoding.validation','pascalprecht.translate','ui.bootstrap']);
app.filter('sce', ['$sce', function ($sce) {
    return $sce.trustAsHtml;
}]);
app.config(function ($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: basepath+'/locales/validation/',
        suffix: '.json'
    });

    // define translation maps you want to use on startup
    $translateProvider.preferredLanguage('en');
});