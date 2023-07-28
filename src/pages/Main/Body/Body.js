import Left from "../Left/Left";
import "./Body.css"
import posts from './Posts';
import React,{ useState, useRef } from "react";
import Right from "../Right/Right";
import { useNavigate } from "react-router-dom";

function calculateTimeDifference(uploadDate) {
    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - uploadDate);
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
    if (hoursDifference >= 24) {
        const daysDifference = Math.floor(hoursDifference / 24);
        return `${daysDifference}일 전`;
    } else if (hoursDifference >= 1) {
        return `${hoursDifference}시간 전`;
    } else if (hoursDifference == 0) {
        return `방금 전`;
    } else {
        return `${minutesDifference}분 전`;
    }
  }

function Body({posts}){
    const [postList, setPostList] = useState(posts);
    const [commentAuthor, setCommentAuthor] = useState(''); // 댓글 작성자 DB연결 후 삭제 要
    const commentInputRefs = useRef({}); // 댓글 작성 아이콘 클릭 시 input으로 커서 이동


    const handleLikeClick = (postId) => {
        setPostList((prevPosts) =>
          prevPosts.map((post) =>
            post.id === postId ? { ...post, isLiked: !post.isLiked, likeCnt: post.isLiked ? post.likeCnt - 1 : post.likeCnt + 1 } : post
          )
        );
    };

    const handleAddComment = (postId, commentText) => {
        if (commentText.trim() !== "" && commentAuthor.trim() !== "") {
          const newComment = `${commentAuthor}　${commentText}`;
          setPostList((prevPosts) =>
            prevPosts.map((post) =>
              post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
            )
          );
          setCommentAuthor(''); // 댓글 작성 후 댓글 작성자 상태 초기화
        }
    };

    const handleCommentIconClick = (postId) => {
        const inputRef = commentInputRefs.current[postId];
        if (inputRef) {
          inputRef.focus(); // 해당 게시글의 댓글 작성 input으로 포커스 이동
        }
    };
    
    const navigate = useNavigate();

    return(
        <>
        <Left />
        <div className="BodyContainer">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signin")}>Signin</button>
            {postList.map((post) => (
                    <div key={post.id} className="post-div">
                        <div className="post-top">
                            <div className="writer-img"><img src={post.writerimg} alt="writer" className="writer-img"/></div>
                            <div className="post-top-div">
                                <div className="post-top-id">{post.username}</div>
                                <div className="post-top-time">{calculateTimeDifference(post.uploadDate)}</div>
                            </div>
                            <div className="post-top-etc">●●●</div>
                        </div>
                        <img src={post.image} alt="post" className="post-image" />
                        <img
                            src={post.isLiked ? "https://cdn-icons-png.flaticon.com/128/2404/2404529.png" : "https://cdn-icons-png.flaticon.com/128/2404/2404550.png"}
                            alt="like"
                            className="post-act"
                            onClick={() => handleLikeClick(post.id)}
                        />
                        <img
                            src='https://cdn-icons-png.flaticon.com/128/6209/6209512.png'
                            alt="comment"
                            className="post-act"
                            onClick={() => handleCommentIconClick(post.id)} // 댓글 아이콘 클릭 시 작성 input으로 이동
                        />
                        <div className="post-caption"><b>좋아요 {post.likeCnt}개</b></div>
                        <div className="post-caption"><b>{post.username}</b>　{post.caption}</div>
                        <div className="post-comments">
                            {post.comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <span>{comment}</span>
                                </div>
                            ))}
                        </div>
                        <div className="comment-input-div">
                            <input
                                type="text"
                                placeholder="작성자"
                                value={commentAuthor} // 댓글 작성자 입력란에 상태 적용
                                onChange={(e) => setCommentAuthor(e.target.value)} // 댓글 작성자 상태 업데이트
                                className="comment-input"
                            />
                            <input
                                ref={(input) => (commentInputRefs.current[post.id] = input)} // 댓글 작성 input 요소에 ref 연결
                                type="text"
                                placeholder="댓글을 입력하세요"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                    handleAddComment(post.id, e.target.value.trim());
                                    e.target.value = "";
                                    }
                                }}
                                className="comment-input"
                            />
                        </div>
                    </div>
            ))}
        </div>
        <Right/>
    </>
    )
}

export default Body;