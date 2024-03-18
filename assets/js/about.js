
// Scroll Js
const hiddenMenu = document.querySelector(".hidden-menu");
const row = document.querySelector(".row")

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    row.style.display = "none";
    hiddenMenu.style.display = "block";
    hiddenMenu.style.position = "fixed"
    hiddenMenu.style.width = "100%"
  } else {
    hiddenMenu.style.display = "none";
    row.style.display = "block";
  }
}

// Burger menu

let icon = document.querySelector(".burger-menu")
// console.log(icon);
let burgerBlock = document.querySelector(".burger-block")
icon.addEventListener("click",()=>{
  burgerBlock.classList.toggle("active-burger")
})

// burger hidden

let hiddenIcon = document.querySelector(".hidden-burger-menu")
let hiddenBugerBlock = document.querySelector(".hidden-burger-block")
hiddenIcon.addEventListener("click",()=>{
  hiddenBugerBlock.classList.toggle("hid-active")
})


// Counter Js
let counts = setInterval(updated,100);
let upto = 0;
function updated(){
    let count = document.getElementById("counter-year");
    count.innerHTML = ++upto;
    if (upto === 18){
        clearInterval(counts);
    }
}

let countsTwo = setInterval(updatedTwo,100);
let uptoTwo = 0;
function updatedTwo(){
    let countTwo = document.getElementById("counter-menus");
    countTwo.innerHTML = ++uptoTwo;
    if (uptoTwo === 100){
        clearInterval(countsTwo);
    }
}

let countsThree = setInterval(updatedThree,100);
let uptoThree = 0;
function updatedThree(){
    let countThree = document.getElementById("counter-staff");
    countThree.innerHTML = ++uptoThree;
    if (uptoThree === 50){
        clearInterval(countsThree);
    }
}

let countsFour = setInterval(updatedFour,50);
let uptoFour = 0;
function updatedFour(){
    let countFour = document.getElementById("counter-info");
    countFour.innerHTML = (uptoFour += 100);
    if (uptoFour === 15000){
        clearInterval(countsFour);
    }
}


// Reservation section
let clickBut = document.querySelector(".click");
let nameInput = document.querySelector("#nameinput");
let emailInput = document.querySelector("#go-email");
let goPhone = document.querySelector("#go-phone");
let goDate = document.querySelector("#go-date");
let timeSelect = document.querySelector("#time-select");
let humanCount = document.querySelector("#human");

// Text Section
let nameText = document.querySelector(".name-text");
let emailText = document.querySelector(".email-text");
let phoneText = document.querySelector(".phone-text");
let dateText = document.querySelector(".date-text");
let tText = document.querySelector(".time-text-select");
let humanText = document.querySelector(".human-text");
let selectList = document.querySelector(".select-list")
let selectItems = document.querySelectorAll(".select-list li");
let countSelectList = document.querySelector(".count-select-list");
let countSelectListItem = document.querySelectorAll (".count-select-list li");
let submit = document.querySelector("#submit")
let MailFoter = document.querySelector("#email-footer")
console.log(tText);


submit.addEventListener("click",()=>{
  var params = {
    from_name: nameInput.value,
    email_id : emailInput.value,
  }
  emailjs.send("service_lz30xkg","template_nnoo10c",params).then(function(res){
    alert("succses"+ res.status)
  });
})


clickBut.addEventListener("click",()=>{
  if(nameInput.value.trim().length == 0){
    nameText.style.visibility = "visible"
  }else{
    nameText.style.visibility = "hidden"
  }
  if(emailInput.value.trim().length == 0){
    emailText.style.visibility = "visible";
  }else{
    emailText.style.visibility = "hidden";
  }
  if(goPhone.value.trim().length == 0){
    phoneText.style.visibility = "visible";
  }else{
    phoneText.style.visibility = "hidden";
  }
  if(goDate.value.trim().length == 0){
    dateText.style.visibility = "visible";
  }else{
    dateText.style.visibility = "hidden";
  }
  if(humanCount.value.trim().length == 0){
    humanText.style.visibility = "visible";
  }else{
    humanText.style.visibility = "hidden";
  }
  if(timeSelect.value.trim().length == 0){
    tText.style.visibility = "visible";
  }else{
    tText.style.visibility = "hidden";
  }
  if(nameInput.value.trim().length > 0 && timeSelect.value.trim().length > 0 && humanCount.value.trim().length > 0 && emailInput.value.trim().length > 0 && goPhone.value.trim().length > 0  && goDate.value.trim().length > 0){
    Swal.fire({
      title: "Rezervasiyanız qeydə alınsın?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Bəli",
      denyButtonText: `Xeyr`
    }).then((result) => {
      if (result.isConfirmed){
        Swal.fire("Rezervasiyanız qeydə alındı!", "", "success");
        nameInput.value = "";
        emailInput.value = "";
        goPhone.value = "";
        goDate.value = "";
        humanCount.value = "";
        timeSelect.value = "";
      } else if (result.isDenied) {
        Swal.fire("Rezervasiyanız qeydə alınmadı", "", "info");
        nameInput.value = "";
        emailInput.value = "";
        goPhone.value = "";
        goDate.value = "";
        humanCount.value = ""
        timeSelect.value = ""
      }
    });
  }
})



for(let item of Array.from(selectItems)){
  item.addEventListener("click",()=>{
    timeSelect.value = item.textContent;
    selectList.classList.toggle("active-select-list");
  })
}
timeSelect.addEventListener("click",()=>{
  selectList.classList.toggle("active-select-list")
})




Array.from(countSelectListItem).forEach(item => {
  item.addEventListener("click",()=>{
    humanCount.value = item.textContent;
    countSelectList.classList.toggle("active-select-list");
  })
});

humanCount.addEventListener("click",()=>{
  countSelectList.classList.toggle("active-select-list");
})

// Swiper customer
var swiper = new Swiper(".customer-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints:{
      1024:{
        slidesPerView:3,
      },
      992:{
        slidesPerView:2,
        centeredSlides: true,
      },
      768:{
        centeredSlides: true,
        slidesPerView: 2,
      },
      576:{
        slidesPerView:1,
      },
      430:{
        slidesPerView:1,
      },
      375:{
        slidesPerView:1
      },
      360:{
        slidesPerView:1
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 1000, // Delay between slides in milliseconds (5 seconds in this example)
        disableOnInteraction: true, // Disable autoplay when user interacts with the swiper
    },
  });

// Footer problems
// let submit = document.querySelector("#submit")
// let MailFoter = document.querySelector("#email-footer")
// submit.addEventListener("click",()=>{
//   var params = {
//     from_name: MailFoter.value,
//     // email_id : emailInput.value,
//   }
//   emailjs.send("service_lz30xkg","template_nnoo10c",params).then(function(res){
//     alert("succses"+ res.status)
//   });
// })
