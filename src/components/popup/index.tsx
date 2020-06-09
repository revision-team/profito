import React, { PureComponent, ReactChild } from "react";

type Props = {
  width: number;
  height: number;
  url: string;
  title: string;
  onClose: () => any;
  onCode: (params: any) => any;
  children?: ReactChild;
};

export default class OauthPopup extends PureComponent<Props> {
  static defaultProps = {
    onClose: () => {},
    width: 500,
    height: 500,
    url: "",
    title: "",
  };

  externalWindow: any;
  codeCheck: any;

  componentWillUnmount() {
    if (this.externalWindow) {
      this.externalWindow.close();
    }
  }

  createPopup = () => {
    const { url, title, width, height, onCode } = this.props;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;

    const windowFeatures = `toolbar=0,scrollbars=1,status=1,resizable=0,location=1,menuBar=0,width=${width},height=${height},top=${top},left=${left}`;

    this.externalWindow = window.open(url, title, windowFeatures);

    const storageListener = () => {
      try {
        if (localStorage.getItem("code")) {
          onCode(localStorage.getItem("code"));
          this.externalWindow.close();
          window.removeEventListener("storage", storageListener);
        }
      } catch (e) {
        window.removeEventListener("storage", storageListener);
      }
    };

    window.addEventListener("storage", storageListener);

    this.externalWindow.addEventListener(
      "beforeunload",
      () => {
        this.props.onClose();
      },
      false
    );
  };

  render() {
    return <div onClick={this.createPopup}>{this.props.children}</div>;
  }
}
