window.onload=function(){
    document.querySelector(".jd_cateLeft").addEventListener('touchmove',function(e){
        e.preventDefault();
    });
    new IScroll(document.querySelector(".jd_cateLeft"),{
        scrollX:false,
        scrollY:true
    });
}