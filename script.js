// function addRow() {
//     // Get the input value
//     var inputValue = document.getElementById('inputValue').value;

//     // Get the table body
//     var tableBody = document.querySelector('#dataTable tbody');

//     // Create a new row
//     var newRow = document.createElement('tr');

//     // Create a new cell for the value
//     var valueCell = document.createElement('td');
//     valueCell.textContent = inputValue;

//     // Append the cell to the row
//     newRow.appendChild(valueCell);

//     // Append the row to the table body
//     tableBody.appendChild(newRow);

//     // Clear the input value
//     document.getElementById('inputValue').value = '';
//   }

function addRow() {
    // Get the input value
    const inputValue = document.getElementById('inputValue').value.trim();

    // Check if the input value is empty
    if (inputValue === '') {
      alert('Input value cannot be empty.');
      return;
    }

    // Get the table body
    const tableBody = document.querySelector('#dataTable tbody');

    // Create a new row
    const newRow = document.createElement('tr');

    // Create cells for the columns
    const checkboxCell = document.createElement('td');
    const valueCell = document.createElement('td');
    const statusCell = document.createElement('td');
    const deleteCell = document.createElement('td');

    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a dropdown element for the status
    const statusDropdown = document.createElement('select');
    const options = ['To-Do','In-Progress', 'Completed'];

    // Populate dropdown options
    for (const option of options) {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      statusDropdown.appendChild(optionElement);
    }

    // Set the content of cells
    valueCell.textContent = inputValue;
    deleteCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    // Append elements to cells
    checkboxCell.appendChild(checkbox);
    statusCell.appendChild(statusDropdown);

    // Append cells to the row
    newRow.appendChild(checkboxCell);
    newRow.appendChild(valueCell);
    newRow.appendChild(statusCell);
    newRow.appendChild(deleteCell);

    // Append the row to the table body
    tableBody.appendChild(newRow);

    // Clear the input value
    document.getElementById('inputValue').value = '';
  }

  function deleteRow(button) {
    // Get the row element containing the clicked button
    const row = button.closest('tr');

    // Remove the row from the table
    row.remove();
  }

  // Add event listener for the status dropdown change
  document.querySelector('#dataTable tbody').addEventListener('change', function (event) {
    if (event.target.tagName === 'SELECT') {
      const status = event.target.value;
      const row = event.target.closest('tr');
      const valueCell = row.querySelector('td:nth-child(2)');
      const checkbox = row.querySelector('input[type="checkbox"]');

      if (status === 'Completed') {
        valueCell.classList.add('completed');
        checkbox.checked = true;
        checkbox.disabled = true;
      } else {
        valueCell.classList.remove('completed');
        checkbox.disabled = false;
      }
    }
  });