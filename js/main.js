// script.js
<script>
    // JavaScript for the accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const accordionContent = header.nextElementSibling;
        header.classList.toggle('active');
        accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
      });
    });

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with the class "accordion-header"
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Add click event listeners to each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Find the closest parent ".accordion" element
            const accordion = header.closest('.accordion');

            // Find the accordion content within the same accordion element
            const accordionContent = accordion.querySelector('.accordion-content');

            // Toggle the "active" class on the header
            header.classList.toggle('active');

            // Toggle the display of the accordion content
            accordionContent.style.display = accordionContent.style.display === 'block' ? 'none' : 'block';
        });
    });
});
  </script>