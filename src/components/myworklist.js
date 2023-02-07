import { AccessRequests } from '@/models';
import { Card, Collection, Flex, Placeholder, Text, useAuthenticator } from '@aws-amplify/ui-react'
import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import WorklistCard from './worklistcard';

const MyWorklist = ({ webapps }) => {

    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(false);

    const { user } = useAuthenticator((context) => [context.user]);

    const getDataFromAWS = async () => {
        setLoading(true);
        const model = await DataStore.query(AccessRequests);
        const sortedModel = model.sort((a, b) => new Date(b.requestdate) - new Date(a.requestdate))
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
                    <WorklistCard key={item.id} item={item} />
                )}
            </Collection>
            }
        </>
    );
}

export default MyWorklist;
