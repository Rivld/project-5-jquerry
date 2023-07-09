$(document).ready(function () {

    // hide tag p
    $("p").on("click", function () {
        $(this).hide();
    })

    // hide tag p
    $("#hideThis").on("click", function () {
        $("p").hide();
    })


    // dbclick
    $(".dbl_Click").on("dblclick", function () {
        $(this).hide();
    })

    $("#btnShow").on("click", function () {
        $(".box").show();
    })

    $("#btnHide").on("click", function () {
        $(".box").hide();
    })


    $("#toggle").on("click", function () {
        $(".box").fadeToggle(300);
    })


    $("#clickToBig").on("click", function () {
        $(".box").animate({
            width: "300px",
            height: "300px",
            marginLeft: "100px",
        }, 500).css({
            "background-color": "yellow"
        });
    })


    $("#clickToSmall").on("click", function () {
        $(".box").animate({
            width: "100px",
            height: "100px",
            marginLeft: "0px",
        }, 500).css({
            "background-color": "red"
        });
    })






    //onchange
    $(".inputName").on("change", function () {
        $(".alert-name").show()
    });

    $(".inputAddress").on("blur", function () {
        $(".alert-address").show()
    });

    $("a").on("click", function (e) {
        e.preventDefault()
    })

    $(document).mousemove(function (e) {
        $(".pointerCount").text('X: ' + e.pageX + ', Y: ' + e.pageY)
    })

    //ADD Class - Remove Class
    $(".text").on("click", function () {
        $(".text").addClass('disabled')
    })

    $(".text2").on("click", function () {
        $(".text").removeClass('disabled')
    })




    // product tab
    $('.product-item').hide()
    $('.product-item:first').show()

    $('.product-colors li a:not(:first)').addClass('inactive')


    $('.product-colors li a').click(function () {
        const n = $(this).attr('id')
        if ($(this).hasClass('inactive')) {
            $('.product-colors li a').addClass('inactive')
            $(this).removeClass('inactive')
        }

        $('.product-item').hide()
        $('#' + n + 'image').fadeIn(500)

    })

    // slick slider
    $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,

    })




})