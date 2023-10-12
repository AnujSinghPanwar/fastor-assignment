import { Button, Skeleton } from "antd";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Hotel = ({ data, setInputValue }) => {
  const hotelId = useParams();

  const dataHotel = data.find((item) => item.id == hotelId.id);
  const { address, description, hotelName, id, image, location } = dataHotel;
  useEffect(() => {
    setInputValue("");
  }, [hotelId]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "10%" }}>
        <Link to="/">
          <Button block>Back</Button>
        </Link>
      </div>
      {data ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            //   height: "95%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={"/images.png"}
              width="5%"
              style={{ position: "absolute", zIndex: "1",borderRadius:"50%" }}
            />
            <img
              src={image}
              style={{
                width: "70%",
                border: "1px solid black",
                zIndex: "0",
                position: "relative",
              }}
            />
          </div>
          <span>Hotel Name:{hotelName}</span>
          <span>description:{description}</span>
          <span>Location:{location}</span>
          <span>Address:{address}</span>
        </div>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

export default Hotel;
