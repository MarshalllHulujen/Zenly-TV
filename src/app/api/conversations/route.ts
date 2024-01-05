import { NextRequest, NextResponse } from "next/server";
import { createConversation, getAllConversations } from "@/app/service/conversation-service";

// api key : IMNEMCbd6cPAlHD1TVovDfla0xwpWLDUkZsH7SwjTpI3LWqbzl6d1iRzLoLkPaV3

// GET -> /api/conversations
export const GET = async (request: NextResponse) => {
  try {
    const result = await getAllConversations();
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

// POST -> /api/conversations
export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const { members } = data;
  const createdData = createConversation(members);
  return NextResponse.json(createdData);
};
