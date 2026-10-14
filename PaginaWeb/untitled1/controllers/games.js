const Model = require('../models/games');

function query(body) {
    return new Promise((resolve, reject) => {
        Model.find(body)
            .then(results => {
                console.log('Query results:', results); // Debug: Stampa i risultati della query
                results.sort((a, b) => new Date(a.date) - new Date(b.date));
                resolve(results);
            })
            .catch(error => {
                console.error('Query error:', error); // Debug: Stampa l'errore della query
                reject(error);
            });
    });
}

module.exports.query = query;

function btts(body){
    return new Promise((resolve, reject) => {
        Model.find(body)
            .then(results => {
                const btts_stats = {};
                results.forEach(game => {
                    const homeTeam = game.home_club_name;
                    const awayTeam = game.away_club_name;
                    const homeGoal = game.home_club_goals;
                    const awayGoal = game.away_club_goals;

                    const btts = homeGoal > 0 && awayGoal > 0;
                    if(!btts_stats[homeTeam]){
                        btts_stats[homeTeam] = {
                            name: homeTeam,
                            bttsCount: 0,
                            totalGames: 0,
                        };
                    }

                    btts_stats[homeTeam].totalGames += 1;
                    if(btts){
                        btts_stats[homeTeam].bttsCount += 1;
                    }

                    if(!btts_stats[awayTeam]){
                        btts_stats[awayTeam] = {
                            name: awayTeam,
                            bttsCount: 0,
                            totalGames: 0,
                        };
                    }

                    btts_stats[awayTeam].totalGames += 1;
                    if(btts){
                        btts_stats[awayTeam].bttsCount += 1;
                    }
                });

                const bttsPercentage = Object.values(btts_stats).map(team => ({
                    name: team.name,
                    bttsPercentage: (team.bttsCount/team.totalGames)*100
                }));

                const topBttsTeam = bttsPercentage.sort((a,b) => b.bttsPercentage - a.bttsPercentage).slice(0,15);
                resolve(topBttsTeam);
            })
            .catch(e => {
                console.error('Query Error: ', e);
                reject(e);
            });
    });
}

module.exports.btts = btts;