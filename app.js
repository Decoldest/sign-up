function verifyPassword(){
  let password = document.getElementById("password");
  let confirm = document.getElementById("confirm");
  if (password.value != confirm.value){
    verifyText.textContent = "Passwords do not match";
    return false;
  }
  return true;
}

