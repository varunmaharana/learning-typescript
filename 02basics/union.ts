let score: number | string = 33

score = "34"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let hitesh: User | Admin = { 
    name: "Varun",
    id: 2,
    username: "varun",
}

// function getDbId(id: number | string) {
//     console.log(`Id is ${id}`)
// }

getDbId(123)
getDbId("123")

function getDbId(id: number | string) {
//    id.toLowerCase()
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array

const arr: number[] = [1, 2, 3]
const arr2: string[] = ["1", "2", "3"]
const arr3: number[] | string[] = ["1", "2", "3"]
const arr4: (number | string)[] = ["1", 2, "3"]

let pi: 3.14

// pi = 4

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment: "aisle"
seatAllotment: "asile"
seatAllotment: "crew"

export {}