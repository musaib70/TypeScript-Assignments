class person {
    name: string
    age: number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    getName(){
        return this.name
    }
}


class student extends person{
    constructor(name:string, age:number, rollNumber:number, courses:string[]){
        super(name, age)
        this.rollNumber = rollNumber,
        this.courses = courses
    }
    rollNumber: number
    courses: string[]
    
    registerForcourses(course: string){
        return this.courses.push(course)
    }
}

let b = new student ("Hamza", 18, 35, ["Math", "English"])
let c = new student ("Kamran", 22, 23, ["Math", "English", "Urdu"])
c.registerForcourses("WEB 3.0")
console.log(b,c);


class instructor extends person{

    constructor( name:string, age:number, salary:number, courses:string[] ){
        super(name,age)
        this.salary = salary
        this.courses = courses

    }
    private salary: number
    courses: string[]

    assignCourse(course: string){
    return this.courses.push(course)
    }
}


let d = new instructor ("Kamran", 45, 65000, ["Math"])
d.assignCourse("WEB 3.0")
d.assignCourse("Metverse")
console.log(d);

class courses {
    id: number
    name: string
    students: string[] 
    instructor: string[]
    addInstructor: string

    constructor(id: number,
        name: string,
        students: string[] ,
        instructor: string[],
        addInstructor: string){
            this.id = id
            this.name = name
            this.students = students
            this.instructor = instructor
            this.addInstructor = addInstructor

    }

    addStudent(student:string){
       return this.students.push(student)
    }
setInstrructor(addInstructor: string){
return this.instructor.push(addInstructor)
}

}

let e = new courses ( 2102, "Metverse",["Musaib", "Yoza","Sharjeel", "Haider"],["Ali", "Asad"],"Masood")
e.setInstrructor ("Masood")
e.addStudent("Alayyy")

console.log(e);

class department {
    constructor(name:string, course:string[]){
        this.name = name,
        this.course = course

    }

    name : string
    course: string[]

    assignCourse(courses:string){
   return this.course.push(courses)

    }
}

let f = new department ("Computer Science", ["AI", "Java", "Data Structure"])
f.assignCourse("Graphic Designing")
console.log(f);

