package org.sid.ebankingbackend.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.List;
@Entity
@Transactional
@Table(name = "Collaborateur")
@Data @NoArgsConstructor @AllArgsConstructor
public class Collaborateur {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private Long id_tache;

//    public Collaborateur(CollaborateurRequest cReq){
//        this.name=cReq.getCollaborateur().getName();
//        this.email=cReq.getCollaborateur().getEmail();
//        this.id_tache=cReq.getTache().getId();
//     }

    /*
    private Long id;
    private String name;
    private String email;
     */
}
