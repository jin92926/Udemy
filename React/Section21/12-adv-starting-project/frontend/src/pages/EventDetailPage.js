import React from "react";
import {
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  // const data = useLoaderData();
  //부모의 loader를 사용하려면 useRouteLoaderData를 사용해야 함
  //id를 사용해야함
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

//리액트 라우터가 실제로 실행할 때 객체 하나를 전달함,
//그 중 요청 객체를 담고있는 request와 모든 라우트 파라미터가 담긴 params가 있음
export const loader = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json(
      { message: "could not fetch details for selected event" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const action = async ({ params, request }) => {
  const evertId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${evertId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "could not fetch details for selected event" },
      {
        status: 500,
      }
    );
  } else {
    return redirect("/events");
  }
};
