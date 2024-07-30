import next, { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
  response: Response
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  const dataDirectory = path.join(process.cwd(), 'public/posts');

  // Read all files in the directory
  const files = fs.readdirSync(dataDirectory);

  const regex = new RegExp(`.*${slug}.*\\.md$`, 'i');
  const fileName = files.find((file) => regex.test(file));

  if (!fileName) {
    return NextResponse.json({ message: 'File Not Found!' }, { status: 404 });
  }

  const filePath = path.join(dataDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { content, data } = matter(fileContents);

  return NextResponse.json({ content, data }, { status: 200 });
}
