/* eslint-disable class-methods-use-this */
import React, { useState } from "react"; 
import { Input, ButtonIcon } from "react-rainbow-components/components";
import {
    SearchIcon,
    ArrowUp,
    Attach,
    Emoji,
    Microphone,
    PhotoCamera,
    Picture,
} from "components/icons";
import Contacts from "./contacts";
import filter from "./filter";
import ChatMessages from "./chatMessages";
import SelectedContact from "./selectedContact";
import "./styles.css";
import {InputEvent} from "./typesInterfaces"
import {contacts,messages} from "./dummydata"


export default function Messages(){
    
    interface MessageInterface {
        message: string;
      }
    
    const [selectedContactIndex, setContactIndex] = useState(0)
    const [searchTerm, setSearchTerm]= useState("")
    const [element, setElement] = useState<MessageInterface>({message:""})

    const  getContacts = () => {
        //const { searchTerm } = this.state;
        return filter(searchTerm, contacts);
    }

    const handleKeyDown = (event: React.KeyboardEvent) => { 
        if (event.key === 'Enter' && element.message.trim()) {
            //console.log("entered");
            addNotificationAction();
          }
    }

    const addNotificationAction = () => {
        //console.log("selectedContactIndex=",selectedContactIndex);
        const id= "id" + Math.floor(Math.random() * 6000) + 100 ;
        const message = element.message;
        const photoUrl = contacts[selectedContactIndex].photoUrl+"";
        const userid =  contacts[selectedContactIndex].userid+"";
        messages.push(        {
            userid,
            key:id,
            photoUrl ,
            text: message,
            sentDate: '1:06 PM',
        });
        //console.log("called addNotificationAction,id=", id +", message=",element.message);
        setElement({
            ...element,
            message: "",
        })
    };
    

    const getSelectedContact = () => {
        //const { selectedContactIndex } = this.state;
        return contacts[selectedContactIndex];
    }

    const handleOnChange = (event: InputEvent) => { 
        //this.setState({ searchTerm: event.target.value });
        setSearchTerm(event.target.value)
    }

    const handleOnClick = (selectedIndex:number) => {
        //this.setState({ selectedContactIndex: selectedIndex });
        setContactIndex(selectedIndex);
    }


        //const { searchTerm, selectedContactIndex } = this.state;
        const {
            photoUrl,
            name,
            isOnline,
            userid
        } = getSelectedContact();
        return (
            <div className="react-rainbow-admin-messages">
                <div className="react-rainbow-admin-messages_contacts-container">
                    <Input
                        className="react-rainbow-admin-messages_contacts-search"
                        label="Find contact"
                        type="search"
                        hideLabel
                        placeholder="Find contact"
                        value={searchTerm}
                        onChange={handleOnChange}
                        icon={<SearchIcon />} />
                    <div className="react-rainbow-admin-messages_contacts">
                        <Contacts
                            contacts={getContacts()}
                            onClick={handleOnClick}
                            selectedContactIndex={selectedContactIndex} /> 
                    </div>
                </div>
                <div className="react-rainbow-admin-messages_body">
                    <SelectedContact
                        photoUrl={photoUrl+""} 
                        name={name}
                        isOnline={isOnline} />
                    <span className="react-rainbow-admin-messages_body--divider" />
                    <div className="react-rainbow-admin-messages_body-messages">
                        <ChatMessages userid={userid} messages={messages} />
                    </div>
                    <div className="react-rainbow-admin-messages_input-container">
                        <div className="react-rainbow-admin-messages_input-options">
                            <ButtonIcon size="large" icon={<Emoji />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<Attach />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<Picture />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<PhotoCamera />} variant="border-filled" />
                            <ButtonIcon size="large" icon={<Microphone />} variant="border-filled" />
                        </div>
                        <Input
                            className="react-rainbow-admin-messages_input"
                            label="Say something"
                            hideLabel
                            placeholder="Say something"
                            icon={<ArrowUp />}
                            iconPosition="right" 
                            onKeyDown={handleKeyDown}
                            value={element.message}
                            onChange={(e) =>
                              setElement({
                                ...element,
                                message: e.target.value,
                              })
                            }
              
                            />
                    </div>
                </div>
            </div>
        );
        }