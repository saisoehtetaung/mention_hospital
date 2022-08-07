$(document).ready(() => {
    // Start Info Section 

    $(window).scroll(function () {
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);
        if (getscrollpoint >= 220) {
            $(".infotexts").addClass("fromlefts");
            $(".infotexts").addClass("fromrights");
        } else {
            $(".infotexts").removeClass("fromlefts");
            $(".infotexts").removeClass("fromrights");
        }
    })
    // End Info section 

    // Start Premises Section 
    $("#lightslider").lightSlider({
        // auto: true,
        item:4,
        loop:true,
        slideMove:1,
        speed:600,
    }).play();
    // End Premises Section 

    // Start pricing Section 
    $(window).scroll(function () {
        let getscroll = $(this).scrollTop();
        if (getscroll >= 2450) {
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");

        } else {
             $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    });
    // End Pricing Section 

    // Start ADV section
    $("#videos").click(function () {
        var getmodal = $(this).data("bs-target");
        var getvideosrc = $(this).data("video");
        var videourlwithauto = getvideosrc + "?autoplay=1";

        $(getmodal + " iframe").attr("src", videourlwithauto);
        $(getmodal + " button.btn-close").click(function () {
            $(getmodal + " iframe").attr("src", getvideosrc);
        });

        $(getmodal).click('hidden.bs.modal', function () {
            $(germodal + " iframe").attr("src", getvideosrc);
        });
    });
    // End ADV Section 


    // Start Join Us Section 
    $(".accordion").accordion();
    // End Join Us Section

    // start Footer Section 
    $("#getyear").text(new Date().getUTCFullYear());
        // End footer section
    
    // Start Progress 
    $(window).scroll(function () {
// By Jquery 
        var getprogress = $("#progresses");
        var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();

        // var getscrollheight = $(document).height();
        // var getclientheight = $(window).height();
        // // console.log(getclientheight);
       


//  By javascript 
        var getscrollheight = document.documentElement.scrollHeight;
        var getclientheight = document.documentElement.clientHeight;
        console.log(getscrollheight + " " + getclientheight);
        
        var getfinalheight = Math.round(getscrolltop * 100 / (getscrollheight - getclientheight));
        
        getprogressval.text(`${getfinalheight}%`);

        getprogress.css({
            "background": `conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        })
        

        // st * 100 / (pjheight - cvheight)
    });
    // End Progress 
})