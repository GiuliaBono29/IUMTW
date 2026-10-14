package com.example.java_server.Database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface PlayerRepository extends JpaRepository<Players, Long> {
    Optional<Players> findByName(String name);

    @Query(value = "SELECT p FROM Players p")
    List<Players> findTopPlayers();

    List<Players> findFirst15ByOrderByNameAsc();

    @Query("SELECT p FROM Players p WHERE (:countryOfCitizenship IS NULL OR p.countryOfCitizenship = :countryOfCitizenship) AND (:position IS NULL OR p.position = :position) AND (:clubName IS NULL OR p.clubName = :clubName)")
    List<Players> findFilteredPlayers(String countryOfCitizenship, String position, String clubName);
}
