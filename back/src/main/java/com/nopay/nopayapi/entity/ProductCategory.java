package com.nopay.nopayapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "product_category")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ProductCategory {

    private int id_category;

    private int id_product;

}