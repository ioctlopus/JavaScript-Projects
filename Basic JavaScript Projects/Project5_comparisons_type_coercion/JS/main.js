//I know this is ugly and minimalistic. I understand the material and I'm just trying to meet the minimal requirements for this section:
document.write(typeof "Elves");
document.write(" are 10 out of " + 10)
document.write(" || 0/0: " + 0/0 + " 0/0 is NaN: " + isNaN(0/0) + " 10 is NaN: " + isNaN(10) + "<br> Infinity: " + 10**10**10 + "<br>-Infinity: " + -(10 ** 10 ** 10) + "<br>");
document.write(" <br> 10 is greater than 3: " + String(10 > 3) + " 10 is less than 3: " + String(10 < 3));
document.write(" <br> " + String(1 === 1) + " | " + String(1 === "1") + " | " + String(1 === 2) + " | " + String(1 === "2"));
console.log(80 ** 2);
console.log(10 > 100);
alert(String(8 == 10) + " " + String(10 == 10));
document.write("<br> " + String(10 > 2 && 3 > 1) + " | " + String(10 < 3 && 2 < 8));
document.write("<br> | " + String(10 > 2 || 2 > 100) + " | " + String(2 < -100 || 3 > 9));
document.write("<br> " + !(2 == 3) + " " + !(1 == 1));