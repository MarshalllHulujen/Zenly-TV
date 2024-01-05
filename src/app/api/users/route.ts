import { NextRequest, NextResponse } from "next/server";
import { createUser, getAllUsers } from "@/app/service/user-service";

export const GET = async () => {
    const { response, error } = await getAllUsers();
    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json({ response });
};

export const POST = async (request: NextRequest) => {
    const data = await request.json();
    const { members } = data;
    const createdUser = createUser(members);
    return NextResponse.json(createdUser)
}