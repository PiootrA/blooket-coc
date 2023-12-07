import moment from 'moment';
import styles from '@styles/app.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const time = new Date(new Date("Dec 8 2023 8:00:00 PM").toLocaleString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}));
    const [fullTime, setFullTime] = useState<string>("...");
    const [released, setReleased] = useState<boolean>(false);

    setInterval(() => {
        setFullTime(moment(time).fromNow());
        if (moment(time).isBefore(moment())) {
            setReleased(true);
        }
    }, 100);

    return (
        <>
            <div className={styles.text}>
                <h1>Contest of Candy</h1>
                {
                    !released ? <>
                        <p>Releasing {fullTime}</p>
                        <p>{moment(time).format("h:mm:ss a")}</p>
                    </> : <Link to="https://contest.blooket.com">Go to Contest</Link>
                }
            </div>
            <div className={styles.background} />
        </>
    )
};