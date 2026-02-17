## 1.What is the difference between null and undefined?
-> Undefined is a variable that has not been assigned a value. In other words, the variable has been declared but has not been given a value. That is why when we display it in the console, the output will be undefined.
```
let name;
console.log(name);
```
-> Null is a value that the developer intentionally uses to leave a variable empty or without a value. That is, there is no associated value or we are intentionally leaving it empty.
```
let age = null;
console.log(age);
```
## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?
->map() is a method of array. map() operates on each element of the array and returns a new array, without changing the original array. Suppose, I have an array and I want to double its values. Then using map() method we can easily create a new array, whose values ​​will be double.
```
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled);
```
-> forEach() operates on each element, but does not return a new array and does not return any value. It is used to process each element of the array individually.
```
let numbers = [1, 2, 3, 4];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers);
```

## 3. What is the difference between == and ===?
-> Double equals (==) performs type conversion (type coercion) before comparing two values. This means that if the two values ​​have different types, JavaScript first converts one to the other type, and then compares them.
```
console.log("10" == 10);   // true
```
-> Strict Equality Triple equal (===) checks both value and type. No type conversion is done here. If the two types are different, it will return false directly.
`
console.log("10" === 10);  // false
`
## 4.What is the significance of async/await in fetching API data?
->Async is an asynchronous operation. It always returns a Promise. That is, if I go to a shop and say to the shopkeeper, “Give me a kilo of sugar.” If the shopkeeper says, “Wait a minute, I will give it to you.”  then he has given me a promise that he will give it to me later, without giving me the sugar right away. Similarly, an async function returns a Promise without returning the result directly. And await is only used inside an async function. Await is used to wait until a Promise is resolved.
```
const fetchData = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  console.log(data);
};
fetchData();
```
## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
-> Global scope is a scope where we declare a variable outside a block {} or function without writing it inside. If declared like this, that variable can be used from anywhere in the program.
```
let name = "Rahim"; 

function showName() {
  console.log(name)
}

console.log(name); /useable
```
-> If we declare a variable inside a function, it can only be used inside that function. It cannot be accessed from outside the function.
```
function demo() {
  let age = 25; 
  console.log(age); ে
}

demo();
console.log(age); / not useable
```
-> If we declare a variable with let or const inside a {} block (if, else, for etc.), then it can only be used inside that block. It cannot be used outside the block.
```
if (true) {
  let city = "Dhaka"; 
  console.log(city);

console.log(city)//not useable
```
