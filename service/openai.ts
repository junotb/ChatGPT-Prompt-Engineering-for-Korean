export const completion = async (
  apiKey: string,
  prompt: string,
  userText: string
): Promise<string> => {
  const response = await fetch('/api/openai', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      apiKey: apiKey,
      prompt: prompt,
      userText: userText
    })
  });
  const data = await response.json();
  const result = data.content as string;

  return result;
}