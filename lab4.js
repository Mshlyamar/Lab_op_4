'use strict'
var readline = require('readline');
var rl = readline.createInterface(process.stdin);
rl.on('line', (answer) => {
	let W = [];
	let O = [];
	let symb='+-*/'
	let j = 0;
	let l = 0;
	for(let i = 0; i<answer.length; i++){
		if(!isNaN(answer[i])){
			W[j]=answer[i];
			j++;
		}
		if(symb.indexOf(answer[i])+1){
			O[l]=answer[i];
			l++;
		}
	}
	for(let i = 0; i<O.length; i++){
		if(O[i]+''=='*'){
			W[i] = Number(W[i]) * Number(W[i+1]);
			W.splice(i+1, 1);
			O.splice(i, 1);
			W[i]=W[i]+'';
			i--;
		}
		if(O[i]+''=='/'){
			W[i] = Number(W[i]) / Number(W[i+1]);
			W.splice(i+1, 1);
			O.splice(i, 1);
			W[i]=W[i]+'';
			i--;
		}
	}
	for(let i = 0; i<=O.length; i++){
		if(O[i]=='+'){
			W[i] = Number(W[i]) + Number(W[i+1]);
			W.splice(i+1, 1);
			O.splice(i, 1);
			W[i]=W[i]+'';
			i--;
		}
		if(O[i]=='-'){
			W[i] = Number(W[i]) - Number(W[i+1]);
			W.splice(i+1, 1);
			O.splice(i, 1);
			W[i]=W[i]+'';
			i--;
		}
	}
	W = W.join();
	console.log(W);
  rl.close();
});
