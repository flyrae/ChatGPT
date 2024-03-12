"use client"

const decoder = new TextDecoder('utf-8');
import { useEffect, useState } from "react";
import {useChat} from 'ai/react';


 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className="flex flex-col w-full max-w-md py-24 max-auto stretch">
      {messages.map(m => (
        <div key={m.id}>
          {m.role === 'user' ? 'User: ' : 'Claude3: '}
          {m.content}
        </div>
      ))}
 
      <form onSubmit={handleSubmit}>
        <input
         className="fixed bottom-0 w-full -max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."

          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

// export default function Chat() {
//     const [text, setText] = useState('');
//     const [input, setInput] = useState(''); 

//     const handleInputChange = (e) => {
//         setInput(e.target.value)
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         setText('')
//         setInput('')

//         const response = await fetchData(input)
//         const reader = response.body.getReader();

//         reader.read().then(function process({done, value}){
//             if(done){
//                 console.log('Stream finished');
//                 return ;
//             }
//             const text = decoder.decode(value);
//             console.log('Received data chunk', text);

//             setText((value)=>{
//                 return value+text
//             })
//             return reader.read().then(process)
//         })
//     }
//     const fetchData = async(input) => {
//         const response = await fetch("/api/chat",{
//             method: "POST",
//             body: JSON.stringify({messages:[{role:"user",content:input}]})
//         })
//         return response;
//     }

//     const fetchDataClaude = async (input) =>{
        
//     }
    

//     return (
//         <div className="flex flex-col w-full max-w-md py-24 max-auto stretch">
//             <div className="whitespace-pre-wrap">
//                 {text ? 'AI:'+text:''}
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className="fixed bottom-0 w-full -max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
//                     value={input}
//                     placeholder="Say something..."
//                     onChange={handleInputChange}
//                 />
//             </form>
//         </div>
//     )
// }