var myobj = {
  name: 'karan',
  age: 14,
  friends: ['everything'],
  GF: null,
};

var objname = myobj.name; // dot notation
myobj.name = 'hello';

var copyobject = JSON.parse(JSON.stringify(myobj)); //fancy way to store the copy of object
console.log(copyobject);
console.log(myobj.name);

var str = '10';
console.log(parseInt(str) + 40);

var vowel = { x: 12, y: 20, z: 40 };

const { x: a, y: b, z: c } = vowel; // destructuring of the objects   a=12,b=20,c=40
console.log(a);
const temp = `hello everyone my name is ${myobj.name}`;
console.log(temp);

const funct = (name, gender, age) => {
  return {
    name: name,
    gender: gender,
    age: age,
  };
};
console.log(funct('karan', 'male', 20));

// in shorter form we can write as -
const func2 = (name, gender, age) => ({ name, gender, age });
console.log(func2('karan', 'male', 20));
