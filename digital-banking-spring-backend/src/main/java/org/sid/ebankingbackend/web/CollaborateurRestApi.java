package org.sid.ebankingbackend.web;


import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
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
public class CollaborateurRestApi {

    private final CollaborateurService collaborateurService;
    private final TacheService tacheService;

    @GetMapping("/collaborateur")
    public List<Collaborateur> getCollaborateurs(){
        return collaborateurService.getAll();
    }

    @GetMapping("/collaborateur/{id}")
    public Optional<Collaborateur> getCollaborateur(@PathVariable Long id){
        return collaborateurService.getCollaborateur(id);
    }

    @PostMapping("/collaborateur")
    public Collaborateur createCollaborateur(@RequestBody Collaborateur coll){

//        {
//            "name":"Hazim",
//                "email":"hazim@gmail.com",
//                "tach":{
//            "description": "PPPP js",
//                    "completed": false,
//                    "time": "24-09-2023"
//        }
//        }

        Collaborateur collaborateur= new Collaborateur();
        collaborateur.setName(coll.getName());
        collaborateur.setEmail(coll.getEmail());
        collaborateur.setId_tache(coll.getId_tache());

        return collaborateurService.createCollaborateur(collaborateur);

    }

    @PutMapping("collaborateur/{id}")
    public Collaborateur updateCollaborateur(@PathVariable Long id , @RequestBody Collaborateur collaborateur){
        return collaborateurService.modifier(id,collaborateur);
    }

    @DeleteMapping("collaborateur/{id}")
    public void deleteCollaborateur(@PathVariable Long id) {
         collaborateurService.supprimer(id);
    }
}
