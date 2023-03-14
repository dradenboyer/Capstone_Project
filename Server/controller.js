const responses = [
  "As I see it, yes",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Don't count on it",
  "It is certain",
  "It is decidedly so",
  "Most likely",
  "My reply is no",
  "My sources say no",
  "Outlook good",
  "Outlook not so good",
  "Reply hazy try again",
  "Signs point to yes",
  "Very doubtful",
  "Without a doubt",
  "Yes",
  "Yes, definitely",
  "You may rely on it",
  "That's Ridiculous",
  "Ask Me If I Care",
  "Obviously",
  "In Your Dreams",
  "Sky's The Limit",
  "What Do You Think?",
];

module.exports = {
getResponse: (req, res) => {

      let randomIndex = Math.floor(Math.random() * responses.length);
      let randomResponse = responses[randomIndex];
      res.status(200).send(randomResponse)
      
},

addResponse: (req,res) => {
responses.push(req.body.string)
console.log(req.body.string)
res.status(200).send(req.body.string)


},

deleteResponse: (req,res) => {
 console.log(responses)
  let { response } = req.params
  console.log(response)
  let index = responses.findIndex(element => {
    element = response

  })
  responses.splice(index,1)
  console.log(responses)
}
}