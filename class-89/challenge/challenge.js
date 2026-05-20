// Author: Muliri Shebirongo Jonathan <Joshebirongo>

// Parent class
class Person {
  constructor(data) {
    this.fullName = data.fullName;
    this.email = data.email;
    this.identificationNumber = data.identificationNumber;
  }

  // Protected method (convention)
  _generateStudentCode() {
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    return `STD-${randomNumber}`;
  }
}

// Child class
class Student extends Person {
  constructor(data) {
    super(data);

    this.studentCode = null;
    this.career = data.career;
    this.semester = data.semester;
    this.courses = [];
    this.isRegistered = false;
  }

  // Private method
  #validateCourse(course) {
    return course.courseName && course.credits > 0 && course.teacher;
  }

  #calculateTuition() {
    const totalCredits = this.courses.reduce(
      (sum, course) => sum + course.credits,
      0,
    );

    return totalCredits * 120;
  }

  // Public method
  registerStudent() {
    if (!this.isRegistered) {
      this.studentCode = this._generateStudentCode();

      this.isRegistered = true;

      return "Student registered successfully";
    }
  }

  // Public method
  enrollCourse(courseName, credits, teacher) {
    const course = {
      courseName,
      credits,
      teacher,
    };

    // Step 1
    if (!this.#validateCourse(course)) {
      return "Invalid course.";
    }

    // Step 2
    if (!this.isRegistered) {
      return "Student must register first.";
    }

    // Step 3
    const newCourse = {
      courseName,
      credits,
      teacher,
      enrolledAt: new Date(),
    };

    // Step 4
    this.courses.push(newCourse);

    // Step 5
    return `${courseName} enrolled successfully.`;
  }

  dropCourse(courseName) {
    const index = this.courses.findIndex(
      (course) => course.courseName === courseName,
    );

    if (index === -1) {
      return "Course not found.";
    }

    this.courses.splice(index, 1);

    return `${courseName} dropped successfully.`;
  }

  showCourses() {
    return this.courses;
  }

  showStudentInformation() {
    return {
      fullName: this.fullName,
      email: this.email,
      identificationNumber: this.identificationNumber,
      studentCode: this.studentCode,
      career: this.career,
      semester: this.semester,
      isRegistered: this.isRegistered,
      courses: this.courses,
    };
  }

  showTuitionCost() {
    return `$${this.#calculateTuition()}`;
  }

  // Static method
  static convertCreditsToHours(credits) {
    return credits * 48;
  }

  static calculateAverageGrade(grades) {
    const total = grades.reduce((sum, grade) => sum + grade, 0);

    return total / grades.length;
  }
}

// Test

// Student 1
const student1 = new Student({
  fullName: "Jonathan Muliri",
  email: "jonathan@gmail.com",
  identificationNumber: "ID-105",
  career: "Computer Science",
  semester: 3,
});
console.log("===============================");
console.log(student1.registerStudent());
console.log("===============================");
console.log(student1.enrollCourse("JavaScript Advanced", 3, "Mr Paul"));
console.log("===============================");
console.log(student1.enrollCourse("Database Systems", 4, "Mrs Benedict"));
console.log("===============================");
console.log(student1.showCourses());
console.log("===============================");
console.log(student1.showTuitionCost());
console.log("===============================");
console.log(student1.showStudentInformation());
console.log("===============================");
// Student 2
const student2 = new Student({
  fullName: "Grace Bahati",
  email: "grace@gmail.com",
  identificationNumber: "ID-202",
  career: "Networking",
  semester: 2,
});

console.log(student2.registerStudent());
console.log("===============================");
console.log(student2.enrollCourse("Cyber Security", 5, "Mr David"));
console.log("===============================");
console.log(student2.dropCourse("Cyber Security"));
console.log("===============================");
console.log(student2.showCourses());
console.log("===============================");
console.log(Student.convertCreditsToHours(3));
console.log("===============================");
console.log(Student.calculateAverageGrade([4.5, 3.8, 4.2]));
console.log("===============================");
