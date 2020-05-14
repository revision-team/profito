import React from "react";
import { DashboardIcon, SalesIcon, ApplicationIcon } from "components/icons";
import NavIcon from "components/navigation/icon";

export default function NavIcons() {
  return (
    <div>
      <NavIcon text='Dashboard' route='/dashboard'>
        <DashboardIcon />
      </NavIcon>
      <NavIcon text='Payments' route='/payments'>
        <SalesIcon />
      </NavIcon>
      <NavIcon text='Integrations' route='/integrations'>
        <ApplicationIcon />
      </NavIcon>
    </div>
  );
}
