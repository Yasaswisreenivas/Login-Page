function fun() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
  
    if (!username || !password) {
      alert("Please fill out both fields.");
      return;
    }
  
    // For now, just log the values (simulate a login process)
    console.log("Username:", username);
    console.log("Password:", password);
  
    // Simulate form submission
    alert("Login successful (simulation).");
  }
  