document.getElementById('openBtn').onclick = function (){
  document.getElementById('id01').style.display='block'
}

document.getElementById('cancelbtn01').onclick= function(){
  document.getElementById('id01').style.display='none'
}

document.getElementById('deletebtn01').onclick= function(){
  document.getElementById('id01').style.display='none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('id01')) {
    document.getElementById('id01').style.display = "none";
  }
}
