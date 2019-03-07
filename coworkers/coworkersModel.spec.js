const db = require("../data/dbConfig");
const Coworkers = require("./coworkersModel");

describe("coworkers model", () => {
  describe("insert()", () => {
    // afterEach(async () => {
    //   await db("coworkers").truncate();
    // });

    it("should insert coworker into the db", async () => {
      await Coworkers.insert({ name: "Jim Halpert" });
      await Coworkers.insert({ name: "Pam Beasley" });

      const coworkers = await db("coworkers");
      expect(coworkers).toHaveLength(2);
    });

    it("should insert correct hobbit into db", async () => {
      let coworker = await Coworkers.insert({ name: "Michael Scott" });
      expect(coworker.name).toBe("Michael Scott");
    });
  });

//   describe("remove()", () => {});
// });
