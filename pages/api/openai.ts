import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const type = req.body.type || '';
  const prompt = req.body.prompt || '';
  const content = req.body.content || '';
  const timeout: number = 5000; // Vercel plan limit

  try {
    if (type == '') throw new Error('No type');
    if (content == '') throw new Error('No content');

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        "role": "user",
        "content": prompt
      }],
      temperature: 0 // this is the degree of randomness of the model's output
    })
    .then(response => response.data)

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