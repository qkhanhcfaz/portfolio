                    // ===== DARK MODE ======

const body = document.body
const switch__mode = document.querySelector('#switch__mode i')

let mode = localStorage.getItem('darkmode')

if(mode == 'true') {
    body.classList.add('dark')
    switch__mode.className = 'bi bi-brightness-high-fill'
}

if (mode == 'false') {
    body.classList.remove('dark')
    switch__mode.className = 'bi-moon-stars-fill'
}

switch__mode.addEventListener('click',() => {
    switch__mode.classList.toggle('bi-moon-stars-fill')
    switch__mode.classList.toggle('bi-brightness-high-fill')

    let mode = body.classList.toggle('dark')
    //save mode 
    localStorage.setItem('darkmode',mode)
})
