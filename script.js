const plus = document.querySelectorAll(".btn-plus");
const moin = document.querySelectorAll(".btn-moin");
const total = document.querySelector(".total-price");
const remove = document.querySelectorAll(".remove");
const like = document.querySelectorAll(".like");
const discount = document.querySelector(".discount");
const code = "riadh";
let initialtotal;
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.innerHTML++;
    let price = plus[i].parentElement.nextElementSibling.innerHTML;
    total.innerHTML = (parseFloat(price) + parseFloat(total.innerHTML)).toFixed(
      2
    );
    initialtotal = total.innerHTML;
  });
}
for (let btn of moin) {
  btn.addEventListener("click", function () {
    if (btn.nextElementSibling.innerHTML > 0) {
      btn.nextElementSibling.innerHTML--;
      let price = btn.parentElement.nextElementSibling.innerHTML;
      total.innerHTML = (
        parseFloat(total.innerHTML) - parseFloat(price)
      ).toFixed(2);
      initialtotal = total.innerHTML;
    }
  });
}
for (let icon of remove) {
  icon.addEventListener("click", function () {
    if (icon.parentElement.parentElement.parentElement.nextElementSibling) {
      icon.parentElement.parentElement.parentElement.nextElementSibling.remove();
    }
    icon.parentElement.parentElement.parentElement.remove();
    let price =
      icon.parentElement.parentElement.nextElementSibling.lastElementChild
        .innerHTML;
    let quantite =
      icon.parentElement.parentElement.nextElementSibling.firstElementChild
        .children[1].innerHTML;
    var res = parseFloat(price) * parseFloat(quantite);
    total.innerHTML = (total.innerHTML - res).toFixed(2);
  });
}

for (let btn of like) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("like-red");
  });
}
discount.addEventListener("keyup", function (e) {
  let value = e.target.value;

  if (code === value) {
    total.innerHTML = total.innerHTML - total.innerHTML * 0.2;
  } else {
    total.innerHTML = initialtotal;
  }
});
