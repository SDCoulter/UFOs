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
