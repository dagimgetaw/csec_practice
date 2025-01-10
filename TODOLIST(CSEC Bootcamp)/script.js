const handlePopUp = () => {
  document.getElementById("popup").style.display = "block";
  document.querySelector(".black_bg").style.display = "block";
};

const handleClosePopUp = () => {
  document.getElementById("popup").style.display = "none";
  document.querySelector(".black_bg").style.display = "none";
};

const handleColor = () => {
  const colorDiv = document.querySelector(".color");
  const moonIcon = colorDiv.children[0];
  const sunIcon = colorDiv.children[1];

  if (moonIcon.style.display !== "none") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
    document.body.classList.add("darkmode");
  } else {
    moonIcon.style.display = "inline-block";
    sunIcon.style.display = "none";
    document.body.classList.remove("darkmode");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const colorDiv = document.querySelector(".color");
  const moonIcon = colorDiv.children[0];
  const sunIcon = colorDiv.children[1];

  moonIcon.style.display = "inline-block";
  sunIcon.style.display = "none";
});
