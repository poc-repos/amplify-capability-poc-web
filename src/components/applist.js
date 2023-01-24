import { Button, Card, Collection, Divider, Flex, Heading, Text } from '@aws-amplify/ui-react'

const AppList = ({ items }) => {
    
    return (
        <Collection
            type="grid"
            templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
            items={items || []}
            isSearchable
            searchPlaceholder="Search web app..."
            searchNoResultsFound={
                <Flex justifyContent="center">
                    <Text color="purple.80" fontSize="1rem">
                        Nothing found, please try again
                    </Text>
                </Flex>
            }
            searchFilter={(app, keyword) =>
                app.title.toLowerCase().startsWith(keyword.toLowerCase())
            }
            gap="1.5rem"
        >
            {(item, index) => (
                <Card key={index} padding="1rem" borderRadius="medium" variation="outlined">
                    <Heading level={4} padding="xs">{item.title}</Heading>
                    <Divider />
                    <Text padding={'small'}>{item.description}</Text>
                    <Button variation="primary" isFullWidth>
                        Request Access
                    </Button>
                </Card>
            )}
        </Collection>
    );
}

export default AppList;