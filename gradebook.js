// This function will query the PostgreSQL database and return grade data
function fetchGradeData() {
    console.log("Fetching grade data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades";
    // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function() {
        let results;
        // Check if we're done
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Check if we're successful
            if (xhr.status !== 200) {
                console.error(`Could not get grades.\nStatus: ${xhr.status}`);
            }
            // And then call the function to update the HTML with our data
            populateGradebook(JSON.parse(xhr.responseText));
        }
    }.bind(this);
    xhr.open("get", apiRoute, true);
    xhr.send();
}

// This function will take the fetched grade data and populate the table
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);
    let tableElem = document.getElementById("gradebook"); // Get the gradebook table element
    data.forEach(function(assignment) { // For each row of data we're passed in
        let row = document.createElement("tr"); // Create a table row element
        // Handy place to stick the columns of information
        let columns = [];
        columns.name = document.createElement("td"); // The first column's table data will be the name
        // Concatenate the full name: "last_name, first_name"
        columns.name.appendChild(
            document.createTextNode(assignment.last_name + ", " + assignment.first_name)
        );
        columns.grade = document.createElement("td"); // Second column will be the grade
        columns.grade.appendChild(
            // Just put the name in text; you could be fancy and figure out the letter grade here
            // with either a bunch of conditions, or a JavaScript "switch" statement
            document.createTextNode(assignment.total_grade)
        );
        // Add the table data columns to the table row
        row.appendChild(columns.name);
        row.appendChild(columns.grade);
        // Add the row to the table itself to make the data visible
        tableElem.appendChild(row);
    });
}
