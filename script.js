const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const developers = data.filter((person) => person.profession === "developer");
  console.log("Developers:");
  console.log(developers);
}

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");
  const newPerson = { name, age, profession };
  data.push(newPerson);
  console.log("Data added:", newPerson);
}

// 3. Remove Admins
function removeAdmin() {
  const admins = data.filter((person) => person.profession === "admin");
  admins.forEach((admin) => {
    const index = data.indexOf(admin);
    if (index !== -1) {
      data.splice(index, 1);
    }
  });
  console.log("Admins removed.");
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "dummy1", age: 30, profession: "dummy" },
    { name: "dummy2", age: 32, profession: "dummy" },
  ];
  const combinedArray = data.concat(dummyArray);
  console.log("Combined Array:", combinedArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const avgAge = totalAge / data.length;
  console.log("Average Age:", avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const above25 = data.some((person) => person.age > 25);
  console.log("Is there anyone above 25?", above25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = data.map((person) => person.profession);
  const uniqueProfessions = [...new Set(professions)];
  console.log("Unique Professions:", uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log("Sorted by Age:", data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find((person) => person.name.toLowerCase() === "john");
  if (john) {
    john.profession = "manager";
    console.log("John's profession updated to 'manager'.");
  }
}

// 10. Profession Count
function getTotalProfessions() {
  const developerCount = data.filter(
    (person) => person.profession === "developer"
  ).length;
  const adminCount = data.filter((person) => person.profession === "admin")
    .length;
  console.log(`Total Developers: ${developerCount}, Total Admins: ${adminCount}`);
}
