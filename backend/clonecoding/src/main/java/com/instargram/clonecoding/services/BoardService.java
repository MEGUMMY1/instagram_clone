package com.instargram.clonecoding.services;

import com.instargram.clonecoding.Dto.board.BoardPostRequestDto;
import com.instargram.clonecoding.Dto.board.BoardUpdateRequestDto;
import com.instargram.clonecoding.entity.Board;
import com.instargram.clonecoding.exception.ResourceNotFoundException;
import com.instargram.clonecoding.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BoardService {
    private final BoardRepository boardRepository;

    //전체 게시글 조회
    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }

    //id로 게시글 한개 조회
    public Board getOneBoard(Long id) {
        return boardRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("post", "id", id));
    }

    //게시글 작성
    @Transactional
    public Board saveBoard(BoardPostRequestDto requestDto) {
        Board board = new Board();
        board.setUser(requestDto.getUser());
        board.setContent(requestDto.getContent());
        board.setPostDate(LocalDateTime.now());
        return boardRepository.save(board);
    }

    //게시글 수정
    @Transactional
    public Board updateBoard(Long id, BoardUpdateRequestDto requestDto) {
        Board board = boardRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("post", "id", id));
        board.setContent(requestDto.getContent());
        board.setImage(requestDto.getImage());
        return boardRepository.save(board);
    }

    //게시글 삭제
    @Transactional
    public void deleteBoard(Long id){
        Board board = boardRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("post", "id", id));
        boardRepository.delete(board);
    }

}
