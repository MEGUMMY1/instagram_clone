package com.instargram.clonecoding.Dto.comment;

import com.instargram.clonecoding.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentPostRequestDto {
    private User user;
    private String content;
    private LocalDateTime commentPostDate;
}
