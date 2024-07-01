import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  let title = "an error occurred!";
  let message = "something went wrong";

  if (error.status === 500) {
    //json을 사용하면 수동으로 json 파싱할 필요도 없음
    // message = JSON.parse(error.data).message;
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "not found";
    message = "colud not find resource or page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
