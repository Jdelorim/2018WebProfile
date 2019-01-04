document.addEventListener("DOMContentLoaded", () => {
    var plax = document.querySelectorAll('.parallax');
    var scrollspy = document.querySelectorAll('.scrollspy');
    var sideNav = document.querySelectorAll('.sidenav');

    M.Sidenav.init(sideNav, {});
    
    M.ScrollSpy.init(scrollspy,{
        scrollOffset: 65
    });

     M.Parallax.init(plax,{
         responsiveThreshold: 0
     });


});