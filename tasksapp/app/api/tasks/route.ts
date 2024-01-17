import { ServerRest } from "@/app/requests/backend";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = await ServerRest.post("/tasks", { ...req.body });

  console.log(data);

  return res.status(200).send(data);
}
