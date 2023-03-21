import React, { useContext } from "react";
import { Message_data } from "../../../context/context";
import { useRouter } from "next/router";
import SignUp from "./../../common/UI/SignUp/index";
const index = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default index;
