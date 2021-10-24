import express from 'express';
import postRoute from './posts.js';
import responseTime from 'response-time';
import cors from 'cors';



const app = express();
app.use(cors());

app.use(responseTime())

app.use('/posts', postRoute);



const PORT = process.env.PORT || 5000;

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

