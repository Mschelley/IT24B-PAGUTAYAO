
const studentsData = [
    { "id": 1, "name": "Althea Valerie", "course": "Computer Science", "yearEnrolled": 2022 },
    { "id": 2, "name": "Chelley", "course": "BSBA", "yearEnrolled": 2021 },
    { "id": 3, "name": "Jerwin", "course": "BSCriminology", "yearEnrolled": 2020},
    { "id": 4, "name": "Rechelle", "course": "BSIT", "yearEnrolled": 2022 },
    { "id": 5, "name": "James", "course": "BSIT", "yearEnrolled": 2024 }

];


function loadStudents(filterText = "") {
    const studentList = document.getElementById("student-list");
    studentList.innerHTML = ""; 

   
    const filteredStudents = studentsData.filter(student => 
        student.name.toLowerCase().includes(filterText.toLowerCase()) ||
        student.course.toLowerCase().includes(filterText.toLowerCase())
    );

   
    filteredStudents.forEach((student) => {
        const studentItem = document.createElement("div");
        studentItem.className = "student-item";

        
        studentItem.innerHTML = `
            <h2>${student.name}</h2>
            <p>Course: ${student.course}</p>
            <p>Year Enrolled: ${student.yearEnrolled}</p>
        `;
        studentList.appendChild(studentItem);
    });
}


function handleSearch() {
    const searchInput = document.getElementById("search-input").value;
    loadStudents(searchInput);
}


document.addEventListener("DOMContentLoaded", () => {
    loadStudents();
    document.getElementById("search-input").addEventListener("input", handleSearch);
});