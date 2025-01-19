app.directive('stopccp', function(){
    return {
        scope: {},
        link:function(scope,element){
            element.on('cut copy paste', function (event) {
                event.preventDefault();
            });
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
app.directive("modalToggle",function(){
    return function(scope, element, attrs){
        scope.$watch(function(){ return scope.open_modal; }, function(value) {
            console.log(scope.open_modal);
            if (value) element.addClass('modal-show');
            else element.removeClass('modal-show');
        });
    }
});