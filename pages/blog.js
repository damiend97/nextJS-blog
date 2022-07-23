import blogStyles from '../styles/Blog.module.css';
import utilStyles from '../styles/Utils.module.css';
import Layout from '../components/Layout';
import { getStaticPaths } from './blog/[id]';
import Link from 'next/link';

const blog = ({posts}) => {
    console.log(posts);
    return (
        <Layout title="Blog" description="The blog page">
            <div className={blogStyles.blogContainer}>
                <div className="container-padded">
                    <h1 className='text-3xl'>Blog Page</h1>
                    <style jsx>{`
                        h1 {
                            color: white;
                        }
                    `}</style>
                </div>
                <div className="posts p-20">
                    {posts.map(post => {
                        return (
                            <div className="p-12 border mb-12 border-black">
                                <div className="text-3xl uppercase text-blue-500 mb-5 font-bold cursor-pointer">
                                    <Link href="/blog/[id]" as={`/blog/${post.id}`}>
                                        <span>{post.title}&rarr;</span>
                                    </Link>
                                    </div>
                                <div className="text-xl text-blue-50 italic">{post.body}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default blog;

// STATIC GENERATION - RUNS AT BUILD TIME
export async function getStaticProps() {
    const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")).json();
    
    return {
        props: {
            posts
        }
    }
}

/*
SERVER SIDE RENDERING - RUNS ON EVERY REQUEST (PRERENDERED)
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    }
  }
}

*/

/*
CLIENT SIDE RENDERING VIA SWR - RUNS ON EVERY REQUEST (NOT-PRERENDERED)
import useSWR from 'swr'

function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}


*/