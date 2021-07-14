function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    // document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
  }

function toggleShow() {
  var content = document.querySelector(".sidebar .dropdown-content-sidebar");
  var toggleBtn = document.querySelector(".sidebar .toggle-btn");
  if (content.style.display == "none") {
    content.style.display = "block";
    toggleBtn.innerHTML = "-";
  } else {
    content.style.display = "none";
    toggleBtn.innerHTML = "+";
  }
}
