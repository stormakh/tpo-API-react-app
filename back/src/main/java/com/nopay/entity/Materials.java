package com.nopay.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "materials")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Materials {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_material;

    private String description;

}
