import  app from './appContenedor'
import './database'
import {PORT} from './config'

app.listen(PORT);
console.log('Server on port', PORT);