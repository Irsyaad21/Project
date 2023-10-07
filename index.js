import express from"express";
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send({ name: "Irsyad", age: 21, address: "Bandung"})
});

app.listen(port, () => {
  console.log(`Server sudah menyala di port ${port}`)
})