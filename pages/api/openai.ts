import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const apiKey = req.body.apiKey || '';
  const messages = req.body.messages || '';
  
  const timeout: number = 5000; // Vercel plan limit

  try {
    if (apiKey == '') throw new Error('No apiKey');
    if (messages == '') throw new Error('No messages');

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    const configuration = new Configuration({
      apiKey: apiKey
    });
    const openai = new OpenAIApi(configuration);
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0 // this is the degree of randomness of the model's output
    })
    .then(response => response.data);

    clearTimeout(timer);

    res.status(200).json({
      content: chatCompletion.choices[0].message?.content as string
    });
  } catch (error) {
    let errorMsg;
    if (typeof(error) === "string") {
      errorMsg = error.toUpperCase();
    } else if (error instanceof Error) {
      errorMsg = error.message;
    }
    res.status(500).json(`Error - ${errorMsg}`);
  }
};
export default handler;