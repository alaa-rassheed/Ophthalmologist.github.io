
jQuery(document).on('ready', function () {

  let backToTop = document.getElementById('back-to-top');
  let socialMedia = document.getElementById('wrapper')
    "use strict";

    /*-------------------------------------
        Back to top
    -------------------------------------*/

    addEventListener('scroll', function(){
      window.onscroll = function() {
        if(scrollY >= 1000){
          backToTop.style.display = 'block';
        }else{
          backToTop.style.display = 'none';
        }
      }
      backToTop.onclick = function() {
        scroll({
          top: 0,
          behavior: 'smooth',
        })
      }
    })

    /*-------------------------------------
        social media
    -------------------------------------*/

    addEventListener('scroll', function(){
      if(scrollY >= 400){
        socialMedia.style.transform = "translate(15%, 100%)";
      }else{
        socialMedia.style.transform = "translate(-100%, 100%)";
      }
    })


    

    /*-------------------------------------
        Animation on scroll: Number rotator
    -------------------------------------*/
    $("[data-appear-animation]").each(function() {
        var self      = $(this);
        var animation = self.data("appear-animation");
        var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);        

        if( $(window).width() > 959 ) { 
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
          self.html(self.data('to'));
        }
    });

    /*-------------------------------------
    SlickSlider
    -------------------------------------*/
       var slickslider = $(".slick-carousel");
       slickslider.each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1, 
                $navdots = ($this.data('dots')) ? $this.data('dots') : false,
                $navarrow = ($this.data('arrows')) ? $this.data('arrows') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $d_show = ($this.attr('data-slides')) ? $this.data('slides') : 3,
                $t_show = ($this.attr('data-tslides')) ? $this.data('tslides') : 2,
                $i_show = ($this.attr('data-islides')) ? $this.data('islides') : 1;
                

                $this.slick({
                  dots: $navdots,
                  infinite: false,
                  arrows:$navarrow,
                  autoplay: $autoplay, 
                  speed: 300, 
                  slidesToShow: $d_show,
                  slidesToScroll: 1,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: $t_show,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: $i_show,
                        slidesToScroll: 1
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });
          });

    /*-------------------------------------
    ProgressBar
    -------------------------------------*/
      var $progressBar = $('.skill-bar');
            $progressBar.each(function (i, elem) {
                var $elem = $(this),
                    percent = $elem.attr('data-percent') || "100",
                    delay = $elem.attr('data-delay') || "100",
                    type = $elem.attr('data-type') || "%";

                if (!$elem.hasClass('progress-animated')) {
                    $elem.css({
                        'width': '0%'
                    });
                }
                var progressBarRun = function () {
                    $elem.animate({
                        'width': percent + '%'
                    }, 'easeInOutCirc').addClass('progress-animated');

                    $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + '</span>');
                };
                    $(elem).appear(function () {
                        setTimeout(function () {
                            progressBarRun();
                        }, delay);
                    });
            }); 
    /*-------------------------------------
    PrettyPhoto
    -------------------------------------*/
      $('a[data-rel^="prettyPhoto"]').prettyPhoto();
      $('a[rel^="prettyPhoto"]').prettyPhoto();

    
      

    /*-------------------------------------
    Banner Slider
    -------------------------------------*/ 
    setTimeout(function () {              
              $('.home-banner .carousel-item').eq(0).addClass('first-slide');
      }, 300);
    $('#Bannerslider').on('slide.bs.carousel', function () {
      $('#Bannerslider .carousel-item').eq(0).removeClass('first-slide');
      $('#Bannerslider .carousel-item').eq(0).addClass('first-slide-active');
   })

   
    
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.7});
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});

    /*-------------------------------------
    Circle Progressbar
    -------------------------------------*/
    jQuery('.db-circle-outer').each(function(){
      var this_circle = jQuery(this);
      var emptyFill_val  = this_circle.data('emptyfill');
      var thickness_val  = this_circle.data('thickness');
      var fill_gradient  = this_circle.data('gradient');
      var fill_val       = this_circle.data('fill');
      var startangle_val = (-Math.PI / 4 * 2);
      if( this_circle.closest('.db-fid').hasClass('db-fid-boxstyle-style2') ){
        var startangle_val = (-Math.PI / 4 * 1.7);
      }
      if( fill_gradient!='' ){
        fill_gradient = fill_gradient.split('|');
        fill_val = {gradient: [ fill_gradient[0], fill_gradient[1] ]};
      }
      if( typeof jQuery.fn.circleProgress == "function" ){
        var digit   = this_circle.data('digit');
        var before  = this_circle.data('before');
        var after   = this_circle.data('after');
        var digit       = Number( digit );
        var short_digit = ( digit/100 );
        var size_val  = this_circle.data('size');
        jQuery('.db-circle', this_circle ).circleProgress({
          value: 0,
          size: size_val,
          startAngle: startangle_val,
          thickness: thickness_val,
          emptyFill: emptyFill_val,
          fill: fill_val
        }).on('circle-animation-progress', function(event, progress, stepValue) { // Rotate number when animating
          this_circle.find('.db-circle-number').html( before + Math.round( stepValue*100 ) + after );
        });
      }
      this_circle.waypoint(function(direction) {
        if( !this_circle.hasClass('completed') ){
          if( typeof jQuery.fn.circleProgress == "function" ){
            jQuery('.db-circle', this_circle ).circleProgress( { value: short_digit } );
          };
          this_circle.addClass('completed');
        }
      }, { offset:'85%' });
    });


    
      //===== Sticky

      jQuery(window).on('scroll', function (event) {
          var scroll = jQuery(window).scrollTop();
          if (scroll < 180) {
              jQuery(".header-sticky").removeClass("sticky");
          } else {
              jQuery(".header-sticky").addClass("sticky");
          }
      });



  /*---canvas menu activation---*/
  $('.canvas_open').on('click', function(){
      $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
  });
  
  $('.canvas_close,.off_canvars_overlay').on('click', function(){
      $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
  });

  /*---Off Canvas Menu---*/
  var $offcanvasNav = $('.offcanvas_main_menu'),
      $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
  $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
  
  $offcanvasNavSubMenu.slideUp();
  
  $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
      var $this = $(this);
      if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
          e.preventDefault();
          if ($this.siblings('ul:visible').length){
              $this.siblings('ul').slideUp('slow');
          }else {
              $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
              $this.siblings('ul').slideDown('slow');
          }
      }
      if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
          $this.parent().toggleClass('menu-open');
      }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
          $this.toggleClass('menu-open');
      }
  });



  //LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
      type: 'iframe'
      // other options
  });



})(jQuery);

