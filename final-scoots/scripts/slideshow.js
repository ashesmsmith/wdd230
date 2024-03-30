let slideIndex = 1; // first picture
showDivs(slideIndex); // display picture

function plusDivs(n) { // called when user clicks left or right button
  showDivs(slideIndex += n); // adds or subtracts 1 to slideIndex
}

function showDivs(n) { // displays the "slide" with a matching index
  let i;
  let x = document.querySelectorAll('.slide');

  if (n > x.length) {slideIndex = 1} // sets slideIndex back to 1
  if (n < 1) {slideIndex = x.length} ; // sets slideIndex to number of elements

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";
}