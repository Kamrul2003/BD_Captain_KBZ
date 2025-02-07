

function closeMenu(e) {
        var menuList = document.querySelector(".inv");
        if (e.innerHTML == "x") {
            menuList.style.display = "none";
        }}
        
        
  
  
  // JavaScript to handle the navigation
    document.getElementById('btn1').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'dashboard.html';
    });
  // JavaScript to handle the navigation
    document.getElementById('StarmakerGC').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'Starmaker Gold coins.html';
    });
    
     // JavaScript to handle the navigation
    
    
     // JavaScript to handle the navigation
    document.getElementById('whatsapp').addEventListener('click', function () {
      // Redirect to second.html
      //window.location.href = 'https://wa.me/message/IARZDNGJAZVBD1';
      window.location.href = 'https://s.imoim.net/3WcCRZ';
    });
    
    
    setTimeout(function() {
      const message = document.getElementById('UFE');
      message.style.display = 'none';
    }, 800); // 5000 milliseconds = 5 seconds
    
    
   const user = JSON.parse(localStorage.getItem('user'));
        //  name: row[0], number: row[1], email: row[2], password: row[3], referaln: row[5], referalid: row[6], id: row[7], verify: row[8], blnc: row[9], profile: row[10],
        if (user) {
          
         document.getElementById("userId").value = user.id;
         document.getElementById("email").value = user.email; //name: row[0],1
        document.getElementById("password").value = user.password; //id: row[7],7
        document.getElementById("verify").textContent = user.verify; //verify: row[8],8
        document.getElementById("user-balance").textContent = user.blnc; //blnc: row[9],
        document.getElementById("User-DP").src = user.profile; //profile: row[10],
        document.getElementById("wlcm").textContent = user.well; //well: row[11]
        document.getElementById("App_SubAdmin").textContent = user.AppSubAdmin; //AppSubAdmin: row[12]
        document.getElementById("App_Admin").textContent = user.AppAdmin; //AppAdmin: row[13]
        } else {
            // Redirect back to login if session data is missing
            window.location.href = 'Login.html';
        }
    
    async function login () {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            

            const response = await fetch('https://script.google.com/macros/s/AKfycbzGz2lrQQ1EKir6trnqsyyVPhnjhcCaIeMlOCymwIZ-IHxWXpwUgOhr2m7VMiYw2jp-_g/exec');
            const users = await response.json();

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                // Save user data in session storage
              localStorage.setItem('user', JSON.stringify(user));

                // Redirect to the welcome page
                window.location.href = 'dashboard (1).html'; // 'dashboard.html';
            }
            else {
               alert ("Please login");
              //  alert('Invalid email or password');
            }
        }
        
        
    
    
