let obj = { name: "Dagim" };
let scores = Array(10);
let x = 4;
let y = 5;
console.log(obj.name);
console.log(x + y);
let z = true;
z ? console.log("+") : console.log("-");
function hello(greeting) {
  console.log(greeting);
}
hello("woo");
let result = (10, 10 + 20);
console.log(result);
let r = (2, 1);
console.log(r);

let a = 1,
  b = 2,
  c = 3;
let res = (a++, b++, c++);
console.log(res);
console.log(a, b, c);

const swap = (x, y) => {
  temp = x;
  x = y;
  y = temp;

  return { x, y };
};
first = 11;
second = 22;
console.log(swap(first, second));

let mark = 90;

if (mark >= 90) {
  console.log("A");
} else if (mark >= 80) {
  console.log("B");
} else if (mark >= 70) {
  console.log("C");
} else if (mark >= 60) {
  console.log("D");
} else if (mark >= 50) {
  console.log("E");
} else {
  console.log("F");
}
grade = "A";
