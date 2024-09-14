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
async function submitRegistration(e){
    e.preventDefault();
    let emailValid = false;
    let usernameValid = false;
    let passwordValid = false;
    const message = document.getElementById('message-display');
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //double-checking the information submitted:
    if(password.length < 8){
        message.innerHTML = 'password needs to be longer than 8 character!<br>';
    } else {
        passwordValid = true;
    }

    if(username.length < 8){
        message.innerHTML +='username needs to be longer than 8 character!';
    } else {
        usernameValid = true;
    }
   
    let counter = 0;
    const emailArray = email.split('');
    emailArray.forEach(e => {
        (e === '@')|(e === '.')? counter++: null;
    });
    (counter === 2)? emailValid = true: message.innerHTML = 'invalid email address';
    //Send POST to server:
    if(emailValid === true && usernameValid === true && passwordValid === true){
        message.style.color = 'black';
        message.innerHTML = 'yay! all set for next step!';
        //sending the data to the server via fetch/HTTP Request:
        const formData = {
            formType: 'registration',
            email: email,
            username: username,
            password: password,
        }
        
        try{
            const response = await fetch(`http://localhost:`+port+`/register`,{
                method: "POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                alert('User registered successfully');
                location.replace('/');
              } else {
                alert(`Failed to register user. Response status: ${response.status}`);
              }
            } catch(error) {
              console.error('Error:', error);
              alert('Error registering user');
            }
        }
            
    };

document.getElementById('submit-button').addEventListener('click',submitRegistration);