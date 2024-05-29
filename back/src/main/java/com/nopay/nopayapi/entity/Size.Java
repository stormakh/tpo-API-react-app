package com.nopay.nopayapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "size")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Size {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_size;

    private String details;
}