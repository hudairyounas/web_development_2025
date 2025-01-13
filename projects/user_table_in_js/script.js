// get form data

let currentRow = null;

document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting normally

  // Get values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = document.getElementById("age").value;

  const tableBody = document.querySelector(".tbodyTag");

  if (currentRow) {
    // *** Update existing row ***
    currentRow.cells[1].innerText = name;
    currentRow.cells[2].innerText = email;
    currentRow.cells[3].innerText = gender;
    currentRow.cells[4].innerText = age;

    // After updating, reset currentRow to null
    currentRow = null;
    document.getElementById("addBtn").value = "Add Student";
  } else {
    // *** Create a new row ***
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");

    td1.innerText = tableBody.rows.length + 1;
    td2.innerText = name;
    td3.innerText = email;
    td4.innerText = gender;
    if (isNaN(age) || age <= 0) {
      alert("Age must be a positive number");
    } else {
      td5.innerText = age;

      const updateBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      updateBtn.textContent = "Update";
      deleteBtn.textContent = "Delete";

      updateBtn.classList.add("update_delete");
      deleteBtn.classList.add("update_delete");

      // *** Delete functionality ***
      deleteBtn.addEventListener("click", () => {
        tableBody.removeChild(tr);
      });

      // *** Update functionality ***
      updateBtn.addEventListener("click", () => {
        // *** Populate form with the row data for editing ***
        document.getElementById("name").value = td2.innerText;
        document.getElementById("email").value = td3.innerText;
        document.getElementById("age").value = td5.innerText;

        // Set the gender radio button based on row value
        if (td4.innerText === "male") {
          document.querySelector(
            'input[name="gender"][value="male"]'
          ).checked = true;
        } else {
          document.querySelector(
            'input[name="gender"][value="female"]'
          ).checked = true;
        }

        // Mark this row as the one being edited
        currentRow = tr;

        document.getElementById("addBtn").value = "Update";
      });

      td6.appendChild(updateBtn);
      td6.appendChild(deleteBtn);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);

      tableBody.appendChild(tr);
    }
  }
  // *** Reset the form after submission ***
  document.getElementById("studentForm").reset();
});
