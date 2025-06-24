let a = document.getElementsByClassName("container")[0]; // ✅ returns a collection, so use [0]
let div = document.createElement("div");
div.innerHTML = "<h1>Hello World</h1>";
a.appendChild(div);


// case of studying adjacenthtml elements uncomment these
// fist.insertAdjacentHTML("afterbegin", "<nav><li>afterbegin</li><li>About</li><li>Contact</li></nav>");
// fist.insertAdjacentHTML("beforebegin", "<nav><li>before begin</li><li>About</li><li>Contact</li></nav>");
// fist.insertAdjacentHTML("afterend", "<nav><li>afterend</li><li>About</li><li>Contact</li></nav>");
// fist.insertAdjacentHTML("beforeend", "<nav><li>beforerend</li><li>About</li><li>Contact</li></nav>");
