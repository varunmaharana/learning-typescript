interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponName: string): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"

}

const varun: Admin = {
    dbId: 223,
    email: 'varun@gmail.com',
    userId: 233,
    startTrial: () => {
        return  "Trial Started"
    },
    getCoupon: (name: "asdf") => {
        return 10
    },

    githubToken: "github123",
    
    role: "admin"
}








export  {}