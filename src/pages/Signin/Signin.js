import "./Signin.css"
import Input from "./input";
import useInput from "./useInput";

function Signin(){
    const [email, setEmail, resetEmail] = useInput("");
    const [name, setName, resetName] = useInput("");
    const [id, setID, resetID] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        resetEmail();
        resetName();
        resetID();
        resetPassword();
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
                        <div className="div-inputbox">
                            <label>
                                <Input type="text" value={email} onChange={setEmail} placeholder="휴대폰 번호 또는 이메일 주소" autoCapitalize="off" autoComplete="tel"/>
                            </label>
                        </div>
                        <div className="div-inputbox">
                            <label>
                                <Input type="text" value={name} onChange={setName} placeholder="성명"/>
                            </label>
                        </div>
                        <div className="div-inputbox">
                            <label>
                                <Input type="text" value={id} onChange={setID} placeholder="사용자 이름"/>
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