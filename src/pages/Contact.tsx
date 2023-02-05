import { Box, Button } from "@chakra-ui/react"
import {useState} from 'react';

export default function Contact() {
    const [replay, setReplay] = useState(true);

    return (
        <Box className='contact' id='contact' >
            <Box ml={{base: '0px', md:'17.5%'}} mr={{base: '0px', md:'17.5%'}} mb={{base: '120px', md:'14.5%'}} mt={{base: '120px', md:'22.5%'}} pt={{base: '0px', md:'200'}}>
                <Box textAlign={{base: 'center', md:'center'}} p={[10, 35, 35, 35]}  className={"animate__animated animate__fadeIn"}>
                    <span className="intro-1">Contact Information</span>
                    <h1 className="intro-2">Thanks for getting to know me.</h1>
                    <p className="intro-3"> 
                        Currently looking for new career opportunities in the field! If you want to get in touch with me or have any questions, feel free to shoot me an message and I'll get back to you.
                    </p>
                    <Button mt={{base: '50px'}}><a href="mailto:dmchristran@gmail.com">Email Me</a></Button>
                </Box>
            </Box>
        </Box>
    )
}