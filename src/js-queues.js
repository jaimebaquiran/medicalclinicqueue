// There are at least a couple of ways to go about this in pure JS - probably many, but let's start with two.

// You know python and that is an object-oriented language, so let's have a go at JS in OO style. (It's a little bolted on in JS, but we can ignore this.)

// The aim here is to set up some basic structures, and then perform some actions on those structures

// We could start with a class for a queue - get straight to the point of the app

// We are calling this doctor queue so that we can distinguish from future iterations where we may be able to filter patients based on needs
// Basic setup: a class is like the blueprint for an object. An object is what's called an "instance" of that class. We set up the class once, and can create our objects from the class. In the sense, the class definition is inert and a way to define, the objects that are created from the class (later) are the actors
class DoctorQueue {
  // This constructor runs when a new instance is created. We have three arguments to this constructor that we can set. When we then set them, they are the properties of the objects that will be created.
  // 1. Expand on these arguments as appropriate - you'll know better than us what is needed.
  // 2. Take in one object instead of three arguments, and assign to the properties.
  // 3. Use destructuring to set the properties
  // 4. Add a queue property to DoctorQueue
  constructor(name, speciality, gender) {
    this.name = name || "Jaime";
    this.speciality = speciality || "General Practice";
    this.gender = gender || "Male";
    this.queue = []
  }

  // We will then have functions that will act on the instances (the objects themselves), and we will start you off with one or two
  // We don't need the function keyword
  doctorName() {
    // The keyword 'this' is a bit tricky, but refers to the caller of the function, which will be the instance itself.
    // Here we are just outputting something for feedback
    console.log(`This doctor's name is ${this.name}`);
    // Here we are returning the value, incase that is useful elsewhere in the code.
    return this.name;
  }

  // 5. If you have made your queue in this class, write a function to return the length of the queue.
  getQueueLength() {
    return this.queue.length
  }

}

  // 6. Now write a new class for the patient. Add the appropriate properties for the patient.
class Patient {
  constructor(name, age, gender, comorbidities, presenting_complaint) {
    this.name = name || "name" ;
    this.gender = gender || undefined;
    this.age = age || "age";
    this.comorbidities = comorbidities || [];
    this.presenting_complaint = presenting_complaint || [];
  }

  getPatientInfo() {
    return `${this.name} is a ${this.age} year old ${this.gender} presents with ${this.presenting_complaint}, on a background of ${this.comorbidities}`
  }
}

const patient1 = new Patient("Alice Wong", 42, "Female", ["Diabetes"], ["runny nose"])
console.log(patient1.getPatientInfo());


  // 7. And now add some patients to some instances of your DoctorQueues.
  // 8. Then see what other functions you can make, but also you might like to try to add a 'condition' on the patient, and then reject the patient from the queue if that condition isn't met, eg. Doctor is not female.


// Here we are making two instances of our DoctorQueue
doctor0 = new DoctorQueue("Shelly", "GP", "female");
doctor1 = new DoctorQueue("Jaime", "GP", "male");
doctor2 = new DoctorQueue("Vera", "Surgeon", "female");

console.log("Doctor name: ", doctor0.doctorName());
console.log("Queue length:", doctor0.getQueueLength()); 


// And here we are performing some things with those instances
console.log(doctor1.name);
console.log(doctor2.speciality);
doctor2.doctorName();

// The more usual way I write JS is less with classes and objects, and more with data and functions. There are pros and cons to both - it mostly depends how you think of things - although I would say that JS has moved more towards the functional style than OO.

// We might start by just setting up our data from the start.
const jaimeClinic = {
  name: "Downtown Medical Center",
  address: "123 Main St, Sydney",
  phone: "+61 2 1234 5678",
  openHours: "8am - 6pm",
  specialities: ["Cardiology", "Orthopedics", "Dermatology"],

  doctorQueues: [
    {
      name: "Jaime",
      speciality: "Cardiology",
      gender: "Any",
      patients: [],
    },
    {
      name: "Vera",
      speciality: "Dermatology",
      gender: "Female",
      patients: [],
    },
    {
      name: "Matt",
      speciality: "Orthopedics",
      gender: "Male",
      patients: [],
    },
  ],

  todaysPatients: [
    {
      id: 1,
      name: "Alice Wong",
      age: 42,
      gender: "Female",
      issue: "Dermatology",
    },
    {
      id: 2,
      name: "John Smith",
      age: 50,
      gender: "Male",
      issue: "Orthopedics",
    },
    {
      id: 3,
      name: "Fatima Khan",
      age: 35,
      gender: "Female",
      issue: "Cardiology",
    },
    { id: 4, name: "David Lee", age: 60, gender: "Male", issue: "Cardiology" },
  ],
};

// Now that we have this data, we can write some functions that do something to the data.
// For example, we might write a function to find out how many people are in the queues right now.

function currentQueueCount(clinic) {
  let queueCount = 0;
  clinic.doctorQueues.forEach((queue) => {
    queueCount += queue.patients.length;
  });
  console.log(queueCount);
  return queueCount;
}

currentQueueCount(jaimeClinic);

// Now I will manually add two patients to queues, and run it again
jaimeClinic.doctorQueues[1].patients.push(jaimeClinic.todaysPatients[0]);
jaimeClinic.doctorQueues[1].patients.push(jaimeClinic.todaysPatients[1]);

// That code is fairly unwieldy - perhaps there is a better looking version using destructuring. But also, it's worth noting that these manual processes are likely to be 'automated' as part of a function.

currentQueueCount(jaimeClinic);

// That all might be enough to take on board now, but you might be able to start to see how we might take these things further.

// If you like, you could see if you can work out which queue is the shortest, which is a precursor to a function like addToShortestQueue
