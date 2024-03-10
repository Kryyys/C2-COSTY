const TeamGenerator = require('../src/teamGenerator.js');

describe('TeamGenerator', () => {
  let teamGenerator;

  beforeEach(() => {
    const players = ['Player A', 'Player B', 'Player C', 'Player D', 'Player E'];
    teamGenerator = new TeamGenerator(players, 3);
  });

  it('ajoute des joueurs à d autres joueurs existants', () => {
    teamGenerator.addPlayers(['Player F', 'Player G']);
    const updatedPlayers = teamGenerator.getPlayers();
    expect(updatedPlayers).toEqual(expect.arrayContaining(['Player F', 'Player G']));
  });

  it('supprimer des joueurs', () => {
    teamGenerator.removePlayers(['Player A', 'Player B']);
    const updatedPlayers = teamGenerator.getPlayers();
    expect(updatedPlayers).not.toEqual(expect.arrayContaining(['Player A', 'Player B']));
  });

  it('réinitialise les teams', () => {
    teamGenerator.generateTeams();
    teamGenerator.resetTeams();
    const teams = teamGenerator.getTeams();
    expect(teams).toEqual([]);
  });

  it('distribue les joueurs dans les teams', () => {
    teamGenerator.playersNumber(4);
    expect(teamGenerator.playersPerTeam).toEqual(4);
  });

  it('renvoie le nombre de teams générées', () => {
    teamGenerator.generateTeams();
    const totalTeams = teamGenerator.totalTeams();
    expect(totalTeams).toEqual(2); // Suppose qu'il y a 5 joueurs et 3 joueurs par équipe
  });
});