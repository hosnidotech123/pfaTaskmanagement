package org.sid.ebankingbackend.services;

import org.sid.ebankingbackend.entities.Collaborateur;
import org.sid.ebankingbackend.entities.Tache;

import java.util.List;
import java.util.Optional;


public interface TacheService {

    Tache createTache(Tache tache);

    Optional<Tache> getTache(Long id);


    List<Tache> lire();



    Tache modifier(Long id , Tache tache);

    void supprimer(Long  id);
}
