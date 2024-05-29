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
    private Long id;

    public Object getEmail() {
        throw new UnsupportedOperationException("Unimplemented method 'getEmail'");
    }

    public Object getName() {
        throw new UnsupportedOperationException("Unimplemented method 'getName'");
    }

    public void setName(Object name) {
        throw new UnsupportedOperationException("Unimplemented method 'setName'");
    }

    public void setEmail(Object email) {
        throw new UnsupportedOperationException("Unimplemented method 'setEmail'");
    }
}
