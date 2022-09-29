import React from "react";
import Content from "../compontents/content";
import FrontLayout from "./frontLayout";

const Home: React.FC = () => {
  return (
    <FrontLayout>
      <div>
        <Content />
      </div>
    </FrontLayout>
  );
};

export default Home;
