import React, { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import Input from "./input";
import useInput from "./useInput";
import leftimg from "./leftimg.png";
import { useNavigate } from "react-router-dom";

function Login(){
    const [userid, setUserid, resetUserid] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('API_ENDPOINT_URL/login', {
            userid,
            password,
          });
    
          // 요청이 성공적으로 완료되었을 때의 처리
          console.log(response.data); // 백엔드에서 보내준 응답 데이터
    
          // 입력 데이터 초기화
          resetUserid();
          resetPassword();
    
          // 로그인 성공 후 처리 (예: 토큰 저장, 홈페이지로 이동 등)
        } catch (error) {
          // 요청이 실패했을 때의 처리
          console.error('로그인 실패:', error);
        }
      };

    const navigate = useNavigate();

    return(
        <div className="LoginContainer">
            <div className="left-box">
                <img src={leftimg} alt="leftimg" className="leftimg"/>
            </div>
            <div className="right-box">
                <div className="right-top-box">
                    <div className="logo"/>
                    <div className="div-center">
                        <form className="form-container" onSubmit={handleSubmit} action="/login" method="post">
                            <div className="form-div">
                                <div className="div-inputbox">
                                    <Input type="text" value={userid} onChange={setUserid} placeholder="전화번호, 사용자 이름 또는 이메일"/>
                                </div>
                                <div className="div-inputbox">
                                    <Input type="password" value={password} onChange={setPassword} placeholder="비밀번호"/>
                                </div>
                            </div>
                            <button type="submit">로그인</button>
                            <div className="form-div">
                                <div className="bar">
                                 ――――――――　또는　――――――――
                                </div>
                            </div>
                            <div className="form-div">
                                <span className="facebook">Facebook으로 로그인<br></br></span>
                                <span className="comment">비밀번호를 잊으셨나요?</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right-bottom-box">
                    <h2>계정이 없으신가요?  <a onClick={() => navigate("/signin")}>가입하기</a></h2>
                </div>        
                <div className="form-div">
                    <h2>앱을 다운로드하세요.</h2>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DDC2F325B-E85F-4020-AC78-7F83C372794A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"><img className="app" src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png" width={135} height={40}/></a>
                    <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020"><img className="app" src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png" width={110} height={40}/></a>
                </div>
            </div>            
        </div>
    )
}

export default Login;