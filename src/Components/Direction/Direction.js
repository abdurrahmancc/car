import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const Direction = ({ info }) => {
  const [response, setResponse] = useState(null);
  const destination = info.end;
  const origin = info.start;

  const directionsCallback = (res) => {
    console.log(res);

    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("response: ", res);
      }
    }
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCnTNyt605g57kJPICxBtiCc0AwmHBRbI4">
      <GoogleMap
        // required
        id="direction-example"
        // required
        mapContainerStyle={{
          height: "100vh",
          width: "100vw",
        }}
        // required
        zoom={14}
        // required
        center={{
          lat: 23.807066815450515,
          lng: 90.36866561085525,
        }}
      >
        {destination !== "" && origin !== "" && (
          <DirectionsService
            // required
            options={{
              destination: destination,
              origin: origin,
              travelMode: "DRIVING",
            }}
            // required
            callback={directionsCallback}
          />
        )}

        {response !== null && (
          <DirectionsRenderer
            // required
            options={{
              directions: response,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Direction;
