let stat = 0
let count = 0

const reset = async () =>  {
    document.querySelectorAll('.progress-bar-fill')[0].style.opacity = 0
    document.querySelectorAll('.progress-bar-fill')[1].style.opacity = 0
    document.querySelectorAll('.progress-bar-fill')[2].style.opacity = 0
    document.querySelectorAll('.progress-bar-fill')[0].style.width = 0
    document.querySelectorAll('.progress-bar-fill')[1].style.width = 0
    document.querySelectorAll('.progress-bar-fill')[2].style.width = 0

    document.querySelectorAll('.progress-bar-fill')[0].style.opacity = 1
    document.querySelectorAll('.progress-bar-fill')[1].style.opacity = 1
    document.querySelectorAll('.progress-bar-fill')[2].style.opacity = 1
}

const delay = () => {
    return new Promise((resolve) =>  setTimeout(resolve, 150))
}

setInterval(async () => {
    const progList = document.querySelectorAll('.progress-bar-fill')[stat];
    if (count >= 100) {
        if (stat <= 2) {
            stat++;
            if (stat === 3) {
                stat = 0;
                reset();
                await delay()
            }
        } 
        count = 0;
        return;
    }
    count++;
    progList.style.width = `${count}%`;
}, 200)