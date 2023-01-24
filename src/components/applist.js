import { Button, Card, Collection, Divider, Flex, Heading, Placeholder, Text } from '@aws-amplify/ui-react'
import { DataStore } from '@aws-amplify/datastore';
import { WebApplications } from '@/models';
import { useEffect, useState } from 'react'

const AppList = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getDataFromAWS = async () => {
        setLoading(true);
        const models = await DataStore.query(WebApplications);
        console.table(models);
        setItems(models)
        setLoading(false)
    }

    useEffect(() => {
        getDataFromAWS();
    }, []);

    return (
        <>
            {loading &&
                <Flex direction="column">
                    <Placeholder size="small" />
                    <Placeholder />
                    <Placeholder size="large" />
                </Flex>
            }
            {!loading && <Collection
                key={'applist'}
                type="grid"
                templateColumns={{ base: "1fr", large: "1fr 1fr 1fr" }}
                items={items || []}
                isSearchable
                searchPlaceholder="Type to search..."
                searchNoResultsFound={
                    <Flex justifyContent="center">
                        <Text color="orange.80">
                            No Data Found
                        </Text>
                    </Flex>
                }
                searchFilter={(item, keyword) =>
                    item.name.toLowerCase().includes(keyword.toLowerCase()) || item.description.toLowerCase().includes(keyword.toLowerCase())
                }
                gap="1.5rem"
            >
                {(item) => (
                    <Card key={item.id} padding="1rem" borderRadius="medium" variation="outlined">
                        <Heading level={4} padding="xs">{item.name}</Heading>
                        <Divider />
                        <Text padding={'small'}>{item.description}</Text>
                        <Button variation="primary" isFullWidth>
                            Request Access
                        </Button>
                    </Card>
                )}
            </Collection>
            }
        </>
    );
}

export default AppList;