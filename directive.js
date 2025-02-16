app.directive('stopccp', function() {
    return {
        scope: {},
        link: function(scope, element) {
            element.on('cut copy paste', function (event) {});
        }
    };
});
app.directive('tooltip', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            $(element).hover(function(){
                // on mouseenter
                $(element).tooltip('show');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
