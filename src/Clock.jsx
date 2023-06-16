import { useState } from 'react';

function Clock() {
    const nowTime = () => {
        const now = new Date();
        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        const second = String(now.getSeconds()).padStart(2, "0");
        
        return `${hour} : ${minute} : ${second}`
    }
    
    const [clock, setclock] = useState(nowTime);
    setInterval(() => setclock(nowTime), 1000);
    
    return (
        <h1 className='clockInfo'> { clock } </h1>
    )

}

export default Clock;