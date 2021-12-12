import React from "react";
import features from "./features";
 
export default function Home() {
  return (
    <div>
      <img
        src={features[0].src}
        width="100%"
        height="100%"
        margin="auto"
        alt="feature1"
      />
      <img 
       
        src={features[1].src}
        width="100%"
        height="100%"
        margin="auto"
        alt="feature2"
        id="About_us"
      />
      <img
        src={features[2].src}
        width="100%"
        height="100%"
        margin="auto"
        alt="feature3"
      />
    </div>
  );
}
