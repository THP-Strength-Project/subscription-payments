import prisma from './prisma'
import { v4 as uuidv4 } from 'uuid'
import { getURL } from './helpers'

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const sendVerifyEmail = (toEmail, emailData) => {
  const msg: sgMail.MailDataRequired = {
    to: toEmail, // Change to your recipient
    from: 'douglassmoss@icloud.com', // Change to your verified sender
    templateId: 'd-2fe65ca81d8244fa8acf1b95119039a8', // Change to your
    dynamicTemplateData: emailData
  }
  return sgMail.send(msg)
}

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

export const templateIds = {
  verify: 'd-2fe65ca81d8244fa8acf1b95119039a8',
  reset: 'd-85ea35027cc044529b84d5567043e7f9'
}

export const sendEmail = (toEmail, emailData, templateId) => {
  const msg: sgMail.MailDataRequired = {
    to: toEmail, // Change to your recipient
    from: 'douglassmoss@icloud.com', // Change to your verified sender
    templateId, // Change to your
    dynamicTemplateData: emailData
  }
  return sgMail.send(msg)
}

export const createNewTokenAndSendVerifyEmail = async (user) => {
  const verifyToken = await prisma.token.create({
    data: {
      value: uuidv4(),
      userId: user.id
    }
  })

  const verifiedURL = `${getURL()}/verify?token=${verifyToken.value}`

  const emailData = {
    user: {
      name: user.name,
      verifiedURL
    }
  }

  await sendEmail(user.email, emailData, templateIds.verify)
}

export const createTokenAndSendResetEmail = async (user) => {
  const resetToken = await prisma.token.create({
    data: {
      value: uuidv4(),
      userId: user.id
    }
  })

  const claimURL = `${getURL()}/reset?token=${resetToken.value}`

  const emailData = {
    user: {
      name: user.name,
      claimURL
    }
  }

  await sendEmail(user.email, emailData, templateIds.reset)
}
