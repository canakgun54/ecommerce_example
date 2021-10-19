import { Button, Tooltip } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCard, deleteCard } from "../redux/rdcCard";

export default function CardButtonsComponent({ product }) {
  const dispatch = useDispatch();

  const setCardItem = (type) => {
    if (type === "add") {
      dispatch(addCard(product));
    } else if (type === "delete") {
      dispatch(deleteCard(product));
    }
  };
  return (
    <div>
      <Tooltip title="çıkar">
        <Button
          onClick={() => setCardItem("delete")}
          style={{ marginRight: 5 }}
          type="danger"
          
          shape="circle"
          icon={<MinusCircleOutlined />}
        />
      </Tooltip>
      <Tooltip title="ekle">
        <Button
          onClick={() => setCardItem("add")}
          type="primary"
          shape="circle"
          icon={<PlusCircleOutlined />}
        />
      </Tooltip>
    </div>
  );
}