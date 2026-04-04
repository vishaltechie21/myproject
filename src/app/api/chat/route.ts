import { NextResponse } from 'next/server';

const VISHRAY_CONTEXT = `
You are Vishray AI, the institutional intelligence node for Vishray Technology.
Vishray is a specialized CRM and SaaS company for:
1. Real Estate (Builders, Developers, Partners)
2. Loan Agents / DSA (Loan tracking, document mgmt)
3. Finance Agents (Advisors, insurance)

Core Services:
- CRM Development (Bespoke logic)
- Calling Systems (IVR, Auto-dialer, Recording)
- Meta & Google Ads Sync (Sub-2 second lead capture)
- Managed Website Development & Hosting
- Inventory Management for Real Estate

Your tone: Professional, institutional, high-fidelity, slightly technical but accessible.
Always aim to help the user understand how Vishray's "Operational Logic" can scale their firm.
Primary Goal: Encourage the user to book a demo.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // If OPENAI_API_KEY is not in env, we return a smart mocked response based on Vishray context
    if (!process.env.OPENAI_API_KEY) {
      const lastMessage = messages[messages.length - 1].content.toLowerCase();
      
      let response = "I'm the Vishray Intelligence Node. How can I assist with your operational logic today?";
      
      if (lastMessage.includes("real estate") || lastMessage.includes("property")) {
        response = "Our Real Estate CRM is engineered for project velocity. It includes inventory tracking and lead management for builders. Would you like to see the architecture in a demo?";
      } else if (lastMessage.includes("loan") || lastMessage.includes("dsa")) {
        response = "The Vishray DSA CRM automates application tracking and payout logic. It scales with your agent network. Shall we book a demo hub session?";
      } else if (lastMessage.includes("website") || lastMessage.includes("hosting")) {
        response = "We provide managed institutional hosting and premium website development. We build high-conversion landing pages for real estate and finance firms.";
      } else if (lastMessage.includes("calling") || lastMessage.includes("dialer")) {
        response = "Our integrated calling system translates to sub-second response times. It includes IVR, auto-dialers, and call recording logic. Ready for a demo?";
      } else if (lastMessage.includes("pricing") || lastMessage.includes("cost")) {
        response = "Vishray pricing is tiered based on your operational scale. You can find our baseline structures on the /pricing page, or we can discuss a bespoke cluster configuration in a demo.";
      }

      return NextResponse.json({ 
        message: { role: 'assistant', content: response } 
      });
    }

    // Real OpenAI Implementation
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: VISHRAY_CONTEXT },
          ...messages
        ],
        temperature: 0.7,
      }),
    });

    const data = await openaiRes.json();
    return NextResponse.json({ message: data.choices[0].message });

  } catch (error) {
    console.error('Chat Error:', error);
    return NextResponse.json({ error: 'Internal logic oscillation' }, { status: 500 });
  }
}
