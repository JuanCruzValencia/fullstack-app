import { ServerRest } from "@/app/requests/backend";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const body = await req.json();

  const { data } = await ServerRest.post("/tasks", { ...body });

  return NextResponse.json(data, {
    status: 201,
  });
}
