package com.nopay.nopayapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private int dni;
    private String nombre;
    private String apellido;
    private String direccion;
    private String ciudad;
    private String codigo_postal;
    private String telefono;
    private String email;
}