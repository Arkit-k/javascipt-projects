
const inputs = document.querySelectorAll(".css-controller input");


inputs.forEach((inputs)=>inputs.addEventListener("change",update));


function update(){

    const suffixData = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffixData
    );

}
const switchThemer = document.getElementById("themeSwitcher")

switchThemer.addEventListener("click", () => {
    const currentBgColor = getComputedStyle(document.documentElement).getPropertyValue("--bg-color").trim();

    if (currentBgColor === "white") {
        // Set dark mode
        document.documentElement.style.setProperty("--bg-color", "white");
        document.documentElement.style.setProperty("--text-color", "black");
      } else {
        // Set light mode
        document.documentElement.style.setProperty("--bg-color", "black");
        document.documentElement.style.setProperty("--text-color", "white");
      }
    });