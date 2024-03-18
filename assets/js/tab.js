
// Tab Js
// Button
let icon =  document.querySelector(".icon");
let tabOne = document.querySelector(".tab-1-link");
let tabTwo = document.querySelector(".tab-2-link");
let tabThree = document.querySelector(".tab-3-link");
let tabFour = document.querySelector(".tab-4-link");
let tabFive = document.querySelector(".tab-5-link");
let tabSix = document.querySelector(".tab-6-link");
let tabArray = []
tabArray.push(tabOne,tabTwo,tabThree,tabFour,tabFive,tabSix);

// section
let tabBlockTwo = document.querySelector(".tab-two");
let tabBlockOne = document.querySelector(".tab-one");
let tabBlockThree = document.querySelector(".tab-three");
let tabBlockFour = document.querySelector(".tab-four");
let tabBlockFive = document.querySelector(".tab-five");
let tabBlockSix = document.querySelector(".tab-six");
let footer = document.querySelector("footer");
let footcart = document.querySelectorAll(".food-element-cart");
console.log(footcart);
tabArray.forEach(item => {
    item.addEventListener("click",()=>{
        document.querySelector(".active-link")?.classList.remove("active-link");
        item.classList.add('active-link');
        if (item === tabTwo) {
            document.querySelector(".active-block")?.classList.remove("active-block");
            tabBlockTwo.classList.add('active-block');
            footer.style.marginTop = "100px";
        }
        else if(item === tabOne) {
            document.querySelector(".active-block")?.classList.remove("active-block");
            tabBlockOne.classList.add('active-block');
            footer.style.marginTop = "100px";
        }
        else if(item == tabThree){
            document.querySelector(".active-block")?.classList.remove("active-block");
            tabBlockThree.classList.add('active-block');
            footer.style.marginTop = "0px";
        }
        else if(item == tabFour){
            document.querySelector(".active-block")?.classList.remove("active-block");
            tabBlockFour.classList.add('active-block');
            footer.style.marginTop = "0px";
        }else if(item == tabFive){
            document.querySelector(".active-block")?.classList.remove("active-block");
            tabBlockFive.classList.add('active-block');
            footer.style.marginTop = "0px";
        }else if(item == tabSix){
            document.querySelector(".active-block")?.classList.remove("active-block");
            tabBlockSix.classList.add('active-block');
            footer.style.marginTop = "100px";
        }
    })
});


// Scroll menu
const hiddenMenu = document.querySelector(".hidden-menu");
const row = document.querySelector(".row")

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    row.style.display = "none";
    hiddenMenu.style.display = "block";
    hiddenMenu.style.position = "fixed";
    hiddenMenu.style.width = "100%";
  } else {
    hiddenMenu.style.display = "none";
    row.style.display = "block";
  }
}

// Burger menu
let icontwo = document.querySelector(".burger-menu")
let burgerBlock = document.querySelector(".burger-block")
icontwo.addEventListener("click",()=>{
  burgerBlock.classList.toggle("active-burger");
})

// burger hidden
let hiddenIcon = document.querySelector(".hidden-burger-menu");
let hiddenBugerBlock = document.querySelector(".hidden-burger-block");
hiddenIcon.addEventListener("click",()=>{
  hiddenBugerBlock.classList.toggle("hid-active");
})










