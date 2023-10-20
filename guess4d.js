var readline = require("readline-sync");
var ans=[0,1,2,3,4,5,6,7,8,9];
ans.sort(function(a, b){return Math.random()-0.5});
answer=[];
for(var x=0;x<4;x++){
    ans[x]=answer[x];
}
console.log("U have ten chance to guess.");
for(var i=0; i<10;i++){
    var counterA=0;
    var counterB=0;
    do {
        var guess = readline.question("Please guess 4 digits?");
        if (!isNaN(guess) && guess.length == 4)
            break;
        else {
            console.log("4 digits please!")
            continue;
        }
    }while (true);
    for (let ans_idx = 0; ans_idx < 4; ans_idx++) {
       
        for (let guess_idx = 0; guess_idx < 4; guess_idx++) {
            if(guess[guess_idx] == answer[ans_idx]){
                if(guess_idx==ans_idx){
                    counterA++;
                }
                else{
                    counterB++;
                }
            }
        }
        console.log(counterA);
        console.log(counterB);
    }
    console.log("Your guess:" + counterA+"A"+counterB+"B")

     if(counterA==4){
         console.log("You win the game!");
         break;
     }
}


