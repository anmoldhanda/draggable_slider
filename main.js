const arrow_btns = document.querySelectorAll(".draggable-slider-container i");
const cards_container = document.querySelector(".cards-container");
const first_card_width = cards_container.querySelector(".card").offsetWidth;
// ================================== cardscontainer.queryselector having card means the cards container's first elemtn having class of card & .offsetwidth gives the width of the particular element ==================================
let is_dragging = false;
let startX, startscroll_left;

arrow_btns.forEach((single_arrow_btn)=>{
  single_arrow_btn.addEventListener("click",(e)=>{
    // ================================== if the clicked icon having id is left then remove the firstcard's width if the right icon is clicked then add the first's cards with into the container += having existing changes add & update with the first's card width ==================================  
    if(single_arrow_btn.id === "leftarrowicon") {
      cards_container.scrollLeft += -first_card_width;
      console.log("clicked on left button");
    }
    else {
      cards_container.scrollLeft += first_card_width;
      console.log("clicked on right button");
    }
    // cards_container.scrollLeft += single_arrow_btn.id === "leftarrowicon" ? -first_card_width : first_card_width;
  })
})

const dragstart = (e) => {
  is_dragging = true;
  cards_container.classList.add("dragging");
  // ================================== records the initial cursor and scroll position of the caraousel ==================================
  startX = e.pageX;
  startscroll_left = cards_container.scrollLeft;
};

const dragging = (e) => {
  // ================================== e.pageX returns the horizontal coordinates of the mouse pointer ==================================
  // console.log(e.pageX);
  if (!is_dragging) {
    return;
  }
  // ================================== updates the scroll position of the caraousel based on the cursor movement ==================================
  cards_container.scrollLeft = startscroll_left - (e.pageX - startX);
  // ================================== scrollLeft sets or returns the number of pixels an element's content is scrolled horizonatally ==================================
};

const dragstop = (e) => {
  is_dragging = false;
  cards_container.classList.remove("dragging");
};

cards_container.addEventListener("mousemove", dragging);
cards_container.addEventListener("mousedown", dragstart);
document.addEventListener("mouseup", dragstop);