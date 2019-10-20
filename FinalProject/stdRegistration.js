"use strict";
//import Course from "./account.js";
/**
 * A Course class
 *
 * all student should have course as like property
 */
class Course {
  /**
   * Constructor for creating a new Course object
   * @param {string} id the id for this course
   * @param {string} name the name for this course
   * @param {string} code the code for this course
   */
  constructor(id, name, code) {
    this._id = id;
    this._name = name;
    this._code = code;
  }
    /**
   * Getter for the 'private' number field
   *
   * @returns {string} the course Name
   */
   getId() {
    return this._id;
  }
  /**
   * Getter for the 'private' number field
   *
   * @returns {string} the course Name
   */
   getName() {
    return this._name;
  }
  /**
   * Getter for the 'private' number field
   *
   * @returns {string} the course code
   */
  getCode() {
    return this._code;
  }
}
/**
 * OutPut:every user has a differnt role
 * it will used to differenciate all Users
 */
let role = {
  admin: "admin",
  fuculty: "fuculty",
  student: "student"
};

////////////////////////////////////////////////////////////////////////////////////////  to display all courses
/**
 * all courses in our DB
 *Input: a new course code is pushed to the array
 *process:create a new object for the course code
 * @returns {Array} all courses that is pushed to the array
 */
function allCourses() {
  let courseDB = [];
  courseDB.push(new Course("001", "Math", "FM 300"));
  courseDB.push(new Course("002", "Physics", "FM302"));
  courseDB.push(new Course("003", "Science", "FM303"));
  courseDB.push(new Course("004", "Social Studies ", "FM304"));
  courseDB.push(new Course("005", " Foreign Language", "FM305"));
  return courseDB;
}
/**
 * Output:It displays all courses 
 *@returns {string} the course code
 */
function displayAllCourses() {
  
  let table = document.querySelector("table");
  let data = Object.keys(allCourses()[0]);
  generateTableHead(table, data);
  generateTable(table, allCourses());
}
/**
 *Output:It display all course sorted by Name ascending order
 *
 * @returns {string} the course code
 */
function sortCourseName() {
  
  document.querySelector("table").innerHTML="";
  let table = document.querySelector("table");
  let data = Object.keys(allCourses()[0]);
  generateTableHead(table, data);
  generateTable(table,sortObjectBySome(allCourses(),"name"));
}
/**
 *Output:It display all course sorted by code
 * @returns {string} the course code
 */
function sortCourseCode(){
  document.querySelector("table").innerHTML="";
    let table = document.querySelector("table");
    let data = Object.keys(allCourses()[0]);
    generateTableHead(table, data);
    generateTable(table,sortObjectBySome(allCourses(),"code"));
}

///////////////////////////////////////////////////////////////////////////////////// to sort object by property name
/**
 * to display sort by Name
 * @param {Array} arr normal array(unsorted)
 *  @param {string} bysome sort bysome
 * @returns {Array} sorted object by spacify key
 */
function sortObjectBySome(arr, bysome) {
  
  if(bysome=="first"){
  return arr.sort((aval, bval) => { if(aval._firstName > bval._firstName){return 1;}else{return -1;}});
  }else if(bysome=="last"){
  return arr.sort((aval, bval) => { if(aval._lastName > bval._lastName){return 1;}else{return -1;}});
  }else if(bysome=="name"){
    return arr.sort((aval, bval) => { if(aval._name > bval._name){return 1;}else{return -1;}});
  }else{
    return arr.sort((aval, bval) => { if(aval._code > bval._code){return 1;}else{return -1;}});
  }
}

///////////////////////////////////////////////////////////////////////////////////////////  to create table
/**
 
 * output:creates head of table
 * @param {document} table tag name of table
 * @param {object} data tag name of table
 * @returns {string} to create head
 */
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  row.style.color = "white";
  row.style.background = "rgb(0, 71, 179)";
}
/**
 *Output: It creates head of table
 *
 * @param {document} table tag name of table
 * @param {Array} data tag name of table
 * @returns {string} to create head
 */
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////// below inheritance part
/**
 * A Course class
 *
 * all student should have course as like property
 */
class User{
 /**
   * Constructor for creating a new Course object
   * @param {string} firstN first Name
   * @param {string} lastN last name
   * @param {string} phone phone number
   * @param {string} rol role type
   * @param {string} email email of user
   * @param {string} password password
   * @param {string} id user id
   */
  constructor(firstN,lastN,phone,rol,email,password,id){
      this._firstName=firstN;
      this._lastName=lastN;
      this._phone=phone;
      this._role=rol;
      this._email=email;
      this._password=password;
      this._id=id;
  }
  /**
 * to set first name
 * @param {string} name first name
 * @returns {string} to create head
 */
  setFirstName(name){
      this._firstName=name;
  }
  /**
 * to get first name
 * @returns {string} to create head
 */
  getFirstName(){
      return this._firstName;
  }
  /**
 * to set last name
 * @param {string} name last name
 * @returns {string} to create head
 */
setLastName(name){
    this._lastName=name;
}
/**
 * to get first name
 * @returns {string} to create head
 */
getLastName(){
    return this._lastName;
}
/**
 * to set phone
 * @param {string} pho phoen
 * @returns {string} to create head
 */
setPhone(pho){
 this._phone=pho;
}
/**
 * to get first name
 * @returns {string} to create head
 */
getPhone(){
    return this._phone;
}
/**
 * to set role
 * @param {string} ro role
 * @returns {string} to create head
 */
setRole(ro){
  this._role=ro;
}
/**
 * to get first name
 * @returns {string} to create head
 */
getRole(){
   return this._role;
}
/**
 * to set email
 * @param {string} em email
 * @returns {string} to create head
 */
setEmail(em){
  this._email=em;
}
/**
 * to get first name
 * @returns {string} to create head
 */
getEmail(){
    return this._email;
}
/**
 * to set password
 * @param {string} pa password
 * @returns {string} to create head
 */
setPassWord(pa){
    this._password=pa;
}
/**
 * to get first name
 * @returns {string} to create head
 */
getPassWord(){
    return this._password;
}
/**
 * to set id
 * @param {string} id id
 * @returns {string} to create head
 */
setId(id){
    this._id=id;
}
/**
 * to get first name
 * @returns {string} to create head
 */
getId(){
    return this._id;
}
}

//////////////////////////////////////////////////////////////////////////////// below sub-classes 
/**
 * A Admin class
 *
 * all admin should have course as like property
 */ 
class Admin extends User{
    /**
   * Constructor for creating a new Course object
   * @param {string} firstN first Name
   * @param {string} lastN last name
   * @param {string} phone phone number
   * @param {string} email email of user
   * @param {string} password password
   * @param {string} id user id
   */
    constructor(firstN,lastN,phone,email,password,id){
        super(firstN,lastN,phone,role.admin,email,password,id);
    }
 }
/**
 * A Faculty class
 *
 * all fuculty should have course as like property
 */ 
class Faculty extends User{
    /**
   * Constructor for creating a new Course object
   * @param {string} firstN first Name
   * @param {string} lastN last name
   * @param {string} phone phone number
   * @param {string} email email of user
   * @param {string} password password
   * @param {string} id user id
   * @param {string} dep user id
   */
  constructor(firstN,lastN,phone,email,password,id,dep){
    super(firstN,lastN,phone,role.fuculty,email,password,id);
    this._departement=dep;
    }
    /**
 * to set departement
 * @param {string} dep id
 * @returns {string} to create head
 */
  setDepartement(dep){
      this._departement=dep;
  }
  /**
 * to get departement
 * @returns {string} to create head
 */
getDepartement(){
    return this._departement;
}
}
/**
 * A Admin class
 *
 * all admin should have course as like property
 */ 
class Student extends User{
     /**
   * Constructor for creating a new Course object
   * @param {string} firstN first Name
   * @param {string} lastN last name
   * @param {string} phone phone number
   * @param {string} email email of user
   * @param {string} password password
   * @param {string} id user id
   * @param {string} year user id
   * @param {string} gpa user id
   */
  constructor(firstN,lastN,phone,email,password,id,year,gpa){
    super(firstN,lastN,phone,role.student,email,password,id);
    this._year=year;
    this._gpa=gpa;
    this.courses=[];
    }
     /**
 * to set departement
 * @param {string} year year
 * @returns {string} to create head
 */ 
setYear(year){
    this._year=year;
}
/**
 * to get year
 * @returns {string} to create head
 */
getYear(){
  return this._year;
}
/**
 * to get year
 * @returns {string} to create head
 */
getGpa(){
    return this._gpa;
}
 /**
 * to set departement
 * @param {string} gpa grad
 * @returns {string} to create head
 */ 
setGpa(gpa){
    this._gpa=gpa;
}
/**
 * to get array
 * @returns {Array} to create head
 */
getStudentCourses(){
   return this.courses;
}
/**
 * to set departement
 * @param {string} course grad
 * @returns {string} to create head
 */
setCourse(course){
    this.courses.push(course);
}
}

//////////////////////////////////////////////////////////////////////////////////////////////////// below is all user
/**
 *Input:All user object is created with firstname,lastname,phone,gmail,password,year,gpa and role of the user
 *Output:to get array of objects
 * @returns {Array} all user
 */
function allUsers(){
    let userDB=[];
    let std1=new Student("Daniel","Nigussie","320-532","dnigussie@mum.edu","dani123","std111","2019","3.9");
         std1.setCourse(new Course("1", "Math", "FM 300"));
    let std2=new Student("Temesgen","Assefa","234-435","teassefa@mum.edu","teme123","std222","2019","4");
         std2.setCourse(new Course("2", "Physics", "FM302"));
    userDB.push(new Admin("Bernie","Alnso","321-403","balnso@mum.edu","pass123","admin111"));
    userDB.push(std1);
    userDB.push(new Faculty("Anthony","Martial","546-444","amartial@mum.edu","pass123","fuc321","registral"));
    userDB.push(new Faculty("lebron","curry","435-455","lcurry@mum.edu","pass123","fuc123","registral"));
    userDB.push(new Admin("Klay","Russel","435-403","krussel@mum.edu","pass123","admin222"));
    userDB.push(std2);
    
    return userDB;
}
/**
 * Output:sorts the facality by firstname
 * @returns {string} all user
 */
function sortFuctByFirstName(){
  document.querySelector("table").innerHTML="";
  let temp=[];
    for(let ob of allUsers()){
        if(ob.getRole()==role.fuculty){
            temp.push(ob);
        }
    }
    let sorted=sortObjectBySome(temp,"first");
    let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * output:sorts fafaculty by last name
 * @returns {string} all user
 */
function sortFuctByLastName(){
  document.querySelector("table").innerHTML="";
  let temp=[];
    for(let ob of allUsers()){
        if(ob.getRole()==role.fuculty){
            temp.push(ob);
        }
    }
    let sorted=sortObjectBySome(temp,"last");
    let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * output: sorts students by first name
 * @returns {string} all user
 */
function sortStdByFirstName(){
  document.querySelector("table").innerHTML="";
  let temp=[];
    for(let ob of allUsers()){
        if(ob.getRole()==role.student){
            temp.push(ob);
        }
    }
    let sorted=sortObjectBySome(temp,"first");
    let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * Output: sorts students by last name
 * @returns {string} all user
 */
function sortStdByLastName(){
  document.querySelector("table").innerHTML="";
  let temp=[];
    for(let ob of allUsers()){
        if(ob.getRole()==role.student){
            temp.push(ob);
        }
    }
    let sorted=sortObjectBySome(temp,"last");
    let table = document.querySelector("table");
  let data = Object.keys(sorted[0]);
  generateTableHead(table, data);
  generateTable(table, sorted);

}
/**
 * Input: the user enters email and password 
 * Process: If the email and password matches with what it is in the array 
 * output: it will direct you to the admin,faculty or student page
 * @returns {string} all user
 */
function loginBtn(){
    let email=document.getElementById("emailid").value;
    let pass=document.getElementById("passwordid").value;
    let temp=null;
    for(let user of allUsers()){
        if(user.getEmail()==email && user.getPassWord()==pass){
            temp=user;
            break;
        }
    }
   // console.log(temp);
    if(temp==null){
        window.alert("your password and email does not match");
    }else{console.log(temp);
        if(temp.getRole()==role.student){
           // window.alert("success");
           // window.location = "studentPage.html";
            window.open("studentPage.html");  
        }else if(temp.getRole()==role.fuculty){
           // window.location="fucultyPage.html";
            window.open("fucultyPage.html"); 
        }else{
            //window.location="adminPage.html";
            window.open("adminPage.html"); 
        }
    }
}
/**
 * output: the user can view the profile
 * @returns {string} all user
 */
function viewProfile(){
    let email=document.getElementById("proId").value;
    let temp=null;
    for(let user of allUsers()){
        if(user.getEmail()==email){
            temp=user;
            break;
        }
    }
    if(temp==null){
      window.alert("Invalid Email Address!");
    }else{
      let val=temp;
   let   dis="FirstName:- "+val.getFirstName()+"  LastName:-  "+val.getLastName()+"  phone:- "+val.getPhone()+"  you Are:-"+val.getRole()+"  email:- "+val.getEmail()+"  Entry:- "+val.getYear()+"  GPA:- "+val.getGpa();
     document.getElementById("display").innerHTML=dis;
    }
}
/**
 * Output: the user can update profile
 * @returns {string} all user
 */
function updateProfile(){
  let fname= document.getElementById("fname").value;
  let lname=document.getElementById("lname").value;
  let email=document.getElementById("emailid").value;
  let pass=document.getElementById("passid").value;
  let id=document.getElementById("id").value;
  let oldemail=document.getElementById("oldemail").value;
  let temp=null;
    for(let user of allUsers()){
        if(user.getEmail()==oldemail){
            temp=user;
            break;
        }
    }
    if(temp==null){
      window.alert("Invalid Email Address!");
    }else{
      temp.setFirstName(fname);
      temp.setLastName(lname);
      temp.setEmail(email);
      temp.setPassWord(pass);
      temp.setId(id);
      let val=temp;
      let dis="FirstName:- "+val.getFirstName()+"  LastName:-  "+val.getLastName()+"  phone:- "+val.getPhone()+"  you Are:-"+val.getRole()+"  email:- "+val.getEmail()+"  Entry:- "+val.getYear()+"  GPA:- "+val.getGpa();
        document.getElementById("display").innerHTML=dis;
    }
  }
/**
 * Output:It displays all students 
 * @returns {string} all user
 */
function displayAllStudent(){
    let temp=[];
    for(let ob of allUsers()){
        if(ob.getRole()==role.student){
            temp.push(ob);
        }
    }
    let table = document.querySelector("table");
       let data = Object.keys(allUsers()[0]);
      generateTableHead(table, data);
      generateTable(table, temp);
}
/**
 * output:displays all facality
 * @returns {string} all user
 */
function displayAllFuculty(){
  
    let temp=[];
    for(let ob of allUsers()){
        if(ob.getRole()==role.fuculty){
            temp.push(ob);
        }
    }
    let table = document.querySelector("table");
       let data = Object.keys(allUsers()[0]);
      generateTableHead(table, data);
      generateTable(table, temp);
}

/////////////////////////////////////////////////////////////////////////////////////to assign coures to student
/**
 * output:assign course
 * @returns {string} all user
 */
function assignCourse(){
  let email=document.getElementById("emailid").value;
  let courseId=document.getElementById("ddlViewBy").value;
  let temp=null;
    for(let user of allUsers()){
        if(user.getEmail()==email){
            temp=user;
            break;
        }
    }
    let coures=null;
    for(let co of allCourses()){
      if(co.getId()==courseId){
        coures=co;
        break;
      }
  }
  if(temp==null){
    window.alert("check the student email");
  }else{
    let dis="couseId:- "+temp.getId()+"  courseName:- "+temp.getName()+"  courseCode:- "+temp.getCode()+"\n";
    temp.setCourse(coures);
    var myName = localStorage.getItem("name");
    dis+=myName;
    localStorage.setItem("name","dis");
  }
}

/**
 * output:admin and facality are able to see student course
 * @returns {string} all user
 */
function adFuToSeeStdCourse(){
  let email=document.getElementById("emailid").value;
  let temp=null;
    for(let user of allUsers()){
        if(user.getEmail()==email){
            temp=user;
            break;
        }
    }
    if(temp==null){
      window.alert("check the student email");
    }else{
      let dis="";
      //var myName = localStorage.getItem("name");
      for(let co of temp.getStudentCourses()){
        dis+="couseId:- "+co.getId()+"  courseName:- "+co.getName()+"  courseCode:- "+co.getCode()+"\n";
      }
      document.getElementById("display").innerHTML=dis;
    }
}

            

      

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////