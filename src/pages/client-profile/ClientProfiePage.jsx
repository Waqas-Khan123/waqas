import React, { useEffect, useState } from 'react'
import ClientProfle from '../../components/clientProfile/ClientProfle'
import { getSingleUser } from "../../services/user/singleUser";
import { userId } from "../../utils/constants";
const ClientProfiePage = () => {
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
  console.log(userData)
  return (
    <div><ClientProfle userData={userData}/></div>
  )
}

export default ClientProfiePage