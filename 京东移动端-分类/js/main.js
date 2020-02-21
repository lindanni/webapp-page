window.onload=function(){
    search();
    banner();
    downtime();
};
var search=function(){
    var topBar=document.querySelector(".jd_topBar_box");
    var banner=document.querySelector(".jd_banner");
    var height=banner.offsetHeight;
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop;
        var opacity = 0;
        if(scrollTop<height){
           opacity=scrollTop/height*0.85;
        }else{
            opacity=0.85;
        }
        topBar.style.backgroundColor="rgba(201,21,35,"+opacity+")";
    }
};
var imgBox=document.querySelector('.jd_banner ul:first-child');
var pointBox=document.querySelector('.jd_banner ul:last-child');
var points=pointBox.querySelectorAll('li');
console.log(points);
var banner=function(){
    var index=1;
    var banner = document.querySelector('.jd_banner');
    var width=banner.offsetWidth;
    var addTransition=function(){
        imgBox.style.transition="all 0.2s";
        imgBox.style.webkitTransform="all 0.2s";
    };
    var removeTransition=function(){
        imgBox.style.transition="none";
        imgBox.style.webkitTransition="none";
    };
    var setTranslateX=function (translatex){
        imgBox.style.transform="translateX("+translatex+"px)";
        imgBox.style.webkitTransform="translateX("+translatex+"px)";
    };
    //×Ô¶¯ÂÖ²¥
    var timer=setInterval(function(){
        index++;
        var translatex=-index*width;
        addTransition();
        setTranslateX(translatex);
    },1000);
    imgBox.addEventListener('transitionend',function(){
        if(index>=9) {
            index = 1;
            removeTransition();
            setTranslateX(-index * width);
        }
        if(index<=0){
            index=8;
            removeTransition();
            setTranslateX(-index*width);
        }
        setpoint();
    });
    var setpoint=function(){
        for(var i=0;i<points.length;i++){
            points[i].classList.remove("now");
        }
        points[index-1].classList.add("now");
    };
    //´¥ÆÁÂÖ²¥
    var startX=0;
    var distanceX=0;
    var moveX=0;
    var isMove=false;
    imgBox.addEventListener('touchstart',function(e){
        clearInterval(timer);
        startX= e.touches[0].clientX;
    });
    imgBox.addEventListener('touchmove',function(e){
        moveX= e.touches[0].clientX;
        distanceX=moveX-startX;
        removeTransition();
        setTranslateX(-index*width+distanceX);
        isMove=true;
    });
    imgBox.addEventListener('touchend',function(e){
        if(isMove){
            if(Math.abs(distanceX)<width/3){
                addTransition();
                setTranslateX(-index*width);
            }else{
                addTransition();
                if(distanceX>0){
                    index--;
                    addTransition();
                    setTranslateX(-index*width);
                }else{
                    index++;
                    addTransition();
                    setTranslateX(-index*width);
                }
            }
        }
        startX = 0;
        distanceX = 0;
        isMove = false;
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            addTransition();
            setTranslateX(-index * width);
        }, 1000);
    });
}
var times=document.querySelector('.time');
var spans=times.querySelectorAll('span');
var downtime=function(){
    var time=4*60*60;
    var timer=setInterval(function(){
        time--;
        var h=Math.floor(time/3600);
        var m=Math.floor(time%3600/60);
        var s=Math.floor(time%60);
        spans[0].innerHTML=Math.floor(h/10);
        spans[1].innerHTML=h%10;
        spans[3].innerHTML=Math.floor(m/10);
        spans[4].innerHTML=m%10;
        spans[6].innerHTML=Math.floor(s/10);
        spans[7].innerHTML=s%10;
        if(time<=0){
            clearInterval(timer);
        }
    },1000);
};