package com.nopay.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nopay.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @SuppressWarnings("null")
    List<User> findAll();

    @SuppressWarnings("null")
    Optional<User> findById(Long id);

    @SuppressWarnings("null")
    User save(User user);

    @SuppressWarnings("null")
    void deleteById(Long id);
}
