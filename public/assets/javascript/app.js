document.addEventListener("DOMContentLoaded", () => {
    //googleA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-131826143-1');
    
    var plax = document.querySelectorAll('.parallax');
    var scrollspy = document.querySelectorAll('.scrollspy');
    var sideNav = document.querySelectorAll('.sidenav');
    var carousel = document.querySelectorAll('.carousel');
    var tooltiper = document.querySelectorAll('.tooltipped');
     
    M.Tooltip.init(tooltiper, {});
    M.Carousel.init(carousel, {});
    M.Sidenav.init(sideNav, {});
    M.ScrollSpy.init(scrollspy,{
        scrollOffset: 65
    });

     M.Parallax.init(plax,{
         responsiveThreshold: 0
     });


});