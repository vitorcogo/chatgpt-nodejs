const { Configuration, OpenAIApi } = require("openai");
const OPENAI_CONFIG = require('./../config/openai');

const configuration = new Configuration(OPENAI_CONFIG);
const openai = new OpenAIApi(configuration);

async function getAnswer(question) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0.5
  });
  const response = completion.data.choices[0].text;
  return response;
}

module.exports.setQuestion = async (req, res) => {
  const question = req.body.question;
  const answer = await getAnswer(question);

  res.send({ answer });
}