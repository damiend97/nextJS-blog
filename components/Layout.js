import Head from "next/head";
import Nav from "./Nav";
import layoutStyles from '../styles/Layout.module.css';
import utilStyles from '../styles/Utils.module.css';

export default function Layout({ children, title, description }) {
    return (
        <div className={layoutStyles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description.toString()} />
            </Head>
            <Nav />
            {children}
        </div>
    )
}
  