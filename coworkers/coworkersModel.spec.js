const db = require("../data/dbConfig");
const Coworkers = require("./coworkersModel");

describe("coworkers model", () => {
  describe("insert()", () => {
    afterEach(async () => {
      await db("coworkers").truncate();
    });

    it("should insert coworker into the db", async () => {
      await Coworkers.insert({ name: "Jim Halpert" });
      await Coworkers.insert({ name: "Pam Beasley" });

      const coworkers = await db("coworkers");
      expect(coworkers).toHaveLength(2);
    });

    it("should insert correct coworker into db", async () => {
      let coworker = await Coworkers.insert({ name: "Jim Halpert" });
      expect(coworker.name).toBe("Jim Halpert");
    });
  });

  describe("remove()", () => {
    afterEach(async () => {
      await db("coworkers").truncate();
    });

    it("should delete coworker from the db", async () => {
      let coworker = await Coworkers.insert({ name: "Michael Scott" });
      expect(coworker.name).toBe("Michael Scott");
      await Coworkers.remove(coworker.id);
      const coworkers = await db("coworkers");
      expect(coworkers).toHaveLength(0);
    });

    it("should delete correct coworker from db", async () => {
      let coworker1 = await Coworkers.insert({ name: "Michael Scott" });
      let coworker2 = await Coworkers.insert({ name: "Pam Beasley" });
      expect(coworker1.name).toBe("Michael Scott");
      expect(coworker2.name).toBe("Pam Beasley");
      await Coworkers.remove(coworker1.id);
      const coworkers = await db("coworkers");
      expect(coworkers).toHaveLength(1);
      expect(coworker2.name).toBe("Pam Beasley");
    });
  });
});
