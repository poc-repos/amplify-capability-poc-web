import { Button, Card, Collection, Divider, Flex, Heading, Menu, MenuButton, MenuItem, Text, TextAreaField } from '@aws-amplify/ui-react'

const AppList = ({ items }) => {

    const requestAccess = (webappid) => {

    }

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
                <Card key={item.id} padding="1rem" borderRadius="medium" variation="outlined">
                    <Heading level={4} padding="xs">{item.name}</Heading>
                    <Divider />
                    <Text padding={'small'}>{item.description}</Text>
                    <Menu
                        trigger={
                            <MenuButton variation="menu">Request Access</MenuButton>
                        }
                    >
                        <TextAreaField
                            padding={'large'}
                            autoComplete="off"
                            descriptiveText="Enter reason for the access"
                            direction="column"
                            hasError={false}
                            isDisabled={false}
                            isReadOnly={false}
                            isRequired={false}
                            placeholder="Enter reason"
                            rows="3"
                            size="small"
                            wrap="nowrap"
                        />
                        <Divider />
                        <MenuItem>Submit</MenuItem>
                    </Menu>
                    {/* <Button variation="primary" isFullWidth onClick={() => requestAccess(item.id)}>
                            Request Access
                        </Button> */}
                </Card>
            )}
        </Collection>


    );
}

export default AppList;