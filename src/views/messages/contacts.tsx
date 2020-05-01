import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { Avatar } from "react-rainbow-components";
import { PersonIcon } from "components/icons";
import Online from "./online";
import {Contact, onClickCallType} from "./typesInterfaces"

const getClassNames = (isSelected: boolean) => classnames('react-rainbow-admin-messages_contact', {
    'react-rainbow-admin-messages_contact--active': isSelected,
});

type ContactProps = {
    contacts: Contact[],
    onClick: onClickCallType,
    selectedContactIndex: number
}
const Contacts: FunctionComponent<ContactProps> = ({ contacts = [], onClick, selectedContactIndex }) => (
    <React.Fragment>
        {
            contacts.map((contact, index) => {
                const {
                    name,
                    photoUrl,
                    lastSeenDate,
                    lastMessage,
                    isOnline,
                } = contact;
                const isSelected = selectedContactIndex === index;
                const key = `contact-${index}`;
                return (
                    <article
                        role="presentation"
                        key={key}
                        className={getClassNames(isSelected)}
                        onClick={() => onClick(index)}>
                        <Avatar
                            className="react-rainbow-admin-messages_contact-avatar"
                            src={photoUrl}
                            icon={<PersonIcon />}
                            size="small" />
                        <Online isOnline={isOnline} />
                        <div className="react-rainbow-admin-messages_contact-content">
                            <div className="rainbow-flex rainbow-justify_spread">
                                <h3 className="react-rainbow-admin-messages_contact-name">{name}</h3>
                                <p className="react-rainbow-admin-messages_contact-time">{lastSeenDate}</p>
                            </div>
                            <p className="react-rainbow-admin-messages_contact-message">{lastMessage}</p>
                        </div>
                    </article>
                );
            })
        }
    </React.Fragment>
)


export default Contacts