import React from "react";
import { Link } from "react-router-dom";

const EVENT = [
  { id: "e1", title: "event 1" },
  { id: "e2", title: "event 2" },
  { id: "e3", title: "event 3" },
];

export const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENT.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default EventsPage;
