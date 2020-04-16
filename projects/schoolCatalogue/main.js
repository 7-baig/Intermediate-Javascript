// Let’s put your knowledge of classes to the test by creating a digital school catalog for the New York City Department of Education. The Department of Education wants the catalog to hold quick reference material for each school in the city.
// We need to create classes for primary, middle, and high schools. Because these classes share properties and methods, each will inherit from a parent School

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name
        this._level = level
        this._numberOfStudents = numberOfStudents
    }
    get name() {
        return this._name
    }
    get level() {
        return this._level
    }
    get numberOfStudents() {
        return this._numberOfStudents
    }
    set numberOfStudents(newNumberOfStudents) {
        if(typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents
        }
        else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    } 
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstitudeTeacher(substitudeTeacher) {
        let randomNum = Math.floor(Math.random() * substitudeTeacher.length - 1)
        return substitudeTeacher[randomNum];
    }
};
// Primary
class Primary extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, numberOfStudents)
        this._pickupPolicy = pickupPolicy
    }
    get pickupPolicy() {
        return this._pickupPolicy
    }
};
// Middle 
class Middle extends School {
    constructor(name,numberOfStudents) {
        super(name, numberOfStudents)
    }
};
// High
class High extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, numberOfStudents)
        this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
        return this._sportsTeams
    }
};
// Instances
// Primary
const greenLandPublicSchool = new Primary('Green Land Public School', 500, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
greenLandPublicSchool.quickFacts();
School.substitudeTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
// High School
const educators = new High('Educators', 300, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
// ===========================================================================================>
//
// For more practice
// Add more properties to each class (averageTestScores, schoolOverview, etc.)
// Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.