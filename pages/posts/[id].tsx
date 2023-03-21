import Date from "@/components/date";
import Layout from "@/components/layout";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { Post } from "@/types/post";
import Head from "next/head";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

interface Props {
    postData: Post
}

import utilStyles from '../../styles/utils.module.css';

export default function PostDetail({ postData }: Props) {
    return (
        <Layout home={false}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </article>
        </Layout>
    );
}