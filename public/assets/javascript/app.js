console.log("helloworld");

document.addEventListener("DOMContentLoaded", () => {
    const plax = document.querySelectorAll(".parallax");
     M.Parallax.init(plax,{
         responsiveThreshold: 0
     });

});