function openMenu(){
    var menu=documentment.getElementById("links");
   if(menu.style.display === "block") {
    menu.style.display = "none";
   }else{
    menu.style.display = "block";
   }
}

function search(){
    var input, filter, ul, li, a , i, txtvalue;
    input=document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("links");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtvalue = a.textContent || a.innerText;
        if (txtvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i.style.display = "none"]
        }
    }
}