// var progress = document.querySelector(`.progressLne`)
// console.log(progress)

// function progressBar(){
//     let height = document.documentElement.scrollHeight;
//     let top = document.documentElement.scrollTop;
//     let per = (top/(height - (window.innerHeight/2))) * 100;
  

//      progress.style.width = `${per}%`;
     
//     console.log(per)
// }

// **MOUSE CURSOR




var mouse = document.querySelector(`.cursor .ball`)
var point = document.querySelector(`.cursor .point`)
 
function mouseToggler (event) {
 var top = event.clientY;
 var left = event.clientX;


  mouse.style.top = `${top}px`;
  mouse.style.left = `${left}px`;

  point.style.top = `${top}px`;
  point.style.left = `${left}px`;


  point.animate({
    // **WHATS THE ANIMATION

    top : `${top}px`,
    left : `${left}px`,


  },{

   duration : 300,
   fill: `forwards`

     
  })

}








window.addEventListener('mousemove',mouseToggler)