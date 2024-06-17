// -----------------------------------------------------------------
// SP用 ナビゲーションアイコン
// -----------------------------------------------------------------
// SP用メニューアイコン
$(function () {
  $('.header-nav-btn').on('click', function () {
    $('.header-nav-btn').toggleClass('is-open');
    $('.ly-header-nav-sp').toggleClass('is-active');
  });
});

// -----------------------------------------------------------------
// front page おすすめ商品スライダー
// -----------------------------------------------------------------
$(function () {
  $('.pg-front-recom-slider').slick({
    slidesToShow: 1,
    infinite: true,
    adaptiveHeight: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<div class="md-recom-slider-arrow md-recom-slider-arrow--left"><div>',
    nextArrow: '<div class="md-recom-slider-arrow md-recom-slider-arrow--right"><div>'
  });
});

// -----------------------------------------------------------------
// ロゴのオートスクロール
// -----------------------------------------------------------------
$(function () {
  $('.js-carlogo-slider').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 9, // 全画像枚数-1にしないとsliderが動かない
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        speed: 5000,
      }
    }]
  });
});

// -----------------------------------------------------------------
// フロントページのおすすめタブ
// -----------------------------------------------------------------
$(function () {
  $('.front-recom-tab').on('click', function () {
    $('.front-recom-tab, .front-recom-tab-cont-wrap').removeClass('js-active');

    $(this).addClass('js-active');

    var index = $('.front-recom-tab').index(this);
    $('.front-recom-tab-cont-wrap').eq(index).addClass('js-active');
  });
});

// -----------------------------------------------------------------
// フロントページ new arrival 文字数制限
// -----------------------------------------------------------------
function textTrim() {
  var selector = document.getElementsByClassName('js-limit');
  var wordCount = 40;
  var clamp = '…';

  for (var i = 0; i < selector.length; i++) {
    if (selector[i].innerText.length > wordCount) {
      var str = selector[i].innerText; // 文字数を取得
      str = str.substr(0, (wordCount - 1)); // 1文字削る
      selector[i].innerText = str + clamp; // 文末にテキストを足す
    }
  }
}
textTrim();

// -----------------------------------------------------------------
// 詳細ページ サムネ付きスライダー
// -----------------------------------------------------------------
$(function () {
  $(".md-gallery-slider-main").slick({
    autoplay: true,
    asNavFor: ".md-gallery-slider-sub",
    speed: 500,
    arrows: false,
    responsive: [{
      breakpoint: 960,
      settings: {
        arrows: true,
        prevArrow: '<div class="md-gallery-slider-main-arrow md-gallery-slider-main-arrow--left"><div>',
        nextArrow: '<div class="md-gallery-slider-main-arrow md-gallery-slider-main-arrow--right"><div>',
      }
    }]
  });
  
  $(".md-gallery-slider-sub").slick({
    autoplay: false,
    slidesToShow: 5,
    asNavFor: ".md-gallery-slider-main",
    focusOnSelect: true,
    speed: 500,
    infinite: false,
    arrows: false,
    responsive: [{
      breakpoint: 960,
      settings: {
        arrows: true,
        prevArrow: '<div class="md-gallery-slider-sub-arrow md-gallery-slider-sub-arrow--left"><div>',
        nextArrow: '<div class="md-gallery-slider-sub-arrow md-gallery-slider-sub-arrow--right"><div>',
      }
    }]
  });
});

// -----------------------------------------------------------------
// 詳細ページ toggle
// -----------------------------------------------------------------
$(function () {
  $('.pg-details-step1-toggle-ttl').on('click', function () {
    $(this).next('.pg-details-step1-toggle').slideToggle(300);
    $(this).toggleClass('is-open', 300);
  });
});

// -----------------------------------------------------------------
// 詳細ページ radioチェックで背景色を追加
// -----------------------------------------------------------------
$(".pg-details-step1-radio").change(function () {
  $(".pg-details-step1-radio").each(function () {
    if ($(this).is(":checked")) {
      $(this).parents('.pg-details-step1-ports-item').addClass("is-select");
    } else {
      $(this).parents('.pg-details-step1-ports-item').removeClass("is-select");
    }
  });
});

// -----------------------------------------------------------------
// 詳細ページ RELATEDスライダー
// -----------------------------------------------------------------
$(function () {
  $('.pg-details-recom-slider').slick({
    slidesToShow: 1,
    autoplay:true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    prevArrow: '<div class="md-recom-slider-arrow md-recom-slider-arrow--left"><div>',
    nextArrow: '<div class="md-recom-slider-arrow md-recom-slider-arrow--right"><div>'
  });
});

// -----------------------------------------------------------------
// new cars filter
// -----------------------------------------------------------------
// ボタン
$(function () {
  $('.pg-cars-filter-btn').on('click', function () {
    $('.pg-cars-filter-btn').toggleClass('is-open');
    $('.ly-filter').toggleClass('is-active');
  
    // filterが開いているときbodyはスクロールさせない
    $("body").toggleClass("is-stop");
  });

  // 閉じるボタン
  $('.ly-filter-close-btn').on('click', function () {
    $('.ly-filter').removeClass('is-active');
    $("body").removeClass("is-stop");
  });
});

// news details slider

// ウィンドウの幅を確認
let w = $(window).width();

// 960px以下であればスライダーを初期化
if (w <= 960) {
    $('.pg-live_slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false
    });
}

// Parts & Services 詳細

$(function () {
  $(".pg-psld-slider").slick({
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".pg-psld-slider_thumbnail",
    responsive: [
      {
          breakpoint: 960,
          settings: {
            centerMode: true,
            prevArrow: '<button class="pg-psld-arrow pg-psld-slider-arrow pg-psld-slider-prev-arrow"><img src="./assets/images/Parts&Services/details/pg-psld-slider-prev.png"</button>',
            nextArrow: '<button class="pg-psld-arrow pg-psld-slider-arrow pg-psld-slider-next-arrow"><img src="./assets/images/Parts&Services/details/pg-psld-slider-next.png"<</button>',
            arrows:true,
            infinite:true,
          }
      }
  ]
  });
  $(".pg-psld-slider_thumbnail").slick({
    autoplay: true,
    slidesToShow: 6,
    responsive: [
      {
          breakpoint: 960,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: ".pg-psld-slider",
            focusOnSelect: true,
            prevArrow: '<button class="pg-psld-arrow pg-psld-slider-thumbnail-arrow pg-psld-slider-thumbnail-prev-arrow"><img src="./assets/images/Parts&Services/details/pg-psld-slider_thumbnail-prev.png"</button>',
            nextArrow: '<button class="pg-psld-arrow pg-psld-slider-thumbnail-arrow pg-psld-slider-thumbnail-next-arrow"><img src="./assets/images/Parts&Services/details/pg-psld-slider_thumbnail-next.png"<</button>',
            arrows:true,
          }
      }
  ]
  });
});

// Parts & Services 詳細 related slider

$(function () {
  $('.pg-psld-related-slider').slick({
    autoplay: true,
    slidesToShow: 3,
    speed: 500,
    adaptiveHeight: true,
    prevArrow: '<button class="pg-news-details-arrow pg-news-details-prev-arrow"><img src="./assets/images/news/details/news-details-prev.png"</button>',
    nextArrow: '<button class="pg-news-details-arrow pg-news-details-next-arrow"><img src="./assets/images/news/details/news-details-next.png"<</button>'
  });
});

// kv video

// JavaScript部分
$(function () {
  // 配列に動画要素を格納
  var videos = [
    document.getElementById("video1"),
    document.getElementById("video2"),
    document.getElementById("video3"),
    document.getElementById("video4"),
  ];

  // ランダムなインデックスを取得する関数
  function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  // 動画再生が終わった場合の処理を共通化する関数
  function onVideoEnded(event) {
    var currentVideo = event.target;
    $(currentVideo).hide();

    // ランダムな動画を表示
    var randomIndex;
    do {
      randomIndex = getRandomIndex(videos.length);
    } while (videos[randomIndex] === currentVideo); // 現在の動画と異なる動画を選択する

    var nextVideo = videos[randomIndex];
    $(nextVideo).show();
    nextVideo.play();
  }

  // 各動画要素にendedイベントを設定
  videos.forEach(function (video) {
    video.addEventListener("ended", onVideoEnded);
  });

  // 最初の動画をランダムに表示
  var randomFirstIndex = getRandomIndex(videos.length);
  $(videos[randomFirstIndex]).show();
  videos[randomFirstIndex].play();
});

// スライドイン用jQuery

jQuery(function ($) {
  var fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      var offset = $(this).offset().top;
      var scroll = $(window).scrollTop(); 
      var windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});


// 960px以下であればスライダーを初期化
if (w <= 960) {
    $('.pg-live_slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        centerMode: true,
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false
    });
}


const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("#js-open");

$(document).ready(function() {
    modal.addClass("open"); // modalクラスにopenクラス付与
    overlay.addClass("open"); // overlayクラスにopenクラス付与
});

close.on('click', function () {
    modal.removeClass("open"); // modalクラスからopenクラスを外す
    overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});

// News Details Modal
window.addEventListener("DOMContentLoaded", () => {
  // モーダルを取得
  const modal = document.getElementById("news-modal");
  // モーダルを開く
  const openModalBtns = document.querySelectorAll(".news-modalOpen");
  // モーダルを閉じる
  const closeModalBtns = document.querySelectorAll(".news-modalClose");
  const closeModalOverlays = document.querySelectorAll(".news-modal__overlay");

  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30, //任意のマージン
  });

  // モーダルのボタンクリック
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      // data-modalで設定したスライド番号を取得
      const modalIndex = openModalBtn.getAttribute('data-modal');
      swiper.slideTo(modalIndex);
      modal.classList.add("is-active");
    });
  });

  // モーダルの閉じるボタンクリック
  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });

  closeModalOverlays.forEach((closeModalOverlay) => {
    closeModalOverlay.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  });
});