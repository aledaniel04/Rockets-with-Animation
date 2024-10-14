$(document).ready(function () {
    $("#cohete").click(function(){
        $("#cohete").animate({bottom: '500px'}, 1000, function(){
            $("#cohete").animate({left: '2500px'}, 1000, function(){
                $("#cohete").animate({left: '0px'})
                $("#cohete").animate({bottom: '0px'})
            })
        })
    })
});