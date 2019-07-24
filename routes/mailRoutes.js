module.exports = function(app) {
    var MailController = require('../controller/mailController.js');
  
    // todoList Routes
    app.route('/send/mail')
      .get(MailController.sendMail);
  
  };