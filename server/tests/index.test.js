const request = require('supertest')
const app = require('../index.js')

describe("GET /", () => {

    it("should respond with a 200 status code and 'Hello World from Express and MongoDb!' message", async () => {
        const response = await request(app).get("/").send()
        expect(response.text).toBe('Hello World from Express and MongoDb!')
        expect(response.statusCode).toBe(200)
    })
})