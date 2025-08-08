
// OOP style
// Task 1: Make a constructor that can run to make new instances of the Doctor

class DoctorQueue {

    constructor({ name, specialty, gender, availability, SeesNewPatients, billing }) {
        this.name = name || "Jaime";
        this.specialty = specialty || "GP";
        this.gender = gender || "Male";
        this.queue = []
        this.availability = availability || true;
        this.SeesNewPatients = SeesNewPatients || true;
        this.billing = billing || "private billing";
    }

    // Task2: Create some functions to call on info from the DoctorQueue instances

    doctorName() {
        console.log(`This doctor's name is ${this.name}`);
        return this.name;
    }

    getQueueLength() {
        console.log(`${this.name}'s queue length is:${this.queue.length}`)
        return this.queue.length;
    }

    getAvailability() {
        console.log(`${this.name}'s availability: ${this.availability}`)
    }

    getBilling() {
        console.log(`${this.name} is a ${this.billing} doctor`)
    }

}

// Task 3: Create a doctor instance, use destructuring to add properties and call functions to check the details
const doctor1 = new DoctorQueue({
    name: "John",
    specialty: "GP",
    gender: "Male",
    availability: true,
    SeesNewPatients: false,
    billing: "bulk billing"
});

doctor1.doctorName()
doctor1.getQueueLength()
doctor1.getAvailability()
doctor1.getBilling()

// Task 4: Make a patient constructor 

class Patient {

    constructor({ firstname, surname, age, gender, comorbidities, presenting_complaints, newpatient, medicare, hcc, DVA, bulkbillingonly, recall }) {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.comorbidities = comorbidities || [];
        this.presenting_complaints = presenting_complaints || [];
        this.newpatient = newpatient || false;
        this.medicare = medicare || true;
        this.hcc = hcc || false;
        this.DVA = DVA || false;
        this.bulkbillingonly = bulkbillingonly || false;
        this.recall = recall || false;
    }

    // Task 5: Make some patient functions

    getPatientSummary() {
        console.log(`${this.firstname} ${this.surname} is a ${this.age} year old ${this.gender} presenting for ${this.presenting_complaints} on a background of ${this.comorbidities}`);
    }

    getPatientName() {
        console.log(`Patient's name: ${this.firstname} ${this.surname}`);
        return this.firstname + this.surname;
    }

    getPatientAge() {
        console.log(`${this.firstname} ${this.surname} is ${this.age} years old.`);
        return this.age;
    }

    getPresentingComplaints() {
        console.log(`${this.firstname} ${this.surname} is presenting for ${this.presenting_complaints}`);
        return this.presenting_complaints;
    }

    getComorbities() {
        console.log(`${this.firstname} ${this.surname} has a background of ${this.comorbidities}`);
        return this.comorbidities;
    }

}

// Task 6: Create a patient instance
const patient1 = new Patient({
    firstname: "Shelley",
    surname: "Singh",
    age: 42,
    gender: "female",
    comorbidities: ['Type 2 Diabetes', 'Hypertension', 'Asthma'],
    presenting_complaints: ['runny nose', 'request for medical certificate', 'asthma flare up'],
    newpatient: false,
    medicare: true,
    hcc: true,
    DVA: false,
    bulkbillingonly: false,
    recall: false
})

// Task 7: Call some functions on this patient instance
patient1.getPatientSummary()