class TeamGenerator {
  
  // CONSTRUCTEUR
  constructor(players, playersPerTeam = 3) {
    this.players = players;
    this.playersPerTeam = playersPerTeam;
    this.teams = [];
  }

  // Générer une team aléatoire
  generateTeams() {
    let shuffledPlayers = [...this.players].sort(() => 0.5 - Math.random()); // Mélange aléatoire des joueurs
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

  // Obtenir la team
  getTeams() {
    return this.teams;
  }

  // Réinitialiser la team
  resetTeams() {
    this.teams = [];
  }

  // Obtenir les joueurs 
  getPlayers() {
    return this.players;
  }

  // Ajouter des joueurs
  addPlayers(newPlayers) {
    this.players = [...this.players, ...newPlayers];
  }

  // Supprimer des joueurs
  removePlayers(playersToRemove) {
    this.players = this.players.filter(player => !playersToRemove.includes(player));
  }

  // Obtenir le nombre de joueurs total
  playersNumber(num) {
    this.playersNumber = num;
  }

  // Obtenir le nombre de teams
  totalTeams() {
    return this.teams.length;
  }

}

export default  TeamGenerator


