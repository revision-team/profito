import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";
import Application from "react-rainbow-components/components/Application";
import Sidebar from "react-rainbow-components/components/Sidebar";
import SidebarItem from "react-rainbow-components/components/SidebarItem";
import ButtonIcon from "react-rainbow-components/components/ButtonIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "../components/SectionHeading";
import {
  ApplicationIcon,
  // ChartsIcon,
  DashboardIcon,
  // FormsIcon,
  // MessageIcon,
  // PagesIcon,
  // PuzzleIcon,
} from "../components/icons";
import { useHistory } from "react-router-dom";
import "./styles.css";
import ShoppingCart from "components/icons/ShoppingCart";

function resolveCurrentUrl(pathname: string) {
  return pathname.split("/")[1] || "none";
}

const RenderIf: FunctionComponent<{ isTrue: boolean }> = (props) => {
  return <React.Fragment>{props.isTrue && props.children}</React.Fragment>;
};

const theme = {
  rainbow: {
    palette: {
      brand: "#5c56b6",
    },
  },
};

export const Home: FunctionComponent = (props) => {
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState(
    resolveCurrentUrl(history.location.pathname)
  );
  const [isSidebarHidden, setIsSidebarHidden] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "auto";
    if (!isSidebarHidden) {
      document.body.style.overflow = "hidden";
    }
  }, [isSidebarHidden]);

  const getSidebarClassNames = () =>
    classnames("react-rainbow-admin-app_sidebar-container", {
      "react-rainbow-admin-app_sidebar-container--sidebar-hidden": isSidebarHidden,
    });

  const toogleSidebar = () => setIsSidebarHidden(!isSidebarHidden);

  const handleOnSelect = (e: any, item: string) => setSelectedItem(item);

  return (
    <Application theme={theme}>
      <RenderIf isTrue={!isSidebarHidden}>
        <div
          className='react-rainbow-admin-app_backdrop'
          role='presentation'
          onClick={toogleSidebar}
        />
      </RenderIf>
      <SectionHeading onToogleSidebar={toogleSidebar} />
      <div className={getSidebarClassNames()}>
        <Sidebar
          className='react-rainbow-admin-app_sidebar'
          selectedItem={selectedItem}
          onSelect={handleOnSelect}
        >
          <SidebarItem
            className='react-rainbow-admin-app_sidebar-item'
            icon={<DashboardIcon />}
            name='dashboard'
            label='Dashboard'
            onClick={() => history.push("/dashboard")}
          />
          <SidebarItem
            className='react-rainbow-admin-app_sidebar-item'
            icon={<ApplicationIcon />}
            name='payments'
            label='Payments'
            onClick={() => history.push("/payments")}
          />
          <SidebarItem
            className='react-rainbow-admin-app_sidebar-item'
            icon={<ShoppingCart />}
            name='shopify'
            label='Shopify'
            onClick={() => history.push("/resources/shopify")}
          />
        </Sidebar>
        <RenderIf isTrue={!isSidebarHidden}>
          <div className='react-rainbow-admin-app_sidebar-back-button-container'>
            <ButtonIcon
              onClick={toogleSidebar}
              size='large'
              icon={
                <FontAwesomeIcon
                  className='react-rainbow-admin-app_sidebar-back-button-icon'
                  icon={faArrowLeft}
                />
              }
            />
          </div>
        </RenderIf>
      </div>
      <div className='react-rainbow-admin-app_router-container'>
        {props.children}
      </div>
    </Application>
  );
};
