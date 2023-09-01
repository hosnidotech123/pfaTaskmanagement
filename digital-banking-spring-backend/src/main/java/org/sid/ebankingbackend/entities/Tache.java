package org.sid.ebankingbackend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.sid.ebankingbackend.enums.AccountStatus;


import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
@Entity
@Transactional
@Table(name = "Tache")
@Data @NoArgsConstructor @AllArgsConstructor
public  class Tache {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    private Boolean completed;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private String date_debut;//"dd-mm-yyyy"
    private String date_fin;//"dd-mm-yyyy"


//    @Enumerated(EnumType.STRING)
//    private AccountStatus status;
//    @OneToOne(mappedBy = "tache")
//    private Collaborateur collaborateur;

//    public Boolean getCompleted(){
//        return this.completed;
//    }
//
//    public void setCompleted(Boolean b){
//        this.completed=b;
//    }
}
