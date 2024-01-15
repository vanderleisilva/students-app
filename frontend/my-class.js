// Load data when the page is ready
document.addEventListener("DOMContentLoaded", loadStudentTable);

async function loadStudentTable() {
  // Fetch data from the endpoint
  try {
    const response = await fetch("http://localhost:3000/students");
    const listOfStudents = await response.json();

    populateStudentTable(listOfStudents);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function populateStudentTable(students) {
  // Get the table body
  var tableBody = document.querySelector("#studentTable tbody");

  // Clear existing table rows
  tableBody.innerHTML = "";

  // Iterate through the data and add rows to the table
  students.forEach((student) => {
    var row = tableBody.insertRow();
    row.insertCell(0).textContent = student.id;
    row.insertCell(1).textContent = student.name;
    row.insertCell(2).textContent = student.age;
    row.insertCell(3).textContent = student.topics.join(", ");
    row.insertCell(4).innerHTML =
      '<button class="edit-btn" onclick="editUser(' +
      student.id +
      ')">Edit</button>';
    row.insertCell(5).innerHTML =
      '<button class="remove-btn" onclick="removeUser(' +
      student.id +
      ')">Remove</button>';
  });
}

function addOrUpdateStudent() {
  // Add logic to handle add/update action
  console.log("Add/Update student");
}

function editUser(userId) {
  // Add logic to handle edit action
  console.log("Edit user with ID:", userId);
}

function removeUser(userId) {
  // Add logic to handle remove action
  console.log("Remove user with ID:", userId);
}
