package com.instargram.clonecoding.services;

import com.instargram.clonecoding.Dto.board.BoardUpdateRequestDto;
import com.instargram.clonecoding.Dto.comment.CommentPostRequestDto;
import com.instargram.clonecoding.Dto.comment.CommentUpdateRequestDto;
import com.instargram.clonecoding.entity.Board;
import com.instargram.clonecoding.entity.Comment;
import com.instargram.clonecoding.exception.ResourceNotFoundException;
import com.instargram.clonecoding.repository.BoardRepository;
import com.instargram.clonecoding.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommentService {
    private final CommentRepository commentRepository;
    private final BoardRepository boardRepository;

    //게시글에 있는 댓글 모두 불러오기
    public List<Comment> getComments(Long boardId) {
        List<Comment> comments = commentRepository.findAllByBoardId(boardId);
        return comments;
    }

    //댓글 작성
    @Transactional
    public Comment postComment(Long boardId, CommentPostRequestDto requestDto) {
        Comment comment = new Comment();
        Board board = boardRepository.findById(boardId).orElseThrow(() -> new ResourceNotFoundException("post", "id", boardId));
        comment.setUser(requestDto.getUser());
        comment.setBoard(board);
        comment.setContent(requestDto.getContent());
        return commentRepository.save(comment);
    }

    @Transactional
    public Comment updateComment(Long commentId, CommentUpdateRequestDto requestDto) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("comment", "id", commentId));
        comment.setContent(requestDto.getContent());
        return commentRepository.save(comment);
    }

    //댓글 삭제
    @Transactional
    public void deleteComment(Long commentId) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(() -> new ResourceNotFoundException("comment", "id", commentId));
        commentRepository.delete(comment);
    }
}

