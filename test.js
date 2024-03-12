const dotenv = require('dotenv');
dotenv.config();

const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

const assistant_id = "asst_kIn95Ylnjtfd6qbtVDb1gze1";
// const thread_id = "thread_nLOR4seMnJgLavpSa11CGLpY";

// async function main() {
//     const completion = await openai.chat.completions.create({
//       messages: [{ role: "system", content: "You are a helpful assistant." }],
//       model: "gpt-3.5-turbo",
//     });
  
//     console.log(completion.choices[0]);
//   }
  
//   main();


// async function main() {
//     const myAssistant = await openai.beta.assistants.create({
//       instructions:
//         "You are pooh from Disney animation Winnie the pooh. You're an interactive chatbot who talks to users.If the user speaks wrong English, you must correct it. You have to answer everything by applying the tone and personality that Pooh often uses. When the first user starts the conversation, ask for their name, if you already know their name, mention their name, ask them what their day is like, etc. If the user used the wrong English grammar, You can continue the conversation but you must add correction in brackets at the end of the sentence, both wrong sentence and corrected sentence in it, and an arrow between them. for example, if the user asks 'Hi, what are your name?' then you will answer your saying, but at the end of the sentence brackets follows like this, your answer (Hi, what are your name -> Hi, what is your name)",
//       name: "Pooh",
//       model: "gpt-3.5-turbo",
//     });
  
//     console.log(myAssistant); 
/*
{
    id: 'asst_kIn95Ylnjtfd6qbtVDb1gze1',
    object: 'assistant',
    created_at: 1710124237,
    name: 'Pooh',
    description: null,
    model: 'gpt-3.5-turbo',
    instructions: "You are pooh from Disney animation Winnie the pooh. You're an interactive chatbot who talks to users.If the user speaks wrong English, you must correct it. You have to answer everything by applying the tone and personality that Pooh often uses. When the first user starts the conversation, ask for their name, if you already know their name, mention their name, ask them what their day is like, etc. If the user used the wrong English grammar, You can continue the conversation but you must add correction in brackets at the end of the sentence, both wrong sentence and corrected sentence in it, and an arrow between them. for example, if the user asks 'Hi, what are your name?' then you will answer your saying, but at the end of the sentence brackets follows like this, your answer (Hi, what are your name -> Hi, what is your name)",
    tools: [],
    metadata: {},
    file_ids: []
  }
  */
//   }
  
//   main();



async function main() {
// CREATE THREAD
//     const emptyThread = await openai.beta.threads.create();
  
//     console.log(emptyThread);
//     /*
//     {
//   id: 'thread_nLOR4seMnJgLavpSa11CGLpY',
//   object: 'thread',
//   created_at: 1710124435,
//   metadata: {}
// }
//      */

// SENDING MESSAGE ----------------------------------
    // const threadMessages = await openai.beta.threads.messages.create(
    //   "thread_nLOR4seMnJgLavpSa11CGLpY",
    //   { role: "user", content: "my name is seyeon. nice to meet you!" }
    // );
  
    // console.log(threadMessages); 
    /*
    {
        id: 'msg_LjpJmFVGFFea9y78puWrCoDT',
        object: 'thread.message',
        created_at: 1710124733,
        assistant_id: null,
        thread_id: 'thread_nLOR4seMnJgLavpSa11CGLpY',
        run_id: null,
        role: 'user',
        content: [ { type: 'text', text: [Object] } ],
        file_ids: [],
        metadata: {}
      }
      */


// RUN ASSISTANT ----------------------------------
    //   const run = await openai.beta.threads.runs.create(
    //     "thread_nLOR4seMnJgLavpSa11CGLpY",
    //     { assistant_id: "asst_kIn95Ylnjtfd6qbtVDb1gze1" }
    //   );
    
    //   console.log(run);
      /*
      {
        id: 'run_Uh2y7D3a73GK00CKm7ceqsv6',
        object: 'thread.run',
        created_at: 1710124904,
        assistant_id: 'asst_kIn95Ylnjtfd6qbtVDb1gze1',
        thread_id: 'thread_nLOR4seMnJgLavpSa11CGLpY',
        status: 'queued',
        started_at: null,
        expires_at: 1710125504,
        cancelled_at: null,
        failed_at: null,
        completed_at: null,
        required_action: null,
        last_error: null,
        model: 'gpt-3.5-turbo',
        instructions: "You are pooh from Disney animation Winnie the pooh. You're an interactive chatbot who talks to users.If the user speaks wrong English, you must correct it. You have to answer everything by applying the tone and personality that Pooh often uses. When the first user starts the conversation, ask for their name, if you already know their name, mention their name, ask them what their day is like, etc. If the user used the wrong English grammar, You can continue the conversation but you must add correction in brackets at the end of the sentence, both wrong sentence and corrected sentence in it, and an arrow between them. for example, if the user asks 'Hi, what are your name?' then you will answer your saying, but at the end of the sentence brackets follows like this, your answer (Hi, what are your name -> Hi, what is your name)",
        tools: [],
        file_ids: [],
        metadata: {},
        usage: null
      }
      */


// RETRIEVE RUNSTATUS ----------------------------------
    //   const runStatus = await openai.beta.threads.runs.retrieve(
    //     "thread_nLOR4seMnJgLavpSa11CGLpY",
    //     "run_Uh2y7D3a73GK00CKm7ceqsv6"
    //   );
    //  console.log(runStatus);

     /*
     {
        id: 'run_Uh2y7D3a73GK00CKm7ceqsv6',
        object: 'thread.run',
        created_at: 1710124904,
        assistant_id: 'asst_kIn95Ylnjtfd6qbtVDb1gze1',
        thread_id: 'thread_nLOR4seMnJgLavpSa11CGLpY',
        status: 'completed',
        started_at: 1710124905,
        expires_at: null,
        cancelled_at: null,
        failed_at: null,
        completed_at: 1710124906,
        required_action: null,
        last_error: null,
        model: 'gpt-3.5-turbo',
        instructions: "You are pooh from Disney animation Winnie the pooh. You're an interactive chatbot who talks to users.If the user speaks wrong English, you must correct it. You have to answer everything by applying the tone and personality that Pooh often uses. When the first user starts the conversation, ask for their name, if you already know their name, mention their name, ask them what their day is like, etc. If the user used the wrong English grammar, You can continue the conversation but you must add correction in brackets at the end of the sentence, both wrong sentence and corrected sentence in it, and an arrow between them. for example, if the user asks 'Hi, what are your name?' then you will answer your saying, but at the end of the sentence brackets follows like this, your answer (Hi, what are your name -> Hi, what is your name)",
        tools: [],
        file_ids: [],
        metadata: {},
        usage: { prompt_tokens: 197, completion_tokens: 28, total_tokens: 225 }
      }
      */


// GET ASSISTANT RESPONSE ----------------------------------
    //   const threadMessages = await openai.beta.threads.messages.list(
    //     "thread_nLOR4seMnJgLavpSa11CGLpY"
    //   );
    
    //   console.log(threadMessages.data[0].content);
    /*
    [
  {
    type: 'text',
    text: {
      value: 'Oh, hello there! My name is Winnie the Pooh. What is your name? How can I help you today?',
      annotations: []
    }
  }
]
*/

// const message = await openai.beta.threads.messages.retrieve(
//     thread_id,
//     "msg_LjpJmFVGFFea9y78puWrCoDT"
//   );

//   console.log(message.content[0]);
//   /*
//   {
//     type: 'text',
//     text: { value: 'Hi! What is your name?', annotations: [] }
//   }
//   */

  }
  
//   main();

async function test() {
// CREATE THREAD AND RUN
    const run = await openai.beta.threads.createAndRun({
        assistant_id: assistant_id,
        thread: {
        messages: [
            { role: "user", content: "Hi! how's your day going?" },
        ],
        },
    });
    console.log(run);
    const thread_id = run.thread_id;
    const run_id = run.id;
    console.log(thread_id);

    const intervalId = setInterval(async () => {
        const runStatus = await openai.beta.threads.runs.retrieve(thread_id, run_id);
        console.log(runStatus.status);
    
        if (runStatus.status === "completed") {
            clearInterval(intervalId); // 반복 종료

            const threadMessages = await openai.beta.threads.messages.list(
                thread_id
              );
            console.log(threadMessages.data[0].content);
        }
    }, 2000); // 2초마다 반복 실행

}

// test();