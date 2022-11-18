$(document).ready(function () {
    // $('.box-tiles').mouseenter( function() {
    //     // console.log("mouse enter");
    //     // $(this).animate({color:'red'},100);
    //     // $(this).html("clicked");
    //     $(this).css("background-color" , "#f4f4f4")
    // });
    // $('.box-tiles').mouseleave( function() {
    //     // console.log("mouse left");
    //     // $(this).animate({color,'red'},100);
    //     // $(this).html("COLOR");
    //     if($(this).css("background-color")==="green"){
    //         console.log("this is green");
    //     }
    //     else{
    //         $(this).css("background-color" , "#ffffff");
    //     }

    // });
    // $('.box-tiles').click(function (){
    //     if($(this).css("background-color")==="rgb(255, 255, 255)"){
    //         $(this).css("background-color" , "green");
    //     } else{
    //         $(this).css("background-color" , "#ffffff");
    //     }        
    // })
    // $('.box-tiles').click(function ()
    // {
    // for(var i = 1; i <= 9; i++)//see that I removed the $ preceeding the `for` keyword, it should not have been there
    // {
    //         $('.box-tiles').click(function ()
    //         {
    //         console.log(i);
    //         if(i%2 != 0){
    //             $('body').css("background-color", "red");
    //         } else if(i%2 == 0){
    //             $('body').css("background-color", "white");
    //         }

    //         if($(this).css("background-color")==="rgb(255, 255, 255)" && i % 2 == 0){
    //             $(this).css("background-color" , "rgb(0, 255, 0)");
    //         } 
    //         if($(this).css("background-color")==="rgb(255, 255, 255)" && i % 2 == 1){
    //             $(this).css("background-color" , "rgb(255, 0, 0)");
    //         }
    //     });

    //     } 
    // });
    // function myIterating($('this'), i) {
    //     if(i=10){
    //         return;
    //     }
    //     if(i%2 !=0){
    //         $(this).css("background-color" , "rgb(0, 255, 0)");
    //     } else{
    //         $(this).css("background-color" , "rgb(255, 0, 0)");
    //     }
    // };
    // i=1;
    // $('.box-tiles').click(myIterating ($('this'),i+1));

    // myJSON = '[1, 2, 3],[4,5,6],[7,8,9]';

    // arr1 = 'arr1';
    // arr2 = 'arr2';
    // arr3 = 'arr3';
    // arr4 = 'arr4';
    // arr5 = 'arr5';
    // arr6 = 'arr6';
    // arr7 = 'arr7';
    // arr8 = 'arr8';
    // arr9 = 'arr9';

    // myJSON = '{"row1":["arr1","arr2","arr3"], "row2":["arr4","arr5","arr6"], "row3":["arr7","arr8","arr9"]}';
    // myArray = JSON.parse(myJSON);

    myJSON = ["arr1","arr2","arr3","arr4","arr5","arr6","arr7","arr8","arr9"];

    i = 0;
    // myArray = JSON.parse(myJSON);

    function checkLine(elmId,clsnm,i){
        // for(i=0; i<3; i++){
        //     for(j=0; j<3; j++){

        //     }
        // }
        // 'box-tiles cross'
        // 'box-tiles ooo'
        // 012
        // 345
        // 678

        myNum = parseInt(elmId);

        if(clsnm == 'box-tiles cross'){
            myJSON[myNum] = 1;
        } else{
            myJSON[myNum] = 0;
        }
        // console.log(clsnm)
        if((myJSON[0]==myJSON[1]) && (myJSON[1]==myJSON[2])){
            if(myJSON[0]==1){
                console.log("1 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("1 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[3]==myJSON[4]) && (myJSON[4]==myJSON[5])){
            if(myJSON[3]==1){
                console.log("2 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("2 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[6]==myJSON[7]) && (myJSON[7]==myJSON[8])){
            if(myJSON[6]==1){
                console.log("3 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("3 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[0]==myJSON[4]) && (myJSON[4]==myJSON[8])){
            if(myJSON[0]==1){
                console.log("4 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("4 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[6]==myJSON[4]) && (myJSON[4]==myJSON[2])){
            if(myJSON[6]==1){
                console.log("5 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("5 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        }  else if((myJSON[0]==myJSON[3]) && (myJSON[3]==myJSON[6])){
            if(myJSON[0]==1){
                console.log("6 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("6 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[1]==myJSON[4]) && (myJSON[4]==myJSON[7])){
            if(myJSON[1]==1){
                console.log("7 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("7 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[2]==myJSON[5]) && (myJSON[5]==myJSON[8])){
            if(myJSON[2]==1){
                console.log("8 if red wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(255, 0, 0)"});
                $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("RED PLAYER WINS");
            } else{
                console.log("8 else green wins");
                $('.ttt-grid').css("display","none");
                $('.postmatch').css({"display":"block", "display":"flex", "background-color":"rgb(0, 255, 0)"});
                $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                $('#body-color').children('h5').html(" ");
                $('.postmatch').children('h1').html("GREEN PLAYER WINS");
            }
        } else if((myJSON[0]+myJSON[1]+myJSON[1]+myJSON[2]+myJSON[3]+myJSON[4]+myJSON[5]+myJSON[6]+myJSON[7]+myJSON[8]) > 4){
            console.log(i);
            $('.ttt-grid').css("display","none");
            $('.postmatch').css({"display":"block", "display":"flex"});
            $('.postmatch').children('h1').html("MATCH IS TIED");
            $('#body-color').css("background-color" , "rgb(219, 112, 147)");
            // $('#body-color').css("background-color" , "rgb(255, 255, 0)");
            $('#body-color').children('h5').html(" ");

        }
    }

    $('#body-color').css("background-color" , "rgb(255, 0, 0)");
    $('#body-color').children('h5').html("red's turn");

    $('.box-tiles').click(function (){
        if($(this).hasClass('cross') || $(this).hasClass('ooo')){
            // $(this).addClass('ooo');
            // console.log("do not click");
        } else{
    
            if($(this).css("background-color") === "rgb(255, 255, 255)"){
                if($('#body-color').css("background-color") === "rgb(255, 0, 0)"){
                    $('#body-color').css("background-color" , "rgb(0, 255, 0)");
                    $('#body-color').children('h5').html("green's turn");
                    // $(this).css("background-color" , "rgb(255, 0, 0)");
                    $(this).addClass('cross');
                    // $(this).children().addClass('cross');
                    // console.log('cross');
                    var elmId = $(this).attr("id");
                    var clsnm = $(this).attr("class");
                    checkLine(elmId,clsnm,i+1);

                } 
                else if($('#body-color').css("background-color") === "rgb(0, 255, 0)"){
                    $('#body-color').css("background-color" , "rgb(255, 0, 0)");
                    $('#body-color').children('h5').html("red's turn");
                    // $(this).css("background-color" , "rgb(0, 255, 0)");
                    // $(this).addClass('ooo');
                    if(!$(this).hasClass('cross')){
                        $(this).addClass('ooo');
                    }
                    var elmId = $(this).attr("id");
                    var clsnm = $(this).attr("class");
                    checkLine(elmId,clsnm,i+1);
                    // if($(this).children(hasClass('red'))){
                    //     $(this).children().addClass('ooo');
                    // }
                    // console.log('0000');
                }
            }
        }

    });

});
