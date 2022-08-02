import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import routes from "./routes"

AppDataSource.initialize().then(async () => {
    
    const app = express()
    app.use(bodyParser.json())
    app.use(routes)

    app.listen(8080)  
    console.log("Express server has started on port 8080. Open http://localhost:8080 to see results")

}).catch(error => console.log(error))
