const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { sendBasicEmail } = require('./services/email-service');
//const { sendBasicEmail } = require('./services/email-service');
const { setupJobs } = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');


const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.post('/api/v1/tickets', TicketController.create);
    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        setupJobs(); // <-- use setupJobs, not jobs()
        // sendBasicEmail(
        //     'support@airline.com',
        //     'airline.booking.backend.email@gmail.com',
        //     'Test Email',
        //     'This is a test email sent from the Reminder Service.'
        // );
    });
}

setupAndStartServer();