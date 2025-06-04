const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');

const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom , mailTo , mailSubject , mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log(response);
    }catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email sending failed');
    }
}

const fetchPendingEmails = async (timestamp) => {
    try{
        const response = await repo.get({
            status: 'InProcess'
        });
        return response;
    }catch(error){
        console.error(error);
    }
}

const createNotification = async (data) => {
    try {
        console.log(data);
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error; // Add this line
    }
}

const updateTicket = async (ticketId,data) => {
    try{
        const response = await repo.update(ticketId,data);
        return response;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}