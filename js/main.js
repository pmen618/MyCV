(function($) {

  new WOW().init();

// Hide loading image
  jQuery(window).load(function() {
    jQuery('.doc-loader').fadeOut('slow');
  });

//Show menu
//
(function () {
  var header = document.querySelector('.navbar-inner');
  var icon = document.querySelector('.menu-btn');
  icon.onclick = function () {
    header.classList.toggle('open');
    icon.classList.toggle('active');
  }
}());

// Light box
// 

$(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });

  });
$(document).ready(function() {     
    $('.list-project.one').hover(function(){     
        $('#bgimg0').addClass('visible');    
    },     
    function(){    
        $('#bgimg0').removeClass('visible');     
    });
});

$(document).ready(function() {     
    $('.list-project.two').hover(function(){     
        $('#bgimg1').addClass('visible');    
    },     
    function(){    
        $('#bgimg1').removeClass('visible');     
    });
}); 

$(document).ready(function() {     
    $('.list-project.three').hover(function(){     
        $('#bgimg2').addClass('visible');    
    },     
    function(){    
        $('#bgimg2').removeClass('visible');     
    });
}); 

$(document).ready(function() {     
    $('.list-project.four').hover(function(){     
        $('#bgimg3').addClass('visible');    
    },     
    function(){    
        $('#bgimg3').removeClass('visible');     
    });
}); 

$(document).ready(function() {     
    $('.list-project.five').hover(function(){     
        $('#bgimg4').addClass('visible');    
    },     
    function(){    
        $('#bgimg4').removeClass('visible');     
    });
});
$(document).ready(function() {     
    $('.list-project.six').hover(function(){     
        $('#bgimg5').addClass('visible');    
    },     
    function(){    
        $('#bgimg5').removeClass('visible');     
    });
});
$(document).ready(function() {     
    $('.list-project.seven').hover(function(){     
        $('#bgimg6').addClass('visible');    
    },     
    function(){    
        $('#bgimg6').removeClass('visible');     
    });
  });
$(document).ready(function() {     
    $('.list-project.eight').hover(function(){     
        $('#bgimg7').addClass('visible');    
    },     
    function(){    
        $('#bgimg7').removeClass('visible');     
    });
});
$(document).ready(function() {     
    $('.list-project.nine').hover(function(){     
        $('#bgimg8').addClass('visible');    
    },     
    function(){    
        $('#bgimg8').removeClass('visible');     
    });
  });


$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});

})(jQuery);

// SLide

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  
}

$(window).scroll(function(){
    if ($(window).scrollTop() >= 0 && $(window).scrollTop() <=600) {
        $('.about-img-left').addClass('fixed-img');
       // $('nav .site-title').addClass('visible-title');
    }
    else {
        $('.about-img-left').removeClass('fixed-img');
       // $('nav .site-title').removeClass('visible-title');
    }
});