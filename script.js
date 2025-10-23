const personalbutton = document.querySelector(".open-close");
const info1 = document.querySelector(".details-flex");

const educbutton1 = document.querySelector(".plus-minus");
const bachelorflex1 = document.querySelector(".bachelor-flex");
const educinfo1 = document.querySelector(".educinfo-flex");
const educdetails1 = document.querySelector(".educdetails-flex");

const eyebutton1 = document.querySelector(".eye-button");
const eye1 = document.querySelector("#toggleIcon");
const programming1 = document.querySelector(".programming-flex");

personalbutton.addEventListener("click", () => {
    if (personalbutton.innerText === "open") {
        personalbutton.innerText = "close";
        info1.style.display = "flex";
        educbutton1.innerText = "[ + ]";
        bachelorflex1.style.display = "none";
        educinfo1.style.display = "none";
        educdetails1.style.display = "none";
        programming1.style.display = "none";
        eye1.src = "images/eyeopen.png";
        eye1.alt = "open"
      } else {
        personalbutton.innerText = "open";
        info1.style.display = "none";
      }
});

const educbutton = document.querySelector(".plus-minus");
const bachelorflex = document.querySelector(".bachelor-flex");
const educinfo = document.querySelector(".educinfo-flex");
const educdetails = document.querySelector(".educdetails-flex");

const personalbutton1 = document.querySelector(".open-close");
const info11 = document.querySelector(".details-flex");

const eyebutton2 = document.querySelector(".eye-button");
const eye2 = document.querySelector("#toggleIcon");
const programming2 = document.querySelector(".programming-flex");

educbutton.addEventListener("click", () => {
    if (educbutton.innerText === "[ + ]") {
        educbutton.innerText = "[ - ]";
        bachelorflex.style.display = "flex";
        educinfo.style.display = "flex";
        educdetails.style.display = "flex";
        personalbutton1.innerText = "open";
        info11.style.display = "none";
        programming2.style.display = "none";
        eye2.src = "images/eyeopen.png";
        eye2.alt = "open";      
    }
    else {
        educbutton.innerText = "[ + ]";
        bachelorflex.style.display = "none";
        educinfo.style.display = "none";
        educdetails.style.display = "none";
    }
});

const eyebutton = document.querySelector(".eye-button");
const eye = document.querySelector("#toggleIcon");
const programming = document.querySelector(".programming-flex");

const personalbutton2 = document.querySelector(".open-close");
const info12 = document.querySelector(".details-flex");

const educbutton2 = document.querySelector(".plus-minus");
const bachelorflex2 = document.querySelector(".bachelor-flex");
const educinfo2 = document.querySelector(".educinfo-flex");
const educdetails2 = document.querySelector(".educdetails-flex");

let isOpen = false;

eyebutton.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen === true) {
        programming.style.display = "flex";
        eye.src = "images/eyeclose.png";
        eye.alt = "close";
        personalbutton.innerText = "open";
        info1.style.display = "none";
        educbutton.innerText = "[ + ]";
        bachelorflex.style.display = "none";
        educinfo.style.display = "none";
        educdetails.style.display = "none";
    }
    else{
        programming.style.display = "none";
        eye.src = "images/eyeopen.png";
        eye.alt = "open";
    }
});

const personalDetailsFlex = document.querySelector('.personaldetails-flex');
const personalDetailsButton = personalDetailsFlex.querySelector('.open-close');

const educFlex = document.querySelector('.educ-flex');
const educButton = educFlex.querySelector('.plus-minus');

const skillFlex = document.querySelector('.skill-flex');
const skillButton = skillFlex.querySelector('.eye-button');

function setupVisibilityToggle(containerElement, buttonElement) {
    containerElement.addEventListener('mouseover', () => {
        buttonElement.classList.add('kung-visible');
    });

    containerElement.addEventListener('mouseout', () => {
        buttonElement.classList.remove('kung-visible');
    });
}

setupVisibilityToggle(personalDetailsFlex, personalDetailsButton);
setupVisibilityToggle(educFlex, educButton);
setupVisibilityToggle(skillFlex, skillButton);

const p1 = document.querySelector(".sub1");
const p2 = document.querySelector(".sub2");
const p3 = document.querySelector(".sub3");
const p4 = document.querySelector(".sub4");
const p5 = document.querySelector(".sub5");
const p6 = document.querySelector(".sub6");
const p7 = document.querySelector(".sub7");
const p8 = document.querySelector(".sub8");
const p9 = document.querySelector(".sub9");
const p10 = document.querySelector(".sub10");

const showmorebutton = document.querySelector(".show-more");
const previousbutton = document.querySelector(".previous1");
const nextbutton = document.querySelector(".next1");

let ppage = 0;

showmorebutton.addEventListener("click", () =>{
    showmorebutton.style.display = "none";
    previousbutton.style.display = "flex";
    nextbutton.style.display = "flex";
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "flex";
    p5.style.display = "flex";
    p6.style.display = "flex";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
    p10.style.display = "none";
    ppage = ppage + 1;
});

nextbutton.addEventListener("click", () =>{
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "flex";
    p8.style.display = "flex";
    p9.style.display = "flex";
    p10.style.display = "flex";
    nextbutton.style.display = "none";
    ppage = ppage + 1;       
});

previousbutton.addEventListener("click", () =>{
    if(ppage === 1){
        showmorebutton.style.display = "flex";
        previousbutton.style.display = "none";
        nextbutton.style.display = "none";
        p1.style.display = "flex";
        p2.style.display = "flex";
        p3.style.display = "flex";
        p4.style.display = "none";
        p5.style.display = "none";
        p6.style.display = "none";
        p7.style.display = "none";
        p8.style.display = "none";
        p9.style.display = "none";
        p10.style.display = "none";
        ppage = ppage - 1;     
    }
    else if (ppage === 2){
        showmorebutton.style.display = "none";
        previousbutton.style.display = "flex";
        nextbutton.style.display = "flex";
        p1.style.display = "none";
        p2.style.display = "none";
        p3.style.display = "none";
        p4.style.display = "flex";
        p5.style.display = "flex";
        p6.style.display = "flex";
        p7.style.display = "none";
        p8.style.display = "none";
        p9.style.display = "none";
        p10.style.display = "none";
        ppage = ppage -1
    }
});

const menubutton = document.querySelector(".menu");
const menupic = document.querySelector(".menupic");

const pages1 = document.querySelector(".pages1");
menubutton.addEventListener("click", () =>{
    if(pages1.style.display === "flex"){
        pages1.style.display = "none";
        menubutton.style.backgroundImage = "none";
    }
    else{
        pages1.style.display = "flex";
        menubutton.style.backgroundImage = "url(images/menubg.png)";
    }
});

function moveIcon(btn) {
    const img = btn.querySelector("img");
    img.classList.toggle("move-left");
    pages1.classList.toggle("show");
}

function openModal(src) {
document.getElementById("modalImg").src = src;
document.getElementById("modal").style.display = "flex";
}
function closeModal() {
document.getElementById("modal").style.display = "none";
}

let current = 0;
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".dot");

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
    t.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
        t.classList.add("active");
        dots[i].classList.add("active");
    }
});
}

function nextTestimonial() {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        current = i;
        showTestimonial(current);
    });
});

setInterval(nextTestimonial, 4000);

const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.getElementById('carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const realCards = Array.from(carousel.children);
const totalRealCards = realCards.length;
let currentRealIndex = 0; 
let autoPlayInterval;

function goToNextCard() {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    currentCarouselIndex++;
    updateCarousel();
    setTimeout(handleLoopTransition, 500);
}

function startAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(goToNextCard, 2000); 
}

function pauseAutoPlay() {
    clearInterval(autoPlayInterval);
}

function setupInfiniteCarousel() {
    const lastTwo = realCards.slice(-2).map(card => card.cloneNode(true));
    lastTwo.reverse().forEach(clone => carousel.prepend(clone));

    const firstTwo = realCards.slice(0, 2).map(card => card.cloneNode(true));
    firstTwo.forEach(clone => carousel.appendChild(clone));

    currentCarouselIndex = 2; 
}

function getCardWidth() {
    const card = carousel.children[0];
    const style = getComputedStyle(card);
    return card.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
}

function updateCarousel(instant = false) {
    const cardWidth = getCardWidth();
    const containerWidth = carouselContainer.offsetWidth;
    const baseTranslate = -currentCarouselIndex * cardWidth;
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);

    carousel.style.transform = `translateX(${baseTranslate + centerOffset}px)`;
    carousel.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out';
}

function handleLoopTransition() {
    const totalCardsInDOM = carousel.children.length;

    if (currentCarouselIndex === totalCardsInDOM - 2) {
        currentCarouselIndex = 2;
        updateCarousel(true);
    } 
    else if (currentCarouselIndex === 1) {
        currentCarouselIndex = totalCardsInDOM - 3; 
        updateCarousel(true);
    }
}

next.addEventListener('click', () => {
    pauseAutoPlay();
    goToNextCard();
    startAutoPlay();
});

prev.addEventListener('click', () => {
    pauseAutoPlay();
    carousel.style.transition = 'transform 0.5s ease-in-out';
    currentCarouselIndex--;
    updateCarousel();
    setTimeout(handleLoopTransition, 500);
    startAutoPlay();
});

carouselContainer.addEventListener('mouseenter', pauseAutoPlay);
carouselContainer.addEventListener('mouseleave', startAutoPlay);

setupInfiniteCarousel();
window.addEventListener('resize', () => updateCarousel(true));
window.addEventListener('load', () => {
    updateCarousel(true);
    startAutoPlay();
});

const card = document.querySelector('.vidbutton');
card.addEventListener('click', () => {
const speed = Math.random() * 5 + 3;
card.style.setProperty('--speed', `${speed}s`);
});

const showimage = document.querySelector(".show-img");
const backload = document.querySelector("#pre-load");
const shimage = document.querySelector(".showimg");
const im1 = document.querySelector(".up1");
const im2 = document.querySelector(".up2");
const im3 = document.querySelector(".up3");
const im4 = document.querySelector(".low1");
const im5 = document.querySelector(".low2");
const im6 = document.querySelector(".low3");
const vidimg = document.querySelector(".vidimg");
const vid = document.querySelector(".showvid");
const vidvid = document.querySelectorAll(".vidvid");
const vidbutton = document.querySelector(".vidbutton");

im1.addEventListener('click', () => {
    shimage.src = "images/im1.jpg";
    backload.style.display = "none";
    showimage.style.display = "flex";
    vid.style.display = "none";
});

im2.addEventListener('click', () => {
    shimage.src = "images/im2.jpg";
    backload.style.display = "none";
    showimage.style.display = "flex";
    vid.style.display = "none";
});

im3.addEventListener('click', () => {
    shimage.src = "images/im3.jpg";
    backload.style.display = "none";
    showimage.style.display = "flex";
    vid.style.display = "none";
});

im4.addEventListener('click', () => {
    shimage.src = "images/im4.jpg";
    backload.style.display = "none";
    showimage.style.display = "flex";
    vid.style.display = "none";
});

im5.addEventListener('click', () => {
    shimage.src = "images/im5.jpg";
    backload.style.display = "none";
    showimage.style.display = "flex";
    vid.style.display = "none";
});

im6.addEventListener('click', () => {
    shimage.src = "images/im6.jpg";
    backload.style.display = "none";
    showimage.style.display = "flex";
    vid.style.display = "none";
});

vidbutton.addEventListener('click', () => {
    backload.style.display = "none";
    vid.style.display = "flex";
    showimage.style.display = "none";
});

const artContainer = document.getElementById("artContainer");
const maxminButton = document.querySelector(".maxmin-button");
const maxIcon = document.querySelector(".maxmin");

function toggleFullScreen() {
    if (!document.fullscreenElement) {
         if (artContainer.requestFullscreen) {
            artContainer.requestFullscreen();
        } else if (artContainer.webkitRequestFullscreen) {
            artContainer.webkitRequestFullscreen();
         } else if (artContainer.msRequestFullscreen) {
            artContainer.msRequestFullscreen();
     }
     } else {
        if (document.exitFullscreen) {
             document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
             document.msExitFullscreen();
        }
    }
}
maxminButton.addEventListener('click', toggleFullScreen);
const remove = document.querySelector(".result");
const rem = document.querySelector(".paper-sizes");

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        maxIcon.src = "images/min.png";
    } else {
        maxIcon.src = "images/max.png";
        maxIcon.alt = "maximize";
    }
});

let selectedOption = null;
let isUserRegistered = false; 

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        selectedOption = {
            type: option.dataset.type,
            price: option.dataset.price.split('-')[0].replace('+', '').trim() 
        };
    });
});

document.getElementById('goBtn').addEventListener('click', () => {
    if (!selectedOption) {
        alert('Please select a drawing type first!');
        return;
    }
    document.getElementById('fileInput').click();
    remove.style.display = 'none';
    rem.style.display = 'none'; 

});

document.getElementById('fileInput').addEventListener('change', event => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            const board = document.getElementById('board');
            board.innerHTML = `<img src="${e.target.result}" alt="Selected Image">`;
            document.getElementById('paperSizes').style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }
});

const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sizeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('result').style.display = 'block';
        document.getElementById('priceText').textContent = `Your price is: ₱${selectedOption.price} (${selectedOption.type}) - ${btn.textContent} Size`;
    });
});

document.getElementById('payNowBtn').addEventListener('click', () => {
    if (!isUserRegistered) {
        alert('Please fill out and submit the Register/Contact form before proceeding to payment.');
        document.getElementById('selfpromotion').scrollIntoView({ behavior: 'smooth' }); 
        return;
    }
    alert('Redirecting to payment...');
});

document.getElementById('login_form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    isUserRegistered = true;
    alert('Registration/Contact form submitted successfully! You can now proceed to payment.');

    this.reset();
});

let currentIndex = 0;

const testimonials1 = document.querySelectorAll('.slider .testimonial');
const dots1 = document.querySelectorAll('.dots .dot');

function showTestimonial(index) {
    testimonials1.forEach(t => t.classList.remove('active'));
    dots1.forEach(d => d.classList.remove('active'));

    if (testimonials1[index]) {
        testimonials1[index].classList.add('active');
    }
    if (dots1[index]) {
        dots1[index].classList.add('active');
    }
}

showTestimonial(currentIndex); 

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showTestimonial(index);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 5000);

const commentBtn = document.getElementById('commentBtn');
const commentBox = document.getElementById('commentBox');
const sendBtn = document.getElementById('sendBtn');
const thankMsg = document.getElementById('thankMsg');
const userComment = document.getElementById('userComment');

commentBtn.addEventListener('click', () => {
    if (!isUserRegistered) {
        alert('Please fill out and submit the Register/Contact form before leaving a comment.');
        document.getElementById('selfpromotion').scrollIntoView({ behavior: 'smooth' }); 
        return;
    }

    commentBtn.style.display = 'none';
    commentBox.style.display = 'flex';
});

sendBtn.addEventListener('click', () => {
    const comment = userComment.value.trim();
    if (comment) {
        thankMsg.textContent = `Thank you for your comment!`;
        commentBox.style.display = 'none';
        userComment.value = '';
    } else {
        alert('Please write a comment first.');
    }
});