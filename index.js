let requestBodyEl = document.getElementById("requestBody")
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");


function sendPostRequestHttp() {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let requestBody = requestBodyEl.value;

    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c",
        },
        body: requestBody
    }
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        })

}


sendPostRequestBtnEl.addEventListener("click", sendPostRequestHttp);
