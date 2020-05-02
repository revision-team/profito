export interface Contact  {
    userid: string;
    name:string;
    photoUrl?:string
    lastSeenDate: string;
    lastMessage: string;
    isOnline?: string|boolean;
}
 
export interface SentTextType {
    isUser: boolean|undefined;
    isChecked: boolean;
    date: string;
}

export interface Message  {
    userid: string;
    key: string;
    photoUrl?: string;
    text?: string;
    isUser?: boolean;
    isChecked?: boolean;
    sentDate:  string;
}


export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type onClickCallType = (index: number) => void