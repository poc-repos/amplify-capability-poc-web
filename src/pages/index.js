import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Flex, Image, Link, Menu, MenuButton, MenuItem, Text, useTheme } from '@aws-amplify/ui-react'
import Layout from '@/components/layout'
import AppList from '@/components/applist'
import FAQList from '@/components/faqlist'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const theme = useTheme();
  const title = "Amplify Studio";
  const username = "Deven";
  const role = 'Approver';
  const pageLinks = [
    { text: "Privacy", url: "/privacy" },
    { text: "Sitemap", url: "/sitemap" },
    { text: "Terms", url: "/terms" },
  ];
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
    <Layout title={title} username={username} role={role} pageLinks={pageLinks}>
      <div className={styles.center}>
        <AppList items={webApps} />
      </div>
      <FAQList items={webApps} />
    </Layout>
  )
}
