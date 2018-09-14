const xp = require("express");
const bp = require("body-parser");
const app = xp();
app.use(xp.static( __dirname + '/weather/dist/weather' ));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./weather/dist/weather/index.html"))
  });

app.listen(8000, (errs)=>console.log(errs?errs:"Weather Api"));