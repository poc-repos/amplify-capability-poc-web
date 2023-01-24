import { Expander, ExpanderItem, Heading, View } from '@aws-amplify/ui-react'

const FAQList = ({ items }) => {
    return (
        <View width={'100%'} padding={{ base: '0px', large: 'small' }}>
            {items && <Heading padding={'small'} level={4}>Frequently Asked Questions</Heading>}
            <Expander type="single" isCollapsible={true}>
                {items && items.map((item, index) => (
                    <ExpanderItem title={item.title} value={`item-${index}`}>
                        {item.description}
                    </ExpanderItem>
                ))}
            </Expander>
        </View>
    );
}

export default FAQList;