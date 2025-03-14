/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr
    .map((ele) => {
      if (ele.profession === "developer") {
        console.log(ele);
      }
    });
}

function PrintDeveloperbyForEach() {
  arr.forEach((ele) => {
    if (ele.profession === "developer") {
      console.log(ele);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((ele) => ele.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  let newArray = [
    { id: 5, name: "peter", age: "22", profession: "developer" },
    { id: 6, name: "anna", age: "21", profession: "designer" },
    { id: 7, name: "sam", age: "23", profession: "manager" },
  ];

  let combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}

PrintDeveloperbyMap(arr); // Part 1
PrintDeveloperbyForEach(); // Part 2
addData(); // Part 3
removeAdmin(); // Part 4
concatenateArray(); // Part 5
