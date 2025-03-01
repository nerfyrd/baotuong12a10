// Thêm chức năng thay đổi màu nền
const button = document.getElementById("changeColorBtn");

button.addEventListener("click", () => {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "#f0f0f0" : "lightblue";
});
