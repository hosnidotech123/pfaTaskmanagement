package org.sid.ebankingbackend.services;

import org.sid.ebankingbackend.entities.Collaborateur;
import org.sid.ebankingbackend.entities.CollaborateurRequest;
import org.sid.ebankingbackend.entities.Tache;

import java.util.List;
import java.util.Optional;


public interface CollaborateurService {

    Collaborateur createCollaborateur(Collaborateur collaborateur);

    Optional<Collaborateur> getCollaborateur(Long id);


    List<Collaborateur> getAll();



    Collaborateur modifier(Long id , Collaborateur collaborateur);

    void supprimer(Long  id);
}
