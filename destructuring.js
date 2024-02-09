// const [a, , b, ...rest] = [1, 2, 3];
// console.log(a, b, rest);
// const [c, d, ...{ pop, push }] = [1, 2, { pop: 3, push: 4, pp: 9 }];
// console.log(c, d, pop, push);
// const [a, b, [c, d]] = [8, 9, 7, 6];
// console.log(a, b, c, d);
// const { a, b } = { a: 1, b: 2 };
// console.log(a, b);
const obj = {
  name: "naga",
  age: 21,
  address: { flatNo: 1, landmark: "boys high school" },
};
const re = delete obj.name;
console.log(obj, re);
