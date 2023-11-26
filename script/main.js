let sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

let scrollControll = document.querySelector(".gallary");
let backbtn = document.getElementById("back-btn");
let nextbtn = document.getElementById("next-btn");

scrollControll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollControll.scrollLeft += evt.deltaY;
});

backbtn.addEventListener("click", () => {
    scrollControll.scrollLeft -= 100; 
});

nextbtn.addEventListener("click", () => {
    scrollControll.scrollLeft += 100;
});
