import postStyles from '../../styles/Contact.module.css';
import utilStyles from '../../styles/Utils.module.css';
import Layout from '../../components/Layout';
import Link from 'next/link';

const post = ({post}) => {
    return (
        <Layout title="Contact" description="The contact page">
            <div className={postStyles.postContainer}>
                <div className="container-padded">
                    <h1 className='text-3xl'>Post Page</h1>
                    <style jsx>{`
                        h1 {
                            color: white;
                        }
                    `}</style>
                </div>
                <div className="w60 bg-slate-800 h-screen p-20">
                    <div className="text-white font-bold uppercase text-3xl">{post.title}</div>
                    <div className="text-white text-2xl capitalize my-5">{post.body}</div>
                    <Link href="/blog"><span className="text-yellow-300 cursor-pointer italic text-xl">Go back...</span></Link>
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}

export default post;