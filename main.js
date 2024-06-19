

    // Practise Areas

    const practiseAreas=document.querySelectorAll(".practise");
    const rightArrow=document.querySelector(" .right-arrow .practise_svg2");
    const leftArrow=document.querySelector(".left-arrow .practise_svg1");
    const slider=document.querySelector(".practise ul" );
    const rightArrowContainer=document.querySelector(".practise .right-arrow");
    const leftArrowContainer=document.querySelector(".practise .left-arrow");
    
    

  const manageIcons = () => {
    if(slider.scrollLeft >=20) {
      leftArrowContainer.classList.add("active");
    }
    else{
      leftArrowContainer.classList.remove("active");
    }

    let maxScrollValue =slider.scrollWidth-slider.clientWidth-20;
    console.log("Scrollwidth ", slider.scrollWidth );
    console.log("clientwidth ", slider.clientWidth);
    console.log("scrollleft", slider.scrollLeft);

    if(slider.scrollLeft >= maxScrollValue){
      rightArrowContainer.classList.remove("active");
    }
    else{
      rightArrowContainer.classList.add("active");
    }
  }

rightArrow.addEventListener("click" , () =>{
  slider.scrollLeft +=400;
  manageIcons();
});

leftArrow.addEventListener("click" , () => {
  slider.scrollLeft -= 400;
  manageIcons();
});

slider.addEventListener("scroll" , manageIcons);



let dragging=false;

const drag = (e) => {
  if(!dragging) return;
  slider.classList.add("dragging");

  slider.scrollLeft -= e.movementX;
  
};

slider.addEventListener("mousedown" , () =>{
  dragging=true;
});

slider.addEventListener("mousemove" , drag);

document.addEventListener("mouseup" , () =>{
  dragging=false;
  slider.classList.remove("dragging");
 
});







//scroll




window.addEventListener('scroll', reveal);

function reveal(){
  const reveals = document.querySelectorAll('.reveal');

  for(var i=0; i < reveals.length; i++){

    var windowheight= window.innerHeight;
    var revealtop= reveals[i].getBoundingClientRect().top;
    var revealpoint =150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }

}



//header active state toggle
const sections=document.querySelectorAll('section');
const navActiveStates = document.querySelectorAll('.nav_link');




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navActiveStates.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


//partners
const modal=document.getElementsByClassName('modal');
const openModal =document.getElementsByClassName('open_button');
const closeModal=document.getElementsByClassName('close_button');


openModal[0].addEventListener('click', () =>{
  modal[0].showModal();
});
openModal[1].addEventListener('click', () =>{
  modal[1].showModal();
});
openModal[2].addEventListener('click', () =>{
  modal[2].showModal();
});


closeModal[0].addEventListener('click' , () =>{
  modal[0].close();
});
closeModal[1].addEventListener('click' , () =>{
  modal[1].close();
});
closeModal[2].addEventListener('click' , () =>{
  modal[2].close();
});






//law services
let lawContainer=document.querySelector('.law');
let lawCard=document.querySelectorAll('.law__card');
let previewContainer=document.querySelector('.law_preview');
let previewBox=document.querySelectorAll('.preview');



lawCard.forEach(law__card =>{
  law__card.onclick =() =>{
    previewContainer.style.display='flex';
    let name=law__card.getAttribute('data-name');
    
    previewBox.forEach(preview =>{
      let target= preview.getAttribute('data-target');
      if(name==target){
        preview.classList.add('active');
      }
    });
  };
});


previewBox.forEach(closeModal =>{
  closeModal.querySelector('.fa-times').onclick = () =>{
    closeModal.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});




//header
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 600) {
          $(".primary-header").addClass("active");
      } else {
          
         $(".primary-header").removeClass("active");
      }
  });
});





  
function hideMenu(){
  let menuOpen = document.querySelector('.nav_toggle').checked;

  if(menuOpen = true){
    document.querySelector('.nav_toggle').checked = false;
  }
  }
  window.addEventListener("scroll", hideMenu);


















//slick slider
$(document).ready(function(){
  $('.client_slider').slick({
    slidesToShow: 2,
          slidesToScroll: 3,
          rows:6,
    dots:true, 
    mobileFirst:true,
    responsive:[
      {
        breakpoint:640,
        settings:{
          slidesToShow:4,
          slidesToScroll:2,
          mobileFirst:true,
          centerMode:false,
          rows:4
        }
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:5,
          slidesToScroll:2,
          mobileFirst:true,
          centerMode:false,
         rows:4
        }
      }
    ]
   
  }
);
$('.testimonial_card_slider').slick({
  centerMode: true,
  centerPadding: '0',
  dots:true,
  autoplay:true,
  autoplaySpeed:1000,
  focusOnSelect:true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

});



