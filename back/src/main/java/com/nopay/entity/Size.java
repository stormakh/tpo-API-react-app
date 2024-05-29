package com.nopay.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Size {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_size;

    private String Detalle;
}
