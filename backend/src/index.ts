import express from "express";
import config from "./config";
import route from "./routes";
import morgan from "morgan";
import moongose from "mongoose";
import cors from "cors";
import { handleError } from "./middlewares/handleError";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("tiny"));

app.use(route);

app.use(handleError);

moongose
  .connect(
    `mongodb+srv://${config.db_username}:${config.db_password}@projeto-integrador-vi.khpc7ms.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(config.port, () => {
      console.log(`Your app is running at port: ${config.port}`);
    })
  );
