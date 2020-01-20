const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var port = 8080;
app.use(bodyParser.json());

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

app.post('/login', (req, res) => {
    var { username, password } = req.body;
    var result = {
        success: true,
        message: "success"
    }
    setTimeout(() => {
        if (username && username != "" && password && password != "") {
            if (validateEmail(username)) {
                res.json(result);
            } else {
                result.success = false;
                result.message = "Invalid Email.";
                res.json(result);
            }
        } else {
            result.success = false;
            result.message = "Email and password cannot be empty";
            res.json(result);
        }
    }, 1500);
});

app.listen(port, () => console.log("Server Ready On port" + port));