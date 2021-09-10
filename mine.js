var siteN = document.getElementById("sNameInput");
var siteU = document.getElementById("sUrlInput");
var displayResult = document.getElementById("displayWebsites");
var webArry = [];

if (localStorage.getItem("sitesData") != null ) {
    webArry = JSON.parse(localStorage.getItem("sitesData"));
    display();
}


function add() {

    var website = {
        webDomain : siteN.value,
        webLink : siteU.value
    }

    webArry.push(website);

    localStorage.setItem("sitesData", JSON.stringify(webArry));

    display();
    clear();

}

function display() {
    var hasala =``;
    for (var i = 0; i < webArry.length; i++) {
        hasala += `
            <div class="col-md-3 disp py-4">
                <h2>` + webArry[i].webDomain + `</h2>
            </div>
            <div class="col-md-9 disp py-4">
                <a class="btn btn-primary" target="_blank" href="https://`+webArry[i].webLink+`">Visit</a>
                <button class="btn btn-danger" onclick="del(`+ i +`)">Delete</button>
            </div>
        `
    }
    document.getElementById("displayWebsites").innerHTML = hasala;
}

function clear() {
    siteN.value = ""
    siteU.value = ""
}

function del(i)
{
    webArry.splice(i , 1);
    localStorage.setItem("sitesData", JSON.stringify(webArry));
    display()
}






// var web = [];


// function addWebsite()
// {
// var siteName = siteN.value;
// var sitelink = siteU.value;

// var website = {name:siteName , url:sitelink}
// web.push(website);

// console.log(web)
// }


// for(var i=1 ; i<web.length ; i++)
// {
//     var hasala = ``

//     hasala+=`<div class="row">`+web.name+`</div>`
// }




