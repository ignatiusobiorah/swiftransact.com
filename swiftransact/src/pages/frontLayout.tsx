import React from "react";
import Header from "../compontents/header";
import Content from "../compontents/content";
import Footer from "../compontents/footer";

const FrontLayout: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <div className="frontLayout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default FrontLayout;
