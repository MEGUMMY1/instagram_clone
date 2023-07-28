import React from 'react';
import "./ProfilePosts.css"

const ProfilePosts = () => {
  const posts = [ 
    { id: 1, imageUrl: 'https://i.pinimg.com/564x/73/34/20/7334203fc44cc7e1d64e1d9e0b31ceae.jpg', caption: '게시물1 설명' },
    { id: 2, imageUrl: 'https://i.pinimg.com/564x/c3/c1/50/c3c15058a89230738f8618b76a6fa936.jpg', caption: '게시물2 설명' },
    { id: 3, imageUrl: 'https://i.pinimg.com/564x/88/4c/f9/884cf95907de2b7452a65423d82e1036.jpg', caption: '게시물3 설명' },
    { id: 4, imageUrl: 'https://i.pinimg.com/564x/f9/d6/7f/f9d67fed254e0c661ea88f33c99fc271.jpg', caption: '게시물4 설명' },
    { id: 5, imageUrl: 'https://i.pinimg.com/564x/15/ed/6d/15ed6da18530e9a5b165e7f36d5fb208.jpg', caption: '게시물5 설명' },
    { id: 6, imageUrl: 'https://i.pinimg.com/564x/b1/b7/87/b1b787746c20f12f7a38ece845195a41.jpg', caption: '게시물6 설명' },
    { id: 7, imageUrl: 'https://i.pinimg.com/564x/f7/27/91/f72791e00c7e6359e27fc59b5cf44c59.jpg', caption: '게시물7 설명' },
    { id: 8, imageUrl: 'https://i.pinimg.com/564x/bc/f5/f1/bcf5f1a62045ada714a06e9fa9523f8c.jpg', caption: '게시물8 설명' },
    { id: 9, imageUrl: 'https://i.pinimg.com/564x/dc/fc/a5/dcfca5a0d149e2687d28ff55132428fb.jpg', caption: '게시물9 설명' },
  ];
  
  return (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <img src={post.imageUrl} alt={`게시물${post.id}`} />
        </div>
      ))}
    </div>
  );
};

export default ProfilePosts;
