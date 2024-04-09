"use strict";
let Students;
Students = [
    {
        id: 1,
        name: "a",
        class: "1"
    },
    {
        id: 2,
        name: "b",
        class: "2"
    },
    {
        id: 3,
        name: "c",
        class: "3"
    }
];
function printStudentsInfo(students) {
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.name}, Class: ${student.class}`);
    });
}
printStudentsInfo(Students);
