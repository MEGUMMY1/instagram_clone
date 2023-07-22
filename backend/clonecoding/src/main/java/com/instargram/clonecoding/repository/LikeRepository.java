package com.instargram.clonecoding.repository;

import com.instargram.clonecoding.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like, Long> {
}
