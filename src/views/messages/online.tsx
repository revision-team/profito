import React, {FunctionComponent} from 'react';
 
type OnlineProps = {
    isOnline: boolean |string | undefined
  }

const Online: FunctionComponent<OnlineProps> = ({ isOnline=false }) => {
    if (isOnline) {
        return <span className="react-rainbow-admin-messages_contact--online" />;
    }
    return null;
}

export default Online
