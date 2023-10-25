const app = require("./app.js");
PORT = process.env.PORT||3030
app.listen(PORT,()=>{
    console.log(`this server is listning on http://localhost:${PORT}`)
})