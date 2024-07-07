document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    const line = document.querySelector('.line');
    let tot_width=line.getBoundingClientRect().width
    let n = 0;
    let m = tot_width-20; // Using percentage
    let intervalId=null
    console.log(line.getBoundingClientRect().width)
    
    let click_time=0
    line.addEventListener('click', () => {
        click_time+=1
        if(click_time%2!==0){
                intervalId = setInterval(() => {
                if (n < tot_width-20) {
                    circle.style.marginLeft = `${n}px`;
                    n += 1; // Increase the increment for visible movement
                    console.log(n);
                } else {
                    m -= 1;
                    circle.style.marginLeft = `${m}px`;
                    if (m < 0) {
                        n = 0;
                        m = tot_width-20;
                    }
                }   
            },5); // Increase interval time to make movement visible
        }
        else{
            clearInterval(intervalId)
        }
    });
});
