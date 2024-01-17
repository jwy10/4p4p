function hasJqueryObject($elem) {
  return $elem.length > 0;
}
var UI = UI || {};

var Utils = {
  getMediaQuery: function (type) {
    return {
      pc: window.matchMedia('(min-width:1025px)'),
      tablet: window.matchMedia('(min-width:768px) and (max-width:1024px)'),
      mobile: window.matchMedia('all and (max-width:767px)'),
    }[type];
  },
};

UI.matchMedia = {
  init: function () {
    var _this = this;
    var pcMQ = Utils.getMediaQuery('pc');
    var tabletMQ = Utils.getMediaQuery('tablet');

    if (pcMQ.matches) {
      _this.matchedIsPC();
    } else {
      tabletMQ.matches ? _this.matchedIsTablet() : _this.matchedIsMobile();
    }
    pcMQ.addListener(function (mql) {
      document.location.reload();
      mql.matches && _this.matchedIsPC();
    });

    tabletMQ.addListener(function (mql) {
      document.location.reload();
      mql.matches ? _this.matchedIsTablet() : pcMQ.matches ? _this.matchedIsPC() : _this.matchedIsMobile();
    });
  },
  matchedIsPC: function () {
    UI.webMainAni.init();
  },
  matchedIsTablet: function () {
    UI.webMainAni.init();
  },
  matchedIsMobile: function () {
    UI.moMainAni.init();
  },
};

// 바디 스크롤 제어
var scrollHeight = 0;
UI.scrollSet = {
  init: function (type) {
    this.$wrap = $('body').find('#wrap');
    // 바디스크롤 제거
    if (type === 'off') {
      scrollHeight = $(document).scrollTop();
      $('body').css('overflow', 'hidden');
      this.$wrap.css('position', 'fixed');
      this.$wrap.css('top', -scrollHeight);
      return scrollHeight;
      // 바디스크롤 제거 해제
    } else if (type === 'on') {
      $('body').css('overflow', '');
      this.$wrap.css('position', 'relative');
      this.$wrap.css('top', 0);
      $(document).scrollTop(scrollHeight);
    }
  },
};

// 팝업 열기
UI.popupOpen = {
  init: function (obj, callback) {
    var popTarget = $('#pop-' + obj);
    popTarget.show().addClass('show');

    if (popTarget.hasClass('ndim')) {
      popTarget.css('left', 0);
    }

    UI.scrollSet.init('off'); // 바디스크롤 제거

    // 영역 외 클릭 닫기
    popTarget.off('click.popClose').on('click.popOpen', function (e) {
      if (!$(this).hasClass('ndim')) {
        if (!$("[class*='ly']").find('.wrap').has(e.target).length) {
          UI.popupClose.init(obj);
        }
      }
    });

    $('body').on('scroll touchmove mousewheel', function (event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  },
};

// 팝업 닫기
UI.popupClose = {
  init: function (obj) {
    var popTarget = $('#pop-' + obj);

    if (popTarget.hasClass('ly-btm')) {
      popTarget.removeClass('show');
    } else {
      popTarget.removeClass('show').hide();
    }

    //팝업 2중으로 띄웠을때
    if ($(document).find('.ly-pop').hasClass('show')) {
      UI.scrollSet.init('off');
    } else {
      UI.scrollSet.init('on');
    }

    $('body').off('scroll touchmove mousewheel');
  },
};

// main
UI.webMainAni = {
  init: function () {
    const brandSwiper = new Swiper('.brand-swiper', {
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 7,
      loop: true,
      allowTouchMove: false,
      speed: 1500,
      autoplay: {
        delay: 0,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
    });
    $('#fullpage').fullpage({
      autoScrolling: true,
      fitToSection: false,
      navigation: true,
      responsive: true,
      resize: true,
      scrollOverflow: true,
      afterLoad: function (index, slideIndex, nextIndex, direction) {},
      onLeave: function (index, slideIndex, nextIndex, direction) {},
      afterResize: function () {
        $.fn.fullpage.setAllowScrolling(true);
      },
    });
  },
};

UI.moMainAni = {
  init: function () {
    setTimeout(function () {
      new Swiper('.brand-thumb-swiper', {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: -50,
        loop: true,
        allowTouchMove: false,
        speed: 1500,
        autoplay: {
          delay: 0,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
      });
    }, 1000);
    $(window)
      .on('scroll', function () {
        var _this = this;
        _this.$animate = UI.$body.find('.section');
        _this.$header = UI.$body.find('#header');

        var viewTop = $(this).scrollTop(),
          viewHeight = $(this).outerHeight(true) / 1.5,
          viewBottom = viewTop + viewHeight;

        _this.$animate.each(function () {
          var elementTop = $(this).offset().top,
            elementHeight = $(this).outerHeight(),
            elementBottom = elementTop + elementHeight;

          if (viewTop < elementBottom && viewBottom > elementTop) {
            $(this).addClass('active');
          } else {
            $(this).removeClass('active');
          }
        });

        var st = $(this).scrollTop();
        if (st > 0) {
          _this.$header.addClass('fixed');
        } else {
          _this.$header.removeClass('fixed');
        }
      })
      .trigger('scroll');

    $('.btn-sec-top').on('click', function () {
      $('html, body').animate({ scrollTop: 0 });
      return false;
    });
  },
};

UI.dim = {
  on: function () {
    if (!$('#header').children('.dim').length) {
      $('body').css('overflow', 'hidden');
    }
  },
  off: function () {
    $('body').css('overflow', '');
  },
};

$(function () {
  UI.$window = $(window);
  UI.$body = $('body');
  UI.matchMedia.init();
});
