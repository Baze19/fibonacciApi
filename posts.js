import express from 'express';
import responseTime from 'response-time'

const router = express.Router();
//get the whole fibonacci number on homepage
router.get('/', (req, res) => {
    let fibonacci = [0, 1];

    for (let i = 2; i < 105; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    try {
        res.status(200).json(fibonacci)
    } catch (error) {
        console.log(error)
    }



})

router.get('/:n',  (req, res) => {
    //gething the fibonaci nth position and check for the conditions
    let n = ((req.params['n']));
    if(n <= 4  || n >= 100) res.status(404).json('nth position must not be lesser than 4 and greater than 100')
   
    let fibonacci = [0, 1];
    let nthposition = Number(n)
   
    for (let i = 2; i < 105; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    try {
        fibonacci = fibonacci.slice(nthposition - 3,nthposition + 4)
        res.status(200).json(fibonacci)

    } catch (error) {
        console.log(error)
    }


})


export default router