import { Outlet, useLocation, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import EventsNavigation from "../components/EventsNavigation";

const RootLayout = () => {
  //EventsNavigation을 사용할 때 location을 이용해도 가능
  // const location = useLocation();
  //useNavigation으로 라우트 전환 상태를 확인할 수 있음
  // const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      {/* {location.pathname.startsWith("/events") && <EventsNavigation />} */}
      {/* {navigation.state === "loading" && <p>loading</p>} */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
