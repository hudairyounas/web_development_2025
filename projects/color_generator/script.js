let isColorGenerated = false;
let hexCode = "";

const copy_btn = document.querySelector(".copy_btn");
const generateBtn = document
  .querySelector(".generateBtn")
  .addEventListener("click", () => {
    console.log("ok");
    const color_container = document.querySelector(".color_container");
    const colorCode = document.querySelector(".colorCode");
    const textCopyMsg = document.querySelector(".textCopyMsg");

    hexCode = "#";
    for (let i = 0; i < 6; i++) {
      let randomHex = Math.floor(Math.random() * 16).toString(16);
      hexCode += randomHex;
    }
    console.log(hexCode);

    color_container.style.background = hexCode;
    colorCode.classList.add("colorCode");
    colorCode.innerText = hexCode;

    isColorGenerated = true;
    textCopyMsg.textContent = "";
  });

copy_btn.addEventListener("click", () => {
  if (!isColorGenerated) {
    alert("Please generate a color first!");
  } else {
    window.navigator.clipboard.writeText(hexCode);
    const textCopyMsg = document.querySelector(".textCopyMsg");
    textCopyMsg.textContent = "Text Copied";
  }
});
