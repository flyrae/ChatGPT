import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL:"http://fetch-gpt.com/"
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


async function* makeIterator(){
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

export async function POST(request){
  const {messages} = await request.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    stream:true
  })
  return new Response(iteratorToStream(makeIterator(response)));
}