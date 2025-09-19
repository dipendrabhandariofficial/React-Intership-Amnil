const nameInput = document.getElementById("nameInput");
const numberInput = document.getElementById("numberInput");
const tableBody = document.getElementById("itemTableBody");
const formBtn = document.getElementById("formBtn");
const errorMsg = document.getElementById("errorMsg");
const modalCheckbox = document.getElementById("click");
const modalDeleteBtn = document.getElementById("modalDeleteBtn");

let editIndex = -1;
let deleteIndex = -1; // store row index for delete later

// ✅ Validate number
function validateNumber(number) {
  const pattern = /^(97|98)\d{8}$/;
  return pattern.test(number);
}
//validate name
function validateName(name) {
  const pattern = /^[A-Za-z ]{3,}$/;
  return pattern.test(name);
}

// ✅ Handle form submit
function handleForm(e) {
  e.preventDefault();
  let nameValue = nameInput.value.trim();
  nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1); // Capitalize first letter
  let numberValue = numberInput.value.trim();
  let errors = [];

  // Validation
  if (nameValue === "") {
    errors.push("Name is required");
  }
  else if (!validateName(nameValue)) {
    errors.push("Name should be at least 3 characters long and contain only letter only");
  }
  if (numberValue === "") {
    errors.push("Phone number is required");
  } else if (!validateNumber(numberValue)) {
    errors.push("Enter a valid 10-digit number starting with 97 or 98");
  }

  // ✅ Display all errors
  if (errors.length > 0) {
    errorMsg.innerHTML = errors.map(err => `<div> ${err}</div>`).join("");
    return;
  }
  errorMsg.innerHTML = "";

  let saved = JSON.parse(localStorage.getItem("myTable")) || [];

  if (editIndex === -1) {
    // ADD mode
    if (saved.some(item => item.number === numberValue)) {
      errorMsg.innerHTML = " Phone number already exists";
      return;
    }
    saved.push({ name: nameValue, number: numberValue });
  } else {
    // EDIT mode
    if (
      saved.some((item, idx) => item.number === numberValue && idx !== editIndex)
    ) {
      errorMsg.innerHTML = " Phone number already exists";
      return;
    }
    saved[editIndex] = { name: nameValue, number: numberValue };
    editIndex = -1;
    formBtn.textContent = "Add";
    formBtn.classList.add("add-btn");
    formBtn.style.background = "#27ae60";
  }

  localStorage.setItem("myTable", JSON.stringify(saved));
  nameInput.value = "";
  numberInput.value = "";
  renderTable();
}

// ✅ Render table
function renderTable() {
  let row = document.createElement("tr");
  row.classList.add("added-row"); // add animation class
  tableBody.innerHTML = "";
  let saved = JSON.parse(localStorage.getItem("myTable")) || [];
  if (saved.length === 0) {
    tableBody.innerHTML = `
      <tr>  
        <td colspan="4" style="text-align: center; padding: 20px; color: #777;">No entries found</td>
      </tr>
    `;
    return;
  }

  saved.forEach((item, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="S.N">${index + 1}</td>
      <td data-label="Name">${item.name}</td>
      <td data-label="Number">${item.number}</td>
      <td data-label="Actions">
        <button class="edit-btn" onclick="startEdit(${index})">Edit</button>  
        <button class="delete-btn" onclick="openDeleteModal(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// ✅ Start edit
function startEdit(index) {
  let saved = JSON.parse(localStorage.getItem("myTable")) || [];
  nameInput.value = saved[index].name;
  numberInput.value = saved[index].number;
  editIndex = index;
  formBtn.textContent = "Update";
  formBtn.classList.remove("add-btn");
  formBtn.style.background = "#e67e22";
}

// ✅ Open modal instead of direct delete
function openDeleteModal(index) {
  deleteIndex = index;
  modalCheckbox.checked = true; // show modal
}

// ✅ Confirm delete
function confirmDelete() {
  if (deleteIndex === -1) return;
  let saved = JSON.parse(localStorage.getItem("myTable")) || [];
  saved.splice(deleteIndex, 1);
  localStorage.setItem("myTable", JSON.stringify(saved));
  deleteIndex = -1;
  modalCheckbox.checked = false; // close modal
  renderTable();
}

// Hook modal delete button
modalDeleteBtn.addEventListener("click", confirmDelete);

// Clear errors while typing
nameInput.addEventListener("input", () => (errorMsg.innerHTML = ""));
numberInput.addEventListener("input", () => (errorMsg.innerHTML = ""));

// Initial load
document.addEventListener("DOMContentLoaded", renderTable);
