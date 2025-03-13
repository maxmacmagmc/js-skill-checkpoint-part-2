const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
above = students.filter(xxx=>xxx.score > 50).map(xxx =>({...xxx,score: xxx.score+(xxx.score * 0.1)}))
const  total = above.reduce((total,xxx)=>total + xxx.score, 0)

console.log(`Total score is ${total}`)
