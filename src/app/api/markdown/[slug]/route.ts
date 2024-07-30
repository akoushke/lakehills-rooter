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
  const fileNames = files.filter((file) => regex.test(file));

  if (!fileNames.length) {
    return NextResponse.json({ message: 'File Not Found!' }, { status: 404 });
  }

  const items = fileNames.map((fileName: string) => {
    const filePath = path.join(dataDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return data;
  });

  return NextResponse.json({ items }, { status: 200 });
}
