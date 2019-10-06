"use strict";
function sortTable(table) {
  let switched = true;

  // Loop until no switching is needed
  while (switched) {
    switched = false;
    const rows = table.rows;

    // Loop to go through all rows
    for (let rowIndex = 1; rowIndex < (rows.length - 1); ++rowIndex) {
      // Get the first (or next) two adjacent TDs that need to be compared
      const name1 = rows[rowIndex].getElementsByTagName("td")[0];
      const name2 = rows[rowIndex + 1].getElementsByTagName("td")[0];

      // See if the two TDs need to be switched
      if (name1.textContent.toLowerCase() > name2.textContent.toLowerCase()) {
        // If yes, perform the switch and set "switched" flag to true
        rows[rowIndex].parentNode.insertBefore(rows[rowIndex + 1], rows[rowIndex]);
        switched = true;
      }
    }
  }
}

const table = document.getElementById("table");
sortTable(table);
