//If user succesfully login, we use useEffect to create side effect of adding userEmail value to Header component.
import { magic } from "./magic-client";
import { useEffect, useState } from "react"
import React from "react";

export const CreateUser = () => {
  const [userEmail, setUserEmail] = useState("")
  
  useEffect(() => {
    const userName = async () => {
      try {
        const { email } = await magic.user.getMetadata();
        if (email) {
          setUserEmail(email)
        }
      } catch (error) {
        console.error('Error', error)
      }
    }
    userName();
  }, [userEmail])
  return (
    <div >{userEmail}</div>
  )
};