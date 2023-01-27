import { Button, Card, Collection, Divider, Flex, Heading, Menu, MenuButton, MenuItem, Text, TextAreaField } from '@aws-amplify/ui-react'
import AppCard from './appcard';

const AppList = ({ items }) => {    

    return (
        <Collection
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
                <AppCard key={item.id} item={item} />
            )}
        </Collection>


    );
}

export default AppList;