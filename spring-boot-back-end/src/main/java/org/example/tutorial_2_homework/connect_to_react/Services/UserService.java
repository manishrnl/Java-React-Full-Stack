package org.example.tutorial_2_homework.connect_to_react.Services;

import org.example.tutorial_2_homework.connect_to_react.entity.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> getAllUsers();

    UserEntity save(UserEntity user);

    UserEntity getUserById(Long userId);

    boolean deleteUserById(Long userId);

    UserEntity updateUser(Long userId, UserEntity userEntity);
}
