function search(){
    document.getElementById("searchModal").style.display = "block";
}
let close = document.getElementById("close");
close.addEventListener("click",() => {
    document.getElementById("searchModal").style.display = "none";
});