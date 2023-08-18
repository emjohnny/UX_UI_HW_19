console.log("YOU GOT THIS");
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target ==modal) {
        modal.style.display = "none";
    }
}

/*$("#mybTn").on("click", function(){
    $(".modal, .modal-content").addClass("active");
});
$(".close", ".modal").on("click", function(){
    $(".modal", ".modal-content").removeClass("active");
});*/


