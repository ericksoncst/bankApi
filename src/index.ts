import app from "./config/app";
import setUpRoute from './config/routes'

const port = 5000;

setUpRoute(app)

app.listen(port, () => console.log(`App listening on http://localhost:${port}`))