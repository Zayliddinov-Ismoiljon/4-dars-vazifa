import "./sitebaritem.css";



const SiteBarItem=({icon, text})=>{
    return(
        <>
            <li className="sitebar__item">
                <a className="sitebar__itemlink" href="#">
                    {icon}
                </a>
                <a className="sitebar__itemlink" href="#">
                    <p className="sitebar__itemtext">{text}</p>
                </a>
            </li>
        </>
    )
}

export default SiteBarItem;