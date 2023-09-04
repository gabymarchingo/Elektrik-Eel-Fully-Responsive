let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex+=n);

}
function currentSlide(n) {
    showSlides(slideIndex=n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex=1}
    if (n < 1) {slideIndex=slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace (" active", ""); 
    }
   
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
    
 // Autoplay function
 function autoplay() {
  plusSlides(1); 
}


setInterval(autoplay, 3000);
    
}
// countdown
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();


var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// display date and time
function updateDateTime() {
    const d = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'short' 
    };
    const formattedDate = d.toLocaleString(undefined, options);
    document.getElementById("time-and-date").innerHTML = formattedDate;
}

updateDateTime();

setInterval(updateDateTime, 1000);


// menu toggle
$(document).ready(function(){
  $(".navigation").click(function() {
    $(".toggle-menu").addClass("active");
  });
  $(".close").click(function() {
    $(".toggle-menu").removeClass("active");
  });
});

// toggle menu
(function($) { 
  $(function() { 
    
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
   
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery);

// scroll button
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}