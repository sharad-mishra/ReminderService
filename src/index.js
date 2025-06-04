const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
//const { sendBasicEmail } = require('./services/email-service');
const cron = require('node-cron');


const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
        // sendBasicEmail(
        //     'support@airline.com',
        //     'airline.booking.backend.email@gmail.com',
        //     'Test Email',
        //     'This is a test email sent from the Reminder Service.'
        // );
        cron.schedule('*/2 * * * *', ()=>{
            console.log('running a task every two minutes ');
        });
    });
}

setupAndStartServer();