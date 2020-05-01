import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Avatar } from 'react-rainbow-components';
import { PersonIcon } from '../../components/icons';
import SentText from './sentText';
import {Message} from "./typesInterfaces";

const getClassNames = (isUser: boolean|undefined) => classnames('react-rainbow-admin-messages_message', {
    'rainbow-flex_row-reverse': isUser,
});

const getTextClassNames = (isUser: boolean|undefined)  => classnames({
    'react-rainbow-admin-messages_message-text-contact': !isUser,
    'react-rainbow-admin-messages_message-text-user': isUser,
});

type ChatMessageProps = {
    messages: Message[]
  }


const ChatMessages: FunctionComponent<ChatMessageProps> = ({ messages=[] }) => (

    <React.Fragment>
        {
     messages.map((message, index) => {
        const {
            photoUrl,
            text,
            isUser,
            isChecked,
            sentDate,
        } = message;
        const key = `contact-${index}`;
        return (
            <div key={key} className={getClassNames(isUser)}>
                <Avatar
                    className="react-rainbow-admin-messages_message-avatar"
                    src={photoUrl}
                    icon={<PersonIcon />}
                    size="medium" />
                <SentText  isUser={isUser} date={sentDate}  isChecked={isChecked} />
                <p className={getTextClassNames(isUser)}>{text}</p>
            </div> 
        );
    })
}
</React.Fragment>

)

 
export default ChatMessages