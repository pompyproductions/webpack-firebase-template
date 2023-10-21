const container = document.querySelector("html");

function handleResize() {
  container.style.setProperty("--doc-height", `${window.innerHeight}px`);
}

window.addEventListener("resize", handleResize);