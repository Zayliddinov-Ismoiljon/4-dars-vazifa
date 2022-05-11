import "./ticketdetailspersonitem.css";

const TicketDetailsPersonItem=({img,worktime, title,persontitle, persontime, year,day,time, btn})=>{
    return(
        <>
            <li className="ticketdetails__personItem">
                <div className="ticketdetails__personabout">
                    <img src={img}/>
                    <div className="ticketdetails__personinfo">
                        <h3 className="ticketdetails__persontitle">{title}</h3>
                        <p className="ticketdetails__personworktime">{worktime}</p>
                    </div>
                </div>
                <div className="ticketdetails__customername">
                    <h3 className="ticketdetails__persontitle">{persontitle}</h3>
                    <p className="ticketdetails__personworktime">{year}</p>
                </div>
                <div className="ticketdetails__date">
                    <h3 className="ticketdetails__persontitle">{day}</h3>
                    <time className="ticketdetails__personworktime">{time}</time>
                </div>
                <button type="button" className="ticketdetails__btn">{btn}</button>
                <div className="ticketdetails__setting">
                    <span className="ticketdetails__settingspan"></span>
                    <span className="ticketdetails__settingspan"></span>
                    <span className="ticketdetails__settingspan"></span>
                </div>
            </li>
        </>
    )
}

export default TicketDetailsPersonItem;