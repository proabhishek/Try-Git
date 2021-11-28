function currentTime(){
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let time = `${hour} : ${minute} : ${second}`
    // console.log(time)
    // if any hour min or sec of of single digit add 0 before
    // updateTime()
    // convert this clock into AM and PM
    document.getElementById("clock").innerText = time
}

// currentTime()

setInterval(currentTime
    
    // () => {
    //     const date = new Date()
    // let hour = date.getHours()
    // let minute = date.getMinutes()
    // let second = date.getSeconds()

    // let time = `${hour} : ${minute} : ${second}`
    // // console.log(time)
    // // if any hour min or sec of of single digit add 0 before
    // // updateTime()
    // // convert this clock into AM and PM
    // document.getElementById("clock").innerText = time
    // }
    , 1000)