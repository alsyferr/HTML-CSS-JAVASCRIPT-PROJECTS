const urlInput = document.querySelector("input")
const btn = document.querySelector("button")


btn.addEventListener("click", async () => {
  try {
    const response = await fetch(urlInput.value);
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = new Date().getTime();
    link.click();
  } catch (error) {
    alert("Faild to download file!")
  }
});