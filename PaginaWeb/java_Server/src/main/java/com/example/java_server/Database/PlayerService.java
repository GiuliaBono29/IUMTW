package com.example.java_server.Database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class PlayerService{

    @Autowired
    private PlayerRepository playerRepository;

    public List<Players> getTopPlayers(){
        return playerRepository.findFirst15ByOrderByNameAsc();
    }

    public List<Players> getFilteredPlayers(Map<String, String> filtro){
        return playerRepository.findFilteredPlayers(
                filtro.get("country_of_citizenship"),
                filtro.get("position"),
                filtro.get("club_name")
        );
    }

    //esempi giocattolo

    public PlayerService(PlayerRepository playerRepository){
        this.playerRepository=playerRepository;
    }

    public Optional<Players> getPlayerByName(String playerName){
        return playerRepository.findByName(playerName);
    }

    public Players save(Players player){
        return playerRepository.save(player);
    }
}
