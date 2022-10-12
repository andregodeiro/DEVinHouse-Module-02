import React from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import { MainContainer } from "./styles";

export const Main = () => {
  return (
    <>
      <MainContainer>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </MainContainer>
    </>
  );
};
