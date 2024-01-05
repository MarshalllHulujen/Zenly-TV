import { NextRequest, NextResponse } from "next/server";
import { getConversation } from "@/app/service/conversation-service";

export const GET = (request: NextResponse) => {
  const pathVariable = "12";
  const result = getConversation(pathVariable);
  if (result === null) {
    return NextResponse.json({ message: "Not Found" }, { status: 404 });
  }
  return NextResponse.json(result);
};

export const PATCH = (request: NextRequest) => {};

export const DELETE = (request: NextRequest) => {};