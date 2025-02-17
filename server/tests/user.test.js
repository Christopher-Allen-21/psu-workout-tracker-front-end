const request = require('supertest')
const app = require('../index.js')

const validUser = {
    firstName: "Robert",
    lastName: "Allen",
    birthDate: "05/22/1998",
    email: "rallen@yahoo.com",
    height: 68,
    weight: 200,
}
const invalidUser = {
    firstName: "Robert",
    email: "rallen@yahoo.com",
    height: 68,
    weight: 200,
}


describe("GET /users", () => {

    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/users").send()
        expect(response.statusCode).toBe(200)
    })
})

describe("GET /users/:id", () => {

    test("should respond with a 200 status code and the user if user id is found", async () => {
        const response = await request(app).get("/users/67acc1513f2b2bd87b67b8be").send()
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code and error message if user id is not found", async () => {
        const response = await request(app).get("/users/67acc1513f2b2bd87b67b8b9").send()
        expect(response.text).toBe('{"message":"User not found"}')
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if user id is not in correct format", async () => {
        const response = await request(app).get("/users/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("POST /users", () => {

    test("should respond with a 201 status code if passed in user is valid", async () => {
        const response = await request(app).post("/users").send(validUser)
        expect(response.statusCode).toBe(201)
    })

    test("should respond with a 400 status code if passed in user is invalid", async () => {
        const response = await request(app).post("/users").send(invalidUser)
        expect(response.statusCode).toBe(400)
    })
})


describe("PUT /users/:id", () => {

    test("should respond with a 200 status code if passed in user is valid", async () => {
        const response = await request(app).put("/users/67acc1513f2b2bd87b67b8be").send(validUser)
        expect(response.statusCode).toBe(200)
    })

    test("should respond with a 404 status code if user id is not found", async () => {
        const response = await request(app).put("/users").send(validUser)
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if user id is not in correct format", async () => {
        const response = await request(app).put("/users/1").send()
        expect(response.statusCode).toBe(500)
    })
})

describe("DELETE /users/:id", () => {

    // test("should respond with a 200 status code if user id is found", async () => {
    //     const response = await request(app).delete("/users/67b14bc2f564b08aba9adf4d").send()
    //     expect(response.statusCode).toBe(200)
    // })

    test("should respond with a 404 status code if user id is not found", async () => {
        const response = await request(app).delete("/users").send()
        expect(response.statusCode).toBe(404)
    })

    test("should respond with a 500 status code if user id is not in correct format", async () => {
        const response = await request(app).delete("/users/1").send()
        expect(response.statusCode).toBe(500)
    })
})