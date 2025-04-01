
document.querySelector('.header__burger-btn').addEventListener('click', function () {
    this.classList.toggle('active');
  });
  
  document.querySelector('.header__burger-btn').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('header__burger-show');
  });
  

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const arrow = button.querySelector(".studio_arrow");
  
  if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.style.transform = "rotate(0deg)";
  } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.style.transform = "rotate(180deg)";
  }
}


document.querySelectorAll('.header__item').forEach(item => {
  item.addEventListener('click', function () {
    
      const content = item.nextElementSibling;
      const arrow = item.querySelector('.studio_arrow');

   
      if (arrow) {
          arrow.classList.toggle('rotated'); 
      }

      
      if (content && content.style.maxHeight) {
          content.style.maxHeight = null; 
      } else if (content) {
          content.style.maxHeight = content.scrollHeight + 'px';
      }

      
      if (arrow) {
          if (content.style.maxHeight) {
              arrow.style.transform = "rotate(180deg)"; 
          } else {
              arrow.style.transform = "rotate(0deg)";
          }
      }
  });
});





