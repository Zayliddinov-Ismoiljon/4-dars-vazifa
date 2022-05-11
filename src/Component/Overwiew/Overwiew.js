import "./overwiew.css";
import { OverHeaderIcon1, OverHeaderIcon2 } from "./OverwiewHedareIcon/OverwiewHeaderIcon";
import Jones from "../../Assets/Images/photo.png";
import TicketDetails from "./TicketDetails/TicketDetails";

const Overwiew=()=>{
    return(
        <>
            <div className="overwiew__header">
                <div className="overwiew__about">
                <h2 className="overwiew__headertitle">Tickets</h2>
                    <div className="overwiew__current">
                        <div className="overwiew__info">
                            <a className="overwiew__headerlink" href="#">
                                <OverHeaderIcon1/>
                            </a>
                            <a className="overwiew__headerlink" href="#">
                                <OverHeaderIcon2/>
                            </a>
                        </div>
                        <h3 className="overwiew__name">Jones Ferdinand</h3>
                        <img src={Jones}/>
                    </div>
                </div>
                <TicketDetails/>
            </div>
        </>
    )
}

export default Overwiew;