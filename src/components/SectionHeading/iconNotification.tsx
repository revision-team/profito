import React from "react";
import "./styles.css";

export default function IconNotification(props: { icon: JSX.Element }) {
  return (
    <div className='react-rainbow-admin_header--notification-icon-container'>
      {props.icon}
    </div>
  );
}
