package com.nopay.nopayapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table(name = "product_materials")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor

public class ProductMaterials {

    private int id_product;

    private int id_material;

}