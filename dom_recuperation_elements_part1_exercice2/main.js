let myBody = document.getElementsByTagName("body")[0]
console.log(myBody.firstElementChild);
console.log(myBody.lastElementChild);

let exo4 = document.getElementsByTagName("div")[0]
let children = exo4.children    
console.log(children);

let li = document.getElementsByTagName("li")[0]
let nextChild = li.nextElementSibling
console.log(nextChild);

let previousChild = nextChild.previousElementSibling
console.log(previousChild);