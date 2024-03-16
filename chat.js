import dotenv from 'dotenv';
import OpenAI from 'openai';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const assistant_id = 'asst_kIn95Ylnjtfd6qbtVDb1gze1';

// 채팅방 클릭
    const emptyThread = await openai.beta.threads.create();
    // thread id 프론트에 보내기?

//     console.log(emptyThread);
//     /*
//     {
//   id: 'thread_nLOR4seMnJgLavpSa11CGLpY',
//   object: 'thread',
//   created_at: 1710124435,
//   metadata: {}
// }
//      */

// 메시지 보내기
        const threadMessages = await openai.beta.threads.messages.create(
      "thread_nLOR4seMnJgLavpSa11CGLpY",
      { role: "user", content: "my name is seyeon. nice to meet you!" } // content 는 프론트에서 받아오기
    );
    
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

