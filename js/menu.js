let menu = document.querySelector(".menu");
let body = document.querySelector("body");
readProduct();

function readProduct() {
  let newData = JSON.parse(localStorage.getItem("food")) || [];
  menu.innerHTML = "";
  newData.forEach((el, index) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let img = document.createElement("img");
    img.classList.add("menu_img");
    let menu_text = document.createElement("div");
    menu_text.classList.add("menu_text");
    let text_name = document.createElement("p");
    text_name.classList.add("text_name");
    let text_price = document.createElement("p");
    text_price.classList.add("text_price");
    let actin_btn = document.createElement("div");
    actin_btn.classList.add("action_btn");
    let btn_delete = document.createElement("button");
    btn_delete.classList.add("btn_delete");
    let btn_edit = document.createElement("button");
    btn_edit.classList.add("btn_edit");
    let btn_buy = document.createElement("button");
    btn_buy.classList.add("btn_buy");

    img.src = el.image;
    text_name.innerText = el.name;
    text_price.innerText = el.price;

    btn_delete.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    btn_edit.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
    btn_buy.innerHTML = `<ion-icon name="add-circle-outline"></ion-icon>`;

    card.append(img);
    menu_text.append(text_name);
    menu_text.append(text_price);
    actin_btn.append(btn_buy);
    actin_btn.append(btn_edit);
    actin_btn.append(btn_delete);
    card.append(menu_text);
    card.append(actin_btn);
    menu.appendChild(card);

    // ? ACTION
    btn_delete.addEventListener("click", function () {
      deleteProduct(index);
    });

    btn_buy.addEventListener("click", () => {
      let findObj = newData.find((el, idx) => idx === index);
      let data = JSON.parse(localStorage.getItem("basket")) || [];
      data.push(findObj);
      localStorage.setItem("basket", JSON.stringify(data));
    });
    // ? ACTION
  });
}

function deleteProduct(id) {
  let data = JSON.parse(localStorage.getItem("food")) || [];
  data.splice(id, 1);
  localStorage.setItem("food", JSON.stringify(data));
  readProduct();
}
