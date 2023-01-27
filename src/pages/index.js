import { TabItem, Tabs, useAuthenticator, View } from '@aws-amplify/ui-react'
import Layout from '@/components/layout'
import AppList from '@/components/applist'
import FAQList from '@/components/faqlist'
import MyRequests from '@/components/myrequests'
import MyWorklist from '@/components/myworklist'
import { DataStore } from '@aws-amplify/datastore';
import { FAQs, Page, WebApplications } from '@/models'

export default function Home({ webapps, faqs, pages }) {
  const title = "Amplify Studio";
  const { user } = useAuthenticator((context) => [context.user]);
  const userGroups = user?.getSignInUserSession()?.getIdToken()?.payload["cognito:groups"];
  const isRequester = false || (userGroups && userGroups.indexOf("AllRequesters") >= 0)
  const isApprover = false || (userGroups && userGroups.indexOf("AllApprovers") >= 0)
  const webApps = [
    {
      title: 'Fiordland National Park',
      description: 'This national park includes the famous fjords of Milford, Dusky and Doubtful Sounds.',
    },
    {
      title: 'Bay of Islands, North Island',
      description: 'Three hours north of Auckland, this area features over 144 islands to explore.',
    },
    {
      title: 'Queenstown, South Island',
      description: "This hopping town is New Zealand's adventure capital and is located right on Lake Wakatipu.",
    },
    {
      title: 'Fiordland National Park',
      description:
        'This national park includes the famous fjords of Milford, Dusky and Doubtful Sounds.',
    },
    {
      title: 'Bay of Islands, North Island',
      description:
        'Three hours north of Auckland, this area features over 144 islands to explore.',
    },
  ];

  return (
    <Layout title={title} pages={JSON.parse(pages)}>
      <View padding={{ base: '6rem', large: '0' }}>
        <Tabs
          defaultIndex="0"
          padding={'1rem'}
          justifyContent="center">
          <TabItem title="Request Access">
            <AppList items={JSON.parse(webapps)} />
          </TabItem>
          {isRequester && <TabItem title="My Requests">
            <MyRequests webapps={JSON.parse(webapps)} />
          </TabItem>
          }
          {isApprover && <TabItem title="My Worklist">
            <MyWorklist items={webApps} />
          </TabItem>
          }
        </Tabs>

      </View>
      <FAQList items={JSON.parse(faqs)} />
    </Layout>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const webapps = await DataStore.query(WebApplications);
  const faqs = await DataStore.query(FAQs);
  const pages = await DataStore.query(Page);

  // Pass data to the page via props
  return {
    props: {
      webapps: JSON.stringify(webapps),
      faqs: JSON.stringify(faqs),
      pages: JSON.stringify(pages),
    },
  }
}

// export async function getStaticProps({ params }) {
//   const webapps = await DataStore.query(WebApplications);
//   const faqs = await DataStore.query(FAQs);
//   const pages = await DataStore.query(Page);

//   return {
//       props: {
//           webapps: JSON.stringify(webapps),
//           faqs: JSON.stringify(faqs),
//           pages: JSON.stringify(pages),
//       },
//   }
// }