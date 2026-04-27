let elem = document.createElement("div");
document.body.prepend(elem);
elem.innerHTML="<link rel='stylesheet'href=''/web-dev/styles.css'>";

fetch("https://yaasossomon.github.io/web-dev/wdsub/globalheader.html")
.then((result) =>result.text())
.then((text) => {elem.innerHTML=text;})
.catch((e) => console.error(e));
// note make sure to add a header.css page 




