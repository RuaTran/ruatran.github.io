import { Box, Grid, GridItem } from "@chakra-ui/react"
import WavyText from "../scripts/WavyText";
import {useState} from 'react';

export default function Intro() {
    const [replay, setReplay] = useState(true);

    return (
        <Box className='intro' id='intro' >
            <Box ml={{base: '0px', md:'17.5%'}} mr={{base: '0px', md:'17.5%'}} mb={{base: '120px', md:'20.5%'}} >
                <Box textAlign={{base: 'left', md:'left'}} p={[10, 25, 25, 25]}  className={"animate__animated animate__fadeIn"}>
                    <span className="intro-1"><WavyText delay={0} duration= {0.02}text="Hello, my name is" replay={replay} /></span>
                    <h1 className="intro-2"><WavyText delay={0.5} duration= {0.02} text="Christopher Tran." replay={replay} /></h1>
                    <p className="intro-3"> 
                        I'm an aspiring software engineer based in the Silicon Valley, and I enjoy learning industry skills in frontend and backend development and applying them to personal and professional projects.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}