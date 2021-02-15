window.onload = () => {
  //Get the button:
  topButton = document.getElementById("top-button");
  whatsappButton = document.getElementById("whatsapp-button");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  topButton.addEventListener("click", () => {
    smoothScroll("hero");
    // topFunction();
  });

  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  }

  function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
  }

  function scrollFunction() {
    // if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    if (window.scrollY > 300) {
      topButton.style.display = "block";
      whatsappButton.style.display = "block";
    } else {
      topButton.style.display = "none";
      whatsappButton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  // PinchToZoom
  // document.addEventListener(
  //   "touchmove",
  //   function (event) {
  //     if (event.scale !== 1) {
  //       event.preventDefault();
  //     }
  //   },
  //   { passive: false }
  // );

  // Double Tap
  // var lastTouchEnd = 0;
  // document.addEventListener(
  //   "touchend",
  //   function (event) {
  //     var now = new Date().getTime();
  //     if (now - lastTouchEnd <= 300) {
  //       event.preventDefault();
  //     }
  //     lastTouchEnd = now;
  //   },
  //   false
  // );

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
