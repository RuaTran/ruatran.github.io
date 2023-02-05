import { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, Button, useDisclosure, Stack,  Spacer, } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import CT from '../assets/img/CT.svg';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const onUpdateActiveLink = (value: string) => { setActiveLink(value) }
  var lastScrollVal = 100;


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > lastScrollVal) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      lastScrollVal = window.scrollY;
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)

  }, [])

  const navbarPaths = [
    {
      link: "/#about",
      label: "About",
    },
    {
      link: "/#experience",
      label: "Experience",
    },
    {
      link: "/#projects",
      label: "Projects",
    },
    {
      link: "/#contact",
      label: "Contact",
    },
  ];
  const mobileNavbarPaths = [
    {
      link: "/#about",
      label: "About",
    },
    {
      link: "/#experience",
      label: "Experience",
    },
    {
      link: "/#projects",
      label: "Projects",
    },
    {
      link: "/#contact",
      label: "Contact",
    },

    {
      link: "https://drive.google.com/uc?export=download&id=1RMHPRTLswuDfFIynJGyQBdaTd9p4WRMm",
      label: "Resume",
    },
  ];


  return (
    <>
      <Flex direction='column' className={scrolled ? "scrolled navbar" : "navbar"} display='flex' pr={{ base: '20px', md: '2%' }} pl={{ base: '20px', md: '2%' }}>
        <Flex h={'80px'} alignItems={'center'} as={'nav'} >
          <Flex alignItems={'center'} w='100%' >
                <Flex className="social-icon" >
                  <a href="./" >
                    <img src={CT} alt="CT" />
                  </a>
                </Flex>
            <Spacer />
            <Box display={{ base: 'none', md: 'flex' }}>
              {navbarPaths.map((path) => { return (<Link href={path.link} className={activeLink === path.label ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(path.label)} _hover={{ textDecoration: 'none', opacity: 1, }}>{path.label}</Link>) })}
            </Box>

            {<Button minWidth='140px' display={{ base: 'none', md: 'flex' }} backgroundColor={'transparent'} className="navbar-button" >
              <Link className='intro-3' padding={[0, 0, 0, 0]} href='https://drive.google.com/uc?export=download&id=1RMHPRTLswuDfFIynJGyQBdaTd9p4WRMm' _hover={{ textDecoration: 'none' }} >Resume</Link>
            </Button>}
            <IconButton _hover={{ bg: "rgba(67, 27, 92, 0.4)" }} borderColor='#431b5c' bg={'transparent'} variant='outline' size={'lg'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen} />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} backgroundColor='black' rounded='30px' pt='15px'>
            <Stack as={'nav'} spacing={4} alignItems='center'>
              {mobileNavbarPaths.map((path) => { return (<Link href={path.link} className={activeLink === path.label ? 'active navbar-link' : 'navbar-link'} onClick={isOpen ? onClose : onOpen} _hover={{ textDecoration: 'none', opacity: 1, }}>{path.label}</Link>) })}

            </Stack>
          </Box>
        ) : null}
      </Flex>
    </>
  );
}