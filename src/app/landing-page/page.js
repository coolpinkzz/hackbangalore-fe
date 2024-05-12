'use client'
import {Button, Divider, Heading, Text} from '@chakra-ui/react'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import React from 'react'
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import landingVector from '../../assets/landing-page.svg'

export default function LandingPage() {

    const router = useRouter()
    return (
        <div className='w-[85%] mx-auto my-10'>
            <div className='flex justify-center items-center gap-10'>
                <div className='w-1/2'>
                    <Heading fontSize={40}>Empowering <span> <Text as='span' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>Sustainable</Text></span> Projects, Connecting Investors <Text bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>Worldwide</Text> </Heading>
                    <Divider marginY={4} orientation='horizontal' />
                    <Text fontWeight={500} fontSize={20} >Discover a diverse marketplace of social impact initiatives, from renewable energy ventures to community development programs.</Text>
                    <div className='my-4'>
                        <Button onClick={() => router.push('/select-role')} className='primary-btn' variant='solid' rightIcon={<IoArrowForwardCircleOutline />}>Get Started</Button>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-end'>
                        <Image src={landingVector} alt='landing_vector' />
                    </div>
                </div>
            </div>

        </div>
    )
}
