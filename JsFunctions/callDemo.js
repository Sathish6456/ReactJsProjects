function printBasicDetails(a,b) {
    console.log("ID:"+ this.id);
    console.log("Name:"+this.name);

    console.log(a);
    console.log(b);
}

var emp1={id:65885,name:"Sathish", salary:28500, grade:"G"}
var emp2={id:65888,name:"Sumanth",salary:28500,grade:'G'}
var stud1={id:197650023,name:"Sai", marks:80, ratng:4}

printBasicDetails.apply(emp1,[100,200]);        //apply and call two are similar 
printBasicDetails.call(emp2,200,300);
printBasicDetails.call(stud1,300,400);
