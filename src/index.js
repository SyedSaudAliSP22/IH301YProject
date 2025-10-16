const app = require("./app");

const port = process.env.PORT || 8081;

app.listen(port, () => {
  console.log(
    `App listening on port ${port}: http://localhost:${port}/index.html`
  );
});
