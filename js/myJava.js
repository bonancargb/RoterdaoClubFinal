
$(document).ready(function() {
let rotated = false;

$('#rotate').click(function() {
    if (!rotated) {
    $(this).animate({
        rotate: '-90deg' 
    }); 
    } else {
    $(this).animate({
        rotate: '0deg'
        });
    }
    rotated = !rotated
    });
});

$(document).ready(function() {
    var $button = $('.show-more');
    var currentIndex = 0; 

    $button.click(function() {
        var totalDivs = $('.row-hidden').length; 
        var $divsWithHide = $('.row-hidden.hide'); 
        if ($divsWithHide.length > 1 && currentIndex <= totalDivs) {
            $('.row-hidden').eq(currentIndex).removeClass('hide');
        
            currentIndex++;

        } else if ($divsWithHide.length === 1 && currentIndex <= totalDivs) {
            $('.row-hidden').eq(currentIndex).removeClass('hide');
            $(".mais-ou-menos .mais").addClass('hide');
            $(".mais-ou-menos .menos").removeClass('hide');
            $(".mais-ou-menos img").addClass("cima-ou-baixo");

            currentIndex++;

        } else {
            currentIndex = 0;
            $('.row-hidden').addClass('hide');
            $(".mais-ou-menos .menos").addClass('hide');
            $(".mais-ou-menos .mais").removeClass('hide');
            $(".mais-ou-menos img").removeClass("cima-ou-baixo");
        }   
    });
});


// cartao maquina

$(document).ready(function () { 
    $(".maquina .cartao .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".maquina .cartao").addClass("cartao-grande-a-sair");
        $(".maquina .cartao").removeClass("atraso-cartao");
        $(".maquina .cartao .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".maquina .cartao-grande-fixed").removeClass("cartao-grande-fora");
        $(".maquina .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".maquina .cartao-grande-fixed .sair").click(function () {
        $(".maquina .cartao").removeClass("cartao-grande-a-sair");
        $(".maquina .cartao").addClass("atraso-cartao");
        $(".maquina .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".maquina .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".maquina .cartao-grande-fixed").css("transition-delay","0s");
        $(".maquina .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao umo

$(document).ready(function () { 
    $(".umo .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".umo .cartao").addClass("cartao-grande-a-sair");
        $(".umo .cartao").removeClass("atraso-cartao");
        $(".umo .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".umo .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".umo .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".umo .cartao-grande-fixed .sair").click(function () {
        $(".umo .cartao").removeClass("cartao-grande-a-sair");
        $(".umo .cartao").addClass("atraso-cartao");
        $(".umo .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".umo .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".umo .cartao-grande-fixed").css("transition-delay","0s");
        $(".umo .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao lightning

$(document).ready(function () { 
    $(".lightning .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".lightning .cartao").addClass("cartao-grande-a-sair");
        $(".lightning .cartao").removeClass("atraso-cartao");
        $(".lightning .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".lightning .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".lightning .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".lightning .cartao-grande-fixed .sair").click(function () {
        $(".lightning .cartao").removeClass("cartao-grande-a-sair");
        $(".lightning .cartao").addClass("atraso-cartao");
        $(".lightning .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".lightning .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".lightning .cartao-grande-fixed").css("transition-delay","0s");
        $(".lightning .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao querubim

$(document).ready(function () { 
    $(".querubim .cartao .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".querubim .cartao").addClass("cartao-grande-a-sair");
        $(".querubim .cartao").removeClass("atraso-cartao");
        $(".querubim .cartao .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".querubim .cartao-grande-fixed").removeClass("cartao-grande-fora");
        $(".querubim .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".querubim .cartao-grande-fixed .sair").click(function () {
        $(".querubim .cartao").removeClass("cartao-grande-a-sair");
        $(".querubim .cartao").addClass("atraso-cartao");
        $(".querubim .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".querubim .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".querubim .cartao-grande-fixed").css("transition-delay","0s");
        $(".querubim .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao fbac

$(document).ready(function () { 
    $(".fbac .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".fbac .cartao").addClass("cartao-grande-a-sair");
        $(".fbac .cartao").removeClass("atraso-cartao");
        $(".fbac .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".fbac .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".fbac .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".fbac .cartao-grande-fixed .sair").click(function () {
        $(".fbac .cartao").removeClass("cartao-grande-a-sair");
        $(".fbac .cartao").addClass("atraso-cartao");
        $(".fbac .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".fbac .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".fbac .cartao-grande-fixed").css("transition-delay","0s");
        $(".fbac .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao bonanca

$(document).ready(function () { 
    $(".bonanca .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".bonanca .cartao").addClass("cartao-grande-a-sair");
        $(".bonanca .cartao").removeClass("atraso-cartao");
        $(".bonanca .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".bonanca .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".bonanca .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".bonanca .cartao-grande-fixed .sair").click(function () {
        $(".bonanca .cartao").removeClass("cartao-grande-a-sair");
        $(".bonanca .cartao").addClass("atraso-cartao");
        $(".bonanca .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".bonanca .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".bonanca .cartao-grande-fixed").css("transition-delay","0s");
        $(".bonanca .cartao-grande-a-sair").css("transition-delay","1s");
    });
});


// AGENDA TAGS

$(document).ready(function() { 
    $(".dropdown button").click(function () {
        $(".dropdown button img").toggleClass("invertido");
    });
    $(".tags-eventos .dropdown-menu .tag-1").click(function () {
        // alert("clique");
        $(".dj-set, .comedia, .burlesco, .tag-1").addClass("invisivel");
        $(".concerto.dj-set, .concerto.comedia, .concerto.burlesco, .concerto, .todos, .tag-2, .tag-3, .tag-4, .tag-5").removeClass("invisivel");
        $(".mudar p").text("Concerto");
    });
    $(".tags-eventos .dropdown-menu .tag-2").click(function () {
        // alert("clique");
        $(".concerto, .comedia, .burlesco, .tag-2").addClass("invisivel");
        $(".concerto.dj-set, .comedia.dj-set, .burlesco.dj-set, .dj-set, .todos, .tag-1, .tag-3, .tag-4, .tag-5").removeClass("invisivel");
        $(".mudar p").text("DJ Set");
        
    });
    $(".tags-eventos .dropdown-menu .tag-3").click(function () {
        // alert("clique");
        $(".concerto, .dj-set, .burlesco, .tag-3").addClass("invisivel");
        $(".concerto.comedia, .comedia.dj-set, .burlesco.comedia, .comedia, .todos, .tag-1, .tag-2, .tag-4, .tag-5").removeClass("invisivel");
        $(".mudar p").text("Comédia");
    });
    $(".tags-eventos .dropdown-menu .tag-4").click(function () {
        // alert("clique");
        $(".concerto, .dj-set, .comedia, .tag-4").addClass("invisivel");
        $(".concerto.burlesco, .burlesco.dj-set, .burlesco.comedia, .burlesco, .todos, .tag-1, .tag-2, .tag-3, .tag-5").removeClass("invisivel");
        $(".mudar p").text("Burlesco");
    });
    $(".tags-eventos .dropdown-menu .tag-5").click(function () {
        // alert("clique");
        $(".todos, .tag-5").addClass("invisivel");
        $(".concerto, .dj-set, .comedia, .burlesco, .tag-1, .tag-2, .tag-3, .tag-4").removeClass("invisivel");
        $(".mudar p").text("Todos os Eventos");
    });
});


// MENU SMALL

$(document).ready(function() {
    let rotated = false;

    $('#rotate').click(function() {
      if (!rotated) {
        $(this).animate({
          rotate: '-90deg' 
        }); 
      } else {
        $(this).animate({
          rotate: '0deg'
          });
        }
        rotated = !rotated
      });
    });


// CAROUSEL INDEX

const nextIcon = '<img class="next px-1" src="./img/next.svg">';
const prevIcon = '<img class="prev px-1" src="./img/previous.svg">';

$(document).ready(function() {
$('.destaques-carousel').slick({
  centerMode:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  infinite:true,
  centerMode: true,
  centerPadding: 'calc(50% - 600px)',
  dots: true,
  arrows: true,
  appendArrows: ".nav-test", 
  appendDots: ".dot-test",
  prevArrow: prevIcon,
  nextArrow: nextIcon,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        centerPadding: "calc(50% - 525px)",
      }
    },
    {
      breakpoint: 1199,
      settings: {
        centerPadding: "calc(50% - 440px)",
      }
    }
    ]
  });
});

$('.main-carousel').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
});


// SOBRE BACK E FRONT CAROUSELS

$(document).ready(function() {
    $('.back-carousel').owlCarousel({
    rtl:true,
    loop: true,
    items: 3,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    center: true,
    nav: false,
    responsive: {
            0: {
                items: 1 
            },
            768: {
                items: 2 
            },   
    }
  });

  $('.back-carousel').trigger('play.owl.autoplay',[500]);
  function setSpeed(){
      $('.back-carousel').trigger('play.owl.autoplay',[6000]);
  }
  setTimeout(setSpeed, 250);

  $(document).ready(function() {
    $('.front-carousel').owlCarousel({
    loop: true,
    items: 3,
    autoplay: true,
    slideTransition: 'linear',
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    center: true,
    nav: false,
    responsive: {
            0: {
                items: 1 
            },
            768: {
                items: 2 
            }
    }
    });
  
    $('.front-carousel').trigger('play.owl.autoplay',[500]);
    function setSpeed(){
        $('.front-carousel').trigger('play.owl.autoplay',[6000]);
    }
    setTimeout(setSpeed,250);
    });
  });


 
