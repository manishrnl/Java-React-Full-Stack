package org.example.tutorial_2_homework.connect_to_react.Services;

import lombok.RequiredArgsConstructor;
import org.example.tutorial_2_homework.connect_to_react.Repository.UserRepository;
import org.example.tutorial_2_homework.connect_to_react.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<UserEntity> getAllUsers() {
        List<UserEntity> getUsers = userRepository.findAll();
        return getUsers;
    }

    @Override
    public UserEntity save(UserEntity user) {

        // Age validation
        if (user.getAge() < 18 || user.getAge() > 100)
            throw new IllegalStateException("User age must be between 18 and 100");


        // Aadhar validation
        if (String.valueOf(user.getAadhar()).length() != 12) {
            System.out.println(String.valueOf(user.getAadhar()).getBytes().length);
            throw new IllegalStateException( "Aadhar must be 12 digits long , current length" +
                    " : " + String.valueOf(user.getAadhar()).getBytes().length);
        }

        userRepository.save(user);
        System.out.println("User Saved");
        throw new IllegalStateException( "Saved Successfully");
    }

    @Override
    public UserEntity getUserById(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow();
        return userEntity;
    }

    @Override
    public boolean deleteUserById(Long userId) {
        userRepository.deleteById(userId);
        return false;
    }

    @Override
    public UserEntity updateUser(Long userId, UserEntity userEntity) {
        UserEntity userEntity1 = userRepository.findById(userId).orElseThrow();
        if (userEntity1 != null) {
            userRepository.save(userEntity);
        }
        return userEntity1;
    }
}
