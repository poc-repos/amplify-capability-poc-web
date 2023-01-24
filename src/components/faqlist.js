import { Expander, ExpanderItem, Flex, Heading, Placeholder, View } from '@aws-amplify/ui-react'
import { DataStore } from '@aws-amplify/datastore';
import { FAQs } from '@/models';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const FAQList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getDataFromAWS = async () => {
        setLoading(true)
        const models = await DataStore.query(FAQs);
        console.table(models);
        setItems(models)
        setLoading(false)
    }

    useEffect(() => {
        getDataFromAWS();
    }, []);

    return (
        <View width={'100%'}>
            {items && <Heading padding={'xxl 0 large 0'} level={4}>Frequently Asked Questions</Heading>}
            <Expander type="single" isCollapsible={true}>
                {loading &&
                    <Flex direction="column">
                        <Placeholder size="small" />
                        <Placeholder />
                        <Placeholder size="large" />
                    </Flex>
                }
                {!loading && items && items.map((item, index) => (
                    <ExpanderItem title={item.question} key={`item-${index}`} value={`item-${index}`}>
                        <ReactMarkdown>{item.answer}</ReactMarkdown>
                    </ExpanderItem>
                ))}
            </Expander>
        </View>
    );
}

export default FAQList;