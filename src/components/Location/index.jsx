import { useState } from "react";

import Card from "./Card";

const Location = () => {
  const [data, setData] = useState(null);
  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  };
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const error = () => {
    console.log("Your location was not found");
  };
  return (
    <>
      <Card handleClick={handleClick} data={data}/>
    </>
  );
};

export default Location;
