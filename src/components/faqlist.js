import { Expander, ExpanderItem, Flex, Heading, Placeholder, useTheme, View } from '@aws-amplify/ui-react'
import ReactMarkdown from 'react-markdown';

const FAQList = ({items}) => {
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