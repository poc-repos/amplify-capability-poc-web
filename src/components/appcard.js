import { Alert, Card, Divider, Flex, Heading, Loader, Menu, MenuButton, MenuItem, Text, TextAreaField, useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";
import { DataStore } from '@aws-amplify/datastore';
import { AccessRequests } from '@/models';
import moment from "moment/moment";

const AppCard = ({ item }) => {

    const [reason, setReason] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [savedData, setSavedData] = useState();

    const { user } = useAuthenticator((context) => [context.user]);
    const userGroups = user?.getSignInUserSession()?.getIdToken()?.payload["cognito:groups"];
    const isRequester = false || (userGroups && userGroups.indexOf("AllRequesters") >= 0)

    const requestAccess = async () => {
        setIsSubmitted(true);
        const newData = new AccessRequests({
            "username": user && user.username,
            "accessRequestsWebApplicationsRelationId": item.id,
            "requestdate": moment().format("YYYY-MM-DD"),
            "accessreason": reason,
        })
        console.table(newData)
        const newDataSaved = await DataStore.save(newData);
        setSavedData(newDataSaved)
        setIsSubmitted(false);
        setReason();
    }

    return (
        <Card key={item.id} padding="1rem" borderRadius="medium" variation="outlined">
            <Heading level={4} padding="xs">{item.name}</Heading>
            <Divider />
            <Text padding={'small'}>{item.description}</Text>
            {isRequester && <Menu
                trigger={
                    <Flex>
                        <MenuButton variation="menu">
                            Request Access
                            {isSubmitted && <Loader />}
                        </MenuButton>
                        {savedData && <Alert variation="success">Saved Successfully</Alert>}
                    </Flex>
                }
            >
                <TextAreaField
                    padding={'0 large large large'}
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
                    value={reason}
                    onChange={(e) => { setSavedData(); setReason(e.currentTarget.value) }}
                />
                <Divider />
                <MenuItem onClick={requestAccess}>
                    Submit
                </MenuItem>
            </Menu>
            }
        </Card>
    );
}

export default AppCard;