// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { uid } = req.query;
  const cookies = req.cookies;
  res.status(200).json({
    name: `다이나믹 슬러그 ${uid} 쿠키도 꺼내올 수 있어요 ${JSON.stringify(
      cookies
    )}`,
  });
}
