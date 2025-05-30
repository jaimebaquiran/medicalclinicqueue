import random
from random import randint


total_patients = 80

# build array of patient tuples (patient-x , needs from doc)
patients = []
for x in range(1,total_patients):
    needs_from_doctor = ["male","female","skin checks","next available","next available","next available"]
    # Choose a random need from the doctor to assign to the patient
    randomized_need = needs_from_doctor[randint(0,5)]
    patients.append((f"patient-{x}",randomized_need))
    x+=1

print(f"\npatients before queue: {patients}\n\n")

# doctors available for queueing, start off with empty queues
male_doctor1 = {
    "name":"male_doctor1",
    "special skills":[],
    "sex":"male",
    "patients_waiting":[]
}

male_doctor2 = {
    "name":"male_doctor2",
    "special skills":["skin checks"],
    "sex":"male",
    "patients_waiting":[]
}

male_doctor3 = {
    "name":"male_doctor3",
    "special skills":["skin checks"],
    "sex":"male",
    "patients_waiting":[]
}

female_doctor1 = {
    "name":"female_doctor1",
    "special skills":[],
    "sex":"female",
    "patients_waiting":[]
}

# chuck the doctors in an array to iterate each patient through
doctor_queues = [
    male_doctor1,
    male_doctor2,
    male_doctor3,
    female_doctor1
]

for patient in patients:

    # ping the doctor queues
    patients_waiting = {
        "male_doctor1":len(male_doctor1["patients_waiting"]),
        "male_doctor2":len(male_doctor2["patients_waiting"]),
        "male_doctor3":len(male_doctor3["patients_waiting"]),
        "female_doctor1":len(female_doctor1["patients_waiting"]),
    }

    # re-sort this dictionary in ascending order of the current queue
    ranked_queues_ascending = dict(sorted(patients_waiting.items(), key=lambda item: item[1])) 
    print(f"\n\nDoctor queues in order of increasing queue length: {ranked_queues_ascending}")

    # add to the doctor queue with the smallest queue length while meeting patient need
    add_to_queue = True
    for doctor, queue_length in ranked_queues_ascending.items():
        if add_to_queue == True:
            # if the doctor queue is empty, and patient OK with next available, then assign to queue
            if patient[1] == "next available":
                for doctor_queue in doctor_queues:
                    if doctor_queue["name"] == doctor:
                        doctor_queue["patients_waiting"].append(patient)
                        add_to_queue = False # Move onto the next patient

            elif patient[1] == "skin checks":
                for doctor_queue in doctor_queues:
                    if "skin checks" in doctor_queue["special skills"]:
                        doctor_queue["patients_waiting"].append(patient)
                        add_to_queue = False # Move onto the next patient

            if patient[1] == "male":
                for doctor_queue in doctor_queues:
                    if doctor_queue["sex"] == "male":
                        doctor_queue["patients_waiting"].append(patient)
                        add_to_queue = False # Move onto the next patient

            if patient[1] == "female":
                for doctor_queue in doctor_queues:
                    if doctor_queue["sex"] == "female":
                        doctor_queue["patients_waiting"].append(patient)
                        add_to_queue = False # Move onto the next patient


print(f"\nmale doctor 1: {male_doctor1["patients_waiting"]}")
print(f"\nmale doctor 2: {male_doctor2["patients_waiting"]}")
print(f"\nmale doctor 3: {male_doctor3["patients_waiting"]}")
print(f"\nfemale doctor 4: {female_doctor1["patients_waiting"]}")
            