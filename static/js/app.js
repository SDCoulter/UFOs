// Import the data from data.js.
const tableData = data;

// Reference the HTML table using D3.
var tbody = d3.select("tbody");

// Build a function to display the data.
function buildTable(data) {
  // Clear the table of data.
  tbody.html("");

  // Run through each entry in the data array.
  data.forEach((dataRow) => {
    // Append a row to the table body.
    let row = tbody.append("tr");

    // Loop through the values of the object in each element in our data array.
    // Pass the values into a function to add each to a table cell.
    Object.values(dataRow).forEach((val) => {
      // Create the table cell and append it to the row.
      let cell = row.append("td");
      // Fill the text attribute of the cell with the data from the object.
      cell.text(val)
    });
  });
};

// Build a function to handle clicks to create a filter.
function handleClick() {
  // Select the first element that has an id tag of 'datetime'.
  // Store the returned element's value using .property("value").
  let date = d3.select("#datetime").property("value");
  // Create a default filter and save it - the original table data.
  let filteredData = tableData;

  // Use an if statement to check for an entered date, and use that
  // to filter the data if one is entered.
  if (date) {
    // If a date is entered only return a row if the datetime value matches.
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Pass the filteredData (whether filtered or not) into the buildTable func.
  buildTable(filteredData);
}

// Add a click listening feature - when the element with id 'filter-btn' is
// clicked ('click'), run the function handleClick.
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads.
buildTable(tableData);
