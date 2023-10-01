import React, { Suspense } from "react";
import EventsList from "../components/EventsList";
import { defer, json, useLoaderData, Await } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>loading...</p>}>
      <Await resolve={events}>{(loadedEvents) => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetching the events" };
    // throw new Response(JSON.stringify({ message: "Could not fetch the events." }), { status: 500 });
    throw json(
      { message: "Could not fetch the events" },
      {
        status: 500,
      },
    );
  } else {
    // return response;
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
