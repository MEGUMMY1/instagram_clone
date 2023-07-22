package com.instargram.clonecoding.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Table(name = "board")
@Entity
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    private String content;

    private String image;

    private LocalDateTime postDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_pkid")
    private User user;

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
    private List<Like> likes = new ArrayList<>();

    //비즈니스 로직
    public static Board createBoard(User user, String content, String image) {
        Board board = new Board();
        board.setUser(user);
        board.setContent(content);
        board.setImage(image);
        board.setPostDate(LocalDateTime.now());
        return board;
    }

}