import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { DataStore } from '@aws-amplify/datastore';
import { Page } from '@/models';
import Layout from '@/components/layout';
import { Card } from '@aws-amplify/ui-react';

const DynamicPage = ({ title, body }) => {
    return (
        <Layout title={title}>
            <Card padding={{ base: '6rem 1rem 1rem 1rem', large: 'medium' }} borderRadius="medium" variation="outlined">
                <ReactMarkdown>{body}</ReactMarkdown>
            </Card>
        </Layout>
    )
}

export async function getStaticPaths() {
    const models = await DataStore.query(Page);

    const paths = models.map((model) => {
        return { params: { slug: model.slug } };
    });

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({ params }) {
    const model = await DataStore.query(Page, p => p.slug.eq(params.slug));

    return {
        props: {
            title: model.length > 0 ? model[0].title : "",
            body: model.length > 0 ? model[0].body : "",
        },
    }
}

export default DynamicPage