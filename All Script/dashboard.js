   
  const user = JSON.parse(localStorage.getItem('user'));
        //  name: row[0], number: row[1], email: row[2], password: row[3], referaln: row[5], referalid: row[6], id: row[7], verify: row[8], blnc: row[9], profile: row[10],
        if (user) {
         document.getElementById("userName").textContent = user.name; //name: row[0],1
        document.getElementById("userId").textContent = user.id; //id: row[7],7
        document.getElementById("verify").textContent = user.verify; //verify: row[8],8
        document.getElementById("user-balance").textContent = user.blnc; //blnc: row[9],
        document.getElementById("User-DP").src = user.profile; //profile: row[10],
        document.getElementById("wlcm").textContent = user.well; //well: row[11]
        document.getElementById("App_SubAdmin").textContent = user.AppSubAdmin; //AppSubAdmin: row[12]
        document.getElementById("App_Admin").textContent = user.AppAdmin; //AppAdmin: row[13]
        } else {
            // Redirect back to login if session data is missing
            window.location.href = 'login.html';
        }
        // Logout function
function logout() {
    localStorage.removeItem("user");
    window.location.href = "login.html";
}




  // JavaScript to handle the navigation
    document.getElementById('btn1').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'Agency.html';
    });
    
    // JavaScript to handle the navigation
    document.getElementById('btn2').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'ahp.html';
    });
    
     // JavaScript to handle the navigation
    document.getElementById('btn3').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'me-up.html';
    });