let header=document.getElementById('header');
let Main =document.getElementById('Main');

/*SignUp Form */
let SignForm=document.getElementById('SignForm');
let MasterSign=document.getElementById('MasterSign');
let StudentSign=document.getElementById('StudentSign');
let SignMaster=document.getElementById('SignMaster');
let SignStudent=document.getElementById('SignStudent');

/*SignUp Student*/
function createStudent(){
    header.setAttribute("class","displayNone");
    Main.setAttribute("class","displayNone");
    LogForm.setAttribute("class","displayNone");

    SignForm.setAttribute("class","displayBlock");
    SignStudent.setAttribute("class","displayBlock");
    SignMaster.setAttribute("class","displayNone");

    MasterSign.setAttribute("class","displayNone");
    StudentSign.setAttribute("class","displayBlock");

}
/*SignUp Master*/
function createMaster(){
    header.setAttribute("class","displayNone");
    Main.setAttribute("class","displayNone");
    LogForm.setAttribute("class","displayNone");

    SignForm.setAttribute("class","displayBlock");
    SignStudent.setAttribute("class","displayNone");
    SignMaster.setAttribute("class","displayBlock");

    MasterSign.setAttribute("class","displayBlock");
    StudentSign.setAttribute("class","displayNone");
}
//****** SignUp Student/Master  Section*******//

const newUSer={};
const sName=document.getElementById("sname");
const sEmail=document.getElementById("email");
const sPassword=document.getElementById("spassword");
const cPassword=document.getElementById("cpassword");

function signUpMaster(){
    newUSer.name=sName.value;
    newUSer.email=sEmail.value;
    newUSer.password=cPassword.value;
    console.log(newUSer);
    if(stu.className=="bottomL"){
        studentList.push(newUSer);
    }
    else{
        masterList.push(newUSer);
    }
    
    console.log(studentList);
    console.log(masterList);
    document.getElementById("form2").reset();
    
    if(stu.className=="bottomL"){
        loginStudent();
    }
    else{
        loginMaster();
    }
 }
/*LogIn Form */

let LogForm=document.getElementById('LogForm');
let MasterLog=document.getElementById('MasterLog');
let StudentLog=document.getElementById('StudentLog');
let Mast= document.getElementById('Mast');
let stu= document.getElementById('Stu');
var boardSession=false;

/*Login student */

function loginStudent(){
    if(boardSession){
       if(confirm("Is switch logout")){logOut();}
       else ;
    }
   else{
   header.setAttribute("class","displayNone");
   Main.setAttribute("class","displayNone");
   SignForm.setAttribute("class","displayNone");

   LogForm.setAttribute("class","displayBlock");
   MasterLog.setAttribute("class","displayNone");
   StudentLog.setAttribute("class","displayBlock");

   Mast.setAttribute("class","displayNone");
   stu.setAttribute("class","bottomL");
   showQuizes();
   boardSession=true;
   }

   }

/*Login Master */
function loginMaster(){
    
   if(boardSession){
       if(confirm("Is it switchTo")) {logOut()}
       else  ;
   }
    else{
       header.setAttribute("class","displayNone");
       Main.setAttribute("class","displayNone");
       SignForm.setAttribute("class","displayNone");
   
       LogForm.setAttribute("class","displayBlock");
       MasterLog.setAttribute("class","displayBlock");
       StudentLog.setAttribute("class","displayNone");
   
       Mast.setAttribute("class","bottomL");
       stu.setAttribute("class","displayNone");
   
       showStudents();
       boardSession=true;
     }
   }

// ********** Login Section *********//
const masterList=[ {name:"Gurubarathi",password:12345,email:"gurubarathi@gmail.com",age:26},]

const studentList=[{name:'Student1',password:12345,email:"student@gmail.com",age:12}, ]


const form1 = document.getElementById("form1");
const names=document.getElementById("name");
const password=document.getElementById("password");
const check =document.getElementById("check"); 
const check1 =document.getElementById("check1"); 
var currentObject;

function verifyUser(){
    if(stu.className=="bottomL"){
         currentObject = studentList.find(e=> e.name === names.value);
    }
    else{
         currentObject = masterList.find(e=> e.name === names.value); 
    }
   
    if(currentObject != undefined){
        if(names.value === currentObject.name && password.value==currentObject.password)
        {
            displayProfile();
            MatchProfile();
            document.getElementById("form1").reset();
        }
    }
    else{
        console.log("error 404");
        const check = document.getElementById("check");
        const check1= document.getElementById("check1");
        check.textContent="Username/password is incorrect"; 
        check1.textContent="Username/password is incorrect"; 
    }
}

/********Displaying Profile*********/

function displayProfile(){
    header.setAttribute("class","displayBlock");
    Main.setAttribute("class","displayBlock");
    LogForm.setAttribute("class","displayNone");
    SignForm.setAttribute("class","displayNone"); 
    
}

/**************LogOut function********************/
function logOut(){
    let yes= confirm('are you logout');
    if(yes){
    tabless.innerHTML="";
    mShow.innerHTML="";
    Ref.innerHTML="Login To Practice/Access";
    Profile.innerHTML='';
    boardSession=false;
    }
}
/*********** Profile Creation***************/
let Profile=document.getElementById("profile");


function MatchProfile(){
     Ref.innerHTML="";
    let code= `<div class="card my-3 p-3">
                <img src="img/prof.png" alt="car" class="img-fluid">
                 <div class="card-text text-center">
                    <h5 class="cate">Hi,<br> ${currentObject.name}</h5>
                 </div>
                </div>`;

            Profile.innerHTML=code;
}

 /***********Master Board***************/
    let mShow=document.getElementById("masterShow");
        mShow.setAttribute("class","dff");
    let students=[
                  {name:'Student1',class:'A',ans:0,part:"0%"},
                  {name:'Student2',class:'B',ans:0,part:"0%"},
                  {name:'Student3',class:'C',ans:0,part:"0%"},
                ]
    let studentCard=students.map(e=>(`<div class="card m-2" style="width: 18rem;">
    <img src="img/shows.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">NAME: ${e.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Class: ${e.class}</li>
      <li class="list-group-item">AnsweredQuestions: ${e.ans}</li>
      <li class="list-group-item">Performance: ${e.part}</li>
    </ul>
  </div>`))
    function showStudents(){
     tabless.innerHTML="";
      mShow.innerHTML=studentCard;
      boardSession=true;
     
    } 
/***********Student Board***************/
let tabless=document.getElementById("tab");
    tabless.setAttribute("class","dss");

  const Quizes=[
                {id:1,ques:"four(plus(nine()))"},
                {id:2,ques:"eight(minus(three()))"},
                {id:3,ques:"seven(times(five()))"},
                {id:4,ques:"six(divided_by(two()))"}
               ]
  let tables=
  `<table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">S.No</th>
            <th scope="col">Questions</th>
            <th scope="col">Answer</th>
            <th scope="col">Submit</th>
            <th scope="col">GetAns</th>
            </tr>
        </thead>
        <tbody>
             ${Quizes.map(e=>(
                `<tr>
                <th scope="row">${e.id}</th>
                <td>${e.ques}</td>
                <td><input id="${e.id}" value=""></td>
                <td><button onclick="putAns(this)" class="p-2">Submit</button></td>
                <td><button onclick="getAns(this)" class="p-2">ANS</button></td>
                </tr>`
             ))}
               
        </tbody>
    </table>
    `
     function showQuizes(){
        tabless.innerHTML=tables;
        boardSession=true;
      }
   /***********************************/
    var selectedRow = null;
    var Input,valuE;
    function putAns(td){
        selectedRow = td.parentElement.parentElement;
        let questioN = selectedRow.cells[1].innerHTML;
        let A = Quizes.find(e=>{if(e.ques==questioN)e.ques})
        console.log(A);
        Input=selectedRow.cells[2].childNodes[0];
        valuE=Input.value;

        if(A == valuE){
            alert(' your ans is correct '+valuE);
        }
        else{
            alert('not correct!');
        }  
        Input.value='';
    }
    function getAns(td){
        selectedRow = td.parentElement.parentElement;
    }
/***********************Calculator Function****************************/
function expression(number, operation){
	if(!operation)
		return number;
	return operation(number);
}

function zero(operation) { return expression(0, operation); }
function one(operation) { return expression(1, operation); }
function two(operation) { return expression(2, operation); }
function three(operation) { return expression(3, operation); }
function four(operation) { return expression(4, operation); }
function five(operation) { return expression(5, operation); }
function six(operation) { return expression(6, operation); }
function seven(operation) { return expression(7, operation); }
function eight(operation) { return expression(8, operation); }
function nine(operation) { return expression(9, operation); }

function plus(x) {
	return function(y) {
		return y + x;
	}
}
function minus(x) {
	return function(y) {
		return y - x;
	}
}
function times(x) {
	return function(y) {
		return y * x;
	}
}
function divided_by(x) {
	return function(y) {
		return Math.floor(y / x);
	}
}





