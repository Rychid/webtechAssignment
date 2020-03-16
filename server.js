const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const students = [
    {
        "name": "Pablo Frimpong Escobar",
        "dob": "25/12/1960",
        "prog": "Msc Business Management",
        "level": "400",
        "img": "/images/Pablo.jpg",

        "bio": "Mr. Pablo Frimpong Escobar currently has a CGPA of 2.5. He is not a very serious student, all he cares about is how to make money by any means possible."
    },
    {
        "name": "Harley Abena Quinn",
        "dob": "01/05/2001",
        "prog": "Bsc Law",
        "level": "200",
        "img": "/images/harley.jpg",
        "bio": "Harley Abena Quinn currently has a CGPA of 3.5. She is a very serious student, always pays attention in class."
    },
    {
        "name": "Raymond Kwabena Reddington",
        "dob": "15/11/1960",
        "prog": "Bsc Accounting",
        "level": "300",
        "img": "/images/ray.jpg",
        "bio": "Mr. Raymond Kwabena Reddington currently has a CGPA of 5.0. He is a very serious student,doesn't attention much in class but seems to understand everything very well. He is too smart for himself"
    },
    {
        "name": "John Akwesi Snow",
        "dob": "01/05/1980",
        "prog": "Bsc IT",
        "level": "100",
        "img": "/images/john.JPG",
        "bio": "Mr. John Akwesi Snow currently has a CGPA of 3.7. He is a very serious student,always pays attention in class."
    },
    
]



app.get('/',(req, res)=>{
    res.render("home.ejs", {
        students
    });
    //res.render("OOOOOOOWWWWWWEEEEE! we are up and running, LET'S GOOOOOOO!!!");
})

app.get('/students/:id', (req, res)=>{
    const id =req.params.id;
    const student = students[id];
    res.render("info.ejs", {
        student,
        title: 'Info'
    })
    
});

app.listen(3030, ()=>{
    console.log("listening on port 3030")
});