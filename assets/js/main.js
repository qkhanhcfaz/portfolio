
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

//view post
let viewCount = 6009;
let viewList = [];
setInterval(() => {
    viewCount++;
    viewList.push(viewCount);
    setViewCountCookie();
    displayViewCount();
}, 30000)
document.getElementById("view-count").innerHTML = viewCount;
//Store the view count in localStorage
function setViewCountCookie() {
   localStorage.setItem("viewCount", viewCount);
   localStorage.setItem("viewList", viewList);
}

// Display the view count
function displayViewCount() {
    var icon = '<i class="fa-regular fa-eye"></i>' + localStorage.getItem("viewCount");
    document.getElementById("view-count").innerHTML = icon;   
}
setViewCountCookie();
displayViewCount();



//get date
const today = new Date();

//show date
document.getElementById("date").innerHTML = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

//show in fo toast 
function showInfoToast() {
    toast({
        title: "Notification!",
        message: "This feature will be updated soon",
        type: "info",
        duration: 5000
    });
}
//new code
// handle showInfoToast
// toast function
function toast({ title = "", message= "", type="info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if(main) {
        const toast = document.createElement("div");
    

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicked
    toast.onclick = function (e) {
        if(e.target.closest(".toast__close")) {
            main.removeChild(toast);
            clearTimeout(autoRemoveId);
        }
    };

    const icons = {
        info: "fas fa-info-circle"
    };
    const icon = icons[type];
    const delay = (duration / 1000). toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut line 1s${delay}s forwards`;

    toast.innerHTML = ` 
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                    <i class="fas fa-times"></i>
                </div>
                      `;
    main.qppendChild(toast);          
}
}