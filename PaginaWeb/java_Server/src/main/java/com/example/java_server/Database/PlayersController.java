package com.example.java_server.Database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PlayersController {

    @Autowired
    private PlayerService playerService;

    public PlayersController(PlayerService playerService){
        this.playerService=playerService;
    }

    @GetMapping("/get_players")
    public ResponseEntity<List<Players>> getPlayers(){
        List<Players> players = playerService.getTopPlayers();

        return ResponseEntity.ok(players);
    }

    @PostMapping("/get_filtered_players")
    public ResponseEntity<List<Players>> getFilteredPlayers(@RequestBody  Map<String, String> requestBody){

        List<Players> players = playerService.getFilteredPlayers(requestBody);
        return ResponseEntity.ok(players);
    }

    //esempi giocattolo
    @PostMapping("/get_player")
    public ResponseEntity<Players> getPlayer(@RequestBody Map<String, String> requestBody){
        String playersName = requestBody.get("name");

        Optional<Players> players = playerService.getPlayerByName(playersName);

        return players.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/data")
    public ResponseEntity<Players> getData(){
        Players data = new Players();
        data.setName("Andrea", "Bono");
        return ResponseEntity.ok(data);
    }

    @PostMapping("/data")
    public ResponseEntity<Players> postData(@RequestParam String firstName, @RequestParam String lastName){
        System.out.println("Received data - firstName: " + firstName + ", lastName: " + lastName);

        Players data= new Players();
        data.setName(firstName, lastName);

        return ResponseEntity.ok(data);
    }



}
