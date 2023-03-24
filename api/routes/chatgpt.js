module.exports = (application) => {
  application.post('/question', (req, res) => {
    application.api.controllers.chatgpt.setQuestion(req, res);
  });
}