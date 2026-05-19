// Author: Muliri Shebirongo Jonathan <Joshebirongo>

// Parent class
class Person {
  constructor(fullName, age, identificationNumber) {
    this.fullName = fullName;
    this.age = age;
    this.identificationNumber = identificationNumber;
  }

  // Protected method (covention)
  _generateMedicalCode() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    return `MED-${randomNumber}`;
  }
}

// Child class
class Patient extends Person {
  constructor(
    fullName,
    age,
    identificationNumber,
    disease,
    hasAppointment = false,
  ) {
    super(fullName, age, identificationNumber);
    this.disease = disease;
    this.hasAppointment = hasAppointment;
    this.medicalCode = null;
  }
  // Private method
  #validatePatientAge() {
    return this.age > 0;
  }

  // Public method
  registerPatient() {
    if (!this.#validatePatientAge()) {
      return "Invalid patient age.";
    }
    this.medicalCode = this._generateMedicalCode();
    return `Patient registered successfully. Medical code: ${this.medicalCode}`;
  }

  // Public method
  scheduleAppointment() {
    this.hasAppointment = true;
    return "Appointment scheduled successfuly.";
  }

  // Public method
  showPatientInformation() {
    return {
      fullName: this.fullName,
      age: this.age,
      identificationNumber: this.identificationNumber,
      disease: this.disease,
      hasAppointment: this.hasAppointment,
      medicalCode: this.medicalCode,
    };
  }

  // Static method
  static calculateBirthYear(currentYear, age) {
    return currentYear - age;
  }
}

// Object creation
const patient = new Patient("Sara Jones", 32, "123223421", "Flu");

console.log("**********************************");
console.log(typeof patient);
console.log(patient);
console.log("**********************************");
console.log(patient.registerPatient());
console.log("**********************************");
console.log(patient.scheduleAppointment());
console.log("**********************************");
console.log(patient.showPatientInformation());
console.log("**********************************");
console.log(Patient.calculateBirthYear(2026, 32));
