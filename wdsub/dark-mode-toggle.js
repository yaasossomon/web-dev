let darkModeTgl = document.getElementById("dark-mode-tgl");
let onOffStatus = document.getElementById("on-off-status");
let islight = true;
function mngMode(event) {

  if(islight);
  else ;
 

  
  // change background color to black if light mode, else white
   if(islight) document.body.style.backgroundColor="black";
  else document.body.style.backgroundColor="white";
  
  // change text color to white if light mode, else black
  
   if(islight) document.body.style.color = "white";
  else document.body.style.color = "black";
  
  
  // change text to "dark mode on"if light mode , else "dark mode off"
  
   if(islight) onOffStatus.innerHTML="<p>Dark mode on</p>";
  else onOffStatus.innerHTML="<p>Dark mode off</p>";
  
  // flip is light switch
  isLight = !isLight;
  
}

