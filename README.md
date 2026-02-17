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
