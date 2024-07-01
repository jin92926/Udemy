import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;
  // console.log(data);

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return <EventsList events={events} />;
};

export default EventsPage;

//loader는 해당 컴포넌트로 왔을 때부터 데이터를 가져오기 시작함
//loader는 브라우저에서 실행됨
export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  // console.log(response);
  if (!response.ok) {
    // return { isError: true, message: "could not fetch events" };
    // throw new Response(JSON.stringify({ message: "could not fetch event~" }), {
    //   status: 500,
    // });

    //json을 사용하면 response 객체를 생성해줌, 코드를 적게 사용 도와줌
    throw json(
      { message: "could not fetch event~" },
      {
        status: 500,
      }
    );
  } else {
    //loader를 사용하면 이런 식으로 수작업으로 받아올 필요 없이 res만 받아와도 됨
    // const resData = await response.json();
    // return resData.events;
    return response;
  }
};
