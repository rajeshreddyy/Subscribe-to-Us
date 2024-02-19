let formData = {
    name: "",
    email: ""
};


let subscribeFormEl = document.getElementById("subscribeForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsg = document.getElementById("nameErrMsg");
let emailErrMsg = document.getElementById("emailErrMsg");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required*";
    }
    else{
        nameErrMsg.textContent = "";
    }
    formData.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsg.textContent = "Required*";
    }
    else{
        emailErrMsg.textContent = "";
    }
    formData.email = event.target.value;
});

subscribeFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

console.log(formData);

