window.onunload = function () { };
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
// ハンバーガー
sizecheck();
$(function () {
  if (w > 660) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav_open');
    });
  }
}); 

// アコーディオン
$('.faq_box').click(function () {
  if ($(this).hasClass('open')) {
    let faq_answer = $(this).find('.faq_answer');
    $('.faq_box').removeClass('open');
    $('.faq_answer').slideUp();
  }
  else {
    let faq_answer = $(this).find('.faq_answer');
    $('.faq_box').removeClass('open');
    $('.faq_answer').slideUp();
    $(this).addClass('open');
    faq_answer.slideDown();
  }
});


// タイトルの下のライン
function border() {
  // 真ん中から広がるラインborderTrigger
  $('.borderTrigger').each(function () {// borderTriggerクラスの各要素に対して
    
    let scroll = $(window).scrollTop();// スクロール位置を取得する
    let triTop = $(this).offset().top + 100;// 要素の上部より100px下の位置を取得
    let winHeight = $(window).height();// ウィンドウの高さを取得
    if (scroll >= triTop - winHeight) { // 画面内に要素が入ったかを判断
      $(this).addClass('border');// borderクラスを付与
    } else {
      $(this).removeClass('border');// borderクラスを削除
    }
  });
}
$(window).scroll(function () {// スクロールしたら
  border();// 関数を実行
});


// 下から出てくる
function fadeIn() {
  $('.fadeUpTrigger').each(function () {// fadeUpTriggerクラスの各要素に対して
    let scroll = $(window).scrollTop();// スクロール位置を取得する
    let triTop = $(this).offset().top + 100;// 要素の上部より100px下の位置を取得
    let winHeight = $(window).height();// ウィンドウの高さを取得
    if (scroll >= triTop - winHeight) { // 画面内に要素が入ったかを判断
      $(this).addClass('fadeUp');// fadeUpクラスを付与
    } else {
      $(this).removeClass('fadeUp');// fadeUpクラスを削除
    }
  });
  
  // フェードレフト
  $('.fadeLeftTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeLeft');
    }else{
      $(this).removeClass('fadeLeft');
    }
  });

  // フェードライト
  $('.fadeRightTrigger').each(function(){
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeRight');
    }else{
      $(this).removeClass('fadeRight');
    }
  });
}
$(window).scroll(function () {
  fadeIn();
});

// スムーズスクロール
$('nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});