package com.nopay.repository;

import com.nopay.entity.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @SuppressWarnings("null")
    List<User> findAll();

    @SuppressWarnings("null")
    Optional<User> findById(Long id);

    @SuppressWarnings({ "null", "unchecked" })
    User save(User user);

    @SuppressWarnings("null")
    void deleteById(Long id);
}
