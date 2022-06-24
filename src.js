console.log("file is connected");

//lets discuss what is febonacci series

var a=0,b=1;
console.log(a)
console.log(b)
for (let i = 0; i < 5; i++) {
     var temp=a+b;//0+1=1
     console.log(temp)
     a=b;
     b=temp;
    
}
