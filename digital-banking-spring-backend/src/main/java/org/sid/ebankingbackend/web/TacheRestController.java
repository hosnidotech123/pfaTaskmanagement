package org.sid.ebankingbackend.web;


import lombok.AllArgsConstructor;
import org.sid.ebankingbackend.entities.Collaborateur;
import org.sid.ebankingbackend.entities.CollaborateurRequest;
import org.sid.ebankingbackend.entities.Tache;
import org.sid.ebankingbackend.services.CollaborateurService;
import org.sid.ebankingbackend.services.TacheService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor

public class TacheRestController {

    private final TacheService tacheService;



    @GetMapping("/tache")
    public List<Tache> getTaches(){
        return tacheService.lire();
    }

    @GetMapping("/tache/{id}")
    public Optional<Tache> getTachebyId(@PathVariable Long id){
       return tacheService.getTache(id);
    }

    @PostMapping("/tache")
    public Tache createTache(@RequestBody Tache tache){return tacheService.createTache(tache);}

    @PutMapping("tache/{id}")
    public Tache updateTache(@PathVariable Long id , @RequestBody Tache tache){
        return tacheService.modifier(id,tache);
    }


    @DeleteMapping("/tache/{id}")
    public void deleteTache(@PathVariable Long id){
         tacheService.supprimer(id);
    }
}
