import "./Signin.css"
import React, { useState } from 'react';
import axios from 'axios';
import Input from "./input";
import useInput from "./useInput";

function Signin(){
    // const [email, setEmail, resetEmail] = useInput("");
    // const [name, setName, resetName] = useInput("");
    const [userid, setUserid, resetUserid] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('http://15.164.215.251:8080/user/signin', {
            userid,
            password,
          });
    
          // 요청이 성공적으로 완료되었을 때의 처리
          console.log(response.data); // 백엔드에서 보내준 응답 데이터
    
          // 입력 데이터 초기화
          resetUserid();
          resetPassword();
        } catch (error) {
          // 요청이 실패했을 때의 처리
          console.error('API 요청 실패:', error);
        }
      };
    return(
        <div className="Container">
            <div className="logo"/>
            <div className="div-center">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                    <button className="signin-button">Facebook으로 로그인</button>
                    <div className="form-div">
                        <div className="bar">
                        ――――――　또는　――――――
                        </div>
                    </div>
                    <div className="form-div">
                        {/* <div className="div-inputbox">
                            <label>
                                <Input type="text" value={email} onChange={setEmail} placeholder="휴대폰 번호 또는 이메일 주소" autoCapitalize="off" autoComplete="tel"/>
                            </label>
                        </div>
                        <div className="div-inputbox">
                            <label>
                                <Input type="text" value={name} onChange={setName} placeholder="성명"/>
                            </label>
                        </div> */}
                        <div className="div-inputbox">
                            <label>
                                <Input type="text" value={userid} onChange={setUserid} placeholder="사용자 이름"/>
                            </label>
                        </div>
                        <div className="div-inputbox">
                            <label>
                                <Input type="password" value={password} onChange={setPassword} placeholder="비밀번호"/>
                            </label>
                        </div>
                    </div>
                    <span className="etc-text">
                        저희 서비스를 이용하는 사람이 회원님의 연락처<br/>
                        정보를 Instagram에 업로드했을 수도 있습니다. <br/>
                        <b>더 알아보기</b>
                    </span>
                    <button type="submit" className="signin-button">가입</button>
                </form>
            </div>
        </div>
    )
}

export default Signin;