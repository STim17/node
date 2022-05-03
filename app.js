const languages = ["eng", "ru"];
// console.log(languages);
// console.log(languages.map(m => `language: ${m}`));


// const newLan = [languages]; // [["eng", "ru"]]
//spread operator
// const newLan = [...languages]; // ["eng", "ru"]
// console.log(newLan);

// const func = (n1, n2, n3) => {
//     return [n1, n2, n3]
// }
// console.log(func(1, 2, 3, 4));

// const func = (...args) => {
//     return args
// }
// console.log(func(1, 2, 3, 4));

//2.10 less

const person = {
    name: "Bro",
    age: 27,
    func() {
        console.log(`hi ${this.name}`);
    }
}

// const callFunc = (Pname) => {
//     console.log(Pname.name);
// }
// callFunc(person)

const callFunc = ({name}) => {
    console.log(name);
}
callFunc(person)

