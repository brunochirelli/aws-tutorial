(() => {
  document.addEventListener("readystatechange", function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const root = document.querySelector("body");

    const content = document.createElement("div");

    content.innerHTML = `Hey! Today is ${day}/${month}/${year}`;

    root.appendChild(content);
  });
})();
