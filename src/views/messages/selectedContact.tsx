import React, { FunctionComponent } from "react";
import Avatar from "react-rainbow-components/components/Avatar";
import { PersonIcon } from "components/icons";
import Online from "./online";

type SelectedContactProps = {
    photoUrl: string,
    name: string,
    isOnline: boolean | undefined 
}

const SelectedContact: FunctionComponent<SelectedContactProps> = ({ photoUrl, name, isOnline=false }) => {
  

    const statusText = () => {
        if (isOnline) {
            return 'Active now';
        }
        return 'Inactive';
    };

    return (
        <article className="react-rainbow-admin-messages_body-selected-contact">
            <Avatar
                src={photoUrl}
                icon={<PersonIcon />}
                size="small" />
            <Online isOnline={isOnline} />
            <div className="react-rainbow-admin-messages_body-selected-contact-content">
                <h3 className="react-rainbow-admin-messages_body-selected-contact-name">{name}</h3>
                <p className="react-rainbow-admin-messages_body-selected-contact--status">{statusText()}</p>
            </div>
        </article>
    );

}

export default  SelectedContact