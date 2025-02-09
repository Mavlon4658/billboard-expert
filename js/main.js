// Elementni tanlaymiz
const scrollBtns = document.getElementById('scrollBtns');

// Skroll eventni tinglash
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 765) { // Ekran kengligini tekshirish
    if (window.scrollY > 100) {
      scrollBtns.style.display = 'flex'; // 100px'dan keyin ko'rsatish
    } else {
      scrollBtns.style.display = 'none'; // 100px'dan oldin yashirish
    }
  } else {
    scrollBtns.style.display = 'none'; // 765px dan katta ekranlarda doim yashirish
  }
});

// Sahifa yuklanganda ham tekshirish
window.addEventListener('resize', () => {
  if (window.innerWidth > 765) {
    scrollBtns.style.display = 'none';
  }
});
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
