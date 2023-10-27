let myFunc = (params) => {
    //do some thing
    console.log("myFunc");
}

function myFunc2(params) {
    console.log("myFunc2");

}

let myFunc3 = function (params) {
    console.log("myFunc3");

}



myFunc()
myFunc2()
myFunc3()


let students = [
    {
        firstName: "Huy",
        lastName: "Nguyen",
        age: 19,
        address: "Cau Dien",
        group: "3",
    },
    {
        firstName: "Linh",
        lastName: "Nguyen Tung",
        age: 20,
        address: "HN",
        group: "3",
    }, {
        firstName: "Hung",
        lastName: "Luu Duc",
        age: 21,
        address: "HD",
        group: "3",
    }, {
        firstName: "Anh",
        lastName: "Nguyen Hai",
        age: 19,
        address: "TP HD",
        group: "3",
    },
    {
        firstName: "Duong",
        lastName: "Vu",
        age: 19,
        address: "Cau Dien",
        group: "3",
    },
    {
        firstName: "Thanh",
        lastName: "Nguyen Tien",
        age: 20,
        address: "HN",
        group: "3",
    }, {
        firstName: "Quan",
        lastName: "Nguyen Minh",
        age: 21,
        address: "HD",
        group: "3",
    }, {
        firstName: "Minh",
        lastName: "Nguyen Nhat",
        age: 19,
        address: "TP HD",
        group: "3",
    }


]

console.log(students);

function renderStudentTable() {
    const tableStudent = document.getElementById("tbStudent")
    tableStudent.innerHTML = ""
    students.forEach((curStudent, inx) => {
        curStudent.name = curStudent.firstName + " " + curStudent.lastName
        tableStudent.innerHTML += "<tr><td>" + inx + "</td><td>" + curStudent.name + "</td><td>" + curStudent.age + "</td><td>" + curStudent.address + "</td><td>" + curStudent.group + "</td></tr>"

    })
}


function handleAddStudent() {

    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = document.getElementById("age").value
    let address = document.getElementById("address").value
    let group = document.getElementById("group").value

    // ve nha validate cac truong ko duo trong
    students.push({ firstName, lastName, address, age, group })
    console.log(students)

    renderStudentTable()



}

function handleFilterStudent(){
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let age = document.getElementById("age").value
    let address = document.getElementById("address").value
    let group = document.getElementById("group").value

    // ve nha validate cac truong ko duoc de trong
    // filler voi cac phan con lai
    // students.push({ firstName, lastName, address, age, group })
// debugger
//     let foundStudent = students.filter(stu=>stu.age === Number(age))
//     let foundStudent = students.filter(stu=>String(stu.age) === String(age))
    let foundStudent = students.filter(stu=>stu.age == age)
    console.log(foundStudent)
    students = foundStudent

    renderStudentTable()

}

renderStudentTable()