import { AccessRequests } from '@/models';
import { Badge, Card, Collection, Divider, Flex, Heading, Placeholder, Text, useAuthenticator } from '@aws-amplify/ui-react'
import { DataStore } from 'aws-amplify';
import moment from 'moment';
import { useEffect, useState } from 'react';

const MyRequests = ({webapps}) => {

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);

    const { user } = useAuthenticator((context) => [context.user]);

    const getDataFromAWS = async () => {
        setLoading(true);
        const model = await DataStore.query(AccessRequests, a => a.username.eq(user && user.username));
        const sortedModel = model.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        console.table(sortedModel)
        const transformedRequests = sortedModel.map(item => {
            const webapp = webapps && webapps.filter(w => w.id == item.accessRequestsWebApplicationsRelationId);
            return {
                id: item.id,
                username: item.username,
                reason: item.accessreason,
                status: item.status,
                appid: item.accessRequestsWebApplicationsRelationId,
                appname: webapp && webapp[0].name,
                requestdate: item.requestdate,
                approverusername: item.approverusername,
                approverreason: item.approverreason
            }
        });
        setRequests(transformedRequests);
        setLoading(false);
    }

    useEffect(() => {
        getDataFromAWS();
    }, []);

    return (
        <>
            {loading &&
                <Card padding="1rem" borderRadius="medium" variation="outlined">
                    <Flex direction="column">
                        <Placeholder size="small" />
                        <Placeholder />
                        <Placeholder size="large" />
                    </Flex>
                </Card>
            }
            {!loading && <Collection
                key={'myrequest'}
                type="list"
                items={requests}
                isSearchable
                searchPlaceholder="Type to search..."
                searchNoResultsFound={
                    <Flex justifyContent="center">
                        <Text color="purple.80" fontSize="1rem">
                            No Data Found
                        </Text>
                    </Flex>
                }
                searchFilter={(item, keyword) =>
                    item.reason.toLowerCase().includes(keyword.toLowerCase())
                    || item.appname.toLowerCase().includes(keyword.toLowerCase())
                    || item.status.toLowerCase().includes(keyword.toLowerCase())
                }
                gap="0.5rem"
            >
                {(item) => (
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
                        {!item.status && <Badge variation='warning'>Pending</Badge>}
                        {item.status && item.status == "APPROVED" && <Badge variation='success'>Approved</Badge>}
                        {item.status && item.status == "REJECTED" && <Badge variation='error'>Rejected</Badge>}
                        </Flex>
                    </Card>
                )}
            </Collection>
            }
        </>
    );
}

export default MyRequests;
