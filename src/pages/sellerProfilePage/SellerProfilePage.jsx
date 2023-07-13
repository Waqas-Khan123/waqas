import React, { useState } from "react";
import SellerProfile from "../../components/sellerProfile/SellerProfile";
import { getSingleUser } from "../../services/user/singleUser";
import { useEffect } from "react";
import { userId } from "../../utils/constants";

const SellerProfilePage = () => {
  const [userData, setUserData] = useState()
 
  const getFunc = async () => {
    const response = await getSingleUser(userId);
    if (response?.status === 200) {
      setUserData(response?.data?.user);
    }
  };
  useEffect(() => {
    getFunc();
  }, []);
  return (
    <React.Fragment>
      <SellerProfile userData={userData} />
    </React.Fragment>
  );
};

export default SellerProfilePage;
