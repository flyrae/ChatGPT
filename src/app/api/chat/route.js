import OpenAI from 'openai';
import Anthropic from "@anthropic-ai/sdk";
import { AnthropicStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL:"https://fetch-gpt.com/v1/"
})

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
  baseURL: "https://claude.fetch-gpt.com/"
})

const encoder = new TextEncoder();


function iteratorToStream(iterator){
  return new ReadableStream({
    async pull(controller){
      const {value, done} = await iterator.next();
        if (done){
          controller.close();
        } else {
          controller.enqueue(value);
        }
    },
  })
}

function sleep(time){
  return new Promise((resolve)=>{
    setTimeout(resolve, time)
  })
}


async function* makeIterator(response){
  for await(const chunk of response){
    const delta = chunk.choices[0].delta.content
    yield encoder.encode(delta);
  }
}

async function* chatMessages(){
  yield encoder.encode('<p>Hello</p>');
  await sleep(1000);
  yield encoder.encode('<p>World</p>');
  await sleep(1000);
  yield encoder.encode('<p>!</p>');
}

export async function GET(){
  const iterator = chatMessages();
  const stream = iteratorToStream(iterator);
  return new Response(stream);
}

// export async function POST(request){
//   const {messages} = await request.json();
//   // const responseOpen = await openai.chat.completions.create({
//   //   model: 'gpt-3.5-turbo',
//   //   messages,
//   //   stream:true
//   // })
//   const response = await anthropic.messages.create({
//     model: "claude-3-opus-20240229",
//     max_tokens: 1024,
//     stream:true,
//     messages
//   })
//   return new Response(response);
  
//   // return new Response(iteratorToStream(makeIterator(response)));
// }

export async function POST(request){
  const {messages} = await request.json();
  const response = await anthropic.messages.create({
    messages,
    model:"claude-3-opus-20240229",
    stream:true,
    max_tokens:8192
  });
  const stream = AnthropicStream(response);
  return new StreamingTextResponse(stream);
}