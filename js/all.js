$('.slider-blog-post').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  centerPadding: '00px',
  slidesToScroll: 4,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      centerMode: true,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });


// adding a script for the custom select

$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
  id      = $(this).attr("id"),
  name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function() {
    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});

// adding link to pagination blog page to active one item at a time
$(".pagination-links li").click( function(e) {
  $(".pagination-links li").removeClass("active");
  $(this).addClass("active");
});


// scroll for the header 

 $(window).scroll(function(event) {
          var s = jQuery(window).scrollTop();

          if( s > 100 ) {
            // $("header").css({'background': '#121f28'});
            $("header").css({'padding-top': '10px'});
          }
          if( s < 100 ) {
            $("header").css({'background': 'transparent'});
            $("header").css({'padding-top': '40px'});
        }
        
  });