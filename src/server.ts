import app from "./app";

const port = process.env.PORT || 3000;

const server = async () => {
  app.listen(port, () => {
    console.log("Server is running");
  });
};
server();
