import type { NextApiRequest, NextApiResponse } from "next";

interface Response {
  data?: {
    number_of_plates: number;
  };
  success: boolean;
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
  return res.status(200).json({
    data: {
      number_of_plates: 4,
    },
    success: true,
  });
}
