import React from "react";

import { useEffect } from "react";
import { messaging } from "../firebase";
import { getToken } from "firebase/messaging";
export default function Event() {

  //event notification
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      //generated token
      const token = await getToken(messaging, { vapidKey: "BNzpqbBQLDs5jhrflh2XWQoKS_v1GHFTksh2sWk1Nq0nRhLgpEKoIaIwBXj74jtp86tqfK4PJ5tTvs_WxWblUns" });
      console.log("Token geneerated", token);
      //sendtoken to db
      
    } else if (permission === "denied") {
      console.log("You denied for latest updates:(");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  //update event page

  return ( 
    <div>
      

    </div>
  );
}
