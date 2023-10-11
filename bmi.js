var readline = require("readline-sync"); 
while(true){
    var h=readline.question("Plz enter ur height in cm:");
    if (isNaN(h)||h<0){
        console.log("Eror!");
        console.log("Plz reenter ur height!");
    }else{
        break;
    }
}
while(true){
    var w=readline.question("Plz enter ur weight in kg:");
    if (isNaN(w)||w<0){
        console.log("Eror!");
        console.log("Plz reenter ur weight!");
    }else{
        break;
    }  
}
BMI=w/(Math.pow((h/100),2));
BMI = BMI.toFixed(2);
console.log("ur height is %d cm",h);
console.log("ur weight is %f kg",w);
console.log("ur BMI is %f",BMI);

if(BMI<18.5){
    console.log("u r too thin.")
}else if(18.5<=BMI<24){
    console.log("u r normal.")
}else{
    console.log("u r too fat bruh.")
}