import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import utilStyles from '../styles/Utils.module.css';

const Nav = () => {
    return (
        <nav>
            <ul className={navStyles.navList}>
                <li className={navStyles.logo}>
                </li>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;