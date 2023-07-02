$(document).ready(function(){

    // hide tag p
    $( "p" ).on("click", function(){
        $(this).hide();
    })

    // hide tag p
    $( "#hideThis" ).on("click", function(){
        $("p").hide();
    })


    // dbclick
    $(".dbl_Click").on("dblclick", function(){
        $(this).hide();
    })

})