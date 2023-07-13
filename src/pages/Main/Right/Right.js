import "./Right.css"
import profile from "./profile.png"

function Right(){
    return(
        <div className="RightContainer">
            <div className="MyProfile">
                <div className="MyProfile-img"><img src={profile} alt="profile" className="profile"/></div>
                <div className="MyProfile-txt">
                    <div className="MyProfile-txt-id">id</div>
                    <div className="MyProfile-txt-name">이름</div>
                </div>
            </div>
        </div>
    )
}

export default Right;