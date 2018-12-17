const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const database = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 }
  ],
  store: [
    {
      id: 1,
      img: "https://via.placeholder.com/600/92c952",
      title: "accusamus beatae ad facilis cum similique qui sunt"
    },
    {
      id: 2,
      img: "https://via.placeholder.com/600/92c952",
      title: "accusamus beatae ad facilis cum similique qui sunt"
    },
    {
      id: 3,
      img: "https://via.placeholder.com/600/92c952",
      title: "accusamus beatae ad facilis cum similique qui sunt"
    }
  ]
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  //   res.json("it is working");
  const store = database.store;
  res.setHeader("Content-Type", "application/json");
  res.json({ store });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

/* 
/ => GET = store
/store => POST = store
/shopping_cart => POST = shopping_cart
/about => POST = about
/home => POST = home
/contact => POST = contact
*/
