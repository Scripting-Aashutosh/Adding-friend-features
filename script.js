var h =  document.querySelector("h5")

var btn = document.querySelector("#Add")
// var Remove = document.querySelector("#Remove")

var flag = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
    h.innerHTML = "Friend Request send"
    h.style.color = "green"
    btn.innerHTML = "Cancelled Request"
    flag = 1;
    }
    else{
        h.innerHTML = "Stranger"
        h.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0;
    }

})

// Remove.addEventListener("click", function(){
//     h.innerHTML = "Stranger"
//     h.style.color = "red"
// })