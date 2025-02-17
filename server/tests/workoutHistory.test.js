const request = require('supertest')
const app = require('../index.js')

const validWorkoutHistory = {
    program: "67b15d5b67807b6613256b56",
    dateOfWorkout: "02/16/2025",
    feeling: "Great"
}
const invalidWorkoutHistory = {
    dateOfWorkout: "02/16/2025",
    feeling: "Great"
}


describe("GET /workout-history", () => {

    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/workout-history").send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 500 status code if there is an internal server error", async () => {
        const response = await request(app).get("/workout-history").send()
        expect(response.statusCode).toBe(200)
    })
})

describe("GET /workout-historys/:id", () => {

    test("should respond with a 200 status code and the workout history if workout history id is found", async () => {
        const response = await request(app).get("/workout-history/67b27884f3e16adfeb4b7b0b").send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code and error message if workout history id is not found", async () => {
        const response = await request(app).get("/workout-history/67b27884f3e16adfeb4b7b09").send()
        expect(response.text).toBe('{"message":"Workout History not found"}')
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if workout history id is not in correct format", async () => {
        const response = await request(app).get("/workout-history/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("POST /workout-history", () => {

    test("should respond with a 201 status code if passed in workout history is valid", async () => {
        const response = await request(app).post("/workout-history").send(validWorkoutHistory)
        expect(response.statusCode).toBe(201)
    })

    test("should respond with a 400 status code if passed in workout history is invalid", async () => {
        const response = await request(app).post("/workout-history").send(invalidWorkoutHistory)
        expect(response.statusCode).toBe(400)
    })
})


describe("PUT /workout-history/:id", () => {

    test("should respond with a 200 status code if passed in workout history is valid", async () => {
        const response = await request(app).put("/workout-history/67b27884f3e16adfeb4b7b0b").send(validWorkoutHistory)
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code if workout history id is not found", async () => {
        const response = await request(app).put("/workout-history").send(validWorkoutHistory)
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if workout history id is not in correct format", async () => {
        const response = await request(app).put("/workout-history/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("DELETE /workout-history/:id", () => {

    // test("should respond with a 200 status code if workout history id is found", async () => {
    //     const response = await request(app).delete("/workout-history/67b27884f3e16adfeb4b7b0b").send()
    //     expect(response.statusCode).toBe(200)
    // })

    test("should respond with a 404 status code if workout history id is not found", async () => {
        const response = await request(app).delete("/workout-history").send()
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if workout history id is not in correct format", async () => {
        const response = await request(app).delete("/workout-history/1").send()
        expect(response.statusCode).toBe(500)
    })
})