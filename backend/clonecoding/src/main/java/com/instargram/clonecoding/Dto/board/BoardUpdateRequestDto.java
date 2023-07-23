package com.instargram.clonecoding.Dto.board;

import com.instargram.clonecoding.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardUpdateRequestDto {
    private String content;
    private String image;
}
