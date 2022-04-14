function printBasicDetails(a,b) {
    console.log("ID:"+ this.id);
    console.log("Name:"+this.name);

    console.log(a);
    console.log(b);
}

var emp1={id:65885,name:"Sathish", salary:28500, grade:"G"}
var emp2={id:65888,name:"Sumanth",salary:28500,grade:'G'}
var stud1={id:197650023,name:"Sai", marks:80, ratng:4}

var emp1Bind=printBasicDetails.bind(emp1,[100,200]);
var emp2Bind=printBasicDetails.bind(emp2,200,300);
var stud1Bind=printBasicDetails.bind(stud1,300,400);

emp1Bind();
emp2Bind();
stud1Bind();