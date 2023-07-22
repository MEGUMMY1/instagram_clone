package com.instargram.clonecoding.repository;

import com.instargram.clonecoding.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
}
