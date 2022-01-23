window.addEventListener("scroll", function () {
  if (Math.floor(window.pageYOffset) !== 0) {
    document.getElementById("nav").style.backgroundColor = "WHITE";
    document.querySelectorAll(".nav-ul-h3").forEach((ele) => {
      ele.classList.add("nav-ul-h3-black");
    });
    document.getElementById("nav-logo").style.borderRadius = "0px";
    document.getElementById("nav-ul").style.padding = "0px";
    document.getElementById("nav-logo").style.height = "40px";
  } else {
    document.getElementById("nav").style.background = "transparent";
    document.querySelectorAll(".nav-ul-h3").forEach((ele) => {
      ele.classList.remove("nav-ul-h3-black");
    });
    document.getElementById("nav-logo").style.borderRadius = "100px";
    document.getElementById("nav-logo").style.height = "100px";
    document.getElementById("nav-ul").style.padding = "40px 0px";
  }
});
function headerVideo() {
  console.log("hi");
  if (
    document
      .getElementsByClassName("video-switch")[0]
      .classList.contains("video-switched")
  ) {
    document
      .getElementsByClassName("video-switch")[0]
      .classList.remove("video-switched");
    document.getElementsByClassName(
      "video-container"
    )[0].innerHTML = ` <video muted id="header-video" poster="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/01/14/777735-restaurant-01.jp" src="https://res.cloudinary.com/dk5acaaxg/video/upload/v1639594623/Restaurant_Promo_Video___Sigma_30mm_f_1.4_okz8hn.mp4" ></video>`;
    document.getElementById("header-video").play();
  } else {
    document.getElementById("header-video").pause();
    document.getElementsByClassName("video-container")[0].innerHTML = ` `;
    document
      .getElementsByClassName("video-switch")[0]
      .classList.add("video-switched");
  }
}

let navUL = document.getElementById("nav-ul").getElementsByTagName("li");
console.log(navUL.length)
document.getElementById("toggle-navbar").onclick = () => {
  let liIndex = 0;
  const interval = setInterval(() => {
    Array.from(navUL)[liIndex].style.right = "-200px";
    
    if (
      liIndex === navUL.length
      
    ) {
      
      clearsIntercval(interval)
    }else{

      
      
      liIndex++;
    }
    console.log(liIndex+" , " + navUL.length)
  }, 500);

};
function clearsIntercval(params) {
  clearInterval(params)
  
}
