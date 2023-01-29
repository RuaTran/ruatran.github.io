import { Box, Grid, GridItem } from "@chakra-ui/react"
import {useState} from 'react';

export default function EndPoint() {
    const [replay, setReplay] = useState(true);

    return (
        <Box className='endpoint' id='endpoint' >
        </Box>
    )
}