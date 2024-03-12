"use client"

const decoder = new TextDecoder('utf-8');
import { useEffect, useState } from "react";

export default function Chat() {
    const [text, setText] = useState('');
    const [input, setInput] = useState(''); 
    useEffect(() => {
        const fetchData = async ()=>{
            const response = await fetch('/api/chat');
            const reader = response.body.getReader();
            reader.read().then(function process({done, value}){
                if(done){
                    console.log('stream finished');
                    return ;
                }
                const text = decoder.decode(value);
                console.log('Received data chunk', text);

                setText((value) => {
                    return value + text;
                })
                return reader.read().then(process);
            })
        }
        fetchData();
    }, []);

    return (
        <div className="flex flex-col w-full max-w-md py-24 max-auto stretch">
            <h1>Chat</h1>
            <p>{text}</p>
        </div>
    )
}