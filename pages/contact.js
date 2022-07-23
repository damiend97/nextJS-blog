import contactStyles from '../styles/Contact.module.css';
import utilStyles from '../styles/Utils.module.css';
import Layout from '../components/Layout';

const blog = () => {
    return (
        <Layout title="Contact" description="The contact page">
            <div className={contactStyles.contactContainer}>
                <div className="container-padded">
                    <h1 className='text-3xl'>Contact Page</h1>
                    <style jsx>{`
                        h1 {
                            color: white;
                        }
                    `}</style>
                </div>
                <div className="w60 bg-slate-800 h-screen"></div>
            </div>
        </Layout>
    );
};

export default blog;