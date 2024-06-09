// var sortArray = function (nums) {
//   if (nums.length < 2) return nums;
//   let mid = Math.floor(nums.length / 2);
//   let left = nums.slice(0, mid);
//   let right = nums.slice(mid);
//   return merge(sortArray(left), sortArray(right));
// };
// var merge = function (left, right) {
//   let sortedArray = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) {
//       sortedArray.push(left.shift());
//     } else {
//       sortedArray.push(right.shift());
//     }
//   }
//   return [...sortedArray, ...left, ...right];
// };

// let nums = [9, 15, 2, 7, 6, 11];
// console.log(sortArray(nums));

// var sortArray = function (nums) {
//   if (nums.length < 2) return nums;
//   let mid = Math.floor(nums.length / 2);
//   let left = nums.slice(0, mid);
//   let right = nums.slice(mid);
//   return merge(sortArray(left), sortArray(right));
// };
// var merge = function (left, right) {
//   let sortedArray = [];
//   sortedArray.push(left, right);

//   return [...sortedArray];
// };

// let nums = [9, 15, 2, 7];
// console.log(sortArray(nums));
// let test = [2, 5];

// console.log(test.slice(1));

// let test = {
//   a: 123,
// };
// delete test.b;
// console.log(delete test.q);
// console.log(test);

// var fn = function (num) {
//   return new Promise((resolve, reject) => {
//     if (num < 10) {
//       resolve("小於10");
//     } else {
//       reject("有錯誤");
//     }
//   });
// };

// fn(2)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

// console.log(1);

// setTimeout(function () {
//   console.log(2);
// }, 0);

// Promise.resolve()
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });

// script start
// async1 start
// async2
// async1 end
// promise1
// setTimeout
// promise2
// script end
// let c = 0;  //123
// function test() {
//   c += 1;
//   console.log(c);
// }

// test();
// test();
// test();

// function test() { //123
//   let c = 0;
//   return function () {
//     c += 1;
//     console.log(c);
//   };
// }
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((x) => {
//   return x * x;
// });

// let numbers = [1, 2, 6, 4, 16];

// function fn(nums) {
//   return new Promise((resolve, reject) => {
//     if (nums > 10) {
//       resolve("數字大於10");
//     } else {
//       reject("數字有誤");
//     }
//   });
// }

// fn(12)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
// //   });
// function fn(nums) {
//   return new Promise((resolve, reject) => {
//     if (nums > 10) {
//       resolve("數字大於10");
//     } else {
//       reject("數字有誤");
//     }
//   });
// }

// async function handleFn() {
//   try {
//     const res = await fn(12);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// handleFn();

// async function test() {
//   try {
//     const res = await fn(2);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }

// test();

// function newFilter(arr, fn) {
//   filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       filteredArr.push(fn(arr[i]));
//     }
//   }
//   return filteredArr;
// }

// console.log(
//   newFilter([1, 3, 5, 6, 8, 9, 10], (x) => {
//     if (x > 5) return x;
//   })
// );

//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i], i)) {
//       console.log(arr[i], i);
//     } else {
//       console.log("false");
//     }
//   }
// };
// reduce([1, 2, 3, 4, 5, 6]);

// var composed = function (arrFunc) {
//   return function (x) {
//     let result = x;
//     for (let i = arrFunc.length - 1; 0 <= i; i--) {
//       result = arrFunc[i](result);
//     }
//     return result;
//   };
// };
// let arr = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];

// let x = composed(arr);
// console.log(x(4));
// var xhr = new XMLHttpRequest();
// xhr.open("get", "https://hexschool.github.io/ajaxHomework/data/json", true);
// xhr.send(null);

// var composed = function (arr) {
//   return function (x) {
//     let result = x;
//     for (let i = arr.length - 1; 0 <= i; i--) {
//       result = arr[i](result);
//     }
//     return result;
//   };
// };
// let g = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
// console.log(composed(g)(5));

// const AfterGameInterval = () => {
//   progressPercentage();
// };

// let progress = 100;

// const progressPercentage = () => {
//   progress = progress + 25;
//   console.log("123");
// };

// console.log(AfterGameInter

// let arr = [];
// for (let i = 0; i < 51; i++) {
//   arr.push(i);
// }

// // let newArr = arr.map((x) => x * 2);
// // console.log(newArr);

// arr.forEach((x) => x > 2);
// console.log(arr);

// let newArr3 = arr.reduce((a, b) => {
//   return a + b;
// });
// console.log(newArr3);

// let newArr4 = arr.reduce((a, current) => {
//   return a + current;
// });

// let newArr6 = arr.filter((x) => {
//   if (x % 2 !== 0) return x;
// });
// console.log(newArr6);

// let newArr9 = arr.filter((val) => {
//   return val > 25;
// });
// console.log(newArr9);

// function time1() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("time1");
//     }, 0);
//   });
//   console.log("main1");
// }
// console.log("start");
// function time2() {
//   new Promise((resolve) => {
//     time1();
//     setTimeout(() => {
//       console.log("time2");
//     }, 0);
//   });
//   console.log("main2");
// }
// time2();
// console.log("end");

// function fn(nums) {
//   return new Promise((resolve, reject) => {
//     if (nums > 20) {
//       resolve("大於");
//     } else {
//       reject("數字錯誤");
//     }
//   });
// }
// Promise.race([fn(23),fn(230),fn(24)])
// let result = [];
// for (let i = 1; i < 51; i++) {
//   result.push(i);
// }

// let newArr = result.map((x) => {
//   return { value: x };
// });
// console.log(newArr);

// let newArr2 = newArr.map((x) => {
//   x.name = x.value; // 这里将所有对象的 name 属性值设置为 5，似乎不符合你的需求
//   return x;
// });

// console.log(newArr2);

// function filteredArr(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       result.push(fn(arr[i]));
//     }
//   }
//   return result;
// }
// console.log(
//   filteredArr([3, 5, 8, 71, 25, 30], (x) => {
//     if (x > 10) return x;
//   })
// );

// function newFilter(arr, fn) {
//   filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }

// console.log(
//   newFilter([1, 3, 5, 6, 8, 9, 10], (x) => {
//     if (x > 5) return x;
//   })
// );

// let result = [1, 2, 3, 4, 5, 6, 7, 0];
// for (let index in result) {
//   console.log(index);
// }

// let obj = {
//   num1: "value1",
//   num2: "value2",
//   num3: "value3",
// };

// for (let key of Object.keys(obj)) {
//   console.log(key + ": " + obj[key]);
//   // key1: value1, key2: value2, key3: value3
// }

// for(let key of)

//  [1, 4, 7, 5, 8, 92, 53, 4];

// function test2(arr, n) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < n) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(test2([1, 2, 34, 4, 5, 6, 7, 10], 20));

// function test3(arr, n) {
//   const result = arr.filter((x) => {
//     return x < n;
//   });
//   return result;
// }
// console.log(test3([1, 2, 34, 4, 5, 6, 7, 10], 20));

// function isUpperCase(str) {
//   if (str[0] === str[0].toLocaleUpperCase()) {
//     return true;
//   } else return false;
// }
// console.log(isUpperCase("adc"));
// console.log(isUpperCase("Adc"));

// const obj = {
//   name: "",
//   people: 3,
// };
// obj.name = 50;

// console.log(obj);

// console.log(addKeyValue("name", "Mike"));
// console.log(addKeyValue("people", 2));
// console.log(addKeyValue("people", 4));
// const obj = {
//   name: "",
//   people: 3,
// };
// function addKeyValue(key, value) {
//   obj[key] = value;
// }

// addKeyValue("name", "Mike");
// addKeyValue("people", 2);
// addKeyValue("people", 4);
// console.log(obj);
// (function () {
//   var a = (b = 3);
// })();

// console.log("a defined? " + (typeof a !== "undefined"));
// console.log("b defined? " + (typeof b !== "undefined"));

// function myMap(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(i);
//   }
//   return result;
// }

// function myMap(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i]));
//   }

//   return result;
// }
// myMap([1, 2, 3], (x) => x + x);
// console.log(myMap([1, 2, 3], (x) => x + x));

// function newMap(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(fn(arr[i], i));
//   }
//   return result;
// }
// console.log(newMap([2, 4, 5, 6, 7, 9], (x) => x + 2));

// function newFilter(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function newReduce(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// function newFilter(arr, fn) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const a = ["abc", "abcd", "abcd", "be", "bt"];

// const newArr = a.map((x) => {
//   return x.toLocaleUpperCase;
// });

// console.log(newArr);

// function test(x) {
//   if (typeof x === string) {
//     x.toLocaleUpperCase();
//   }
// }

// const test = "avxasd";
// const newArr = test.split(" ");
// console.log(newArr);
// let str = "基紐特攻隊";
// let [a, b, c, d, e] = str;

// console.log(a, b, c, d, e);
// let GinyuTeam = {
//   Ginyu: "基紐",
//   Jeice: "吉斯",
//   burter: "巴特",
//   // ...
// };
// let Goku = GinyuTeam.Ginyu;
// // Goku: '基紐'

// console.log(Goku);


//test1 
//test a-2
//test a-3
//test a-4