// const User = {
//     name: "varun",
//     email: 'varun@gmail.com',
//     isActive: true,
// }

// function createUser({ name: string, isPaid: boolean}) {}

// // createUser({ name: 'name', isPaid: false, email: 'adf' })
// let newUser = { name: 'name', isPaid: false, email: 'adf' }
// createUser(newUser)

// function createCourse(): {} {
//     return {}
// }
// function createCourse2(): Object {
//     return {}
// }


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credCardDetails?: number
}

let user: User = {
     _id: 'adf',
    name: "Varun",
    email: "varun@gmail.com",
    isActive: false,
}

user.name = "Maharana"
// user._id = "asdf"

console.log(user)

type cardNumber = {
    cardNumber: string,
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let card: cardDetails = {
    cardNumber: '',
    cardDate: '',
    cvv: 2
}




export {}