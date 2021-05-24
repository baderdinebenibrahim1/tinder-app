import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {
    const {messages, setMessages} = useState([
        {
            name    : 'Sandra',
            image   : 'https://i2-prod.mirror.co.uk/incoming/article3916665.ece/ALTERNATES/s615b/Sandra-Bullock.png',
            message : 'Whats up!',
        },
        {
            name    : 'bader',
            image   : 'https://scontent.ftun3-1.fna.fbcdn.net/v/t1.6435-9/86411822_182516899647337_6837334373247746048_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=whUPa7ptia4AX9i2mxl&_nc_ht=scontent.ftun3-1.fna&oh=f3dd6aa813372977527d3c6da05abbba&oe=60D050AD',
            message : 'Hey i am good , what about you?',
        },  
        {
            message : 'fine',
        }
    ]);
    return (
        <div className="ChatScreen">       
            <p>YOU MATCHED WITH SANDRA ON 24/05/2021</p>
        </div>
    )
}

export default ChatScreen
