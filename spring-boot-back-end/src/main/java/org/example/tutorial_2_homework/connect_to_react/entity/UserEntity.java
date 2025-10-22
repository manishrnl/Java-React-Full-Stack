package org.example.tutorial_2_homework.connect_to_react.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "user")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long id;

    private String fullname;
    private String email;
    private Long mobile;
    private Long aadhar;
    private String password;
    private int age;


}
