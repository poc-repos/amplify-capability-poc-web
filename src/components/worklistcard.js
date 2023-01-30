import { AccessRequests } from "@/models";
import { Alert, Badge, Card, Divider, Flex, Heading, Menu, MenuButton, MenuItem, Radio, RadioGroupField, Text, TextAreaField, useAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useState } from "react";

const WorklistCard = ({ item }) => {
    const [reason, setReason] = useState(item.approverreason);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [status, setStatus] = useState(item.status || 'PENDING');
    const { user } = useAuthenticator((context) => [context.user]);

    const processRequest = async () => {
        setIsSubmitted(true);
        /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
        const models = await DataStore.query(AccessRequests, ar => ar.id.eq(item.id));
        const CURRENT_ITEM = models && models[0];
        if (CURRENT_ITEM) {
            const newData = await DataStore.save(AccessRequests.copyOf(CURRENT_ITEM, record => {
                // Update the values on {item} variable to update DataStore entry
                record.approverusername = user && user.username;
                record.approverreason = reason;
                record.status = status;
            }));
            item.approverusername = user && user.username;
            item.approverreason = reason;
            item.status = status;
            console.table(newData)
            setIsSubmitted(false);
        }
    }

    return (
        <Card key={item.id} padding="1rem" borderRadius="medium" variation="outlined">
            <Heading level={4} padding={"0 0 small 0"}>{item.appname}</Heading>
            <Divider />
            <Text><b>Request Date: </b>{item.requestdate}</Text>
            <Text><b>Reason: </b>{item.reason}</Text>
            <Divider />
            <Text><b>Approved By: </b>{item.approverusername || '-NA-'}</Text>
            <Text><b>Approval Reason: </b>{item.approverreason || '-NA-'}</Text>
            <Divider />
            <Flex padding={"small 0"}>
                <Text><b>Status: </b></Text>
                {status && status == "PENDING" && <Badge variation='warning'>{status}</Badge>}
                {status && status == "APPROVED" && <Badge variation='success'>{status}</Badge>}
                {status && status == "REJECTED" && <Badge variation='error'>{status}</Badge>}
            </Flex>
            <Divider />
            <Menu
                trigger={
                    <Flex>
                        <MenuButton variation='link'>
                            Process Request
                        </MenuButton>
                        {isSubmitted && <Alert variation="success">Saved Successfully</Alert>}
                    </Flex>
                }
            >
                <RadioGroupField
                    label="Select Action: "
                    name="language"
                    direction="row"
                    padding={'large'}
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <Radio value="APPROVED">APPROVE</Radio>
                    <Radio value="REJECTED">REJECT</Radio>
                    <Radio value="PENDING">PENDING</Radio>
                </RadioGroupField>
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
                    onChange={(e) => { setReason(e.currentTarget.value) }}
                />
                <Divider />
                <MenuItem onClick={processRequest}>
                    Submit
                </MenuItem>
            </Menu>
        </Card>
    );
}

export default WorklistCard;