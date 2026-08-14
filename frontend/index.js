//alert ("welcome to my website");
var users = [
    {
        name:"JOHN DOE", 
        gender:"MALE",
        image:"image.png",
    },
    {
        name:"JANE DOE", 
        gender:"FEMALE",
        image:"jane.png",
    }
]
var curid = 0;
function toggleUser(){

        
    curid = (curid + 1) % 2;
    var username = document.getElementById("user-name");
    var usergender = document.getElementById("user-gender");        
    var userimage = document.getElementById("user-image");

    username.innerHTML = users[curid].name;
    usergender.innerHTML = users[curid].gender;
    userimage.src = users[curid].image;
}
function randomuser(){
    fetch("https://randomuser.me/API")
        .then(function(res){
            return res.json();
        })
        .then (function(data){
            var username = document.getElementById("user-name");
            var usergender = document.getElementById("user-gender");
            var userimage = document.getElementById("user-image");

            var newusername=data.results[0].name.first + " " + data.results[0].name.last;
            var newusergender=data.results[0].gender;
            var newuserimage=data.results[0].picture.large;

            username.innerHTML = newusername;
            usergender.innerHTML = newusergender;
            userimage.src = newuserimage;


        })
        .catch (function(err){
            console.log("error occured:"+err);

        })  

}  
function myrandomuser(){
    fetch("/api/randomuser")
        .then(function(res){
            return res.json();
        })
        .then (function(data){
            var username = document.getElementById("user-name");
            var usergender = document.getElementById("user-gender");
            var userimage = document.getElementById("user-image");

            var newusername=data.name;
            var newusergender=data.gender;
            var newuserimage=data.image;

            username.innerHTML = newusername;
            usergender.innerHTML = newusergender;
            userimage.src = newuserimage;


        })
        .catch (function(err){
            console.log("error occured:"+err);

        })
}


        

