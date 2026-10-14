const mongoose = require('mongoose');

const Game = new mongoose.Schema(
    {
        game_id: { type: String, required: true, unique: true },
        season: { type: String },
        competition_type: { type: String },
        round: { type: String },
        date: { type: Date },
        home_club_name: { type: String },
        away_club_name: { type: String },
        home_club_goals: { type: Number },
        away_club_goals: { type: Number },
        home_club_position: { type: Number },
        away_club_position: { type: Number },
        home_club_formation: { type: String },
        away_club_formation: { type: String },
    }
);

Game.set('toObject', {getters: true, virtuals: true});

module.exports = mongoose.model('Game', Game);