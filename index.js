import express from 'express';
import postRoute from './posts.js';
import responseTime from 'response-time';
import cors from 'cors';



const app = express();
app.use(cors());

app.use(responseTime())

app.use('/posts', postRoute);

app.get('/',(req,res)=> {
    res.send('add the nth position to the url ')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`))
