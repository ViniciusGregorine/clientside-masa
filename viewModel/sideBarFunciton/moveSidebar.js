function moveSidebar(){
    let sidebar = document.getElementById('sidebar');
    let width = sidebar.style.width;

    if(width === ""){
      document.getElementById("sidebar").style.width = "150px";
      document.getElementById("burgerMenu").style.position = "fixed";
      document.getElementById("burgerMenu").style.color = "black";

    }else{
      document.getElementById("sidebar").style.width = "";
      document.getElementById("burgerMenu").style.position = "relative"; 
      document.getElementById("body").style.background = "white"; 
    }
}