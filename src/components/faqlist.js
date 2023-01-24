import { Expander, ExpanderItem, Heading, View } from '@aws-amplify/ui-react'
import { DataStore } from '@aws-amplify/datastore';
import { FAQs } from '@/models';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const FAQList = () => {

    const [items, setItems] = useState([]);

    const getDataFromAWS = async () => {
        const models = await DataStore.query(FAQs);
        // console.log(models);
        setItems(models)
    }

    useEffect(() => {
        getDataFromAWS();
    }, []);

    return (
        <View width={'100%'}>
            {items && <Heading padding={'xxl 0 large 0'} level={4}>Frequently Asked Questions</Heading>}
            <Expander type="single" isCollapsible={true}>
                {items && items.map((item, index) => (
                    <ExpanderItem title={item.question} key={`item-${index}`} value={`item-${index}`}>
                        <ReactMarkdown>{item.answer}</ReactMarkdown>
                    </ExpanderItem>
                ))}
            </Expander>
        </View>
    );
}

export default FAQList;