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
    console.log("Request Received:" + req);
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

app.post('/getItems', (req, res) => {
    var { id } = req.body;
    console.log("Request Received:" + req);
    var result = {
        success: true,
        message: "success",
        list: [
            {
                key: 1,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/12/tavuk-kapama-yemekcom.jpg',
                title: "Tavuk Kapama",
                description: "Verilen malzeme ölçüleri 40 santimetre çapında sığ fırın tepsisi içindir. Daha küçük bir tepsi kullanacaksanız, ölçüleri ve fırında pişme süresini adapte etmeniz önerilir."
            }, {
                key: 2,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/02/kiymali-patates-dolmasi-yemekcom1.jpg',
                title: "Patates Dolması",
                description: "Sevdiklerinizle birlikte hem şık hem de doyurucu bir akşam yemeği yemek istiyorsanız bu tarif tüm isteklerinizi karşılayacak türden!"
            }, {
                key: 3,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2018/12/pureli-tepsi-koftesi-yemekcom-yeni.jpg',
                title: "Püreli Köfte",
                description: "Evde hep aynı köfteleri denemekten sıkılanlar, farklı, herkesin afiyetle yiyebileceği bir tarif arayışında olanlar!"
            }, {
                key: 4,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/pacanga-boregi-tarifi-yenii.jpg',
                title: "Paçanga Böreği",
                description: "Pastırmanın büyüleyen tadı, kaşar peynirinin bir ısırıkta uzayan dokusu... Her öğünde harika bir tercih olan paçanga böreğini genelde restoranlarda başlangıç olarak yemeye alıştık."
            }, {
                key: 5,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2017/04/yag-mantisi-tarifi.jpg',
                title: "Yağ Mantısı",
                description: "Mantının her hali güzel ama Kayseri'nin bir de yağ mantısı var ki sormayın. Kayseri bir kaşığa 40 tane mantı sığdrımasıyla ünlü ama mantının bir tanesi bile sizi doyurmaya niyetli."
            }, {
                key: 6,
                image: 'https://cdn.yemek.com/mncrop/940/625/uploads/2019/02/simit-kebabi-yemekcom.jpg',
                title: "Simit Kebabı",
                description: "Gaziantep mutfağının müthiş lezzetlerinden biri olan simit kebabını yerinde yemek en güzeli! Ama bu lezzeti evde de yapmaki sevdiklerinize mükellef bir sofra kurmak istiyorsanız, size ev yapımı nefis bir simit kebabı tarifimiz var!"
            } 
        ]
    }
    setTimeout(() => {
        result.success = true;
        result.message = "";
        res.json(result);
    }, 3000);
});


app.listen(port, () => console.log("Server Ready On port" + port));