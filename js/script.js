//***********************Mouse***********************
// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById("cursor");

// カーソル用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform =　"translate(" + e.clientX + "px, " + e.clientY + "px)";
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
// -------mix-blend-mode: difference;--------
var link = document.querySelectorAll("a");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("active");
  });
  link[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("active");
  });
}

var img = document.querySelectorAll("img");
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("active");
  });
  img[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("active");
  });
}

var menuIcon = document.querySelectorAll("[for='menu_icon']");
for (var i = 0; i < menuIcon.length; i++) {
  menuIcon[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("active");
  });
  menuIcon[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("active");
  });
}

var spanAccess = document.querySelectorAll(".article_access");
for (var i = 0; i < spanAccess.length; i++) {
  spanAccess[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("active");
  });
  spanAccess[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("active");
  });
}

// -------mix-blend-mode: color-burn;-------
var aboutImg = document.querySelectorAll(".about_img");
for (var i = 0; i < aboutImg.length; i++) {
  aboutImg[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("active_me");
  });
  aboutImg[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("active_me");
  });
}
