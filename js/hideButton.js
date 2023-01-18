const btn = document.getElementById("hideBtnReply");
btn.onclick = function () {
  if (btn.style.display !== "none") {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
};
