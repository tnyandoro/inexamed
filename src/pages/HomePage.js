import React from "react";

function HomePage() {
  const style = {
    "background-image": `url("assets/images/background.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  return <div style={style}>HomePage</div>;
}

function HomePage() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}

export default HomePage;
