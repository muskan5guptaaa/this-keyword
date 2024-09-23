//this keyword depend upon how it is beinng called upon

//1.fucntional invocation
//2.method invocation
//3.constructor fn
//4.indirect calling
//5.arrow fn

//fucntional invoaction=>this always points to a window object
/* function fn(){
    console.log(this)

}
fn(); */


//method invocation/calling =>this always points to the object inside which it is avalilable
/* let obj={
    a:10,
    fun:function(){
console.log(this)
    }
}
obj.fun(); */

//example
/* function sam(){
    console.log(this)
}
sam(); */

/* this function ki vjh s chlrha or function fun ki vjh s chlrha lkin
neeche fun chl nhi rha vo assign horha call m  or neeche call() ko call kr rhe tb hmra this chlrha thats why it gives an window bcoz fn c
let objec={
    a:100,
    fun:function(){
        console.log(this)
    }

}
let call=objec.fun;
call(); */

/* sec wla this hey ki vjh s chlrha or fir fn invoke horha toh yeh widow dega or pehla wla this 
function ki vjhs chrha or function fun ki vjh s fun obj k sth invoke horha toh isme obj hoga phle yhi chlga
let obj={
    fun:function(){
        console.log(this);//obj
        function hey(){
            console.log(this)//window
        }
        hey();
    }
}
obj.fun(); */


/* constructor fn=>this always poins to newly created ibj
function sma(){
    console.log(this)
    this.name="sam"
    this.email="msuakn@gmail.com"
}
let s1=new sma();//obj

 */

