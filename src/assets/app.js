let p = document.createElement('p');
p.innerText = "Hey i am groot";
document.querySelector('body').prepend(p);

p.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "i am blue";
document.querySelector('body').prepend(h3);

h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p1 = document.createElement('p1');

h1.innerText = "Iam Div";
p1.innerText = "Me too";

div.append(h1);
div.append(p1);

div.classList.add("box");
document.querySelector('body').prepend(div);