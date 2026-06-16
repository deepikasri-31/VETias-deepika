var light = "white"

if(light == "green"){
    console.log("go!");
}
else if(light == "yellow"){
    console.log("wait!");
}
else if(light == "red"){
    console.log("stop!");
    
}
else {
    console.log("invalied light color");    
}
console.log("outside if");


//switch condition
var single = "white"
switch (singal){
    case "green":
    console.log("go!");
    break;

 case "yellow":
    console.log("waite!");
    break;

case "red":
    console.log("stop!");
    break;

    default:
    console.log(inavalied light color);
} 

//do while
let count = 6
do{
  console.log(count);
    count++;
 while (count <= 5)
    
    console.log("outside do while");  
}

