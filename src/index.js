import express from 'express';
const app = express();

import { PORT } from './config/serverConfig.js';
import { connect} from './config/dbConfig.js';
import apiRoutes from './routes/index.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

const setupAndStartServer = async () => {
    app.listen(PORT, () => {
        console.log("Server running at PORT: " + PORT);
    });
    try {
        await connect();
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        console.log('Not able to connect to database');
    }
}

setupAndStartServer();