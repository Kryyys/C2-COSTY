class TeamGenerator {
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  generateTeams() {
    let shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random());
    let teamIndex = 0;

    while (shuffledPlayers.length > 0) {
      let teamPlayers = shuffledPlayers.splice(0, this.playersPerTeam);
      let teamName = `Équipe ${teamIndex + 1}`;
      let team = {
        name: teamName,
        players: teamPlayers,
      };
      this.teams.push(team);
      teamIndex++;
    }
  }

  getTeams() {
    return this.teams;
  }

  resetTeams() {
    this.teams = [];
  }

  getPlayers() {
    return this.players;
  }

  addPlayers(newPlayers) {
    this.players = [...this.players, ...newPlayers];
  }

  removePlayers(playersToRemove) {
    this.players = this.players.filter(player => !playersToRemove.includes(player));
  }

  setPlayersPerTeam(num) {
    this.playersPerTeam = num;
  }

  getTotalTeams() {
    return this.teams.length;
  }
}

module.exports = TeamGenerator;


