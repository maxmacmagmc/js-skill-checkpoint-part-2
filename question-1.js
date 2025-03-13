const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];
const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

// เริ่มเขียนโค้ดตรงนี้
let allPeople =[...techupPeople,...techcoolPeople]
allPeople =  allPeople.sort((techupPeople,techcoolPeople)=>techupPeople.age - techcoolPeople.age)
allPeople = allPeople.filter(allPeople => allPeople.age < 20)
console.log(allPeople)