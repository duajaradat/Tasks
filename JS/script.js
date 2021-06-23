'user strict'
numbers ();
function numbers (){
    let EvenOdds = [100 , 20 , 33 ,45 , 44 , 37 , 10 , 2, 3, 5, 15, 12,31,32,88,94,62,63,77, 66, 27, 1, 7, 8 ,9];
    console.log(EvenOdds.length);
    let even=0;
    let odd=0;
     for (let i=0; i < EvenOdds.length ;i++ ){
         let x=EvenOdds[i]%2;
        if (x==0){
            even++;
        }else{
            odd++
        }
    }
    alert("number of even numbers is: "+even);
    console.log("number of even numbers is: "+even);
    alert("number of add numbers is: "+odd);
    console.log("number of add numbers is: "+odd);
}
