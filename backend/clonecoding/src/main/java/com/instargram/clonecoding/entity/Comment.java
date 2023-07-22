package com.instargram.clonecoding.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;

@Getter
@Setter
@Table(name = "comment")
@NoArgsConstructor
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    private String content;

    private LocalDateTime commentPostDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_pkid")
    @OnDelete(action = OnDeleteAction.CASCADE)//작성한 회원이 삭제되면 같이 삭제
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "board_id")
    @OnDelete(action = OnDeleteAction.CASCADE) //게시글이 삭제되면 같이 삭제
    private Board board;
}