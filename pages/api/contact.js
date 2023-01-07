export default (req, res) => {
  let { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({
      success: true,
      message: "All fields are required",
      data: null,
    });
  }

  let mailTo = "sameembaba22@gmail.con";
  let mailSubject = "Contact Form Submission";

  let mailBody = `
        Contact Form Submission \n \n
        Name: ${name} \n
        Email:${email} \n \n
        Message: ${message}
    `;

  let mailOptions = {
    from: email,
    to: mailTo,
    subject: mailSubject,
    html: mailBody,
  };

  res.status(200).json({
    success: true,
    message: "Message sent successfully",
    data: {
      subject: mailSubject,
      body: mailBody,
    },
  });
};
