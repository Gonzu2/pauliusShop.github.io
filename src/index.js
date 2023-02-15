const alertPlaceholder = Array.from(
  document.querySelectorAll("#liveAlertPlaceholder")
);

const alertButtons = Array.from(document.querySelectorAll("#liveAlertBtn"));

alertButtons.forEach((element, index) => {
  element.dataset.index = index;
});

const alert = (message, index) => {
  console.log(`Pushing to alert placeholder ${index}`);
  alertPlaceholder[index].innerHTML = [
    `<div id="alert-3" class="flex p-4 mb-4 rounded-lg bg-gray-800 text-green-400" role="alert">`,
    `<svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">`,
    `<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>`,
    `</svg>`,
    `<span class="sr-only">Info</span>`,
    `<div class="ml-3 text-sm font-medium">`,
    `${message}`,
    `</div>`,
    ` <button type="button" onclick="closeAlert(event)" class="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 inline-flex h-8 w-8 bg-gray-700 text-green-400 hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">`,
    `<span class="sr-only">Close</span>`,
    `<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">`,
    `<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>`,
    `</svg>`,
    `</button>`,
    `</div>`,
  ].join("");

  alertPlaceholder.append;
};

let pushAlert = (button) => {
  alert(
    `Product has been succesfuly added to your cart, the price of the product is ${button.getAttribute(
      "data-price"
    )}$.`,
    button.getAttribute("data-index")
  );
};

// target element that will be dismissed
const $targetEl = document.getElementById("targetElement");

// optional trigger element
const $triggerEl = document.getElementById("triggerElement");

function closeAlert(event) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}

let currentImage = 1; //By default carosuel image will start on 1.
let newImage = 1;
let totalImages = 3;

function changeToLeft() {
  if (currentImage - 1 < 1) {
    newImage = totalImages;
  } else {
    newImage--;
  }
  showImage();
}

function changeToRight() {
  if (currentImage + 1 > totalImages) {
    newImage = 1;
  } else {
    newImage++;
  }
  showImage();
}

function showImage() {
  const images = document.querySelectorAll("div[data-image-index]");

  images[currentImage - 1].classList.remove("flex");
  images[currentImage - 1].classList.add("hidden");

  images[newImage - 1].classList.remove("hidden");
  images[newImage - 1].classList.add("flex");

  currentImage = newImage;
}

let navbarOpen = false;
window.onresize = checkSize;

function checkSize() {
  let width = window.innerWidth;
  if (width >= 1400 && navbarOpen) {
    const navbar = document.querySelector("#navbar");
    navbar.classList.remove(
      "flex",
      "flex-col",
      "fixed",
      "top-[0]",
      "right-[1px]",
      "bg-slate-700",
      "z-10",
      "w-[50vw]",
      "h-[100vh]",
      "gap-2",
      "text-5xl"
    );
    navbar.classList.add("hidden");
    navbarOpen = false;
  }
}

function showNavbar() {
  if (!navbarOpen) {
    const navbar = document.querySelector("#navbar");
    navbar.classList.remove("hidden");
    navbar.classList.add(
      "flex",
      "flex-col",
      "fixed",
      "top-[0]",
      "right-[1px]",
      "bg-slate-700",
      "z-10",
      "w-[50vw]",
      "h-[100vh]",
      "gap-2",
      "text-5xl"
    );
    navbarOpen = true;
  } else {
    const navbar = document.querySelector("#navbar");
    navbar.classList.remove(
      "flex",
      "flex-col",
      "fixed",
      "top-[0]",
      "right-[1px]",
      "bg-slate-700",
      "z-10",
      "w-[50vw]",
      "h-[100vh]",
      "gap-2",
      "text-5xl"
    );
    navbar.classList.add("hidden");
    navbarOpen = false;
  }
}
