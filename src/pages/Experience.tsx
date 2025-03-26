import { Box, Grid, GridItem, List, ListItem, ListIcon, Image } from "@chakra-ui/react"
import { CheckIcon } from '@chakra-ui/icons'
import {useState} from 'react';
import myPic from "../assets/img/myPic.png"

export default function Experience() {
    const [replay, setReplay] = useState(true);

    return (
        <Box className='experience' id='experience'>
            <Box ml={{base: '40px', md:'20%'}} mr={{base: '40px', md:'20%'}} mb={{base: '120px', md:'22.5%'}} mt={{base: '120px', md:'22.5%'}} pt={{base: '0px', md:'200'}}>
            <span className="intro-1">Work Experience</span>
                <Grid templateRows={{ sm: 'repeat(2, 1fr)', md: 'none' }} templateColumns={{ sm: 'none', lg: 'repeat(8, 1fr)' }} gap={4} className="aligh-items-center">
                    <GridItem colSpan={4} >
                        <Box textAlign={{base: 'left', md:'left'}}>
                            <p className="intro-3">Materials Coordinator</p>
                            <p className="details">MAY 2024 - DEC 2024</p> 
                            <p>
                                At Applied Materials, worked with a small team to automate synchronization of materials RFID tracking processes between MCs and PSS for SmartSheet.
                            </p>
                            <p>
                                Created multiplatform search tool to aide co-workers in searching SAP, previous record purchasing records, and suppliers for part lead times and prices.
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <Box textAlign={{base: 'left', md:'left'}}>
                            <p className="intro-3">IT Specialist/Medical Scribe</p>
                            <p className="details">MAY 2023 - MAY 2024</p> 
                            <p>
                                At McCarthy Medical Center, I aided in transitioning business from physical documentation to OfficeAlly EHR and Cozeva. Implemented a basic OCR system for electronically received faxes to be filtered into different categories to allow for easier filing.
                            </p>
                            <p>
                                Took visitation notes for physical examination appointments with doctor and helped with maintain/update patient records. 
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <Box textAlign={{base: 'left', md:'left'}}>
                            <p className="intro-3">IT Support Specialist</p>
                            <p className="details">JUL 2021 - MAY 2023</p> 
                            <p>
                                At University of California Santa Cruz, I worked together with IT staff to help students and staff around campus diagnose and resolve hardware and software issues with their PC/macOS workstations. Daily duties consisted of communicating with clients via phone, email, ServiceNow in order to create and resolve tickets with team.
                            </p>
                            <p>
                                Helped develop and maintain documentation for resolving new client issues that arose as university operations transitioned to and from remote.
                            </p>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={4} >
                        <Box textAlign={{base: 'left', md:'left'}}>
                        <p className="intro-3">Bioinformatics Lab Research Asst.</p>
                            <p className="details">JAN 2020 - MAY 2021</p> 
                            <p>
                                At University of California Santa Cruz, worked on a small bioinformatics research project for a lab on a team in an attempt to better understand the mechanisms of the human spliceosome.
                            </p>
                            <p>
                                My partner and I worked on developing and implementing an algorithm to generate visual models of potential minimum free-energy structures that could form from codon sequences. Duties consisted of researching academic papers, identifying and processing large datasets of from the human genome, ranking different structures using written algorithms based on research, and creating visualizations of them. Used RNAStructure open-source software to assist with this.
                            </p>
                        </Box>
                    </GridItem>
                </Grid>

            </Box>
        </Box>
    )
}