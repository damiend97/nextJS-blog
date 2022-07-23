import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import utilStyles from '../styles/Utils.module.css';
import Layout from '../components/Layout';
import buttonStyles from '../styles/Button.module.css';
import cn from 'classnames';

export default function Home() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <Layout title="Home" description="The home page">
            <div className={styles.homeContainer}>
                <div className="container-padded">
                    <h1 className='text-3xl'>Home Page</h1>
                    <style jsx>{`
                        h1 {
                            color: white;
                        }
                    `}</style>
                    <span className={`${utilStyles.fontLg} ${utilStyles.txtWht}`}>Large Text</span>
                    <br />
                    <span className={`${utilStyles.fontSm} ${utilStyles.txtWht}`}>Small Text</span>
                    <br />
                    <button onClick={handleClick} className={cn({
                        [buttonStyles.on]: toggle === true,
                        [buttonStyles.off]: toggle === false
                    })}>Click Me</button>
                </div>
            </div>
        </Layout>
    )
}