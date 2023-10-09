let row = document.querySelector(".row");
let url = "https://jsonplaceholder.typicode.com/posts";

const api = async () => {
  let api = await fetch(url);
  let data = await api.json();
  let html = "";

  data.forEach((item) => {
    html += `  <div class="box">
    <h5>${item.title}</h5>
    <p>
     ${item.body}
    </p>
  </div>`;
  });
  row.innerHTML = html;
};

api();
