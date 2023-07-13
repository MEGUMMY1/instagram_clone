import "./Left.css"
import s_logo from './s_logo.png';

function Left(){
    return(
        <div className="LeftContainer">
            <div className="Container-box">
                <div className="box-header">
                    <img src={s_logo} alt="s_logo" className="s_logo"/>
                </div>
                <div className="box-body">
                    <div className="box-body-div">
                        <a className="icon">🏠</a>
                        <a className="menu">홈</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">🔍</a>
                        <a className="menu">검색</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">🔮</a>
                        <a className="menu">탐색 탭</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">🎬</a>
                        <a className="menu">릴스</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">✉️</a>
                        <a className="menu">메시지</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">❤️</a>
                        <a className="menu">알림</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">➕</a>
                        <a className="menu">만들기</a>
                    </div>
                    <div className="box-body-div">
                        <a className="icon">👤</a>
                        <a className="menu">프로필</a>
                    </div>
                </div>
                <div className="box-footer">
                    <a className="icon">🟰</a>
                    <a className="menu">더 보기</a>
                </div>
            </div>
        </div>
    )
}

export default Left;