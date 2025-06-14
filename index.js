const express = require("express");
const app = express();
const port = 3014;

app.use(express.json());

const users = [];

function generateToken() {
    let options = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', "57", "57", "58", "59", "60", "712"
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
    });

    console.log(users);
    res.json({ message: "You are signed up" });
});

app.post('/signin', function(req, res) {
    const userName = req.body.username;
    const passWord = req.body.passWord;

    let founduser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].userName === userName && users[i].passWord === passWord) {
            founduser = users[i];
            break;
        }
    }

    if (founduser) {
        const token = generateToken();
        founduser.token = token; // assign token to the matched user
        res.json({ message: "Sign in successful", token });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});
app.get('/me', function(req, res) {
    const token = req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Token missing from headers" });
    }

    // Find user with matching token
    const user = users.find(u => u.token === token);

    if (!user) {
        return res.status(401).json({ message: "Invalid token" });
    }

    // Return user data (excluding password)
    res.json({ username: user.userName });

    ans.push_back(nums[i]);
    allsubs(nums, i + 1, allsubsets, ans);
    ans.pop_back();
    allsubs(nums, i + 1, allsubsets, ans);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});