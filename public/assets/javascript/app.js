document.addEventListener("DOMContentLoaded", () => {
    //googleA
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-131826143-1');
    
    const plax = document.querySelectorAll('.parallax');
    const scrollspy = document.querySelectorAll('.scrollspy');
    const sideNav = document.querySelectorAll('.sidenav');
    const carousel = document.querySelectorAll('.carousel');
    const tooltiper = document.querySelectorAll('.tooltipped');
     
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