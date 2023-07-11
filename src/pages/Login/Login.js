import "./Login.css"
import Input from "./input";
import useInput from "./useInput";
import img from "./leftimg.png";

function Login(){
    const [id, setID, resetID] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        resetID();
        resetPassword();
    };

    return(
        <div className="LoginContainer">
            <div className="left-box">
                <img src={img} alt="img" className="img"/>
            </div>
            <div className="right-box">
                <div className="right-top-box">
                    <div className="logo"/>
                    <div className="div-center">
                        <form className="form-container" onSubmit={handleSubmit}>
                            <div className="form-div">
                                <div className="div-inputbox">
                                    <label>
                                        <Input type="text" value={id} onChange={setID} placeholder="전화번호, 사용자 이름 또는 이메일"/>
                                    </label>
                                </div>
                                <div className="div-inputbox">
                                    <label>
                                        <Input type="password" value={password} onChange={setPassword} placeholder="비밀번호"/>
                                    </label>
                                </div>
                            </div>
                            <button type="submit">로그인</button>
                            <div className="form-div">
                                <div className="bar">
                                 ――――――――　또는　――――――――
                                </div>
                            </div>
                            <div className="form-div">
                                <span className="facebook">Facebook으로 로그인</span>
                            </div>
                            <span>
                                비밀번호를 잊으셨나요?
                            </span>
                            
                        </form>
                    </div>
                </div>
                <div className="right-bottom-box">
                    <h2>계정이 없으신가요?  <a>가입하기</a></h2>
                </div>        
                <div className="form-div">
                    <h2>앱을 다운로드하세요.</h2>
                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DDC2F325B-E85F-4020-AC78-7F83C372794A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"><img src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png" width={135} height={40}/></a>
                    <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1020"><img src="https://static.cdninstagram.com/rsrc.php/v3/yw/r/LBxTdceDfgS.png" width={110} height={40}/></a>
                </div>
            </div>            
        </div>
    )
}

export default Login;