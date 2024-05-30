package com.nopay.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "product")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_product;

    private String description;
    private double price;
    private int quantity;

    // Foreign Key

    private int colour;
    private int size;
    private int category;
    private int material;

}