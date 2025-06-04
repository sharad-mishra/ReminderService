const sender = require('../config/emailConfig');

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

module.exports = {
    sendBasicEmail
}