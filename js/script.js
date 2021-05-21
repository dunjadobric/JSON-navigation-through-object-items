var index = 0;

function responseFunc() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText);
                printData(this.responseText);
            }
        }
    }
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.send();
};

function printData(responseFromServer) {
    var jsResponse = JSON.parse(responseFromServer);
    console.log(jsResponse);
    var divText = document.getElementById("inputDiv");

    divText.innerHTML =
        `
        <div class="contentDiv firstDiv">
        <p class="name">${jsResponse[index].name}</p>
        <p>Username: ${jsResponse[index].username}</p>
        <p>E-mail: ${jsResponse[index].email}</p>
        </div>

        <div class="contentDiv secondDiv">
        <p class="headline">Address</p>
        <p>Street: ${jsResponse[index].address.street}</p>
        <p>Suite: ${jsResponse[index].address.suite}</p>
        <p>City: ${jsResponse[index].address.city}</p>
        <p>Zipcode: ${jsResponse[index].address.zipcode}</p>
        <p>Geo/lat: ${jsResponse[index].address.geo.lat}</p>
        <p>Geo/lng: ${jsResponse[index].address.geo.lng}</p>
        </div>

        <div class="contentDiv thirdDiv">
        <p class="headline">Company</p>
        <p>Name: ${jsResponse[index].company.name}</p>
        <p>Phone: ${jsResponse[index].phone}</p>
        <p>Catch phrase: ${jsResponse[index].company.catchPhrase}</p>
        <p>bs: ${jsResponse[index].company.bs}</p>
        <p>Website: ${jsResponse[index].website}</p>
        </div>
    `;
};

function prevFunc() {
    if (index > 0) {
        index--;
        responseFunc();
    }
};

function nextFunc() {
    if (index < 10) {
        index++;
        responseFunc();
    }
};

function currentUser() {
    responseFunc();
};

currentUser();