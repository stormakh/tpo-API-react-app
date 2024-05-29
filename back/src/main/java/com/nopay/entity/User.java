// src/main/java/com/tpo/api/demo/entity/User.java
package com.nopay.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_usuario;

    private int dni;
    private String nombre;
    private String apellido;
    private String direccion;
    private String ciudad;
    private String codigo_postal;
    private String telefono;
    private String email;
}
