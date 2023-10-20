var readline = require("readline-sync");
var ans=[];
var counterB=0;
for(var x=0;x<4;x++){
    var rand = Math.floor(Math.random()*10);
    ans[x]=rand;
}
console.log(ans);
console.log("U have ten chance to guess.");
for(var i=0; i<10;i++){
    var counterA=0;
    do {
        var guess = readline.question("Please guess 4 digits?");
        counterB++;
        if (!isNaN(guess) && guess.length == 4)//repeat digit?
            break;
        else {
            console.log("4 digits please!")
            continue;
        }
    }while (true);
    console.log(counterB);
    for(var a=0;a<4;a++){
        if(guess[a]==ans[a]){
            counterA++;
        }
    }
    console.log(counterA);
     if(counterA==4){
         console.log("You win the game!");
         break;
    }
}
if(counterB<10){
    console.log("U got %d chance less",(10-counterB));
}else{
    console.log("U lose all chances!Keep going!")
}
if(counterA<4){
    console.log("You lose!");
}

