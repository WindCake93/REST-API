let express = require('express');
let bodyParser = require('body-parser');
let app = express();
const studentsRoutes = require('./routes');

const PORT = 3000;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use("/students",studentsRoutes);

app.listen(PORT,()=>{
    console.log(`Server is listening on Port ${PORT}`);
})