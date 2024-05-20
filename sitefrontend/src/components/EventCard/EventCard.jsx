import "./EventCard.css";

const EventCard = ({ eventTitle, eventImageSrc }) => {
  return (
    <div className="eventCard">
      <div className="Timeline">
        <div className="stiched">
          <h2>{eventTitle}</h2>
          <img className="img" src={eventImageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
