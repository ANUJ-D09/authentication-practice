const express = require("express");
const app = express();
const port = 3014;

app.use(express.json());

const users = [];

function generateToken() {
    let options = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', 7, 8, 9, -0
    ];

    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;
}

app.post('/signup', function(req, res) {
    const userName = req.body.username;
    const passWord = req.body.passWord;

    users.push({
        userName: userName,
        passWord: passWord
    })
    res.json({ message: "hey" })
});

app.post('/signin', function(req, res) {
    const userName = req.body.username;
    const passWord = req.body.passWord;

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});