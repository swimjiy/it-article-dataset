import express from 'express';

const app = express();

const port = process.env.PORT || 5000;
app.listen(port);

app.use('/app/data', (_, res: express.Response) => {
  res.send({ greeting: 'Hello World' });
});

console.log(`server running at http ${port}`);
