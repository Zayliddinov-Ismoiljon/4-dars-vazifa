import "./sitebar.css";
import SiteBarLogo from "./SiteBarLogo/SiteBarLogo";
import SiteBarItem from "./SiteBarItem/SiteBarItem";
import { SiteBarItemIcon1, SiteBarItemIcon2, SiteBarItemIcon3, SiteBarItemIcon4, SiteBarItemIcon5, SiteBarItemIcon6, SiteBarItemIcon7, SiteBarItemIcon8 } from "./SiteBarItem/SiteBarItemIcon/SiteBarItemIcon";

const SiteBar=()=>{
    return(
        <>
            <div className="sitebar__inner">
                <div className="sitebar__about">
                    <a className="sitebar__logo" href="/">
                        <SiteBarLogo/>
                    </a>
                    <p className="sitebar__logotext">Dashboard Kit</p>
                </div>
                <ul className="sitebar__list">
                    <SiteBarItem icon={<SiteBarItemIcon1/>} text={"Overview"} />
                    <SiteBarItem icon={<SiteBarItemIcon2/>} text={"Tickets"} />
                    <SiteBarItem icon={<SiteBarItemIcon3/>} text={"Ideas"} />
                    <SiteBarItem icon={<SiteBarItemIcon4/>} text={"Contacts"} />
                    <SiteBarItem icon={<SiteBarItemIcon5/>} text={"Agents"} />
                    <SiteBarItem icon={<SiteBarItemIcon6/>} text={"Articles"} />
                    <SiteBarItem icon={<SiteBarItemIcon7/>} text={"Settings"} />
                    <SiteBarItem icon={<SiteBarItemIcon8/>} text={"Subscription"} />
                </ul>
            </div>
        </>
    )
}

export default SiteBar;