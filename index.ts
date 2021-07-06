import express from 'express';
import dotenv from 'dotenv';
import { Client } from '@notionhq/client';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? '';

const getProjects = async () => {
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
}
const data = getProjects();
console.log('data', data);

app.use('/app/data', (_, res: express.Response) => {
  res.send(data);
});

console.log(`server running at http ${port}`);
