import { Box, SimpleGrid, List, ListItem, ListIcon, Card, CardHeader, Text, CardBody, CardFooter, Button, Heading } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Projects() {
    return (
        <Box className='projects' id='projects' >
            <Box ml={{base: '20px', md:'17.5%'}} mr={{base: '20px', md:'17.5%'}} mb={{base: '120px', md:'22.5%'}} mt={{base: '120px', md:'22.5%'}} pt={{base: '0px', md:'200'}}>
            <span className="intro-1">Completed Projects</span>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                <Card backgroundColor={'#100216'} textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' > QR Code Ticketing System</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    Automatically generates QR Codes for tickets for clients stored in a MySQL database. Interfaces with Google Sheets for easy use by students.
                                </ListItem>
                                <ListItem className="details">
                                    <ListIcon  as={ChevronRightIcon} color='green.500' />
                                    Py, Linux | MySQL | OAuth2.0 | Google API | HTML | CSS | JS
                                    </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/QR-Code-Ticketing">Learn More</a></Button>
                    </CardFooter>
                </Card>
                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' >Games & 2D Skeletal Animation</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    A simple 2D skeletal animation library, written in Java and featured in a simple custom game engine I wrote. Also a homage to みんなのリズム天国; uses a simple GLSL shader to outline title text.
                                </ListItem>
                                <ListItem className="details">
                                    <ListIcon  as={ChevronRightIcon} color='green.500' />
                                    Java | OpenGL | Yacc
                                    </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button ><a href="https://github.com/RuaTran/rhythm-tengoku-spinoff">Learn More</a></Button>
                    </CardFooter>
                </Card>
                <Card backgroundColor={'#100216'}  textAlign={{base: 'center', md:'left'}}>
                    <CardHeader>
                    <Heading size='md' >Cryptography Applications</Heading>
                    </CardHeader>
                    <CardBody>
                    <List spacing={1} textAlign={{base: 'left', md:'left'}}>
                                <ListItem >
                                    An implementation of RSA public key cryptography allowing for users to generate public/private keys and use them to encrypt/decrypt files. A python application that uses Huffman Coding to embed secret messages in images.
                                </ListItem>
                                <ListItem className="details">
                                    <ListIcon  as={ChevronRightIcon} color='green.500' />
                                    C | Python
                                    </ListItem>
                            </List>
                    </CardBody>
                    <CardFooter>
                    <Button><a href="https://github.com/RuaTran/rsa-encryption-tool">Learn More</a></Button>
                    </CardFooter>
                </Card>
                </SimpleGrid>

            </Box>
        </Box>
    )
}