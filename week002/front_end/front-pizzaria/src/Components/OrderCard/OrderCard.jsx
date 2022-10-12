import React from "react";
import {
  OrderCardClient,
  OrderCardContainer,
  OrderCardDescription,
  OrderCardBottom,
  OrderCardStatus,
  OrderContainer,
  OrderCardBottomId,
  OrderCardBottomPrice,
  OrderCardStatusContainer,
  StatusDot,
  OrderCardClientName,
  OrderCardClientData,
} from "./styles";

export const OrderCard = () => {
  return (
    <>
      <OrderContainer>
        <OrderCardContainer>
          <OrderCardStatusContainer>
            <StatusDot></StatusDot>
            <OrderCardStatus>Preparando</OrderCardStatus>
          </OrderCardStatusContainer>
          <OrderCardClient>
            <OrderCardClientName>André Godeiro</OrderCardClientName>
            <OrderCardClientData>(84) 9 9851-4411</OrderCardClientData>
            <OrderCardClientData>
              Av. Maria Lacerda Montenegro, 515, Natal/RN{" "}
            </OrderCardClientData>
          </OrderCardClient>
          <OrderCardDescription>
            Pepperoni + Coca-Cola Zero
          </OrderCardDescription>
          <OrderCardBottom>
            <OrderCardBottomId>#12ab343</OrderCardBottomId>
            <OrderCardBottomPrice>R$ 59,99</OrderCardBottomPrice>
          </OrderCardBottom>
        </OrderCardContainer>
      </OrderContainer>
    </>
  );
};
