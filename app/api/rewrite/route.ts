import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import openai, { OpenAI } from "openai";

export async function POST(request: NextRequest) {
  // supabase validate auth request
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await request.json();

  console.log(json);
  const bio = json.bio;

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a biography re-writer. Never exceed 200 characters.",
      },
      {
        role: "user",
        content: `${bio}`,
      },
    ],
  });

  const content = completion.choices[0].message.content;

  console.log(content);

  return NextResponse.json({ content });
}
