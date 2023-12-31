import React from "react";
import { useNavigate } from "react-router-dom";
import "./Right.css";

function Right({ onMenuButtonClick }) {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    onMenuButtonClick("Profile"); 
  };

  return (
    <div className="RightContainer">
      <div className="MyProfile">
        <div className="MyProfile-img" onClick={() => navigate("/profile")}>
          <img
            src='https://i.pinimg.com/564x/e4/e2/56/e4e25602627fb925e01a55467a67bc96.jpg'
            alt="profile"
            className="profile"
          />
        </div>
        <div className="MyProfile-txt" onClick={() => navigate("/profile")}>
          <div className="MyProfile-txt-id">사용자 계정</div>
          <div className="MyProfile-txt-name">이름</div>
        </div>
      </div>
    </div>
  );
}

export default Right;
