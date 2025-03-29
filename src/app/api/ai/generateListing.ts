import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { input } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are an assistant that generates high-converting e-commerce product listings.' },
      { role: 'user', content: `Generate a product listing for: ${input}` },
    ],
  });

  const listing = completion.choices[0]?.message?.content;

  return NextResponse.json({ listing });
}