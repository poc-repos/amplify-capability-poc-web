import styles from '@/styles/Home.module.css'
import { Divider, Flex, Image, Link, Menu, MenuButton, MenuItem, Text, useTheme } from '@aws-amplify/ui-react'
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Navbar({ role, pageLinks }) {
  const theme = useTheme();
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  return (
    <Flex
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      alignContent="space-between"
      wrap="nowrap"
      gap="1rem"
      width={{ base: '100%', large: '85%' }}
      position={{base: 'fixed', large: 'relative'}}
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
          <MenuItem isDisabled>Role:&nbsp;<i>{role || '-'}</i></MenuItem>
          <Divider />
          <MenuItem isDisabled>Pages</MenuItem>
          {pageLinks && pageLinks.map((pageLink) => (
            <MenuItem key={pageLink.text}>{pageLink.text}</MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={signOut}>Signout</MenuItem>
        </Menu>
      </Text>
    </Flex>
  )
}