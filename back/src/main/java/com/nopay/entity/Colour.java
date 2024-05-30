package com.nopay.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "colour")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Colour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_colour;

    private String description;
}
