var typed = new Typed('#element', {
  strings: ['running contests', 'selecting leaders', 'conducting surveys', 'taking polls', 'educating voters', 'making decisions'],
  typeSpeed: 50,
  backSpeed: 0,
  fadeOut: true,
  loop: true
});

function toggleMobileNav() {

// Initially, set flag to false to indicate that mobile nav is hidden
var flag = false;

function toggleMobileNav() {
  // Get the mobile nav element
  var mobileNav = document.getElementById("mobile-nav");
  
  // Toggle the active class on the mobile nav
  mobileNav.classList.toggle("active");

  // Toggle flag to keep track of mobile nav state
  flag = !flag;
}

};



document.addEventListener("DOMContentLoaded", function() {
  var index = 0;
  var comments = document.getElementsByClassName("comments");
  var prevButton = document.getElementById("prev");
  var nextButton = document.getElementById("next");

  // Show the first comment by default
  comments[index].classList.add("active");

  // Function to show the next comment
  function nextComment() {
      comments[index].classList.remove("active");
      index = (index + 1) % comments.length;
      comments[index].classList.add("active");
  }

  // Function to show the previous comment
  function prevComment() {
      comments[index].classList.remove("active");
      index = (index - 1 + comments.length) % comments.length;
      comments[index].classList.add("active");
  }

  // Event listeners for next and previous buttons
  nextButton.addEventListener("click", nextComment);
  prevButton.addEventListener("click", prevComment);
});
