const displayMessage = document.getElementById("message-display");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click",login);
//fetch port const:
let port;
fetch('/api/config')
    .then(response => response.json())
    .then(data => {
        port = data.port;
    })
    .catch(error => {
        console.error('Error fetching port:', error);
    });


async function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if(username&&password){
        const formData = {
            formType: "login",
            username: username,
            password: password
        }
        try{
            const response = await fetch(`http://localhost:`+port+`/login`,{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            const responseMessage = await data.message;

            switch(response.status){
                case 200:
                    alert("correct! Proceed to homepage:");
                    location.replace('./index.html');
                    break;
                case 403:
                    alert(responseMessage);
                    break;
                case 404:
                    alert(responseMessage);
                    break;
                case 500:
                    alert(responseMessage);
                    break;
                default:
                    alert("error ",responseMessage);
            }
        }catch(error){
            console.error(error);
        }

    }else{
        displayMessage.innerHTML = "please enter username and password."
    }

}