const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const database = {
  counters: [],
  store: [
    {
      id: 1,
      name: "Big cat",
      img: "https://i.ytimg.com/vi/RlwCG7r4saw/maxresdefault.jpg",
      title: "accusamus beatae ad facilis cum similique qui sunt"
    },
    {
      id: 2,
      name: "Small cat",
      img: "https://i.ytimg.com/vi/hiSlzuoRtIA/maxresdefault.jpg",
      title: "accusamus beatae ad facilis cum similique qui sunt"
    },
    {
      id: 3,
      name: "So-so cat",
      img:
        "https://www.cat-breeds-encyclopedia.com/images/American-bobtail-cat.jpg",
      title: "accusamus beatae ad facilis cum similique qui sunt"
    }
  ]
};

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  //   res.json("it is working");
  // res.setHeader("Content-Type", "application/json");
  res.json(database);
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
