package com.nopay.nopayapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "product_size")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ProductSize {

    private int id_product;

    private int id_size;

}