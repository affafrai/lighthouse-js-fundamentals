


const moves=['north','north','west','west','north','east','north'];

function finalPosition(moves){
let position=[0,0];
let x = 0;let y=0
 for(let i = 0; i<moves.length; i++){

 if(moves[i] == 'north'){
    y++;//console.log('N')

 }
 else if(moves[i] == 'south'){
    y--;//console.log('S')
 }
 else if(moves[i] == 'west'){
    x--;//console.log('W')
 }
 else
   { x++;//console.log('east');
 }
//console.log(x+" "+y)
}

position[0]=x; position[1]=y
return position;
}
finalPosition(moves);


/*
//const finalPosition = function (moves) {

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


 //let x = 0;let y = 0;
 
const finalPosition = function (moves) {
let position = [0,0];
 for(let i = 0; i<moves.length; i++){

  if(moves[i] === 'north'){
   position[1] = position[1]+1; console.log('N')

  }
  else if(moves[i] === 'south'){
    position[1] = position[1]-1 ; console.log('S')
  }
  else if(moves[i] === 'west'){
     position[0] = position[0]-1; console.log('W')
  }
  else{
    position[0] = position[0]+1 ; console.log('E')
  } 
console.log(position);
//console.log(x+" "+y)


 }
 return position; 
}

//finalPosition(moves); 
console.log(finalPosition(moves));
*/
