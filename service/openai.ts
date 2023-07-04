export const completion = async (
  apiKey: string,
  messages: any
): Promise<string> => {
  const response = await fetch('/api/openai', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      apiKey: apiKey,
      messages: messages
    })
  });
  const data = await response.json();
  const result = data.content as string;

  return result;
}