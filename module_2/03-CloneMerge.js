//----------  Clone Function  ----------

const obj = {
    Name: "Raul",
    Age: 25,
    Dev: true
}

function clone(source){
    const copy = {...source};
}

//----------  Merge Function  ----------

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  const merged = {...target, ...source};
}