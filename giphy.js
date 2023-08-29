let APIKEY = "f65VIAd5QdqoxmqQybkZ3GA1EjZvrlSl";

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        console.log("META", content.meta);
        let out = document.querySelector(".out");

        out.innerHTML = "";

        content.data.forEach((gifData) => {
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          let fc = document.createElement("figcaption");

          img.src = gifData.images.downsized.url;
          img.alt = gifData.title;
          fc.textContent = gifData.title;

          fig.appendChild(img);
          fig.appendChild(fc);

          out.appendChild(fig);
        });

        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
