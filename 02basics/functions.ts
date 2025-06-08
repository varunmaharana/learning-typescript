function addTwo(num: number): number {
    return num + 2
    // return 'Hello'
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myVal = addTwo(5)

getUpper("4")
signUpUser("Varun", "varun", false)
loginUser("Varun", "varun@gmail.com")

// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }

//     return "200 OK"
// }

const hello = (s: string): string => {
    return ""
}

const heros = ["supermap", "batman", "flash"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errMsg: string): void {
    console.log(errMsg)
}

function handleError(errMsg: string): never {
    throw new Error(errMsg)
}

export {}