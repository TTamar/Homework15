//1.
const currentDay = new Date().getDay();

switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
  default:
    console.log("მცდელობა წარუმატებელია");
    break;
}

//2.
let i = 0;
// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

//3.

// while (i < 50) {
//   console.log(i);
//   i++
// }
// console.log(i);

//4.

// do {
//   console.log(i);
//   i++;
// } while (i < 150);

//5.

let myArr = [];

for (let i = 1; i <= 1000; i++) {
    myArr.push(i*i)
}
// console.log(myArr)

do {
    i++
    myArr.push(i*i)
} while (i < 1000);

// console.log(myArr);

while (i < 1000){
    i++
    myArr.push(i*i)
}

// console.log(myArr);