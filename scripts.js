
/* SCRIPTS.JS */

function changePic() {
    document.getElementById("profilePic").src = "images/me.webp";
  }
  
  function normalPic() {
    document.getElementById("profilePic").src = "images/me.jpg";
  }


$(".go-to-contact").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});

