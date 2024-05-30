package com.nopay.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "product_seller")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ProductSeller {

    private int id_product;

    private int id_seller;

}
