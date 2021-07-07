//----------  Const for all exercies  ----------

const array = ["Cat", "Dog", "Monkey"];
const secondArray = ["Fish", "Bone", "Banana"];
const arrayPro = ["Catfish", "DogBone", "MonkeyBanana"];

//----------  concat Function  ----------

const concat = (arr1, arr2) => arr1.concat(arr2);
console.log(concat(array, secondArray));

//----------  Optional Function  ----------

const concatPro = (...arrays) => arrays.join(",");
console.log(concatPro(array, secondArray, arrayPro));
