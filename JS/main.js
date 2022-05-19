const hoverLink1 = document
  .getElementById("dropBox1")
  .getElementsByTagName("a")[0];

const hoverLink2 = document
  .getElementById("dropBox2")
  .getElementsByTagName("a")[0];

const hoverPopUpBox1 = document.getElementById("popUpBox1");
const hoverPopUpBox2 = document.getElementById("popUpBox2");

// Boxes

// For box 1

const hiddingNavBox1 = function () {
  hoverPopUpBox1.style.visibility = "hidden";
  return;
};

const showingNavBox1 = function () {
  hoverPopUpBox1.style.visibility = "visible";
  return;
};

hoverLink1.addEventListener("mouseover", showingNavBox1);

hoverLink1.addEventListener("mouseout", hiddingNavBox1);

// For box 2

const hiddingNavBox2 = function (e) {
  console.log(e.toElement);
  // console.log(e);
  console.log("haha");
  console.log(typeof e.toElement);
  hoverPopUpBox2.style.visibility = "hidden";
  return;
};

const showingNavBox2 = function (e) {
  console.log(e.toElement);
  // console.log(e);
  console.log("hello");
  hoverPopUpBox2.style.visibility = "visible";
  return;
};

hoverLink2.addEventListener("mouseover", showingNavBox2);

hoverLink2.addEventListener("mouseout", hiddingNavBox2);

// /////////////////////////////
// Side nav bar
const bringSideNavBtn = document.getElementsByClassName("fa-bars")[0];
const sideNav = document.getElementsByClassName("side-nav-bar")[0];
const removeSideNav = document.getElementsByClassName("side-nav-close")[0];
// console.log(removeSideNav);
const navBarOnTop = document.getElementsByClassName("nav-bar")[0];
const overlay = document.getElementsByClassName("overlay")[0];
// console.log(overlay);
// console.log(bringSideNavBtn);
// console.log(sideNav);

bringSideNavBtn.addEventListener("click", function () {
  overlay.style.visibility = "visible";
  sideNav.style.right = "0px";
});

removeSideNav.addEventListener("click", function () {
  featuresExtendedBox.style.display = "none";
  companyExtendedBox.style.display = "none";
  overlay.style.visibility = "hidden";
  sideNav.style.right = "-300px";
});

// Side Nav Links
const featuresExtendedBox =
  document.getElementsByClassName("extended-box-1")[0];
const featuresLink = document.getElementsByClassName("features-link")[0];

featuresLink.addEventListener("click", function () {
  if (featuresExtendedBox.style.display === "flex") {
    featuresExtendedBox.style.display = "none";
    return;
  }
  if ((featuresExtendedBox.style.display = "none")) {
    featuresExtendedBox.style.display = "flex";
  }
});

const companyExtendedBox = document.getElementsByClassName("extended-box-2")[0];
const companyLink = document.getElementsByClassName("company-link")[0];

companyLink.addEventListener("click", function () {
  if (companyExtendedBox.style.display === "flex") {
    companyExtendedBox.style.display = "none";
    return;
  }
  if ((companyExtendedBox.style.display = "none")) {
    companyExtendedBox.style.display = "flex";
  }
});

// Hero Section
const heroImageToChange = document.getElementsByClassName("desktop-image")[0];
// console.log(heroImageToChange);

if (window.innerWidth <= 700) {
  heroImageToChange.src = " ";
  heroImageToChange.src = "./images/image-hero-mobile.png";
}


