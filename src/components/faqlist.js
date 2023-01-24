import { Expander, ExpanderItem, Heading, View } from '@aws-amplify/ui-react'

const FAQList = ({ items }) => {
    return (
        <View width={'100%'}>
            {items && <Heading padding={'xxl 0 large 0'} level={4}>Frequently Asked Questions</Heading>}
            <Expander type="single" isCollapsible={true}>
                {items && items.map((item, index) => (
                    <ExpanderItem title={item.title} key={`item-${index}`} value={`item-${index}`}>
                        {item.description}
                    </ExpanderItem>
                ))}
            </Expander>
        </View>
    );
}

export default FAQList;