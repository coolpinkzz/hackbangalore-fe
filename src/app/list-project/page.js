import {Box, Button, Card, CardBody, CardHeader, Heading, HStack, Input, Stack, StackDivider, Text, Textarea} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function ListProject() {
    return (
        <div className='w-[90%] mx-auto my-[8rem] h-[100vh]'>
            <div className='flex items-center'>
                <div className='w-1/2 flex justify-center'>
                    <Image
                        src="/list-project.jpg"
                        width={500}
                        height={450}
                        alt="Picture of the author"
                    />
                </div>
                <div className='w-1/2 text-center'>
                    <Card>
                        <CardHeader className='text-start'>
                            <Heading color='gray-dark' size='xl'>List Your Project ✨</Heading>
                            <Text className='mt-3' color='purple' fontWeight={500}>Share your socially impactful and sustainable innovative ideas with us, and we'll connect you with potential investors.</Text>
                        </CardHeader>

                        <CardBody>
                            <Input name='projectName' className='my-4' placeholder='Project/Company Name' />
                            <Textarea name='description' placeholder='Description..' />
                            <HStack spacing='4'>
                                <Input name='foundedIn' className='my-4' placeholder='Founded In' />
                                <Input name='fundRaised' className='my-4' placeholder='Fund Raised So Far' />
                            </HStack>
                            <HStack>
                                <Input name='location' className='' placeholder='Location' />
                                <Input name='equityTaken' className='' placeholder='Equity Taken' />

                            </HStack>
                            <div className='text-start'>
                                <Button type="submit" className='my-4' colorScheme='purple' size='md'>
                                    Submit
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>

            </div>

        </div>
    )
}
