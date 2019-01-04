console.log("helloworld");

document.addEventListener("DOMContentLoaded", () => {
    var plax = document.querySelectorAll(".parallax");
    var scrollspy = document.querySelectorAll('.scrollspy');
    
    M.ScrollSpy.init(scrollspy,{
        scrollOffset: 70
    });

     M.Parallax.init(plax,{
         responsiveThreshold: 0
     });


});