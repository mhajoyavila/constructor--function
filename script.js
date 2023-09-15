// Define the Driver constructor function
function Driver(name, age, workExperience) {
    this.name = name;
    this.age = age;
    this.workExperience = workExperience;
    this.driveMyCar = function () {
alert(`${this.name} is driving the car. 
${this.age} years old.
${this.workExperience} years of experience.`);
    }
    this.carWash = function() {
alert(`${this.name} is washing the car. 
${this.age} years old.
${this.workExperience} years of experience.`);
        
    }}

// Create two instances of the Driver object
const toto = new Driver("CoCo", 45, 10);
const boy = new Driver("Martin", 35, 5);

// Add event listeners to the buttons
const driveButton = document.getElementById("driveButton");
const washButton = document.getElementById("washButton");

driveButton.addEventListener("click", () => {
    toto.driveMyCar();
});

washButton.addEventListener("click", () => {
    boy.carWash();
});
