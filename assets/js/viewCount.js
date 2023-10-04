//view post
let viewCount = 6012;
let viewList = [];
setInterval(() => {
    viewCount++;
    viewList.push(viewCount);
    setViewCountCookie();
    displayViewCount();
}, 60000)
document.getElementById("view-count").innerHTML = viewCount;
//Store the view count in localStorage
function setViewCountCookie() {
   localStorage.setItem("viewCount", viewCount);
   localStorage.setItem("viewList", viewList);
}

// Display the view count
function displayViewCount() {
    var icon = '<i class="fa-regular fa-eye"></i>' + localStorage.getItem("viewCount");
    document.getElementById("view-count").innerHTML = icon;   
}
setViewCountCookie();
displayViewCount();

