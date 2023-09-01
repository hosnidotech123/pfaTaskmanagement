package org.sid.ebankingbackend.services;

import lombok.AllArgsConstructor;
import org.sid.ebankingbackend.entities.Collaborateur;
import org.sid.ebankingbackend.entities.CollaborateurRequest;
import org.sid.ebankingbackend.entities.Tache;
import org.sid.ebankingbackend.repositories.CollaborateurRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CollaborateurServiceImpl  implements CollaborateurService{

    private final CollaborateurRepository collaborateurRepository;

    @Override
    public Collaborateur createCollaborateur(Collaborateur collaborateur) {
        return collaborateurRepository.save(collaborateur);
    }

    @Override
    public Optional<Collaborateur> getCollaborateur(Long id) {
        return collaborateurRepository.findById(id);
    }

    @Override
    public List<Collaborateur> getAll() {
        return collaborateurRepository.findAll();
    }

    @Override
    public Collaborateur modifier(Long id,Collaborateur collaborateur) {
        return collaborateurRepository.findById(id)
                .map(c->{
                    c.setName(collaborateur.getName());
                    c.setEmail(collaborateur.getEmail());
                    c.setId_tache(collaborateur.getId_tache());
                    return collaborateurRepository.save(c);
                }).orElseThrow(()->new RuntimeException("le collaborateur nexiste pas"));
    }

    @Override
    public void supprimer(Long id) {
        collaborateurRepository.deleteById(id);
//        return "le collaborateur est supprime";
    }
}
