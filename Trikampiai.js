

const triangle = document.querySelector('[name="triangle"]');
const result = document.querySelector("#result");
triangle.addEventListener("click", function (event) {
    let n = 5;
    let y = "";
    for (let i = 1; i <= n; i++) {
    for (let k = 0; k < i; k++) {
        y += "*";
    }
        y += "\n";
        y += "<br>";
        result.innerHTML = y;
    }
    console.log(y);
  });

  const pyramid = document.querySelector('[name="pyramid"]');
const result1 = document.querySelector(".result");
pyramid.addEventListener('click', function(event){
    let n = 5;
    let y = "";
    for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        y += " ";
}
    for (let k = 0; k < 2 * i - 1; k++) {
        y += "*";
}
        y += "\n";
        y += "<br>";
        result.innerHTML = y; 
}
console.log(y);
});

const rpyramid=document.querySelector('[name="rpyramid"]');
rpyramid.addEventListener('click', function(event){
let n = 5; 
let e = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    e += " ";
  }
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    e += "*";
  }
  e += "\n";
}
console.log(e);
}
);
const reversepyramid = document.querySelector('[name="rpyramid"]');
const res2 = document.querySelector("#result");
reversepyramid.addEventListener('click', function(event){
    let n = 5;
    let y = "";
    for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
        y += " ";
}
    for (let k = 0; k < 2 * (n-i) - 1; k++) {
        y += "*";
}
        y += "\n";
        y += "<br>";
        result.innerHTML = y;
}
console.log(y);
});

const clear = document.querySelector ('[name="clear"]');
clear.addEventListener ('click', function (event){
  let n = 0;
  let y = "";
  for (let i = 0; n=i; i++)
  result.innerHTML = y;

  console.log (y);
}
);

