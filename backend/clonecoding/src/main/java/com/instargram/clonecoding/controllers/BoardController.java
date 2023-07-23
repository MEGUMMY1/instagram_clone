package com.instargram.clonecoding.controllers;

import com.instargram.clonecoding.Dto.board.BoardPostRequestDto;
import com.instargram.clonecoding.Dto.board.BoardUpdateRequestDto;
import com.instargram.clonecoding.entity.Board;
import com.instargram.clonecoding.services.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    //전체 게시글 조회
    @GetMapping()
    public List<Board> getBoardList() {
        return boardService.getAllBoards();
    }

    //게시글 하나 조회
    @GetMapping("/{id}")
    public Board getBoard(@PathVariable("id") Long id) {
        return boardService.getOneBoard(id);
    }

    //게시글 작성
    @PostMapping("/post")
    public Board postBoard(@RequestBody BoardPostRequestDto requestDto){
        return boardService.saveBoard(requestDto);
    }

    //게시글 수정
    @PutMapping("/{id}")
    public Board updateBoard(@PathVariable("id") Long id, @RequestBody BoardUpdateRequestDto requestDto) {
        return boardService.updateBoard(id, requestDto);
    }

    //게시글 삭제
    @DeleteMapping("/{id}")
    public void deleteBoard(@PathVariable("id") Long id) {
        boardService.deleteBoard(id);
    }
}
