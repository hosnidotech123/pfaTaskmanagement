package org.sid.ebankingbackend.services;

import lombok.AllArgsConstructor;
import org.sid.ebankingbackend.entities.Collaborateur;
import org.sid.ebankingbackend.entities.Tache;
import org.sid.ebankingbackend.repositories.TacheRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TacheServiceImpl implements TacheService{

    private final TacheRepository tacheRepository;

    @Override
    public Tache createTache(Tache tache) {
        return tacheRepository.save(tache);
    }

    @Override
    public Optional<Tache> getTache(Long id) {
        return tacheRepository.findById(id);
    }


    @Override
    public List<Tache> lire() {
        return tacheRepository.findAll();
    }

    @Override
    public Tache modifier(Long id, Tache tache) {
        return tacheRepository.findById(id)
                .map(t ->{
                    t.setDescription(tache.getDescription());
                    t.setDate_debut(tache.getDate_debut());
                    t.setDate_fin(tache.getDate_fin());
                    t.setCompleted(tache.getCompleted());
                    return tacheRepository.save(t);
                } ).orElseThrow(()->new RuntimeException("Tache non trouve !"));
    }

    @Override
    public void supprimer(Long id) {
        tacheRepository.deleteById(id);
//        return "la Tache est supprime";
    }
}
