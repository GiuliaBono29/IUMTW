package com.example.java_server.Database;

import jakarta.persistence.*;

@Entity
@Table(name = "players")
public class Players {

    @Id
    @Column(name = "player_id")
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "last_season")
    private int lastSeason;
    @Column(name = "country_of_citizenship")
    private String countryOfCitizenship;
    @Column(name = "date_of_birth")
    private String dateOfBirth;
    @Column(name = "sub_position")
    private String subPosition;
    @Column(name="position")
    private String position;
    @Column(name="foot")
    private String foot;
    @Column(name="height_in_cm")
    private float heightInCm;
    @Column(name="market_value_in_eur")
    private float marketValueInEur;
    @Column(name="highest_market_value_in_eur")
    private float highestMarketValueInEur;
    @Column(name="agent_name")
    private String agentName;
    @Column(name = "current_club_name")
    private String clubName;

    public Players(){
    }

    public Players(String name, String position, String clubName){
        this.name=name;
        this.position=position;
        this.clubName=clubName;
    }

    //GET
    public String getName() {
        return name;
    }

    public int getLastSeason() {
        return lastSeason;
    }

    public String getCountryOfCitizenship() {
        return countryOfCitizenship;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public String getSubPosition() {
        return subPosition;
    }

    public String getPosition() {
        return position;
    }

    public String getFoot() {
        return foot;
    }

    public float getHeightInCm() {
        return heightInCm;
    }

    public float getMarketValue() {
        return marketValueInEur;
    }

    public float getHighestMarketValueInEur() {
        return highestMarketValueInEur;
    }

    public String getAgentName() {
        return agentName;
    }

    public String getClubName() {
        return clubName;
    }

    //SET

    public void setName(String name) {
        this.name = name;
    }
    public void setName(String first_name, String last_name) {
        this.name = first_name + " " + last_name;
    }

    public void setLastSeason(int lastSeason) {
        this.lastSeason = lastSeason;
    }

    public void setCountryOfCitizenship(String citizenship) {
        this.countryOfCitizenship = citizenship;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setSubPosition(String subPosition) {
        this.subPosition = subPosition;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setFoot(String foot) {
        this.foot = foot;
    }

    public void setHeightInCm(float heightInCm) {
        this.heightInCm = heightInCm;
    }

    public void setMarketValue(float marketValueInEur) {
        this.marketValueInEur = marketValueInEur;
    }

    public void setHighestMarketValueInEur(float highestMarketValueInEur) {
        this.highestMarketValueInEur = highestMarketValueInEur;
    }

    public void setAgentName(String  agentName) {
        this.agentName = agentName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    @Override
    public String toString() {
        return "Players{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastSeason=" + lastSeason +
                ", countryOfCitizenship='" + countryOfCitizenship + '\'' +
                ", dateOfBirth='" + dateOfBirth + '\'' +
                ", subPosition='" + subPosition + '\'' +
                ", position='" + position + '\'' +
                ", foot='" + foot + '\'' +
                ", heightInCm=" + heightInCm +
                ", marketValueInEur=" + marketValueInEur +
                ", highestMarketValueInEur=" + highestMarketValueInEur +
                ", agentName='" + agentName + '\'' +
                ", clubName='" + clubName + '\'' +
                '}';
    }


}


