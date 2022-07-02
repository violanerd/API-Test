
function getAPIdata () { 

    var url = "";

    fetch(url)
        .then(function(response) {
            // Convert to JSON object
            return response.json();
        })
        .then(function(data) {
           console.log(data);
        })
}
getAPIdata();




