import styles from '@/styles/Home.module.css'
import { Divider, Flex, Image, Link, Menu, MenuButton, MenuItem, Text, useTheme } from '@aws-amplify/ui-react'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { Page } from '@/models';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const theme = useTheme();
  const [pages, setPages] = useState([]);

  const { user, signOut } = useAuthenticator((context) => [context.user]);
  console.log("user", user)
  const userGroups = user?.getSignInUserSession()?.getIdToken()?.payload["cognito:groups"];
  console.log("userGroups", userGroups)
  const allUserGroups = userGroups ? userGroups.join(",") : "-";

  const getDataFromAWS = async () => {
    const model = await DataStore.query(Page);
    setPages(model)
  }

  useEffect(()=>{
    getDataFromAWS();
  },[]);

  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      alignContent="space-between"
      wrap="nowrap"
      gap="1rem"
      width={{ base: '100%', large: '85%' }}
      position={{ base: 'fixed', large: 'relative' }}
      className={styles.navbarmenu}
    >
      <div>
        <Link href="/">
          <Image
            src="/amplifylogo.svg"
            alt="Logo"
            className={styles.vercelLogo}
            width={100}
            color={theme.tokens.colors.teal[80]}
          />
        </Link>
      </div>
      <Text>
        <code className={styles.code}>
          Hi,
        </code>
        <Menu menuAlign="end"
          trigger={
            <MenuButton variation="link">
              {(user && user.username) || "User"}
            </MenuButton>
          }
        >
          <Text padding={'medium'}><b>Role:&nbsp;</b><i style={{ color: theme.tokens.colors.teal[80] }}>{allUserGroups}</i></Text>
          <Divider />
          <MenuItem isDisabled>Pages</MenuItem>
          {pages && pages.map((page) => (
            <MenuItem key={page.id}><a href={`/${page.slug}`}>{page.title}</a></MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={signOut}>Signout</MenuItem>
        </Menu>
      </Text>
    </Flex>
  )
}