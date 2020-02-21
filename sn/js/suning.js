$(function(){
    var banner=$('.sn_banner');
    var width=banner.width();
    var imageBox=banner.find('ul:first');
    var pointBox=banner.find('ul:last');
    var points=pointBox.find('li');
    var index=1;
    var animationFuc=function(){
        imageBox.animate({transform:'translateX('+(-index*width)+'px)'},200,function(){
            if(index>=9){
                index=1;
                imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }else if(index<=0){
                index=8;
                imageBox.css({transform:'translateX('+(-index*width)+'px)'});
            }
            points.removeClass('now').eq(index-1).addClass('now');
        });
    };
    var timer=setInterval(function(){
        index++;
        animationFuc();
    },1000);
    banner.on('swipeLeft',function(){
        index++;
        animationFuc();
    });
    banner.on('swipeRight',function(){
        index--;
        animationFuc();
    });
});