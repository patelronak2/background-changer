$(document).ready(function(){
    $("#solid-color").hide();
    $("#image-url").hide();
    //Generate a random gradient
    changeWithGradient(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),"diagonal");

    function changeWithRGBValue(r,g,b){
        $('.background').css({"background": "rgb("+ r + "," + g + "," + b + ")"});
    }

    function changeWithGradient(r1,g1,b1,r2,g2,b2,direction){
        $("#red-1").val(r1);
        $("#green-1").val(g1);
        $("#blue-1").val(b1);
        $("#red-2").val(r2);
        $("#green-2").val(g2);
        $("#blue-2").val(b2);
        switch (direction) {
            case 'diagonal':
                $('.background').css({"background": "linear-gradient(to bottom right, rgb("+ r1 + "," + g1 + "," + b1 + "), rgb("+ r2 + "," + g2 + "," + b2 + "))"});
                break;
        
            default:
                $('.background').css({"background": "linear-gradient(to "+ direction +", rgb("+ r1 + "," + g1 + "," + b1 + "), rgb("+ r2 + "," + g2 + "," + b2 + "))"});
                break;
        }
        
    }

    function changebackgroundWithImage(url){
        $('.background').css({"background": "url("+ url + ") no-repeat fixed center", "background-size": "cover"});
    }

    function calltoChangeGradient() {
        var direction = $("input[name='gradient-direction']:checked").attr('id');
        var r1 = $("#red-1").val();
        var g1 = $("#green-1").val();
        var b1 = $("#blue-1").val();
        var r2 = $("#red-2").val();
        var g2 = $("#green-2").val();
        var b2 = $("#blue-2").val();
        if(direction == "diagonal"){
            changeWithGradient(r1,g1,b1,r2,g2,b2,"diagonal");
        }else{
            changeWithGradient(r1,g1,b1,r2,g2,b2,direction);
        }
    }

    $('input[type=radio][name=gradient-direction]').change(function(){
        calltoChangeGradient();
    });

    $('input[type=radio][name=background-type]').change(function(){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        switch ($(this).attr('id')) {
            case 'gradient':
                $("#solid-color").hide();
                $("#gradient-color").show();
                $("#image-url").hide();
                var r1 = Math.floor(Math.random() * 255);
                var g1 = Math.floor(Math.random() * 255);
                var b1 = Math.floor(Math.random() * 255);
                changeWithGradient(r,g,b,r1,g1,b1,"diagonal");
                break;
            case 'image':
                $("#solid-color").hide();
                $("#gradient-color").hide();
                $("#image-url").show();
                changebackgroundWithImage("https://source.unsplash.com/random");
                break;
            default:
                //Generate a random rgb value
                $("#solid-color").show();
                $("#gradient-color").hide();
                $("#image-url").hide();
                $("#red").val(r);
                $("#green").val(g);
                $("#blue").val(b);
                changeWithRGBValue(r,g,b);
                break;
        }
    });

    $("#image-url form").submit(function(e){

        changebackgroundWithImage($("#url").val());
        $("#url").val("");
        e.preventDefault();
    });

    $("#solid-color form").submit(function (e) {
        changeWithRGBValue($("#red").val(),$("#green").val(),$("#blue").val())
        e.preventDefault();
    });

    $("#gradient-color form").submit(function (e) {
        calltoChangeGradient();
        e.preventDefault();
    });
});