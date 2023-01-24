import { useRouter } from 'next/router'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { DataStore } from '@aws-amplify/datastore';
import { Page } from '@/models';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout';
import { Card, Flex, Placeholder, View } from '@aws-amplify/ui-react';

const DynamicPage = () => {
    const router = useRouter()
    const { slug } = router.query

    const [page, setPage] = useState("");
    const [loading, setLoading] = useState(false);

    const getDataFromAWS = async () => {
        setLoading(true);
        const model = await DataStore.query(Page, p => p.slug.eq(slug));
        console.table(model)
        setPage(model.length > 0 ? model[0] : "")
        setLoading(false);
    }

    useEffect(() => {
        getDataFromAWS();
    }, []);

    return (
        <Layout title={page && page.title}>
            {loading &&
                <Flex direction="column">
                    <Placeholder size="small" />
                    <Placeholder />
                    <Placeholder size="large" />
                </Flex>
            }
            {!loading && page && <Card padding={{ base: '6rem', large: 'medium' }} borderRadius="medium" variation="outlined">
                <ReactMarkdown>{page.body}</ReactMarkdown>
            </Card>
            }
        </Layout>
    )
}

export default DynamicPage