
import express,{Request,Response} from "express";

const app = express();
app.get("/", (req : Request, res : Response) => {
  res.status(200).send("Hello world!");
});

app.listen(3000, () => {
  console.log(`Server chl raha hai!!`);
});
