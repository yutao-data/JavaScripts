/* var mood = "happy";
var age = 33;

alert(mood);
alert(age);  */

/* var hight = "about 5'10\" tall";
alert(hight); */

/* var married = true;
alert(married); */

/* var beatles = Array(4);
beatles[0] = "John";
beatles[1] = "Paul";
beatles[2] = "George";
beatles[3] = "Ringo";
alert(beatles); */

/* var beatles = Array("John","paul","George","Ringo");
alert(beatles); */

/* alert("10"+20);
alert(10+20); */


/* if(1>2){
    alert("The World get mad");
}else{
    alert("All is well in this world");
} */

/* var my_mood = "happy";
var your_mood = "sad";
if(my_mood == your_mood){
    alert("our mood are the same");
}
if(my_mood != your_mood){
    alert("I am happier than you");
} */


/* var a = false;
var b = "";
if(a === b){
    alert("a equals to b");
}else{
    alert("a != b");
} */



/* var num = 2 * 3 ;
if( num >= 5 && num <= 10 ){
    alert("The number is in the right range.");
} */


/* var num = 2 * 3;
alert(num);
if(!(num < 5 || num > 10)){
    alert("the number is not in the righr zoom");
}
alert("run successfully"); */


/* var count = 1;
while(count < 11){
    alert(count);
    count++;
} */


/* var count = 1;
do{
    alert(count);
    count++
}while(count < 1);  */


/* for(var count = 1; count < 11; count ++){
    alert(count);
} */


/* var beatles = Array("John","Paul","George","Ringo");
for(var count = 0; count < beatles.length; count++){
    alert(beatles[count]);
} */


/* function shout(){
    var beatles = Array("John","Paul","George","Ringo")
    for(var count = 0; count < beatles.length; count++){
        alert(beatles[count]);
    }
}
shout(); */


/* function multiply(num1,num2){
    var total = num1 * num2;
    alert(total);
}
multiply(10,2); */


/* alert("run successfully");


var temp_fahrenheit = 95;
var temp_celsius = convertToCelsius(temp_fahrenheit);
alert(temp_celsius);


function convertToCelsius(temp){
    var result = temp - 32;
    result = result / 1.8;
    return result;
} */


/* function square(num){
    total = num * num;
    return total;
}
var total = 50;
var number = square(20);
alert(total); */


/* function square(num){
    var total = num * num;
    return total;
}
var total = 50;
var number = square(20);
alert(total); */

/* alert(document.getElementsByTagName("li").length);

for(var i=0;i<document.getElementsByTagName("li").length;i++){
    alert(typeof document.getElementsByTagName("li")[i]);
} */

/* var shopping = document.getElementById("purchase");
var sales = shopping.getElementsByClassName("sale");
alert(sales.length); */


function getElementByClassName(node,classname){
    if(node.getElementByclassName){
        //使用现有方法
        return node.getElementByClassName(classname);
    }else{
        var results = new Array();
        var elems = node.getElementByTagName("*");
        for(var i=0; i<elems.length;i++){
            if(elems[i].className.indexOf(classname)!=-1){
                results[results.length] = elems[i];
            }
        }
        return results;
    }
}







