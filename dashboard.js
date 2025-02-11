   const  myrfrldiv = document.getElementById("myrfrldiv");
   const  myrfrl = document.getElementById("myrfrl");
   const  myrfrltitel = document.getElementById("myrfrltitel");
   
   
  const user = JSON.parse(localStorage.getItem('user'));
        //  name: row[0], number: row[1], email: row[2], password: row[3], referaln: row[5], referalid: row[6], id: row[7], verify: row[8], blnc: row[9], profile: row[10],
        if (user) {
          
         document.getElementById("userName").textContent = user.name; //name: row[0],1
        document.getElementById("userId").textContent = user.id; //id: row[7],7
        document.getElementById("verify").textContent = user.verify; //verify: row[8],8
        document.getElementById("userBalance").textContent = user.blnc; //blnc: row[9],
        document.getElementById("UserDP").src = user.profile; //profile: row[10],
        document.getElementById("email").value = user.email; //well: row[11]
        document.getElementById("number").value = user.number; //AppSubAdmin: row[12]
        document.getElementById("password").value = user.password; //AppAdmin: row[13]
        document.getElementById("myRfrl").textContent = user.my_rfl; //my_Rfl: row[11],
        document.getElementById("totalEarned").textContent = user.total_earned; //total_earned: row[12],
        document.getElementById("totalWithdraw").textContent = user.total_withdraw; //total_withdraw: row[13],
        document.getElementById("newEarned").textContent = user.new_earned; //new_earned: row[14],
        document.getElementById("lastWithdraw").textContent = user.last_withdraw; //last_withdraw: row[15],
        document.getElementById("lastWithdrawDate").textContent = user.last_withdraw_date; //last_withdraw_date: row[16] 
        document.getElementById("referalMeName").textContent = user.referaln;//referaln [5],
        document.getElementById("referalMeId").textContent = user.referalid;//referalid: row[6],
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
      window.location.href = 'Dashboard.html';
    });
    
    // JavaScript to handle the navigation
    document.getElementById('btn2').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'ahp.html';
    });
    
     // JavaScript to handle the navigation
    document.getElementById('btn3').addEventListener('click', function () {
      // Redirect to second.html
      window.location.href = 'Dashboard.html';
    });
   
document.getElementById('userSetting').addEventListener('click', function () {
  const email2 = document.getElementById("email").value;
  const number2 = document.getElementById("number").value;
  const password2 = document.getElementById("password").value;
  const dataDiv = document.getElementById("menu-setting");
  const dataStoreDiv = document.getElementById("STORuser");
  
  document.getElementById("myEmail").value = email2;
  document.getElementById("myNumber").value = number2;
  document.getElementById("myPassword").value = password2;
  dataDiv.style.display = "block";
  dataStoreDiv.style.display = "none";
});
document.getElementById('menuSettingBtn').addEventListener('click', function () {
  const dataDiv = document.getElementById("menu-setting");
  const dataStoreDiv = document.getElementById("STORuser");

dataDiv.style.display = "none";
dataStoreDiv.style.display = "block";
});


document.getElementById('aDforColoring').addEventListener('click', function () {
  
myrfrl.style.background = "red";
myrfrldiv.style.boxShadow = "2px 2px 2px yellow";
myrfrltitel.style.color = "#fff";
});

