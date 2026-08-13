//alert ("welcome to my website");
var users = [
    {
        name:"John Doe", 
        gender:"male",
        image:"image.png",
    },
    {
        name:"Jane Doe", 
        gender:"female",
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
    
    