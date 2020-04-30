import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { Checked } from "components/icons";

type SentProps = {
    isUser: boolean|undefined,
    isChecked: boolean|undefined,
    date:  string | boolean
  }

const SentText: FunctionComponent<SentProps> = ({ isUser=false, isChecked=false, date =false}) =>   {
    const getCheckedClassName = () => classnames({
        'react-rainbow-admin-messages_message--checked': isChecked,
    });

    if (isUser) {
        return (
            <div className="react-rainbow-admin-messages_message--sent">
                <span>{date}</span>
                <Checked className={getCheckedClassName()} />
            </div>
        );
    }
    return <span className="react-rainbow-admin-messages_message--sent-date">{date}</span>;
}



export default SentText

