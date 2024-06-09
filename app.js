// let romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (let i = 0; i < s.length; i++) {
//     const cur = sym[s[i]];
//     const next = sym[s[i + 1]];

//     if (cur < next) {
//       result += next - cur;
//       i++;
//     } else {
//       result += cur;
//     }
//   }
//   return result;
// };

// // console.log(romanToInt("XCVIII")); // 輸出: 4
// class ListNode {
//   constructor(val) {
//     this.val = val; // 节点的值
//     this.next = null; // 下一个节点的指针
//   }
// }

// let l1 = new ListNode(1); // l1: 1 -> null
// l1.next = new ListNode(3); // l1: 1 -> 3 -> null
// l1.next.next = new ListNode(5); // l1: 1 -> 3 -> 5 -> null

// let l2 = new ListNode(2); // l2: 2 -> null
// l2.next = new ListNode(4); // l2: 2 -> 4 -> null
// l2.next.next = new ListNode(6); // l2: 2 -> 4 -> 6 -> null

// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   else if (!l2) return l1;
//   else if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

// let result = mergeTwoLists(l1, l2);
// console.log(result);
// // 输出结果链表的值
// let output = [];
// // 遍历结果链表，将值添加到 output 数组中
// while (result !== null) {
//   output.push(result.val);
//   result = result.next;
// }
// // 输出结果数组
// console.log(output); // 输出 [1, 2, 3, 4, 5, 6]

// var removeDuplicates = function (nums) {
//   let newNums = [];
//   for (let i = 0; i < nums.length; i++) {

//     for (let j = 0; j < nums.length; j++) {

//       if (nums[i] === nums[j]) {
//         for (let k = 0; k < newNums.length; k++) {
//           if (nums[i] === nums[k]) return;
//           else {
//             newNums.push(nums[i]);
//           }
//         }
//       } else {
//         newNums.push(nums[i]);
//       }

//     }

//   }
//   return newNums;
// };

// var removeDuplicates = function (nums) {
//   let newNums = [];

//   for (let i = 0; i < nums.length; i++) {
//     let isDuplicate = false; // 標記是否重複
//     console.log(isDuplicate);

//     for (let j = 0; j < newNums.length; j++) {
//       if (nums[i] === newNums[j]) {
//         // 如果在新數組中找到與當前數字相同的元素
//         isDuplicate = true; // 標記為重複
//         break; // 跳出內部迴圈
//       }
//     }

//     if (!isDuplicate) {
//       // 如果不是重複元素
//       newNums.push(nums[i]); // 將其添加到新數組中
//     }
//   }
//   return newNums; // 返回新數組
// };
// let nums = [0, 0, 1, 1, 2, 3, 4, 4];
// console.log(removeDuplicates(nums));

// function removeDuplicates(nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let k = 1; // Initialize the count of unique elements to 1
//   for (let i = 1; i < nums.length; i++) {
//     console.log(`第${i}次`);
//     console.log(`k:${k}`);
//     console.log("nums[i]:", nums[i]);
//     console.log("nums[k - 1]:", nums[k - 1]);
//     if (nums[i] !== nums[k - 1]) {
//       // console.log(`第${i}次-true`);
//       // console.log("nums[i]:", nums[i]);
//       // console.log("nums[k - 1]:", nums[k - 1]);
//       nums[k] = nums[i]; // Overwrite the next unique element
//       console.log(nums);
//       k++;
//     }
//   }

//   return k;
// }
// //
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4];
// console.log(removeDuplicates(nums));
// // k-1 0,0,1,1,1,2,2,3,4,4
// // i   0,1,1,1,2,2,3,4,4

// var removeElement = function (nums, val) {
//   let newArr = [];
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       newArr.push(nums[i]);
//       count++;
//     }
//   }
//   return count++;
// };
// let num = [3, 2, 2, 3];
// let val = 3;
// console.log(removeElement(num, val));
// var strStr = function (haystack, needle) {
//   if (haystack.length - needle.length < 0) return;
//   for (let i = 0; i < haystack.length - needle + 1; i++) {
//     if(haystack)
//   }
// };

// var strStr = function (haystack, needle) {
//   let k = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] == needle[k]) {
//       k++;
//       if(k == needle.length) {
//         return i - k + 1;
//       }
//     }
//   }
// };

// var strStr = function (haystack, needle) {
//   let k = 0;
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] == needle[k]) {
//       k++;
//       if (k == needle.length) {
//         return i - (k - 1);
//       }
//     } else {
//       i = i - k;
//       k = 0;
//     }
//   }
//   return -1;
// };

// let haystack = "butsad";
// let needle = "sad";
// console.log(strStr(haystack, needle));

// var searchInsert = function (nums, target) {
//   if (target == 0) return 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == target) {
//       console.log("1段");
//       return i;
//     } else if (nums[i] != target && target < nums[i + 1]) {
//       console.log("2段");
//       return i + 1;
//     } else if (nums[i] != target && i == nums.length - 1) {
//       console.log("3段");
//       return nums.length;
//     }
//   }
// };

// let nums = [1, 3, 5, 6];
// let target = 0;

// console.log(searchInsert(nums, target));

// const arr = [1, 2, 3];

// const copyArr = [...arr];

// copyArr.push(4);

// console.log(arr); // [1, 2, 3]
// 原始数组
// const arr = [1, 2, { a: 3 }];

// // 浅拷贝
// const copyArr = [...arr];

// // 修改拷贝后的数组
// copyArr[0] = 4;
// copyArr[2].a = 5;

// console.log(arr); // [1, 2, { a: 5 }]

// var searchInsert = function (nums, target) {

// function searchInsert(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor(left + right) / 2;
//     if (left[mid] === target) return mid;
//     else if (left[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// }

// var lengthOfLastWord = function (s) {
//   let trimmedString = s.trim();

//   console.log(trimmedString.lastIndexOf(" "));
//   return trimmedString.length - trimmedString.lastIndexOf(" ") - 1;
// };
// let s = "   fly me   to   the moon  ";

// console.log(lengthOfLastWord(s));
// let s = "fly moon";

// console.log(s.lastIndexOf(" "));

// var plusOne = function (digits) {

//   let [carry, idx, nums] = [1, digits.length - 1, [...digits]];
//   // 1 2 [3,2,1]

//   while (carry) {
//     // carry = 1
//     const val = nums[idx] + carry;  // 1+1
//     if (val === 10) { //val===10
//       nums[idx] = 0; //[9] > [0]
//       if (idx === 0) {
//         nums.unshift(carry);
//         carry = 0;
//       }
//     } else {
//       nums[idx] = val;
//       carry = 0;
//     }
//     idx--;
//   }

//   return nums;
// };

// const

// // [3,2,1,]

// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return left;
// };

// let nums = [1, 3, 5, 6];
// let target = 3;

// let nums = [1, 3, 5, 6, 7, 8, 12, 20, 25, 30];
// let target = 3;

// let nums = [1, 3, 5, 6];
// let target = 9;
// console.log(searchInsert(nums, target));

// var searchInsert = function (nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor(left + right / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return left;
// };

// let nums = [1, 3, 5, 6];
// let target = 9;
// console.log(searchInsert(nums, target));

// let a = "1011";
// let b = "11";

// var addBinary = function (a, b) {
//   let num1Arr = a.split(""); //[1,0,1,1]
//   let num2Arr = b.split(""); //[1,1]
//   let result = [];

//   let temp = 0;

//   let i = num1Arr.length - 1; // 3
//   let j = num2Arr.length - 1; // 1
//   while (i >= 0 || j >= 0 || temp > 0) {
//     let value =
//       (i >= 0 ? Number(num1Arr[i]) : 0) +
//       (j >= 0 ? Number(num2Arr[j]) : 0) +
//       temp;

//     if (value === 2) {
//       result.push(0);
//       temp = 1;
//     } else if (value === 1) {
//       result.push(1);
//       temp = 0;
//     } else if (value === 0) {
//       result.push(0);
//       temp = 0;
//     } else if (value === 3) {
//       result.push(1);
//       temp = 1;
//     }
//     i--;
//     j--;
//   }

//   if (temp > 0) {
//     result.push(temp);
//   }

//   return result.reverse().join("");
// };

// let a = "1011";
// let b = "11";

// var addBinary = function (a, b) {
//   let aSplit = a.split("");
//   let bSplit = b.split("");
//   let i = aSplit.length - 1;
//   let j = bSplit.length - 1;
//   let result = [];
//   let carry = 0;

//   while (i >= 0 || j >= 0 || carry > 0) {
//     let value =
//       (i >= 0 ? Number(aSplit[i]) : 0) +
//       (j >= 0 ? Number(bSplit[j]) : 0) +
//       carry;
//     if (value === 0) {
//       result.push(0);
//       carry = 0;
//     } else if (value === 1) {
//       result.push(1);
//       carry = 0;
//     } else if (value === 2) {
//       result.push(0);
//       carry = 1;
//     } else if (value === 3) {
//       result.push(1);
//       carry = 1;
//     }
//     i--;
//     j--;
//   }

//   return result.reverse().join("");
// };

// console.log(addBinary(a, b));

// var twoSum = function (nums, target) {
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         if (nums[i] + nums[j] === target) {
//           result.push(i);
//           result.push(j);
//           return result;
//         }
//       }
//     }
//   }
// };

// let nums = [3, 2, 4];
// let target = 6;

// console.log(twoSum(nums, target));

// var romanToInt = function (s) {

// var longestCommonPrefix = function (strs) {
//   let pref = strs[0]; // "flower"
//   let prefLen = pref.length; // 6

//   for (let i = 1; i < strs.length; i++) {
//     let s = strs[i]; // "flow"
//     while (pref !== s.substring(0, prefLen)) {
//       //  "flower" !==
//       prefLen--;
//       if (prefLen === 0) return "";
//       pref = pref.substring(0, prefLen);
//     }
//   }
//   return pref;
// };
// let strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));

// var isValid = function (s) {
//   let stack = []; // create an empty stack to store opening brackets
//   for (let c of s) {
//     // loop through each character in the string
//     if (c === "(" || c === "{" || c === "[") {
//       // if the character is an opening bracket
//       stack.push(c); // push it onto the stack
//     } else {
//       // if the character is a closing bracket
//       if (
//         !stack.length || // if the stack is empty or
//         (c === ")" && stack[stack.length - 1] !== "(") || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
//         (c === "}" && stack[stack.length - 1] !== "{") ||
//         (c === "]" && stack[stack.length - 1] !== "[")
//       ) {
//         return false; // the string is not valid, so return false
//       }
//       stack.pop(); // otherwise, pop the opening bracket from the stack
//     }
//   }
//   return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
//   // so the string is valid, otherwise, there are unmatched opening brackets, so return false
// };
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// var mergeTwoLists = function (l1, l2) {
//   if (!l1) return l2;
//   else if (!l2) {
//     return l1;
//   } else if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// };

// let l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(4);

// let l2 = new ListNode(1);
// l2.next = new ListNode(3);
// l2.next.next = new ListNode(4);

// console.log(mergeTwoLists(l1, l2));

// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   let k = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i + 1] === undefined) return k;
//     if (nums[i] !== nums[i + 1]) {
//       k++;
//     }
//   }
// };

// // let nums = [1, 1, 2, 2, 4, 5, 5, 6];
// // console.log(removeDuplicates(nums));
// function removeDuplicates(nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let k = 1; // Initialize the count of unique elements to 1
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[k - 1]) {
//       nums[k] = nums[i]; // Overwrite the next unique element
//       k++;
//     }
//   }

//   return k;
// }
// // let nums = [1, 1, 2];
// let nums = [1, 3, 3, 8, 9 ];
// //nus = [1,]
// // let nums = [9, 1, 3, 8, 9, 3];
// console.log(removeDuplicates(nums));

// let x = "123";
// let b = "345";
// console.log(x + b);

// // 9. Palindrome Number
// // var isPalindrome = function (x) {
// //   if (x.length % 2 === 0 || x.length === undefined) return false;
// //   let midLength = x.length / 2;
// //   let increase = midLength + 1;

// //   for (let i = x.length - 1; 0 <= i < x.length; i--) {
// //     if (x[i] !== x[increase]) {
// //       return false;
// //     } else {
// //       increase++;
// //     }
// //   }
// //   return true;
// // };
// let x = 21;
// // console.log(isPalindrome(x));
// console.log(x.length);
// console.log(x[0]);

// var isValid = function (s) {
//   let stack = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
//       stack.push(s[i]);
//     } else {
//       if (
//         !stack.length ||
//         (s[i] === ")" && stack[stack.length - 1] !== "(") ||
//         (s[i] === "}" && stack[stack.length - 1] !== "{") ||
//         (s[i] === "]" && stack[stack.length - 1] !== "[")
//       )
//         return false;
//       stack.pop();
//     }
//   }
//   return !stack.length;
// };

// let s = "(){{[]}}";
// console.log(isValid(s));
// 有window：
// var b = 10;
// (function b() {
//   window.b = 20;
//   console.log(b); // [Function b]
//   console.log(window.b); // 20是必然的
// })();
// 有var:

// let s = "1231232";
// let newS = s.replace(/[0-9a-zA-Z]/g, "").toLowerCase();

// console.log(newS);

// let s = "1231232";
// let result = s.replace(/[0-9a-zA-Z]/g, "").toLowerCase();
// console.log(result); // 输出: ""

// var isPalindrome = function (s) {
//   // Define a function to filter out non-alphabetic characters from a string
//   const filterNonAlphabet = (str) => {
//     console.log(str.replace(/[^0-9a-zA-Z]/g, ""));
//     return str.replace(/[^0-9a-zA-Z]/g, "");
//   };

//   // Trim leading and trailing spaces from the input string
//   s = s.trim();
//   console.log(s);

//   // Filter out non-alphabetic characters
//   s = filterNonAlphabet(s);
//   console.log(s);

//   // Convert the string to lowercase for case-insensitive comparison
//   s = s.toLowerCase();
//   console.log(s);
//   // Reverse the string using built-in methods
//   let rev_s = s.split("").reverse().join("");
//   console.log(rev_s);
//   // Check if the reversed string is equal to the original string
//   // return rev_s === s;
// };

// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.walk = function () {
//   console.log("walking");
// };

// let petName = new Animal("kate");
// petName.walk();
// var a = [1, 2, 3];

// console.log(a);

// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;

//   const mapChars = {};
//   const setVals = new Set();

//   for (let i = 0; i < s.length; i++) {
//     if (mapChars.hasOwnProperty(s[i])) {
//       if (mapChars[s[i]] !== t[i]) return false;
//     } else {
//       if (setVals.has(t[i])) return false;
//       console.log(i, setVals);
//       mapChars[s[i]] = t[i];
//       setVals.add(t[i]);
//     }
//   }
//   return true;
// };
// let s = "egg";
// let t = "add";
// console.log(isIsomorphic(s, t));

//先設立一個物件

// var isIsomorphic = function (s, t) {
//   if (s.length !== t.length) return false;
//   const mapChars = {};
//   const setValue = new Set();

//   for (let i = 0; i < s.length; i++) {
//     if (mapChars.hasOwnProperty(s[i])) {
//       if (mapChars[s[i]] !== t[i]) return false;
//     } else {
//       if (setValue.has(t[i])) return false;
//       mapChars[s[i]] = t[i];
//       setValue.add(t[i]);
//     }
//   }
//   return true;
// };
// let s = "egg";
// let t = "add";
// console.log(isIsomorphic(s, t));

// var isSubsequence = function (s, t) {
//   if (s.length > t.length) return false;

//   let val = 0;
//   let arr = "";
//   for (let i = 0; i < t.length; i++) {
//     if (s[val] === t[i]) {
//       arr += t[i];
//       val += 1;
//       console.log(arr, val);
//     }
//   }
//   return arr === s;
// };

// let s = "abc";
// let t = "ahbgdc";
// console.log(isSubsequence(s, t));

// let beforeNums = 0;

// let value = 25;
// console.log(typeof value);
// beforeNums = value;
// value = "0";
// console.log(typeof value);

// let a = 0;
// if (a) {
//   console.log("true");
// } else if (!a) {
//   console.log("false");
// }

// var search = function (nums, target) {
//   let left = 0,
//     right = nums.length - 1;
//   while (left < right) {
//     let mid = left + Math.floor((right - left + 1) / 2);
//     if (target < nums[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid;
//     }
//   }
//   return nums[left] == target ? left : -1;
// };

// var twoSum = function (nums, target) {
//   let result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         result.push(i, j);
//         return result;
//       }
//     }
//   }
// };

// let nums = [3, 2, 4];
// let target = 6;

// console.log(twoSum(nums, target));

// var twoSum = function (nums, target) {
//   let mp = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     diff = target - nums[i];
//     if (mp.has(diff)) {
//       return [mp.get(diff), i];
//     }
//     mp.set(nums[i], i);
//   }
// };

// let nums = [3, 2, 4];
// let target = 6;

// console.log(twoSum(nums, target));
// var moveZeroes = function (nums) {
//   let point = 0;

//   for (let num of nums) {
//     if (num !== 0) {
//       nums[point] = num;
//       point++;
//     }
//   }
//   while (point < nums.length) {
//     nums[point] = 0;
//     point++;
//   }
//   return nums;
// };

// let nums = [0, 1, 0, 3, 12];
// console.log(moveZeroes(nums));

// var validPalindrome = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (right > left) {
//     if (s[right !== s[left]]) {
//       return isSub(s, left + 1, right - 1) || isSub(s, left, right - 1);
//     }
//     left++, right--;
//   }
//   return true;
// };
// var isSub = function (s, left, right) {
//   while (right > left) {
//     if (s[left] !== s[right]) return false;
//     left++, right--;
//   }
//   return true;
// };

// let s = "enbbe";
// console.log(validPalindrome(s));

// var validPalindrome = function (s) {
//   let low = 0;
//   let high = s.length - 1;
//   while (low < high) {
//     if (s[low] !== s[high]) {
//       return isPalindrome(s, low + 1, high) || isPalindrome(s, low, high - 1);
//     }
//     low++, high--;
//   }
//   return true;
// };

// function isPalindrome(str, low, high) {
//   while (low < high) {
//     if (str[low] !== str[high]) return false;
//     low++, high--;
//   }
//   return true;
// }

// let s = "enbbe";
// console.log(validPalindrome(s));

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//     this.queue = [];
//   }
//   insertNode(value) {
//     let current = new TreeNode(value);
//     let target = null;
//     let nowPos = this.root;
//     while (nowPos !== null) {
//       target = nowPos;
//       if (current.value < nowPos.value) {
//         nowPos = nowPos.left;
//       } else {
//         nowPos = nowPos.right;
//       }
//     }
//     if (target === null) {
//       this.root = current;
//     } else if (current.value < target.value) {
//       target.left = current;
//     } else {
//       target.right = current;
//     }
//   }
// }

// let tree = new BinarySearchTree();
// tree.insertNode(10);
// tree.insertNode(8);
// tree.insertNode(11);
// tree.insertNode(5);
// tree.insertNode(9);
// tree.insertNode(15);
// tree.insertNode(2);
// tree.insertNode(19);
// tree.insertNode(13);

// var solution = function (isBadVersion) {
//   return function (n) {
//     let low = 1;
//     let high = n;
//     let mid;
//     while (low <= high) {
//       mid = ~~(low + (high - low) / 2);
//       if (isBadVersion(mid)) {
//         if (isBadVersion(mid - 1)) high = mid - 1;
//         else return mid;
//       } else low = mid + 1;
//     }
//   };
// };

// var test = function (value) {
//   t = value + 1;
//   return t;
// };

// function aFunc(x) {
//   function bFunc() {
//     console.log(x++);
//   }
//   return bFunc;
// }

// const newFunc = aFunc(1); //取用aFunc的參數,所以記憶體無法被釋放
// newFunc();

// function aFunc(callback) {
//   return function (x) {
//     return callback(x);
//   };
// }

// function bFunc(value) {
//   return value;
// }
// let newFunc = aFunc(bFunc);
// console.log(newFunc(1));

// function aFunc(x) {
//   return console.log(x);
// }

// const newFunc = aFunc(1);
// console.log(newFunc);

// function test1() {
//   return test2();
// }

// function test2() {
//   console.log("test2");
// }

// test1();

// var guessNumber = function (n) {
//   let left = 1;
//   let right = n;
//   let mid;
//   while (left <= right) {
//     mid = ~~((left + right) / 2);
//     if (guess(mid) === -1) {
//       left = mid + 1;
//     } else if (guess(mid) === 1) {
//       right = mid - 1;
//     } else if (mid === 0) {
//       return mid;
//     }
//   }
// };

// var intersect = function (nums1, nums2) {
//   const map = new Map();
//   for (const n of nums1) {
//     if (map.has(n)) {
//       map.set(n, map.get(n) + 1);
//     } else {
//       map.set(n, 1);
//     }
//   }
//   const result = [];
//   for (const n of nums2) {
//     if (map.has(n) && map.get(n) > 0) {
//       result.push(n);
//       map.set(n, map.get(n) - 1);
//     }
//   }
//   return result;
// };
// let nums1 = [1, 2, 2, 1];

// let nums2 = [2, 2];
// console.log(intersect(nums1, nums2));
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       return [map.get(nums[i]), i];
//     } else {
//       map.set(target - nums[i], i);
//     }
//   }
// };

// let nums = [3, 3];
// let target = 6;
// console.log(twoSum(nums, target));

// var twoSum = function (nums, target) {
//   let newMap = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     let sub = target - nums[i];

//     if (newMap.has(sub)) {
//       return [newMap.get(sub), i];
//     }
//     newMap.set(nums[i], i);
//   }
// };
// var fn = function () {
//   this.style.backgroundColor = "orange";
// };

// var els = document.querySelectorAll("li");

// for (let i = 0; i < els.length; i++) {
//   els[i].addEventListener("click", fn);
// }

// var fn = function () {
//   this.style.backgroundColor = "orange";
// };

// var els = document.querySelectorAll("li");

// for (let i = 0; i < els.length; i++) {
//   els[i].addEventListener("click", () => {
//     fn(this);
//   });
// }

// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
// };
// let nums = [3, 2, 4];
// let target = 6;
// console.log(twoSum(nums, target));

// var threeSumClosest = function (nums, target) {
//   nums.sort((a, b) => a - b); //[-4, -1, 1, 2]
//   let n = nums.length;
//   let closest_sum = nums[0] + nums[1] + nums[2]; // initialize closest sum

//   for (let i = 0; i < n - 2; i++) {
//     let left = i + 1, //1
//       right = n - 1; //3
//     while (left < right) {
//       // two-pointer approach
//       let sum = nums[i] + nums[left] + nums[right];
//       if (sum == target) {
//         // sum equals target, return immediately
//         return sum;
//       } else if (sum < target) {
//         if (nums[left] === nums[left + 1]) {
//           left + 2;
//         }
//         left++;
//       } else {
//         if (nums[left] === nums[right - 1]) {
//           right - 2;
//         }
//         right--;
//       }
//       if (Math.abs(sum - target) < Math.abs(closest_sum - target)) {
//         // update closest sum
//         closest_sum = sum;
//       }
//     }
//   }
//   return closest_sum;
// };
// let nums = [-1, 2, 1, -4];
// let target = 1;

// console.log(threeSumClosest(nums, target));
//
// var threeSum = function (nums) {
//   n = nums.length;
//   for (let i = 0; i < n - 2; i++) {
//     let left = i + 1,
//       right = n - 1;

//     while (left < right) {
//       console.log(i);
//       left++;
//     }
//   }
// };

// let threeNums = [1, 2, 3, 4];

// threeSum(threeNums);

// let theDay = new Date(); // 建立時間物件
// let changeDay = 30; // 設定要往前或往後幾天
// let timeStamp = theDay.setDate(theDay.getDate() + changeDay); // theDay.getDate() 是用來取得今天是幾號

// console.log(theDay.toISOString()); // 把物件轉成字串

// var currentDate = new Date();
// console.log(currentDate); // 输出当前日期和时间的 Date 对象实例
// console.log(currentDate.toString());

// var currentHour = currentDate.getHours();
// var currentMinute = currentDate.getMinutes();
// var currentSecond = currentDate.getSeconds();

// console.log(
//   "Current time is " + currentHour + ":" + currentMinute + ":" + currentSecond
// );

// const currentDate = Date.now();
// console.log(currentDate);
// var timestamp1 = Date.now(); // 获取当前时间的时间戳
// console.log(timestamp1); // 输出当前时间的毫秒数

// var currentDate = new Date(); // 创建一个表示当前日期和时间的 Date 对象实例
// var timestamp2 = currentDate.getTime(); // 获取当前日期对象的时间戳
// console.log(timestamp2); // 输出当前时间的毫秒数

// var specificDate = new Date("2024-04-20T00:00:00");
// console.log(specificDate);

// const arr = [1, 2, 3];

// const copyArr = [...arr];

// copyArr.push(4);

// console.log(arr); // [1, 2, 3]

// let a = { oe: 1, o2: 2 };

// let test = a;
// test.oe = 5;
// console.log(a);
// console.log(test);

// function promiseFn(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num) {
//         resolve("OK");
//       } else {
//         reject("fail");
//       }
//     }, 0);
//   });
// }

// promiseFn(0).then(
//   (res) => {
//     console.log("success", res);
//   },
//   (rej) => {
//     console.log("fail 88", rej);
//   }
// );

// function play(callback = () => {}) {
//   if (callback) {
//     animationPromise.then(() => {
//       callback();
//     });
//   }
// }

// function paly(num1, num2, callback = () => {}) {
//   const test = num1 + num2;

//   callback(test);
// }

// paly(3,4,(result) => {console.log(result)})
//     console.log("result");

// const startTime = performance.now();

// // 执行需要测量时间的代码

// const endTime = performance.now();
// const elapsedTime = endTime - startTime;
// console.log(`代码执行时间：${elapsedTime} 毫秒`);

// function bgChange() {
//   return "#f123645";
// }

// const container = document.querySelector("#container");
// container.addEventListener(
//   "click",
//   (event) => (event.target.style.backgroundColor = "#123654")
// );

// const container = document.querySelector("#container");

// // 定義一個函數，用於生成隨機的十六進制顏色值
// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// container.addEventListener(
//   "click",
//   (event) => (event.target.style.backgroundColor = getRandomColor())
// );

// const outerDiv = document.getElementById("outer");
// const middleDiv = document.getElementById("middle");
// const innerDiv = document.getElementById("inner");

// function handleEvent(event) {
//   console.log(`Event Type: ${event.type}, Target: ${event.target.id}`);
//   console.log(event.target);
// }

// outerDiv.addEventListener("click", handleEvent, true); // 第三個參數設為 true 表示使用事件捕獲
// middleDiv.addEventListener("click", handleEvent, true);
// innerDiv.addEventListener("click", handleEvent, true);

// outerDiv.addEventListener("click", handleEvent); // 沒有指定第三個參數，默認為 false，即事件冒泡
// middleDiv.addEventListener("click", handleEvent);
// innerDiv.addEventListener("click", handleEvent);

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

// map filter forEach

// let test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let test2 = [];
// for (let i = 1; i <= 100; i++) {
//   test2.push(i);
// }

// function fn(num) {
//   return new Promise((resolve, reject) => {

//      if(num < 10){
//       re
//      }

//   });
// }

// fn(12)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((res) => {
//     console.log(res);
//   });

// function myMap(fn, arr) {
//   const res = [];
//   arr.forEach((it) => {
//     res.push(fn(it));
//   });
//   return res;
// }

// const a = myMap((it) => it * it, [1, 2, 3]);
// console.log(a);

// function newMap(fn, arr) {
//   let result = [];
//   arr.forEach((x) => {
//     result.push(fn(x));
//   });
//   return result;
// }

// const a = newMap((x) => x * x, [12, 3, 4]);
// console.log(a);

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
// console.log(composed(arr)(4));

// var send = document.querySelector(".send");

// send.addEventListener("click", signup, false);

// function signup() {
//   var emailStr = document.querySelector(".account").value;
//   var passwordStr = document.querySelector(".password").value;
//   var account = {};
//   account.email = emailStr;
//   account.password = passwordStr;
// }
// function example() {
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// }

// example();

//Master-1
//Master-2
//Master-3
//Master-4
//Master-5
//Master-6
