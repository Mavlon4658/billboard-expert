// Elementni tanlaymiz
const scrollBtns = document.getElementById('scrollBtns');

// Skroll eventni tinglash
window.addEventListener('scroll', () => {
    if (scrollBtns) {
        if (window.innerWidth <= 765) {
            if (window.scrollY > 100) {
                scrollBtns.style.display = 'flex';
            } else {
                scrollBtns.style.display = 'none';
            }
        } else {
            scrollBtns.style.display = 'none';
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 765) {
        if (scrollBtns) {
            scrollBtns.style.display = 'none';
        }
    }
});
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

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

const toastTriggers = document.querySelectorAll('.liveToastBtnOpen')
const toastTriggerError = document.querySelectorAll('.liveToastErrorBtnOpen')
const toastLiveExample = document.getElementById('liveToast')
const toastLiveError = document.getElementById('liveToastError')

if (toastTriggers.length) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    const toastBootstrap2 = bootstrap.Toast.getOrCreateInstance(toastLiveError)
    toastTriggers.forEach(toastTrigger => {
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    })
    toastTriggerError.forEach(toastTrigger => {
        toastTrigger.addEventListener('click', () => {
            toastBootstrap2.show()
        })
    })
}
