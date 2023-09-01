package org.sid.ebankingbackend.repositories;

import org.sid.ebankingbackend.entities.Collaborateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollaborateurRepository extends JpaRepository<Collaborateur,Long> {
}
