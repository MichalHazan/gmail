const { v4 } = require("uuid")
// new Date(year, month - 1, day)
module.exports.mails = [
    {
        title: "meet number 1",
        text: "bla blah blah",
        to: "jhon@gmail.com",
        from: "michal@gmail.com",
        created: new Date(2020, 1 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 2",
        text: "bla blah blah",
        to: "jhon@gmail.com",
        from: "michal@gmail.com",
        created: new Date(2020, 2 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 3",
        text: "bla blah blah",
        to: "michal@gmail.com",
        from: "jhon@gmail.com",
        created: new Date(2020, 3 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 3.1",
        text: "bla blah blah",
        to: "michal@gmail.com",
        from: "jhon@gmail.com",
        created: new Date(2020, 3 - 1, 10),
        id: v4()
    },
    {
        title: "meet number 4",
        text: "bla blah blah",
        to: "jhon@gmail.com",
        from: "michal@gmail.com",
        created: new Date(2020, 4 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 5",
        text: "bla blah blah",
        to: "jhon@gmail.com",
        from: "gili@gmail.com",
        created: new Date(2020, 5 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 6",
        text: "bla blah blah",
        to: "gili@gmail.com",
        from: "michal@gmail.com",
        created: new Date(2020, 6 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 7",
        text: "bla blah blah",
        to: "michal@gmail.com",
        from: "gili@gmail.com",
        created: new Date(2020, 7 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 8",
        text: "bla blah blah",
        to: "michal@gmail.com",
        from: "jhon@gmail.com",
        created: new Date(2020, 8 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 9",
        text: "bla blah blah",
        to: "gili@gmail.com",
        from: "michal@gmail.com",
        created: new Date(2020, 9 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 10",
        text: "bla blah blah",
        to: "michal@gmail.com",
        from: "gili@gmail.com",
        created: new Date(2020, 10 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 11",
        text: "bla blah blah",
        to: "gili@gmail.com",
        from: "jhon@gmail.com",
        created: new Date(2020, 11 - 1, 18),
        id: v4()
    },
    {
        title: "meet number 12",
        text: "bla blah blah",
        to: "jhon@gmail.com",
        from: "gili@gmail.com",
        created: new Date(2020, 12 - 1, 18),
        id: v4()
    },
]

module.exports.users = [
    {
        username: "michal@gmail.com",
        password: "123"
    },
    {
        username: "jhon@gmail.com",
        password: "123"
    },
    {
        username: "gili@gmail.com",
        password: "123"
    }
]