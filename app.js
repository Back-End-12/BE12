const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');


//IMPORT ROUTES
const authRoutes = require('./routes/auth');
const kegiatanRoutes = require('./routes/kegiatan');




// CONNECT DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '100mb',
    extended: true
    }));
app.use(cookieParser());
app.use(cors());


// ROUTES MIDDLEWARE
app.use(authRoutes)
app.use(kegiatanRoutes)



//ERROR MIDDLEWARE
 app.use(errorHandler);

const port = process.env.PORT || 8000;


app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})