const request = require('supertest')
const app = require('../index.js')

const validProgram = {
    name: "Push",
    description: "The Push program consists of programs that utilize a pushing motion.",
    bodyArea: ["Chest", "Shoulders", "Arms"],
    workouts: ["67ad3ed4886f603bab079bea", "67ad3fe4886f603bab079bef", "67ad4004886f603bab079bf1", "67ad40a0886f603bab079bf3", "67ad416c6fdce544ec040881"]
}
const invalidProgram = {
    bodyArea: "Chest",
    musclesUsed: [],
    machinesUsed: [],
}


describe("GET /programs", () => {

    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/programs").send()
        expect(response.statusCode).toBe(200)
    })
})

describe("GET /programs/:id", () => {

    test("should respond with a 200 status code and the program if program id is found", async () => {
        const response = await request(app).get("/programs/67b15d5b67807b6613256b56").send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code and error message if program id is not found", async () => {
        const response = await request(app).get("/programs/67b15d5b67807b6613256b59").send()
        expect(response.text).toBe('{"message":"Program not found"}')
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if program id is not in correct format", async () => {
        const response = await request(app).get("/programs/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("POST /programs", () => {

    test("should respond with a 201 status code if passed in program is valid", async () => {
        const response = await request(app).post("/programs").send(validProgram)
        expect(response.statusCode).toBe(201)
    })

    test("should respond with a 400 status code if passed in program is invalid", async () => {
        const response = await request(app).post("/programs").send(invalidProgram)
        expect(response.statusCode).toBe(400)
    })
})


describe("PUT /programs/:id", () => {

    test("should respond with a 200 status code if passed in program is valid", async () => {
        const response = await request(app).put("/programs/67b15d5b67807b6613256b56").send(validProgram)
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code if program id is not found", async () => {
        const response = await request(app).put("/programs").send(validProgram)
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if program id is not in correct format", async () => {
        const response = await request(app).put("/programs/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("DELETE /programs/:id", () => {

    // test("should respond with a 200 status code if program id is found", async () => {
    //     const response = await request(app).delete("/programs/67b15d5b67807b6613256b56").send()
    //     expect(response.statusCode).toBe(200)
    // })

    test("should respond with a 404 status code if program id is not found", async () => {
        const response = await request(app).delete("/programs").send()
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if program id is not in correct format", async () => {
        const response = await request(app).delete("/programs/1").send()
        expect(response.statusCode).toBe(500)
    })
})