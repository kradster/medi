$(document).ready(function(){
    let nav1 = $('#navupper');
    let nav2 = $('#navdown');
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if(st>0){
          nav1.hide(300);  
        }else{
            nav1.show(300);
        }
    });
});