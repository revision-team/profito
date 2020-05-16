import React from "react";
import { DashboardIcon, SalesIcon, ApplicationIcon } from "components/icons";
import NavIcon from "components/navigation/icon";

export default function NavIcons() {
  return (
    <div>
      <NavIcon text='Dashboard' route='/app/dashboard'>
        <DashboardIcon />
      </NavIcon>
      <NavIcon text='Payments' route='/app/payments'>
        <SalesIcon />
      </NavIcon>
      <NavIcon text='Integrations' route='/app/integrations'>
        <ApplicationIcon />
      </NavIcon>
    </div>
  );
}
