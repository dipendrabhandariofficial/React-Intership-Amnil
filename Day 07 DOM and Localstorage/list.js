const input = document.getElementById("itemInput");
const tableBody = document.getElementById("itemTableBody");
const formBtn = document.getElementById("formBtn");
const errorMsg = document.getElementById("errorMsg");
const modalCheckbox = document.getElementById("click");
const modalDeleteBtn = document.getElementById("modalDeleteBtn");

let editIndex = -1;
let deleteIndex = -1; // 🔴 store the row index to delete later

function validateNumber(number) {
  const pattern = /^(97|98)\d{8}$/;
  return pattern.test(number);
}

function handleForm(e) {
  e.preventDefault();
  let value = input.value.trim();

  if (!validateNumber(value)) {
    errorMsg.textContent =
      "Enter a valid 10-digit number starting with 97 or 98";
    return;
  }
  errorMsg.textContent = "";

  const saved = JSON.parse(localStorage.getItem("myTable")) || [];

  if (editIndex === -1) {
    // ADD mode
    if (saved.includes(value)) {
      errorMsg.textContent = "Phone no already exist";
      return;
    }
    saved.push(value);
  } else {
    // EDIT mode
    if (saved.includes(value) && saved[editIndex] !== value) {
      errorMsg.textContent = "Phone no already exist";
      return;
    }
    saved[editIndex] = value;
    editIndex = -1;
    formBtn.textContent = "Add";
    formBtn.classList.add("add-btn");
    formBtn.style.background = "#27ae60";
  }

  localStorage.setItem("myTable", JSON.stringify(saved));
  input.value = "";
  renderTable();
}

function renderTable() {
  tableBody.innerHTML = "";
  let saved = JSON.parse(localStorage.getItem("myTable")) || [];

  saved.forEach((item, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="S.N">${index + 1}</td>
      <td data-label="Number">${item}</td>
      <td data-label="Actions">
        <button class="edit-btn" onclick="startEdit(${index})">Edit</button>  
        <button class="delete-btn" onclick="openDeleteModal(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function startEdit(index) {
  let saved = JSON.parse(localStorage.getItem("myTable")) || [];
  input.value = saved[index];
  editIndex = index;
  formBtn.textContent = "Update";
  formBtn.classList.remove("add-btn");
  formBtn.style.background = "#e67e22";
}

//  open modal instead of deleting immediately
function openDeleteModal(index) {
  deleteIndex = index;
  modalCheckbox.checked = true; // show modal
}

// confirm delete
function confirmDelete() {
  if (deleteIndex === -1) return;
  let saved = JSON.parse(localStorage.getItem("myTable")) || [];
  saved.splice(deleteIndex, 1);
  localStorage.setItem("myTable", JSON.stringify(saved));

  deleteIndex = -1;
  modalCheckbox.checked = false; // close modal
  renderTable();
}

//  Hook modal delete button
modalDeleteBtn.addEventListener("click", confirmDelete);

formBtn.addEventListener("click", handleForm);
input.addEventListener("input", () => {
  errorMsg.textContent = "";
});

// Initial load
document.addEventListener("DOMContentLoaded", renderTable);
