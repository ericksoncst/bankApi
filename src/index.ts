import app from "./config/app";

const port = 5000;
app.listen(port, () => console.log(`App listening on http://localhost:${port}`))

app.get('/', (req,res) => res.json('test'))