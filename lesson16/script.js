let age;
age = +prompt("Введіть свій вік: ", "")
if(age > 18){
    alert(true);
}
else{
    alert(false);
}
// ________________Завдання2________________
let a, sum;
a = +prompt("2 + 2 = ?", "");
sum = 4;
if(a == sum){
    alert("Great!")
}
if(a < sum){
    alert("More...")
}
if(a > sum){
    alert("Less...")
}