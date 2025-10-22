package org.example.tutorial_2_homework.connect_to_react.Repository;

import org.example.tutorial_2_homework.connect_to_react.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity getUserById(Long id);
}
