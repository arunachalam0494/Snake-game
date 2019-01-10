//alert("file is attached")

var p1value  = 0;
var p2value  = 0;

var moved = 0 ;
let moved2=0;
let count = 0

var rmove =[
    [8,1],
    [13,7],
    [20,10]
]


var mainconatiner = document.createElement("div");
function create (){
    console.log('inside create ')

//    var mainconatiner = document.createElement("div");
    mainconatiner.id="maincontainer";

    document.body.appendChild(mainconatiner);

    for (var i = 23; i>=0 ; i--){
        console.log(i)
        var divBlock = document.createElement("div");
        divBlock.id='box' + i ;
        divBlock.className='divi';
        divBlock.textContent=i
      
        mainconatiner.appendChild(divBlock);
    }
}

create();

function randomNumber(min,max) 
{   console.log('random' + count)
 
    
    let random =   Math.random()*(max-min) + min; 
    console.log(random)
    let fvalue =  Math.floor(random);
    document.getElementById("myText").value = fvalue;
 
    move(fvalue);


    
};

function move(fvalue){
    console.log(fvalue)
  
    console.log('check player' + count)
    if(count%2 == 0){
        if(moved > 0 ){
            document.getElementById('box' + p1value).style.backgroundColor="white";
        }
        p1value = p1value+fvalue;
        if (p1value >= 23){
            console.log('mpre 1')
            var divExit = document.createElement("div");
    
            divExit.textContent='Bingo Player 1 wins'
            divExit.id= 'exit' ;
            
            document.body.appendChild(divExit);
            document.getElementById("Button").disabled = true
            return false;
        }
        let bvalue= 'box'+ p1value;
        console.log(bvalue)

    document.getElementById(bvalue).style.backgroundColor="yellow";
    moved = moved +1;
    checkdanger(p1value);
}

    else{
        move2(fvalue)
    }
  
    
  

   
    


}

function move2(fvalue){
    console.log('p2')
    
    if(moved2 > 0 ){
        document.getElementById('box' + p2value).style.backgroundColor="white";
    }
   
    
        p2value = p2value+fvalue;
        let bvalue= 'box'+ p2value;
        console.log(bvalue)
        if (p2value >= 23){
            console.log('mpre 2')
            var divExit = document.createElement("div");
    
            divExit.textContent='Bingo Player 2 wins'
            
            document.body.appendChild(divExit);
            divExit.id= 'exit' ;
            document.getElementById("Button").disabled = true
            return false;
        }

    document.getElementById(bvalue).style.backgroundColor="green";

 

    
    moved2 = moved2 +1;

    checkdanger(p2value);
    


}

function checkdanger(value){

    

     for (let i =0 ; i <= rmove.length-1 ; i++){
             if (value == rmove[i][0]){
                document.getElementById('box' + value).style.backgroundColor="white";
                if (count%2 == 0){
                p1value = 0
                move(rmove[i][1]);
                count = count+1}
                else{p2value = 0
                    move2(rmove[i][1]);
                    count = count+1}
             }

         }

     console.log('pre' + count)
    count = count+1
    console.log('aft' + count)


     

   console.log('array ' + rmove[0].length)

}