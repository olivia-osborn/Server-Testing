const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  //   it("should set testing environment", () => {
  //     expect(process.env.DB_ENV).toBe("testing");
  //   });
  describe("get /", () => {
    it("should return 200 code", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return 'It's working!'", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual("it's working!");
    });
  });
});
