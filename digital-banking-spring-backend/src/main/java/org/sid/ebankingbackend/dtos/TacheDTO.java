package org.sid.ebankingbackend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.sid.ebankingbackend.entities.BankAccount;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
public class TacheDTO {
    private Long id;
    private String description;
    private Date time;
}
