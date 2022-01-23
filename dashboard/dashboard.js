let sidebarMid = document.querySelectorAll(".sidebar-links");
console.log(sidebarMid);
sidebarMid.forEach((element) => {
  element.addEventListener("click", toggleSidebar);
});
let sidebar = document.getElementById("sidebar");
let main = document.getElementById("main");
let sidebarAutoClose = document.getElementById("sidebar-auto-close");
let sidebarTitle = document.getElementById("sidebar-title");
let nav= document.getElementById("nav")
function toggleSidebar() {
  if (sidebar.style.width != "63px") {
    sidebar.style.width = "63px";
    main.style.marginLeft = "63px";
    sidebarAutoClose.style.display = "none";
    sidebarTitle.style.display = "none";

  

  } else {
    sidebarTitle.style.display = "block";
    sidebarAutoClose.style.display = "block";
    sidebar.style.width = "18%";
    main.style.marginLeft = "18%";

  }
}

function counter(id, end) {
  let obj = document.getElementById(id);
  let count = 0;

  let timer = setInterval(() => {
    count++;
    obj.textContent = count;

    if (count == end) {
      clearInterval(timer);
    }
  }, 0.1);
}
window.addEventListener("DOMContentLoaded", () => {
  counter("board-item-count-1", 564);
  counter("board-item-count-2", 154);
  counter("board-item-count-3", 299);
  counter("board-item-count-4", 100);
});
