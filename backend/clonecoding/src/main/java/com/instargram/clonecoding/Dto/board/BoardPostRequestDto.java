package com.instargram.clonecoding.Dto.board;

import com.instargram.clonecoding.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardPostRequestDto {
    private User user;
    private String content;
    private String image;
    private LocalDateTime postDate;
}
