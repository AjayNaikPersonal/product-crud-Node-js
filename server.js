const express = require('express')
const app = express();
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')
const {getAllProducts} = require('./controllers/products')

app.set('view engine','ejs')
app.use(express.json());

app.use('/api/v1/products', productRouter);

app.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.render('index', { products });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000

const start =async () =>{
    try {
        await connectDB();
        console.log("db connected..")
        app.listen(PORT, console.log(`server running on port ${PORT}`));
    } catch (error) {
        console.log(error)
    }
}

start();