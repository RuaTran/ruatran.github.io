import { Box, SimpleGrid, List, ListItem, ListIcon, Card, CardHeader, Text, CardBody, CardFooter, Button, Heading } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Projects() {
    return (
        <Box className='projects' id='projects' >
            <Box ml={{base: '20px', md:'17.5%'}} mr={{base: '20px', md:'17.5%'}} mb={{base: '120px', md:'22.5%'}} mt={{base: '120px', md:'22.5%'}} pt={{base: '0px', md:'0'}}>
            <span className="intro-1">Completed Projects</span>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                
                <Card backgroundColor={'#100216'} textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' className="project-card"> QR Code Ticketing System</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    Automatically generates QR Codes for tickets for clients stored in a MySQL database. Interfaces with MySQL database or Google Sheets for easy use by technical and non-technical users. This was a lot of fun to get working, and I'm happy that people use it.
                                </ListItem>
                                <ListItem className="details">
                                    <ul className = "project-tags">
                                        <li className = "project-tag">Python</li>
                                        <li className = "project-tag">Linux</li>
                                        <li className = "project-tag">MySQL</li>
                                        <li className = "project-tag">OAuth 2.0</li>
                                        <li className = "project-tag">Google API</li>
                                        <li className = "project-tag">HTML</li>
                                        <li className = "project-tag">CSS</li>
                                        <li className = "project-tag">JavaScript</li>
                                        <li className = "project-tag">PHP</li>
                                    </ul>
                                </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/QR-Code-Ticketing">Learn More</a></Button>
                    </CardFooter>
                </Card>


                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' className="project-card" >RSA Public Key Cryptography</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    An implementation of RSA public key cryptography allowing for users to generate public/private keys and use them to encrypt/decrypt files. Has three seperate executables keygen, encoder, and decoder for the aforementioned purposes.
                                </ListItem>
                                <ListItem className="details">
                                    <ul className = "project-tags">
                                        <li className = "project-tag">C</li>
                                        <li className = "project-tag">Python</li>
                                        <li className = "project-tag">Linux</li>
                                    </ul>
                                </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/rsa-encryption-tool">Learn More</a></Button>
                    </CardFooter>
                </Card>

                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' className="project-card" >2D Skeletal Animation Library and Game Engine</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    A simple 2D skeletal animation library, written in Java and featured in a simple custom game engine I wrote to showcase a sample 2D animation. 
                                </ListItem>
                                <ListItem className="details">
                                    <ul className = "project-tags">
                                        <li className = "project-tag">Java</li>
                                    </ul>
                                </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button ><a href="https://github.com/RuaTran/java-2d-skeletal-animation">Learn More</a></Button>
                    </CardFooter>
                </Card>

                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' className="project-card" >みんなのリズム天国 Homage</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    A simple rhythm game created as an homage to Rhythm Heaven, otherwise known as みんなのリズム天国. Aside from the music and font, all art assets, animations, game design, and programming were done by me, and I had a lot of fun making it. Features a simple GLSL shader. Check it out!
                                </ListItem>
                                <ListItem className="details">
                                    <ul className = "project-tags">
                                        <li className = "project-tag">Yacc</li>
                                        <li className = "project-tag">GLSL</li>
                                    </ul>
                                </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/rhythm-tengoku-spinoff">Learn More</a></Button>
                    </CardFooter>
                </Card>

                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' className="project-card" >Huffman Coding and Image Cryptography Tool</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    A stenography tool that uses Huffman Coding to compress and disguise text, then embeds user-specified secret text messages in otherwise inconspicuous images. These images can then be passed sent around and the hidden message can be deciphered only using the included decoder.
                                </ListItem>
                                <ListItem className="details">
                                    <ul className = "project-tags">
                                        <li className = "project-tag">C</li>
                                        <li className = "project-tag">Linux</li>
                                    </ul>
                                </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/image-cryptography">Learn More</a></Button>
                    </CardFooter>
                </Card>

                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' className="project-card" >Portfolio Website</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    The website you are currently browsing; thanks for being here by the way! Below is the source code that you are free to inspect, it will be updated as I continue working on this site too. It's responsive, so it should work on all your devices!
                                </ListItem>
                                <ListItem className="details">
                                    <ul className = "project-tags">
                                        <li className = "project-tag">TypeScript</li>
                                        <li className = "project-tag">HTML</li>
                                        <li className = "project-tag">CSS</li>
                                        <li className = "project-tag">JavaScript</li>
                                        <li className = "project-tag">React</li>
                                        <li className = "project-tag">Chakra</li>
                                    </ul>
                                </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/ruatran.github.io">Learn More</a></Button>
                    </CardFooter>
                </Card>

                </SimpleGrid>

            </Box>
        </Box>
    )
}