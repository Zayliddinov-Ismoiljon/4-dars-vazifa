import "./ticketdetails.css";
import { TicketDEtailsHeaderIcon1, TicketDEtailsHeaderIcon2 } from "./TicketDetailsHeaderIcon/TicketDetailsHeaderIcon";
import TicketDetailsPersonItem from "./TicketDetailsPersonItem/TicketDetailsPersonItem";
import Tom from "../../../Assets/Images/tom.png";
import Steve from "../../../Assets/Images/steve.png"
import Sam from "../../../Assets/Images/sam.png";
import Robert from "../../../Assets/Images/robert.png";
import Matt from "../../../Assets/Images/matt.png";
import Henry from "../../../Assets/Images/henry.png";
import Chris from "../../../Assets/Images/chris.png";
import Christian from "../../../Assets/Images/chiristian.png";

const TicketDetails=()=>{
    return(
        <>
        <div className="ticketdetails">
            <div className="ticketdetails__header">
                <h3 className="ticketdetails__headertitle">All tickets</h3>
                <div className="ticketdetails__headarinfo">
                    <div className="ticketdetails__about">
                        <TicketDEtailsHeaderIcon1/> 
                        <h4 className="ticketdetails__headerheading">Sort</h4>
                    </div>
                    <div className="ticketdetails__about">
                        <TicketDEtailsHeaderIcon2/>
                        <h4 className="ticketdetails__headerheading">Filter</h4>
                    </div>
                </div>
            </div>
            <ul className="ticketdetails__list">
                <li className="ticketdetails__item">Ticket details</li>
                <li className="ticketdetails__item">Customer name</li>
                <li className="ticketdetails__item">Date</li>
                <li className="ticketdetails__item">Priority</li>
            </ul>
            <ul className="ticketdetails__personlist">
                <TicketDetailsPersonItem img={Tom} title={"Contact Email not Linked"} worktime={"Updated 1 day ago"} persontitle={"Tom Cruise"} year={"on 24.05.2019"} day={"May 26, 2019"} time={"6:30 PM"} btn={"High"}/>
                <TicketDetailsPersonItem img={Matt} title={"Adding Images to Featured Posts"} worktime={"Updated 1 day ago"} persontitle={"Matt Damon"} year={"on 24.05.2019"} day={"May 26, 2019"} time={"8:00 AM"} btn={"low"}/>
                <TicketDetailsPersonItem img={Robert} title={"When will I be charged this month?"} worktime={"Updated 1 day ago"} persontitle={"Robert Downey"} year={"on 24.05.2019"} day={"May 26, 2019"} time={"7:30 PM"} btn={"High"}/>
                <TicketDetailsPersonItem img={Christian} title={"Payment not going through"} worktime={"Updated 2 day ago"} persontitle={"Christian Bale"} year={"on 24.05.2019"} day={"May 25, 2019"} time={"5:00 PM"} btn={"Normal"}/>
                <TicketDetailsPersonItem img={Henry} title={"Unable to add replies"} worktime={"Updated 2 day ago"} persontitle={"Henry Cavil"} year={"on 24.05.2019"} day={"May 25, 2019"} time={"4:00 PM"} btn={"High"}/>
                <TicketDetailsPersonItem img={Chris} title={"Downtime since last week"} worktime={"Updated 3 day ago"} persontitle={"Chris Evans"} year={"on 23.05.2019"} day={"May 25, 2019"} time={"2:00 PM"} btn={"Normal"}/>
                <TicketDetailsPersonItem img={Sam} title={"Referral Bonus"} worktime={"Updated 4 day ago"} persontitle={"Sam Smith"} year={"on 22.05.2019"} day={"May 25, 2019"} time={"11:30 AM"} btn={"low"}/>
                <TicketDetailsPersonItem img={Steve} title={"How do I change my password?"} worktime={"Updated 6 day ago"} persontitle={"Steve Rogers"} year={"on 21.05.2019"} day={"May 24, 2019"} time={"1:00 PM"} btn={"Normal"}/>
            </ul>
        </div>
        </>
    )
}

export default TicketDetails;