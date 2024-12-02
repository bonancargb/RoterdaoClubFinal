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

// MACKINTOSH BRAUN

$(document).ready(function () { 
    $(".mackintosh_braun .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".mackintosh_braun .cartao").addClass("cartao-grande-a-sair");
        $(".mackintosh_braun .cartao").removeClass("atraso-cartao");
        $(".mackintosh_braun .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".mackintosh_braun .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".mackintosh_braun .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".mackintosh_braun .cartao-grande-fixed .sair").click(function () {
        $(".mackintosh_braun .cartao").removeClass("cartao-grande-a-sair");
        $(".mackintosh_braun .cartao").addClass("atraso-cartao");
        $(".mackintosh_braun .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".mackintosh_braun .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".mackintosh_braun .cartao-grande-fixed").css("transition-delay","0s");
        $(".mackintosh_braun .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao kasabian_1

$(document).ready(function () { 
    $(".kasabian_1 .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".kasabian_1 .cartao").addClass("cartao-grande-a-sair");
        $(".kasabian_1 .cartao").removeClass("atraso-cartao");
        $(".kasabian_1 .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".kasabian_1 .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".kasabian_1 .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".kasabian_1 .cartao-grande-fixed .sair").click(function () {
        $(".kasabian_1 .cartao").removeClass("cartao-grande-a-sair");
        $(".kasabian_1 .cartao").addClass("atraso-cartao");
        $(".kasabian_1 .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".kasabian_1 .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".kasabian_1 .cartao-grande-fixed").css("transition-delay","0s");
        $(".kasabian_1 .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao q_lazzarus

$(document).ready(function () { 
    $(".q_lazzarus .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".q_lazzarus .cartao").addClass("cartao-grande-a-sair");
        $(".q_lazzarus .cartao").removeClass("atraso-cartao");
        $(".q_lazzarus .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".q_lazzarus .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".q_lazzarus .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".q_lazzarus .cartao-grande-fixed .sair").click(function () {
        $(".q_lazzarus .cartao").removeClass("cartao-grande-a-sair");
        $(".q_lazzarus .cartao").addClass("atraso-cartao");
        $(".q_lazzarus .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".q_lazzarus .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".q_lazzarus .cartao-grande-fixed").css("transition-delay","0s");
        $(".q_lazzarus .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao laurel_1

$(document).ready(function () { 
    $(".laurel_1 .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".laurel_1 .cartao").addClass("cartao-grande-a-sair");
        $(".laurel_1 .cartao").removeClass("atraso-cartao");
        $(".laurel_1 .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".laurel_1 .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".laurel_1 .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".laurel_1 .cartao-grande-fixed .sair").click(function () {
        $(".laurel_1 .cartao").removeClass("cartao-grande-a-sair");
        $(".laurel_1 .cartao").addClass("atraso-cartao");
        $(".laurel_1 .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".laurel_1 .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".laurel_1 .cartao-grande-fixed").css("transition-delay","0s");
        $(".laurel_1 .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao nothing but thieves

$(document).ready(function () { 
    $(".nothing_but_1 .cartao .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".nothing_but_1 .cartao").addClass("cartao-grande-a-sair");
        $(".nothing_but_1 .cartao").removeClass("atraso-cartao");
        $(".nothing_but_1 .cartao .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".nothing_but_1 .cartao-grande-fixed").removeClass("cartao-grande-fora");
        $(".nothing_but_1 .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".nothing_but_1 .cartao-grande-fixed .sair").click(function () {
        $(".nothing_but_1 .cartao").removeClass("cartao-grande-a-sair");
        $(".nothing_but_1 .cartao").addClass("atraso-cartao");
        $(".nothing_but_1 .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".nothing_but_1 .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".nothing_but_1 .cartao-grande-fixed").css("transition-delay","0s");
        $(".nothing_but_1 .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao the dare

$(document).ready(function () { 
    $(".the_dare .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".the_dare .cartao").addClass("cartao-grande-a-sair");
        $(".the_dare .cartao").removeClass("atraso-cartao");
        $(".the_dare .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".the_dare .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".the_dare .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".the_dare .cartao-grande-fixed .sair").click(function () {
        $(".the_dare .cartao").removeClass("cartao-grande-a-sair");
        $(".the_dare .cartao").addClass("atraso-cartao");
        $(".the_dare .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".the_dare .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".the_dare .cartao-grande-fixed").css("transition-delay","0s");
        $(".the_dare .cartao-grande-a-sair").css("transition-delay","1s");
    })
})

// cartao chvrches

$(document).ready(function () { 
    $(".chvrches .btn_style").click(function () { 
        // alert("GfG is clicked using click() method");
        $(".chvrches .cartao").addClass("cartao-grande-a-sair");
        $(".chvrches .cartao").removeClass("atraso-cartao");
        $(".chvrches .img-cartao").css("aspect-ratio","2/1");
        $(".cartao-background").removeClass("background-invisivel");
        $(".chvrches .cartao-grande-fora").removeClass("cartao-grande-fora");
        $(".chvrches .cartao-grande-fixed").css("transition-delay","1s");
    }); 
}); 

$(document).ready(function () {
    $(".chvrches .cartao-grande-fixed .sair").click(function () {
        $(".chvrches .cartao").removeClass("cartao-grande-a-sair");
        $(".chvrches .cartao").addClass("atraso-cartao");
        $(".chvrches .cartao .img-cartao").css("aspect-ratio","16/9");
        $(".cartao-background").addClass("background-invisivel");
        $(".chvrches .cartao-grande-fixed").addClass("cartao-grande-fora");
        $(".chvrches .cartao-grande-fixed").css("transition-delay","0s");
        $(".chvrches .cartao-grande-a-sair").css("transition-delay","1s");
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
          rotate: '-180deg' 
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


 
