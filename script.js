const plus = document.querySelectorAll(".btn-plus");
const moin = document.querySelectorAll(".btn-moin");
const total = document.querySelector(".total-price");
const remove = document.querySelectorAll(".remove");
const like = document.querySelectorAll(".like");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    plus[i].previousElementSibling.innerHTML++;
    let price = plus[i].parentElement.nextElementSibling.innerHTML;
    total.innerHTML = (parseFloat(price) + parseFloat(total.innerHTML)).toFixed(
      2
    );
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
    }
  });
}
for (let icon of remove) {
  icon.addEventListener("click", function () {
    if (icon.parentElement.parentElement.parentElement.nextElementSibling) {
      icon.parentElement.parentElement.parentElement.nextElementSibling.remove();
    }
    icon.parentElement.parentElement.parentElement.remove();
  });
}

for (let btn of like) {
  btn.addEventListener("click", function () {
    btn.classList.toggle("like-red");
  });
}
