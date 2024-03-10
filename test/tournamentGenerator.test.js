const TeamGenerator = require('../src/teamGenerator.js');
const TournamentGenerator = require('../src/tournamentGenerator.js');

describe("TournamentGenerator", () => {
  let tournamentGenerator;

  beforeEach(() => {
    const teamGenerator = new TeamGenerator([
        "Excalibur",
        "Élohim",
        "Sylphe",
        "Azura",
        "Zephyr",
        "Aegis",
        "Valkyria",
        "Drakon",
        "Ardentis",
        "Lunaris",
        "Astraeus",
        "Elysia",
        "Orion",
        "Anima",
        "Thalassa",
        "Aetherius",
        "Gaïa",
        "Ignatius",
        "Nyx",
        "Solstice",
        "Belladonna",
        "Tempest",
        "Morpheus",
        "Andromeda",
        "Ragnarok"
    ]);
    teamGenerator.generateTeams();
    const teams = teamGenerator.getTeams();
    tournamentGenerator = new TournamentGenerator(teams);
  });

  // Générer un tournoi
  describe("Étant donné que nous générons un tournoi", () => {
    it("devrait générer un tournoi", () => {
      const tournament = tournamentGenerator.generateTournament();
      expect(Array.isArray(tournament)).toBeTruthy();
      expect(tournament).toHaveLength(3);
      expect(tournament[0]).toHaveLength(4);
      expect(tournament[1]).toHaveLength(2);
      expect(tournament[2]).toHaveLength(1);
    });
  });

  // Déterminer le gagnant
  describe("Étant donné que nous générons un tournoi", () => {
    it("devrait déterminer le gagnant du tournoi", () => {
      tournamentGenerator.generateTournament();
      const winner = tournamentGenerator.determineWinner();
      expect(winner).toBeInstanceOf(Object);
      expect(winner).toHaveProperty("name");
    });
  });
});

