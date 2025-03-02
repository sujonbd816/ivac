app.directive('stopccp', function(){
    return {
        scope: {},
        link:function(scope,element){
            element.on('cut copy paste', function (event) {
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
                $(element).tooltip('hide');
            }, function(){
                // on mouseleave
                $(element).tooltip('hide');
            });
        }
    };
});
app.directive("modalToggle", function(){
    return function(scope, element, attrs){
        // প্রথমে মডাল লুকিয়ে ফেলি
        element.css('display', 'none');

        scope.$watch(function(){ return scope.open_modal; }, function(value) {
            console.log(scope.open_modal);
            // open_modal পরিবর্তন হলেও মডাল কখনো দেখানো হবে না
            element.css('display', 'none'); 
        });
    }
});