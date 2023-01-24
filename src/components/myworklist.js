import { Badge, Card, Collection, Flex, Heading, Text } from '@aws-amplify/ui-react'

const MyWorklist = ({ items }) => {
    
    return (
        <Collection
            type="list"
            items={items || []}
            isSearchable
            searchPlaceholder="Search item..."
            searchNoResultsFound={
                <Flex justifyContent="center">
                    <Text color="purple.80" fontSize="1rem">
                        Nothing found, please try again
                    </Text>
                </Flex>
            }
            searchFilter={(item, keyword) =>
                item.title.toLowerCase().startsWith(keyword.toLowerCase())
            }
            gap="0.5rem"
        >
            {(item, index) => (
                <Card key={index} padding="1rem" borderRadius="medium" variation="outlined">
                    <Heading level={4} padding="xs">{item.title}</Heading>
                    <Text padding={'small'}>{item.description}</Text>                    
                    <Badge variation='success'>Approved</Badge>
                </Card>
            )}
        </Collection>
    );
}

export default MyWorklist;