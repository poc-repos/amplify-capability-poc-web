import styles from '@/styles/Home.module.css'
import { Flex, Image, Link, Menu, MenuButton, MenuItem, Text, useTheme } from '@aws-amplify/ui-react'

export default function Navbar({ username }) {
  const theme = useTheme();
  return (
    <div className={styles.description}>      
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
          Hi,&nbsp;
        </code>
        <Menu menuAlign="end" className={styles.code}
          trigger={
            <MenuButton variation="link">
              {username || "User"}
            </MenuButton>
          }
        >
          <MenuItem isDisabled>Role:&nbsp;<i>Approver</i></MenuItem>
          <MenuItem>Signout</MenuItem>
        </Menu>
      </Text>
    </div>
  )
}