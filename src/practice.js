

class DoctorQueue {
    constructor(name, specialty, subspecialties, gender) {
        this.name = name;
        this.specialty = specialty;
        this.subspecialties = [];
        this.gender = gender;
        this.queue = []
    }

    doctorName() {
    console.log(`This doctor's name is ${this.name}`);
    return this.name;
    }

    getQueueLength() {
        return this.queue.length
    }
}


class Patient {
    constructor(surname, firstName, age, gender, comorbidities, medications, allergies, presenting_complaints, smoker = false) {
        this.surname = surname;
        this.firstName = firstName;
        this.age = age;
        this.gender = gender;
        this.comorbidities = comorbidities || [];
        this.medications = medications || [];
        this.allergies = allergies || [];
        this.presenting_complaints = presenting_complaints || [];
        this.smoker = Boolean(smoker); 
    }

    addComorbidity(newCondition) {
        this.comorbidities.push(newCondition);
        return `Added ${newCondition} to ${this.firstName}'s medical history`;
    }

    getPatientPresentation() {
        return `${this.firstName} ${this.surname} is a ${this.age} year old ${this.gender} presenting for ${this.presenting_complaints}`;
    }

    getPatientBackground() {
        return `${this.firstName} has a background of ${this.comorbidities}. Medications: ${this.medications}. Allergies: ${this.allergies}`
    }
}

const patient1 = new Patient("Wong", "Alice", 42, "Female", ["Diabetes"], ["Metformin","Perindopril"], [],["Runny nose","Medication repeats"], smoker=true)

console.log(patient1.getPatientPresentation());
console.log(patient1.getPatientBackground());

console.log(patient1.addComorbidity('Asthma'));

console.log(patient1.getPatientBackground());




const patients = [
    // Young adults and families
    new Patient("Smith", "Emma", 28, "Female", [], [], ["Penicillin"], ["Contraceptive pill consultation", "Pap smear"], false),
    new Patient("Nguyen", "James", 34, "Male", ["Asthma"], ["Ventolin", "Seretide"], [], ["Work medical certificate", "Asthma review"], false),
    new Patient("O'Brien", "Sarah", 31, "Female", [], [], [], ["Pregnancy confirmation", "Morning sickness"], false),
    new Patient("Patel", "Raj", 29, "Male", [], [], [], ["Knee injury from football", "Sports clearance"], false),
    new Patient("Johnson", "Michael", 26, "Male", ["Anxiety", "Depression"], ["Sertraline"], [], ["Mental health plan review", "Work stress"], false),

    // Middle-aged patients
    new Patient("Lee", "Michelle", 45, "Female", ["Hypertension", "High cholesterol"], ["Amlodipine", "Atorvastatin"], ["Shellfish"], ["Medication review", "Blood pressure check"], false),
    new Patient("Brown", "David", 52, "Male", ["Type 2 Diabetes", "Hypertension"], ["Metformin", "Ramipril"], [], ["Diabetic review", "Foot check"], true),
    new Patient("Wilson", "Karen", 48, "Female", ["Hypothyroidism"], ["Thyroxine"], [], ["Fatigue", "Weight gain"], false),
    new Patient("Taylor", "Mark", 41, "Male", [], [], ["Ibuprofen"], ["Back pain", "Work injury assessment"], true),
    new Patient("Anderson", "Lisa", 39, "Female", ["Migraine"], ["Sumatriptan"], [], ["Severe headache", "Sick certificate"], false),

    // Older patients with complex conditions
    new Patient("Thompson", "Robert", 67, "Male", ["Coronary artery disease", "Type 2 Diabetes", "Hypertension"], ["Aspirin", "Metformin", "Atenolol", "Clopidogrel"], [], ["Chest pain follow-up", "Medication review"], true),
    new Patient("Martin", "Margaret", 72, "Female", ["Osteoarthritis", "Osteoporosis"], ["Paracetamol", "Alendronate", "Calcium"], ["Codeine"], ["Hip pain", "Falls risk assessment"], false),
    
    new Patient("Garcia", "Antonio", 64, "Male", ["COPD", "Hypertension"], ["Spiriva", "Symbicort", "Perindopril"], [], ["Shortness of breath", "Inhaler technique review"], true),
    new Patient("White", "Helen", 69, "Female", ["Hypertension", "Atrial fibrillation"], ["Warfarin", "Metoprolol"], ["Aspirin"], ["INR check", "Palpitations"], false),

    // Pediatric and adolescent
    new Patient("Clarke", "Sophie", 16, "Female", [], [], [], ["Acne treatment", "HPV vaccination"], false),
    new Patient("Davis", "Ethan", 8, "Male", ["Asthma"], ["Ventolin"], ["Peanuts"], ["Persistent cough", "Asthma action plan"], false),

    // Young families
    new Patient("Miller", "Rebecca", 33, "Female", [], [], [], ["6-week post-natal check", "Contraception advice"], false),
    new Patient("Moore", "Christopher", 37, "Male", [], [], [], ["Vasectomy consultation", "Health check"], false),

    // Chronic conditions
    new Patient("Jackson", "Peter", 55, "Male", ["Gout", "Hypertension"], ["Allopurinol", "Irbesartan"], [], ["Gout flare", "Joint pain"], false),
    new Patient("King", "Jennifer", 43, "Female", ["Rheumatoid arthritis"], ["Methotrexate", "Folic acid"], ["Sulfonamides"], ["Joint stiffness", "Fatigue", "Medication monitoring"], false)
];