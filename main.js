// =============================================
console.log('--- 1. Higher order functions and mutual understanding ---')

function addParamsToRequest(params) {
    let count = 0
    return function (someData) {
        const obj = {
            ...params,
            data: someData,
            count: count++,
        }
        return obj
    }
}

const sendData = addParamsToRequest({ 'access-token': 'qwerty' })

console.log('Request 1:', sendData({ city: 'Kyiv' }))
console.log('Request 2:', sendData({ city: 'Lviv' }))
console.log('Request 3:', sendData({ city: 'Dnipro' }))
// =============================================

console.log('--- 2. Context and this ---')

const person1 = {
    name: 'Alice',
    age: 30,
}

const obj = {
    getData: function () {
        console.log(`Person name is: ${this.name} and age ${this.age}`)
    },
}

obj.getData.call(person1)

const bindFunc = obj.getData.bind(person1)
bindFunc()

// =============================================

console.log('--- 3. Recursive File Names ---')

const root = {
    name: 'name',
    type: 'folder',
    children: [
        {
            name: 'folder 1',
            type: 'folder',
            children: [
                {
                    name: 'folder 2',
                    type: 'folder',
                    children: [
                        {
                            name: 'file 3',
                            type: 'file',
                            size: 30,
                        },
                    ],
                },
            ],
        },

        {
            name: 'file 1',
            type: 'file',
            size: 10,
        },

        {
            name: 'file 2',
            type: 'file',
            size: 20,
        },
    ],
}

function namesOfFiles(node) {
    if (node.type === 'file') {
        return [node.name]
    } else {
        const names = []
        node.children.forEach((child) => {
            names.push(...namesOfFiles(child))
        })
        return names
    }
}

console.log('Names of files:', namesOfFiles(root))

// =============================================

console.log('--- 4. Classes (ES6 and ES5) ---')

class Person {
    constructor(name, phone) {
        this.name = name
        this.phone = phone
    }

    introduce() {
        console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}.`)
    }
}

class Student extends Person {
    constructor(name, phone, course) {
        super(name, phone)
        this.course = course
    }

    study() {
        console.log(`Я навчаюся на ${this.course} курсі.`)
    }
}

class Teacher extends Person {
    constructor(name, phone, subject) {
        super(name, phone)
        this.subject = subject
    }

    teach() {
        console.log(`Я викладаю ${this.subject}.`)
    }
}

const person = new Person('Марія', '555-123-4567')
person.introduce()

const student = new Student('Іван', '123-456-7890', 2)
student.introduce()
student.study()

const teacher = new Teacher('Олена', '098-765-4321', 'Математика')
teacher.introduce()
teacher.teach()

function PersonES5(name, phone) {
    this.name = name
    this.phone = phone
}

PersonES5.prototype.introduce = function () {
    console.log(
        'ES5: Привіт, мене звати ' + this.name + ', мій номер ' + this.phone
    )
}

function StudentES5(name, phone, course) {
    PersonES5.call(this, name, phone)
    this.course = course
}

StudentES5.prototype = Object.create(PersonES5.prototype)
StudentES5.prototype.constructor = StudentES5

StudentES5.prototype.study = function () {
    console.log('Я навчаюся на ' + this.course + ' курсі.')
}

const oldStudent = new StudentES5('Петро', '050-111-22-33', 3)
oldStudent.introduce()
oldStudent.study()
