'use client';

import React, { useState, useEffect } from 'react';

const SSEComponent = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:4000/events');

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data]);
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div>
            <h2>Messages du serveur :</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>{message.time}</li>
                ))}
            </ul>
        </div>
    );
};

export default SSEComponent;