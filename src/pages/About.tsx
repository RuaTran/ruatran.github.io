import { Box, Grid, GridItem, List, ListItem, ListIcon, Image } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'
import {useState} from 'react';
import myPic from "../assets/img/myPic.png"

export default function About() {
    const [replay, setReplay] = useState(true);

    return (
        <Box className='about' id='about'>
            <Box ml={{base: '25px', md:'25%'}} mr={{base: '10px', md:'25%'}} mb={{base: '120px', md:'22.5%'}} mt={{base: '120px', md:'22.5%'}} pt={{base: '0px', md:'200'}}>
                <Grid templateRows={{ sm: 'repeat(2, 1fr)', md: 'none' }} templateColumns={{ sm: 'none', lg: 'repeat(8, 1fr)' }} gap={4} className="aligh-items-center">
                    <GridItem colSpan={4} >
                        <Box textAlign={{base: 'left', md:'left'}}>
                            <span className="intro-1">Who am I?</span>
                            <p className="">
                                Hey, I'm Chris and for as long as I can remember, I've been programming. I started with Pascal when I was ten years old, graduated to Java, C++, and Python in highschool, and initially spent two years pursuing a B.S. in Computer Science.
                            </p>
                            <p>
                                I rerouted and finally graduated with a B.S. in Cellular and Molecular Biology, but found myself increasingly gravitating towards coding projects in my spare time.
                            </p>
                            <p>
                                You'll find a list of things that I've worked on further down, but here are a list of skills I've picked up and have actually used in my projects and coursework:
                            </p>

                            <List spacing={0}>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    Standards: Java, Python, C++, C
                                    </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    Web: HTML, CSS, JavaScript, ReactJS, Chakra
                                    </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    Data/Tools: MySQL, OAuth2.0, Git, Linux
                                    </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='green.500' />
                                    Misc: ServiceNow, Photoshop, Premiere, Excel, Word
                                    </ListItem>
                            </List>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={3} >
                        <Image ml={{base: '18%', md:'25%'}} src={myPic} alt='Header Img'/>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}