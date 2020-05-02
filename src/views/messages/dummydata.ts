import {Message, Contact} from "./typesInterfaces"

export const contacts = [
    {
        userid: "1111",
        name: 'Saray',
        lastSeenDate: '8:30 am',
        lastMessage: 'A rainbow i a meteorological phenomenon that is A rainbow i a meteorological phenomenon that is something',
        photoUrl: '/assets/images/user2.jpg',
        isOnline: true,
    },
    {
        userid: "2222",
        name: 'Leo',
        lastSeenDate: '5:30 pm',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        photoUrl: '/assets/images/user1.jpg',
        isOnline: true,
    },
    {
        userid: "3333",
        name: 'Rey',
        lastSeenDate: '10:15 pm',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        photoUrl: '/assets/images/user3.jpg',
    },
    {
        userid: "4444",
        name: 'Jose',
        lastSeenDate: '8:45 am',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        isOnline: true,
    },
    {
        userid: "5555",
        name: 'Juan',
        lastSeenDate: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        userid: "6666",
        name: 'Tahimi',
        lastSeenDate: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        userid: "7777",
        name: 'Pepe',
        lastSeenDate: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
];

//export const messages = [];
export const messages : Message[] = [];

export const Oldmessages = [
    {
        
        key: "12345",
        photoUrl: '/assets/images/user2.jpg',
        text: 'I have a problem with a topup',
        sentDate: '1:06 PM',
    },
    {
        key: "45678",
        photoUrl: '/assets/images/user4.jpg',
        text: 'Verify the account',
        isUser: true,
        isChecked: true,
        sentDate: '1:07 PM',
    },
    {
        key: "5555",
        photoUrl: '/assets/images/user2.jpg',
        text: 'Already all is ok, thanks',
        sentDate: '1:19 PM',
    },
    {
        key: "6666",
        photoUrl: '/assets/images/user4.jpg',
        text: 'ok',
        isUser: true,
        sentDate: '1:22 PM',
    },
];