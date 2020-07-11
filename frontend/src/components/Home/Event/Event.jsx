import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkedAlt,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

import Headings from "../../Headings/Headings";
import styles from "./Event.module.scss";
import { getData as getEventData, dataKeys } from "../../../services/event";
import Button from "../../Button/Button";

function Event() {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getEventData();
    if (data) {
      setEvents(data);
      console.log(data);
    }
  };

  return (
    <section className={styles["event-section"]}>
      <Headings>OUR EVENTS</Headings>
      <div className={styles["event-list-container"]}>
        {events.map((elem, index) => {
          return (
            <EventItem
              key={index}
              name={elem[dataKeys.name]}
              date={elem[dataKeys.date]}
              img={elem[dataKeys.img]}
              venue={elem[dataKeys.venue]}
              type={elem[dataKeys.type]}
            />
          );
        })}
      </div>

      <Button href="">See all Events</Button>
    </section>
  );
}

function EventItem({ name, date, img, type, venue }) {
  return (
    <div className={styles["event-item-container"]}>
      <div
        style={{ backgroundImage: `url("${img}")` }}
        className={styles["event-item-image"]}
      >
        <div className={styles["event-item-image-overlay"]}>
          <FontAwesomeIcon className="mr-4" icon={faClock} />
          <div>{type}</div>
        </div>
      </div>
      <div className={styles["event-item-contents"]}>
        <h4 className={styles["event-item-name"]}>{name}</h4>
        <div className={styles["event-item-row"] + " mb-2"}>
          <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-4" />
          <div>{venue}</div>
        </div>
        <div className={styles["event-item-row"]}>
          <FontAwesomeIcon icon={faCalendarDay} className="mr-4" />
          <div>{date}</div>
        </div>
      </div>
    </div>
  );
}

export default Event;
