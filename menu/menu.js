const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "Fast Food",
    price: 22.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "BHJI PAV",
    category: "dinner",
    price: 00,
    img: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

function menuAllOrders(arr) {
  let matter = arr.map((ele) => {
    console.log(
      ele.stars +
        " ,   " +
        Math.ceil((ele.stars - Math.floor(ele.stars)) * 100) +
        "%"
    );

    return `<div class="menu211" data-aos="fade-top" data-category="${
      ele.strCategory
    }">
      <p class="suit"> ${
        [22.99, 8.99, 12.99, 10.5, 13.99][Math.floor(Math.random() * 5)]
      }</p>
      <div class="menu2112">
  
        <img
          src="${ele.strMealThumb}"
          alt=""
        />
      </div>
      <div class="menu2111">
        <h3>${
          ele.strMeal.split("").length > 20
            ? ele.strMeal.slice(0, 20) + "..."
            : ele.strMeal
        }</h3>
        <p class="stars">
        ${Array(Math.floor(ele.stars))
          .fill()
          .map((_, i) => {
            return ` <i
          class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
          size="18"
          color="#E23744"
          ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#E23744"
          width="18"
          height="18"
          viewBox="0 0 20 20"
          aria-labelledby="icon-svg-title- icon-svg-desc-"
          role="img"
          class="rbbb40-0 ZGPg"
          >
          <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
          ></path></svg
          ></i>`;
          })
          .join(" ")}
           
          
          
          <i
            class="rbbb40-1 MxLSp lhdg1m-6 HpiHL"
            size="18"
            color="#E23744"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E23744"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="rbbb40-0 ZGPg"
            >
              <linearGradient
                id="ckpi2neto3clh2qqo5sit5uco"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
              >
                <stop offset="0" stop-color="#E23744"></stop>
                <stop offset="${
                  Math.ceil((ele.stars - Math.floor(ele.stars)) * 100) + "%"
                }" stop-color="#E23744"></stop>
                <stop offset="${
                  Math.ceil((ele.stars - Math.floor(ele.stars)) * 100) + "%"
                }" stop-color="#CFCFCF"></stop>
                <stop offset="1" stop-color="#CFCFCF"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                fill="url(#ckpi2neto3clh2qqo5sit5uco)"
              ></path></svg
          ></i>
          <p>${ele.strArea}</p>
        </p>
        <p class="reviews"> hi this is reviews</p>
      </div>
    </div>
  
    `;
  });
  document.getElementById("menu").innerHTML = matter.join(" ");
}
// ${ele.desc.substring(0, 30)}

window.addEventListener("DOMContentLoaded", function () {
  let matter = menu.map((ele) => {
    return `<div class="menu211" data-aos="fade-top">
      <p class="suit"> ${
        [22.99, 8.99, 12.99, 10.5, 13.99][Math.floor(Math.random() * 5)]
      }</p>
      ${
        [1, 0, 0, 0][Math.floor(Math.random() * 4)] === 1
          ? ` <p class="suit proextra" > proextra</p>`
          : ""
      }
     
  
  
      <div class="menu2112">
        <img
          src="${ele.img}"
          alt=""
        />
      </div>
      <div class="menu2111">
        <h3>${ele.title}</h3>
        <p class="stars">
         
          <i
            class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
            size="18"
            color="#E23744"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E23744"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="rbbb40-0 ZGPg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
              ></path></svg
          ></i>
          <i
            class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
            size="18"
            color="#E23744"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E23744"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="rbbb40-0 ZGPg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
              ></path></svg
          ></i>
          <i
            class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
            size="18"
            color="#E23744"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E23744"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="rbbb40-0 ZGPg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
              ></path></svg
          ></i>
          <i
            class="rbbb40-1 MxLSp lhdg1m-5 kDhJmF"
            size="18"
            color="#E23744"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E23744"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="rbbb40-0 ZGPg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
              ></path></svg
          ></i>
          <i
            class="rbbb40-1 MxLSp lhdg1m-6 HpiHL"
            size="18"
            color="#E23744"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#E23744"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              aria-labelledby="icon-svg-title- icon-svg-desc-"
              role="img"
              class="rbbb40-0 ZGPg"
            >
              <linearGradient
                id="ckpi2neto3clh2qqo5sit5uco"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
              >
                <stop offset="0" stop-color="#E23744"></stop>
                <stop offset="30%" stop-color="#E23744"></stop>
                <stop offset="31%" stop-color="#CFCFCF"></stop>
                <stop offset="1" stop-color="#CFCFCF"></stop>
              </linearGradient>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6667 0H3.33333C1.5 0 0 1.5 0 3.33333V16.6667C0 18.5 1.5 20 3.33333 20H16.6667C18.5 20 20 18.5 20 16.6667V3.33333C20 1.5 18.5 0 16.6667 0ZM16.6667 8.75L13.5833 11.5L14.5 15.5833C14.5833 15.9167 14.5 16.1667 14.25 16.4167C14.1667 16.5 14 16.5833 13.8333 16.5833C13.6667 16.5833 13.5833 16.5833 13.4167 16.5L10 14.25L6.58333 16.3333C6.33333 16.5 6 16.5 5.75 16.3333C5.5 16.1667 5.41667 15.8333 5.5 15.5L6.41667 11.5L3.33333 8.75C3.08333 8.5 3 8.25 3.08333 7.91667C3.16667 7.66667 3.41667 7.41667 3.75 7.41667L7.75 7L9.33333 3.16667C9.41667 3 9.58333 2.83333 9.75 2.75C10.0833 2.58333 10.5833 2.75 10.6667 3.16667L12.25 7L16.25 7.33333C16.5833 7.33333 16.8333 7.58333 16.9167 7.83333C17 8.16667 16.9167 8.5 16.6667 8.75Z"
                fill="url(#ckpi2neto3clh2qqo5sit5uco)"
              ></path></svg
          ></i>
        </p>
        <p class="reviews">${ele.desc.substring(0, 30)}</p>
      </div>
    </div>
  
      `;
  });
  console.log(matter);
  document.getElementById("menu").innerHTML = matter.join(" ");
});

let searchBtn = document.getElementById("searchFoodItem");
searchBtn.addEventListener("click", function () {
  let searchString = document.getElementById("searchFoodItemInput").value;

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`)
    .then((Response) => Response.json())
    .then(function (params) {
      console.log(params);
      params.meals.forEach((ele) => {
        ele.stars = [4.5, 3.6, 4.7, 4.2, 2.7][Math.floor(Math.random() * 5)];
      });

      if (params.meals) {
        menuAllOrders(params.meals);
      }
    });
});
