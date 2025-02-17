const request = require('supertest')
const app = require('../index.js')

const validExercise = {
    name: "Bench Press",
    description: "The bench press is a compound exercise that targets the muscles of the…",
    bodyArea: "Chest",
    musclesUsed: [],
    machinesUsed: [],
}
const invalidExercise = {
    bodyArea: "Chest",
    musclesUsed: [],
    machinesUsed: [],
}


describe("GET /exercises", () => {

    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/exercises").send()
        expect(response.statusCode).toBe(200)
    })
})

describe("GET /exercises/:id", () => {

    test("should respond with a 200 status code and the exercise if exercise id is found", async () => {
        const response = await request(app).get("/exercises/67ad3ed4886f603bab079bea").send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code and error message if exercise id is not found", async () => {
        const response = await request(app).get("/exercises/67ad3ed4886f603bab079be9").send()
        expect(response.text).toBe('{"message":"Exercise not found"}')
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if exercise id is not in correct format", async () => {
        const response = await request(app).get("/exercises/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("POST /exercises", () => {

    test("should respond with a 201 status code if passed in exercise is valid", async () => {
        const response = await request(app).post("/exercises").send(validExercise)
        expect(response.statusCode).toBe(201)
    })

    test("should respond with a 400 status code if passed in exercise is invalid", async () => {
        const response = await request(app).post("/exercises").send(invalidExercise)
        expect(response.statusCode).toBe(400)
    })
})


describe("PUT /exercises/:id", () => {

    test("should respond with a 200 status code if passed in exercise is valid", async () => {
        const response = await request(app).put("/exercises/67ad3ed4886f603bab079bea").send(validExercise)
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code if exercise id is not found", async () => {
        const response = await request(app).put("/exercises").send(validExercise)
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if exercise id is not in correct format", async () => {
        const response = await request(app).put("/exercises/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("DELETE /exercises/:id", () => {

    // test("should respond with a 200 status code if exercise id is found", async () => {
    //     const response = await request(app).delete("/exercises/67b156976309129e3c06dc03").send()
    //     expect(response.statusCode).toBe(200)
    // })

    test("should respond with a 404 status code if exercise id is not found", async () => {
        const response = await request(app).delete("/exercises").send()
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if exercise id is not in correct format", async () => {
        const response = await request(app).delete("/exercises/1").send()
        expect(response.statusCode).toBe(500)
    })
})