let a = 0;
while(a<4){
    alert(a);
    a++;
}
// ____________Завдання2_________
let b, c, sum = 0;
b = +prompt("Введіть а: ", "");
c = +prompt("Введіть b: ", "");
for(let i = b; i <= c; i++){
    sum = sum + i;
}
alert(sum);
// ____________Завдання3_________
let number = 23;
let n = +prompt("Введіть число: ", "");
while(number != n){
    if(n < number){
        alert("Мало");
    }
    if(n > number){
        alert("Багато");
    }
    n = +prompt("Введіть число: ", "");
}
alert("Молодець, вгадав!");