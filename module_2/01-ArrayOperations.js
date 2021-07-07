//----------  Const for all exercies  ----------

const array = ["Value1", "Value2", "Value3"];

//----------  Head Function  ----------

const head = ([first]) => first;
console.log(head(array));

//----------  Tail Function  ----------

const tail = ([first, ...others]) => others;
console.log(tail(array));

//----------  Init Function  ----------

const init = (array) => {
    const copyArray = [...array];
    copyArray.pop();
    return copyArray;
}
console.log(init(array));

//----------  Last Function  ----------

const last = (fullArray) => fullArray.pop();
console.log(last(array));