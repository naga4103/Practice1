// const a1 = [1, 2, 3];
// a1[4] = 9;
// console.log(a1);
// const a2 = [];
// a2["name"] = "Naga";
// console.log(a2);
// // a2[1] = 45;
// console.log(a2[0], a2[1]);
// a2[1] = 4;
// console.log(a2);
// a2[0] = 1;
// console.log(a2);
// console.log(Array.isArray(a2));
// console.log(a2 instanceof Array);
// const a3 = ["Mango", 2, 3, "Apple"];
// const a4 = a3.toString();
// console.log(a4, typeof a4, a3);
// const a5 = a3.join("");
// console.log(a5, typeof a5);
// console.log(a3);
// const a4 = a3.push(12, 13, "naga");
// console.log(a4, a3);
// const a5 = a3.pop();
// console.log(a5, a3);
{
  /* shift */
}

// const a1 = [1, 2, 3, 4, 5];
// const a2 = a1.shift();
// console.log(a2, a1);
// const a2 = a1.unshift(8);
// console.log(a2, a1);
// delete a1[0];
// console.log(a1);
// delete a1[1];
// console.log(a1);
// del = delete a1[2];
// console.log(del, a1);
// del1 = delete a1[0];
// console.log(del1, a1);
// delete a1[1];
// console.log(a1[0]);
// const b1 = [1, 2, 3];
// const b2 = [4, 5, 6];
// const b4 = [7, 8];
// const b3 = b1.concat(b2, b4, "jii", { name: "naga" });
// console.log(b3);
// const b5 = "kkk".concat(1, [0, 5, 9], "ppp");
// console.log(b5, typeof b5);
// const c1 = [
//   [1, 2],
//   [3, 4],
//   [6, 7],
// ];
// console.log(c1.flat());
// const c2 = [
//   [2, 3],
//   [4, 5, [8, 9]],
// ];
// console.log(c2);
// const a1 = [1, 2, 3, 4, 5];
// const a2 = a1.slice(0, 1);
// console.log(a2);
// const a3 = a1.slice(1);
// console.log(a3);
// const c1 = [4, 5, 1, 2, 9];
// const c2 = c1.sort();
// console.log(c2);
// const a1 = ["naga", "navi", "raja", "aaa", "uvw"];
// console.log(a1.sort());
// const c3 = [3, 2, 5, 1, 7, 9];
// console.log(c3.reverse());
// const c5 = c3.reverse();
// console.log(c5, c3);
// const c3 = [3, 2, 5, 1, 7, 9];
// c3.sort();
// c3.reverse();
// console.log(c3);
// const c4 = ["100", "24", "31"];
// c4.sort();
// console.log(c4);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(
//   points.sort(function (a, b) {
//     console.log("a is", a, "b is", b);
//     return a - b;
//   })
// );
// const minimum = Math.min(1, 2, 3, 4, -9, -7);
// console.log(minimum);

Array(5)
  .fill("")
  .map((each, i) => console.log("each", i));
console.log(Array(5).fill(""));
