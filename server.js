const express = require("express");

const app = express();
const port = process.env.PORT || 8086;

app.use(express.static("frontend"));
app.use(express.json());

var users = [
    {
        "id": 1,
        "name": "naveen",
        "gender": "MALE",
        "image": "https://randomuser.me/api/portraits/men/91.jpg"
    },
    {
        "id": 2,
        "name": "danush",
        "gender": "MALE",
        "image": "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        "id": 3,
        "name": "jessi",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/18.jpg"
    },
    {
        "id": 4,
        "name": "punnam",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        "id": 5,
        "name": "lily",
        "gender": "female",
        "image": "https://randomuser.me/api/portraits/women/26.jpg"
    },
    {
        "id": 6,
        "name": "juan",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/88.jpg"
    },
    {
        "id": 7,
        "name": "valtteri rantala",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        "id": 8,
        "name": "Monsieur",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        "id": 9,
        "name": "Don",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/30.jpg"
    },
    {
        "id": 10,
        "name": "Çetin",
        "gender": "male",
        "image": "https://randomuser.me/api/portraits/men/27.jpg"
    }
];

var nextid = 11;

function findindex(id) {
    for (var i = 0; i < users.length; i++) {
        if (id === users[i].id) {
            return i;
        }
    }

    return -1;
}

app.get("/api/users", function(req, res) {
    res.json(users);
});

app.get("/api/users/:id", function(req, res) {
    var id = Number(req.params.id);
    var index = findindex(id);

    if (index === -1) {
        return res.status(404).json({
            "message": "user not found with id:" + id
        });
    }

    res.json(users[index]);
});

app.get("/api/randomuser", function(req, res) {
    if (users.length === 0) {
        return res.status(404).json({
            "message": "no users found"
        });
    }

    var randomindex = Math.floor(users.length * Math.random());

    return res.json(users[randomindex]);
});

app.post("/api/users", function(req, res) {
    var newuser = req.body;

    var tempuser = {
        "id": nextid,
        "name": newuser.name,
        "gender": newuser.gender,
        "image": newuser.image
    };

    nextid = nextid + 1;

    users.push(tempuser);

    return res.status(201).json({
        "message": "user created successfully",
        "user": tempuser
    });
});

app.put("/api/users/:id", function(req, res) {
    var id = Number(req.params.id);
    var index = findindex(id);

    if (index === -1) {
        return res.status(404).json({
            "message": "user not found with id:" + id
        });
    }

    users[index].name = req.body.name;
    users[index].gender = req.body.gender;
    users[index].image = req.body.image;

    return res.json({
        "message": "user updated successfully",
        "user": users[index]
    });
});

app.delete("/api/users/:id", function(req, res) {
    var id = Number(req.params.id);
    var index = findindex(id);

    if (index === -1) {
        return res.status(404).json({
            "message": "user not found with id:" + id
        });
    }

    var deleteduser = users.splice(index, 1);

    return res.json({
        "message": "user deleted successfully",
        "user": deleteduser[0]
    });
});

app.listen(port, function() {
    console.log("Server is running on http://localhost:" + port);
});