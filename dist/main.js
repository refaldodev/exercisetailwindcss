let burger = document.querySelector("#burger");

burger.addEventListener("click", function () {
  alert("Hai my gorgeous friend on the internet 👋");
});

fetch("https://imdb-api.com/en/API/Top250Movies/k_tm3qsdqx")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    loadImage(data);
  })
  .catch((error) => {
    console.log(error);
  });

// const loadImage = (data) => {
//   var img = `<img src="./images/magi.jpg" class="swiper-slide rounded bg-black text-white swiper-slide-active" role="group" aria-label="1 / 16" style="width: 161.143px; margin-right: 20px;">`;
//   const tes = data.items;
//   var populer = document.querySelector(".populer-now");
//   var datas = 0;
//   const sambung = tes.forEach(element => ).
// };
