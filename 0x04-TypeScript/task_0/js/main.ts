interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: "Marry",
    lastName: "Cross",
    age: 23,
    location: "South Africa",
}

const secondStudent: Student = {
    firstName: "Jeremy",
    lastName: "Fisher",
    age: 56,
    location: "United Kingdom",
}

const studentsList = [firstStudent, secondStudent];

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});

document.body.appendChild(table);
