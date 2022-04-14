function f1() {
for(var i=0; i<=arguments.length; i++)
console.log(i);
}

function f2(a,b) {

console.log(a);
console.log(b);

}

function f3 (a,b,c) {
   for(var i=0; i<=arguments.length; i++ ) 
   console.log(arguments[i]);
}

f1(1,2,3,4,5);
f2(10,20);
f3(100,200,300,4000)
