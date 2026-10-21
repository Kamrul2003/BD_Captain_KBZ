async function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById("error-msg");

            const response = await fetch('https://script.google.com/macros/s/AKfycbxHYgIOE1ar91mpon7gpeeeV6DYoL4aLLfMW8Z1pGl5-mngImQDVjazWwDdbzDlUvuknA/exec');
            const users = await response.json();

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Save user data in session storage
              localStorage.setItem('user', JSON.stringify(user));

                // Redirect to the welcome page
                window.location.href = 'ahp.html'; // 'dashboard.html';
            } else {
               errorMsg.classList.remove("hidden");
              //  alert('Invalid email or password');
            }
        }
        
        
    
