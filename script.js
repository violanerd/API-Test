var apiKey = "";

function getAPIdata () { 

    var url = "" + apiKey; //depends on how the api wants it 

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




