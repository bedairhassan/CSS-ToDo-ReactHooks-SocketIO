// npm run watch // runs nodemon
var express = require('express');
var socket = require('socket.io');

// import {mysocketid} from './events'
// import {mysocketid} from './events'

// App setup
var app = express();
var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000,');
});

// Static files
// app.use(express.static('public'));

// Server Variables
var users = [] // {socketid,whocansendmefr}
var tasks = []

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    // base code
    socket.emit(`users`, users)
    // base code, users.push
    console.log(new Date(), `New Socket Has Connected`, { src: socket.id })
    users.push({ src: socket.id })
    //
    console.log(new Date(), `users`, users)

    const TriggerisChecked = (tasks, id) => {

        var obj = tasks.filter(task => task.id === id)[0]
        const reducedTasks = tasks.filter(task => task.id !== id)
        obj = { ...obj, isChecked: !obj.isChecked }
        // tasksSet([...reducedTasks, obj])
        return [...reducedTasks, obj]
    }

    socket.on(`TriggerisChecked`, id => {

        // warn: algocheck
        const reducedTasks = TriggerisChecked(tasks,id)
        tasks=[...reducedTasks] // since i already reduced one task only1

        socket.emit(`loadMyTasks`, tasks.filter(task => task.src === socket.id))
    })


    socket.on(`addtask`, name => {

        const addedTask = { isChecked: false, id: makeid(10), src: socket.id, name }

        tasks.push(addedTask)
        console.log(new Date(), addedTask)
        socket.emit(`loadMyTasks`, tasks.filter(task => task.src === socket.id))
        console.log(tasks)
    })

    socket.on(`disconnect`, () => {

        for (let i = 0; i < users.length; i++) {

            if (users[i].src === socket.id) {

                users.splice(i, 1)
                break;
            }
        }

        socket.disconnect()

        console.log(new Date(), `users`, users)
        io.emit(`users`, users)
    })
});

// cheat sheet
// io.emit(event, data)
// socket.broadcast.to(target).emit(event, data)