class TeamGenerator {
  // CONSTRUCTEUR
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  //  Générer les teams
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

  // Obtenir les teams
  getTeams() {
    return this.teams;
  }

  // Réinitialiser les teams
  resetTeams() {
    this.teams = [];
  }

  // Obtenir la liste des joueurs 
  getPlayers() {
    return this.players;
  }

  // Ajouter des joueurs
  addPlayers(newPlayers) {
    this.players = [...this.players, ...newPlayers];
  }

  // Supprimer un joueur
  removePlayers(playersToRemove) {
    this.players = this.players.filter(player => !playersToRemove.includes(player));
  }

  playersNumber(num) {
    this.playersPerTeam = num;
  }

  totalTeams() {
    return this.teams.length;
  }
}

module.exports = TeamGenerator;

