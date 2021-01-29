const nodeMailer = require('nodemailer');
const mailService = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'letstalk@mysimplehome.ca',
      pass: 'letsTalkRealEstate2019'
  }
});

export default async function handle(req, res) {
  if (req.method === 'POST') {
    const request = JSON.parse(req.body)
    const msg = {
      from: 'letstalk@mysimplehome.ca',
      to: ['ilia@mysimplehome.ca', 'rocky@mytownhome.ca'],
      subject: `💣 Lead Request from ${request.name}!`,
      html: `
        <h1>New Lead</h1>
        <p>Name: ${request.name}<p/></br>
        <p>Email: ${request.email}<p/></br>
        <p>Number: ${request.phone_number}<p/></br>
        <p>Message: ${request.message}<p/></br>
      `
    }

    await mailService.sendMail(msg, function(error, info){
      if (error) {
        res.json({ success: false, error: error })
      } else {
        res.json({ success: true })
      }
    })

  }
}
