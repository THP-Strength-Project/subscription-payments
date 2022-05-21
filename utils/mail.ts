// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendVerifyEmail = (toEmail, emailData) => {
  const msg: sgMail.MailDataRequired = {
    to: toEmail, // Change to your recipient
    from: 'douglassmoss@icloud.com', // Change to your verified sender
    templateId: 'd-2fe65ca81d8244fa8acf1b95119039a8', // Change to your
    dynamicTemplateData: emailData
  };
  return sgMail.send(msg);
};
