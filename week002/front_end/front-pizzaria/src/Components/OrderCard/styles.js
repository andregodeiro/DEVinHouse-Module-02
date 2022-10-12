import styled from "styled-components";

export const OrderContainer = styled.div``;

export const OrderCardContainer = styled.div`
  min-width: 400px;
  max-width: 500px;
  background-color: #d7c6b0;
  border-radius: 10px;
`;

export const OrderCardStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 4px;
  gap: 4px;
`;

export const OrderCardStatus = styled.div`
  color: #747373;
  font-size: 16px;
`;

export const StatusDot = styled.div`
  height: 12px;
  width: 12px;
  background-color: #207caf;
  border-radius: 50%;
  display: inline-block;
`;

export const OrderCardClient = styled.div``;

export const OrderCardClientName = styled.div`
  font-size: 24px;
  padding: 5px;
`;

export const OrderCardClientData = styled.div`
  font-size: 16px;
  color: #747373;
  padding: 5px;
`;

export const OrderCardDescription = styled.div`
  font-size: 28px;
  padding: 5px;
`;

export const OrderCardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  background-color: #701a1a;
  color: white;
  border-radius: 0 0 10px 10px;
`;

export const OrderCardBottomId = styled.div`
  font-size: 16px;
`;

export const OrderCardBottomPrice = styled.div`
  font-size: 24px;
`;
