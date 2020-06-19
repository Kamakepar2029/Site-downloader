function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* Stick up menus
 ========================================================*/
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);


/* Copyright Year
 ========================================================*/
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);

/* Responsive Tabs
 ========================================================*/
(function ($) {
    var o = $('.resp-tabs');
    if (o.length > 0) {

        $(document).ready(function () {
            o.easyResponsiveTabs();
        });
    }
})(jQuery);

/* JQuery UI Accordion
 ========================================================*/
(function ($) {
    var o = $('.accordion');
    if (o.length > 0) {

        $(document).ready(function () {
            o.accordion({
                active: false,
                header: '.accordion_header',
                heightStyle: 'content',
                collapsible: true
            });
        });
    }
})(jQuery);


/* Owl Carousel
========================================================*/
(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        $(document).ready(function () {
            o.owlCarousel({
                margin: 30,
                smartSpeed: 450,
                loop: true,
                dots: false,
                dotsEach: 1,
                nav: true,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
                responsive: {
                    0: { items: 1 },
                    768: { items: 1},
                    980: { items: 1}
                }
            });
        });
    }
})(jQuery);


/* WOW
 ========================================================*/
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);


/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Camera
========================================================*/
(function ($) {
var o = $('#camera');
    if (o.length > 0) {

        $(document).ready(function () {
            o.camera({
                autoAdvance: true,
                height: '27.41463414634146%',
                minHeight: '350px',
                pagination: false,
                thumbnails: false,
                playPause: false,
                hover: false,
                loader: 'none',
                navigation: true,
                navigationHover: true,
                mobileNavHover: false,
                fx: 'simpleFade'
            })
        });
    }
})(jQuery);


/* Mailform
=============================================*/
$(document).ready(function () {
	$('head').append('<link rel="stylesheet" href="/local/templates/mpt/assets/tm/css/tm_docs.css" type="text/css" media="screen"><link href="/local/templates/mpt/css/tm_panel.css" rel="stylesheet">');
	$('body').prepend('<div id="panel"><div class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner" id="advanced"><span class="trigger"><strong></strong><em></em></span><div class="container"><div class="navbar-header"><button class="navbar-toggle tm_offs1" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"><ul class="nav navbar-nav"><li class="home"><a href="index.html" class="glyphicon glyphicon-home"></a></li><li class="divider-vertical"></li><li><a href="assets/getting-started.html">Getting started</a></li><li><a href="assets/css.html">CSS</a></li><li><a href="assets/components.html">Components</a></li><li><a href="assets/javascript.html">JavaScript</a></li><li class="divider-vertical"></li><li class="dropdown -tm-dropdown"><a data-toggle="dropdown" href="#">TM add-ons<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li role="presentation"><a role="menuitem" tabindex="-1" href="404.html">Pages</a><ul class="pages"><li><a href="404.html" role="menuitem" tabindex="-1">404 page</a></li><li><a href="assets/under-construction.html" role="menuitem" tabindex="-1">Under Construction</a></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" href="assets/portfolio.html">Porfolio</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="assets/slider.html">Slider</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="assets/social_media.html">Social and media</a></li></ul></li></ul></nav></div></div></div>');
});
$(window).scroll(
	function () {
		if (
			$(this).scrollTop() > 0) {
			$("#advanced").css({
				position: 'fixed'
			});
		} else {
			$("#advanced").css({
				position: 'relative'
			});
		}
	}
);
$(function () {
	var
		strCookies1 = $.cookie('panel1'),
		isAnimate = false,
		isOpen = false;

	if (strCookies1 == null) {
		$.cookie('panel1', 'closed');
		strCookies1 = $.cookie('panel1');
		isOpen = false;
	}

	if (strCookies1 == 'opened') {
		$("#advanced").css({
			marginTop: '0px'
		}).removeClass('closed');
		isOpen = true;
		$('#stuck_container').trigger('rePosition', 50); //for sticky menu
	} else {
		$("#advanced").css({
			marginTop: '-50px'
		}).addClass('closed');
		isOpen = false;
		$('#stuck_container').trigger('rePosition', 0); //for sticky menu
	}

	$("#advanced .trigger").click(
		function () {
			if (!isOpen) {
				$(this).find('strong').animate({
					opacity: 0
				}).parent().parent('#advanced').removeClass('closed').animate({
					marginTop: '0px'
				}, 500);
				$.cookie('panel1', 'opened');
				strCookies1 = $.cookie('panel1');

				isOpen = true;
				$('#stuck_container').trigger('rePosition', 50);
			} else {
				$(this).find('strong').animate({
					opacity: 1
				}).parent().parent('#advanced').addClass('closed').animate({
					marginTop: '-50px'
				}, 700)
				$.cookie('panel1', 'closed');
				strCookies1 = $.cookie('panel1');

				isOpen = false;
				$('#stuck_container').trigger('rePosition', 0); //for sticky menu
			}
		}
	)
});
/*--------- end panel *------------*/


/* Touch Touch Gallery
 =============================================*/
(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {

        $(document).ready(function () {
            o.touchTouch();
        });
    }
})(jQuery);
