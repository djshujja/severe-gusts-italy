window.onload = () => {
  //   Elements for Nav Images
  var navImgOne = document.getElementById("header-nav-img-1");
  var navImgTwo = document.getElementById("header-nav-img-2");
  var navImgThree = document.getElementById("header-nav-img-3");
  var navImgFour = document.getElementById("header-nav-img-4");

  //   Elements for Header Images

  var imgOne = document.getElementById("header-img-one");
  var imgTwo = document.getElementById("header-img-two");
  var imgThree = document.getElementById("header-img-three");
  var imgFour = document.getElementById("header-img-four");

  imgOne.style.display = "block";
  imgTwo.style.display = "none";
  imgThree.style.display = "none";
  imgFour.style.display = "none";

  navImgOne.addEventListener("click", (e) => {
    imgOne.style.display = "block";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
    imgFour.style.display = "none";
  });

  navImgTwo.addEventListener("click", () => {
    imgOne.style.display = "none";
    imgTwo.style.display = "block";
    imgThree.style.display = "none";
    imgFour.style.display = "none";
  });

  navImgThree.addEventListener("click", () => {
    imgOne.style.display = "none";
    imgTwo.style.display = "none";
    imgThree.style.display = "block";
    imgFour.style.display = "none";
  });

  navImgFour.addEventListener("click", () => {
    imgOne.style.display = "none";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
    imgFour.style.display = "block";
  });
};
