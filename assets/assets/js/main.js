$(function(){
  //ハンバーガーメニュー
  $(".c-menu-trigger").click(function () {
    $(this).toggleClass('active');
    $('.l-sidebar__inner').toggleClass('active');
  });

  //ハンバーガーメニューから移動したら閉じる
  $('.l-sidebar__nav a[href]').on('click',function(){
    $('.c-menu-trigger').trigger('click');
  });

  //スムーススクロール
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


  function mediaQueriesWin(){
    var width = $(window).width();
    if(width <= 768) {//横幅が768px以下の場合
      $(".has_child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
      $(".has_child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
        var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
        $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
        $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
        return false;//リンクの無効化
      });
    }else{//横幅が768px以上の場合
      $(".has_child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
      $(".has_child>a").removeClass('active');//activeクラスを削除
      $('.has_child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
    }
  }
  // ページがリサイズされたら動かしたい場合の記述
  $(window).resize(function() {
    mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
  });
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load',function(){
    mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
  });

});