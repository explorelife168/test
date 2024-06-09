// interface Point {
//   x: number;
//   y: number;
// }

// function test(p: Point) {
//   console.log(p);
// }

// test({ x: 4, y: 5 });

// interface Employees {
//   name: string;
//   role: string;
// }

// interface Test {
//   name: number;
//   employees: Employees[];
//   size: number;
//   height: Function;
// }

// let test = {
//   name: "123",
//   employees: [
//     { name: "John", role: "Manager" },
//     { name: "Neil", role: "Manager" },
//   ],
//   size: 123,
//   height: () => {
//     console.log("test");
//   },
// };

// type Input = [string, number];

// function test(input: Input) {
//   let [str, num] = input;

//   if (str.length > 0 && num >= 0 && num <= 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// interface Test {
//   x: number;
//   y: string;
// }

// interface Test {
//   c?: number;
// }

// const test: Test = {
//   x: 256,
//   y: "Neil",
//   c: 123,
// };

// interface DataA {
//   id: string;
//   key: string;
//   value: string;
// }

// interface DataB {
//   id: string;
//   key: string;
//   value: number;
// }

// interface DataC {
//   id: string;
//   key: string;
//   value: string[];
// }

// interface Data<T> {
//   id: string;
//   key: string;
//   value: T;
// }

// function test(data: Data<string[]>) {
//   console.log(data);

// type DataFormAPIList = string[];
// type Check = boolean;

// type UnionData = DataFormAPIList | Check;
// type DataList = Extract<UnionData, string[]>;

let pickedArr = <number[]>[];

pickedArr = [1,2,3,4,5,6]


interface NewArr {
  test : number[]
}




const test1:NewArr =
{  test:[1234,123]}
