/*
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
*/

const navToggle = document.querySelector('.nav-toggle');
/*
navToggle.addEventListener('click',(()=>{
   navTrigger.classList.toggle('active');
  
}));
*/

const links = document.querySelector('.links');
navToggle.addEventListener('click',(()=>{
    links.classList.toggle('show-links');
}))

const backDrop = document.querySelector('.backdrop');
const addModal = document.querySelector('#add-modal');
const videoIcon = document.querySelector('.video-icon');


const addBackdrop =()=>{
    backDrop.classList.toggle('visible');
}



videoIcon.addEventListener('click',(()=>{   
     addBackdrop();
     addModal.classList.toggle('visible');
}));

backDrop.addEventListener('click', (()=>{
    backDrop.classList.toggle('visible');
    addModal.classList.toggle('visible');
}));

//slider
const projects =[
    {
        img:"img/d1.jpg",
        img1:"img/d2.jpg",
        img2:"img/d3.jpg",
        header:"project header"
    },
    {
        img:"img/d4.jpg",
        img1:"img/d1.jpg",
        img2:"img/d5.jpg",
        header:"project header"
    },
    {
        img:"img/d3.jpg",
        img1:"img/d4.jpg",
        img2:"img/d2.jpg",
        header:"project header"
    }
   
];

const boxImage  = document.querySelector('.box-image');
const boxImage1  = document.querySelector('.box-image1');
const boxImage2  = document.querySelector('.box-image2');
const boxHeader  = document.querySelector('.box-header');

let numberCount = 0;

const showSlide =()=>{
    let eachItem = projects[numberCount];
    boxImage.src= eachItem.img;
    boxImage1.src= eachItem.img1;
    boxImage2.src= eachItem.img2;
    boxHeader.textContent = eachItem.header;
}

setInterval(()=>{
    numberCount++;
    if(numberCount>projects.length-1){
        numberCount=0;
    }
    showSlide(numberCount);
},3000)

/*Request*/
const addForm = document.querySelector('#add-form');
const messageSent = document.querySelector('.message-sent');
addForm.addEventListener('submit',e=>{
   e.preventDefault();
   const nameOne = document.querySelector('#name').value;
   const message = document.querySelector('#message').value;
   const email = document.querySelector('#email').value;
   const loading = document.querySelector('.loading');
   const receive = document.querySelector('.receive');

   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(email)&& nameOne && message){
        console.log('i love u');
        const sent = document.querySelector('.sent');
        messageSent.classList.add('feedback');
        setTimeout(()=>{
            messageSent.classList.remove('feedback');
        },3000)
    }

    if(nameOne===''&&
       message === ''&&
       email === ''
     ){
        alert('please fill all the inputs')
     }
     
     setTimeout(()=>{
        loading.style.display = 'none';
        
     },1000)
   
    

})



