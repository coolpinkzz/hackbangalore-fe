"use client"
import Image from "next/image";
import sample from "../../../public/entrepreneur.png";
import {BsBuildings} from "react-icons/bs";
import {Button} from "@chakra-ui/button";
import {FaCalendarAlt} from "react-icons/fa";
import {FaRegCalendarAlt} from "react-icons/fa";
import {MdOutlineAttachMoney} from "react-icons/md";
import {FaSackDollar} from "react-icons/fa6";
import {RiFundsFill} from "react-icons/ri";
import {SlPeople} from "react-icons/sl";
import {FaUsersGear} from "react-icons/fa6";
import {IoLocationOutline} from "react-icons/io5";
import {FaHeart} from "react-icons/fa";
import {Card, CardBody, Divider, Spinner, Tag} from "@chakra-ui/react";
import ViewAnalytics from "../analytics/page";
import {useEffect, useState} from "react";
import axios from "axios";

const ProjectDetails = ({params}) => {
    console.log(params)
    const [isMoreFeatureUnlocked, setIsMoreFeatureUnlocked] = useState(false)
    const [projectList, setProjectList] = useState([])

    const getProjectList = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project/listings/`)
            .then((res) => {
                const getDataById = res.data.filter((item) => item.id === params.id)
                setProjectList(getDataById[0])
                console.log(getDataById)
            });
    };

    useEffect(() => {
        getProjectList();
    }, []);

    if (projectList.length === 0) return (<div className="flex justify-center mt-16"><Spinner color="purple" size='xl' />
    </div>)

    return (
        <>
            <div className="w-[80%] mx-auto my-5">
                <Card shadow='xl' borderRadius='2xl'>
                    <CardBody className="flex gap-10">
                        <div className="w-auto height-[100%]">
                            <Image src={sample} alt="project" />
                        </div>
                        <div>
                            <div className="flex py-2">
                                <BsBuildings className="text-2xl" /> <span className="ml-2 font-bold">NON-Profit ORGANISATION</span>
                            </div>
                            <h1 className="text-3xl font-bold my-2">{projectList?.name}</h1>
                            <div className="flex gap-2 my-2">
                                {projectList?.tags?.map((item) => <Tag variant='solid' className="primary-btn" >{item}</Tag>)}
                            </div>
                            <p className="w-[550px] font-medium">
                                {projectList.title}
                            </p>
                        </div>
                        <div className="flex flex-col gap-6 items-center justify-center w-full">
                            <Button
                                w={200}
                                variant="outline"
                                rightIcon={<FaRegCalendarAlt />}
                                colorScheme="purple"
                                onClick={() => {
                                    window.location.href = 'https://calendly.com/mockrock/impactconnect-hackbanaglore-demo'
                                }}
                            >
                                Book a Demo
                            </Button>
                            <Button w={200} rightIcon={<FaHeart />} colorScheme="purple">
                                Donate
                            </Button>
                        </div>
                    </CardBody>

                </Card>

                <Card backgroundColor='white' className="mt-10" shadow='xl' borderRadius='2xl'>
                    <CardBody>

                        <h1 className="text-2xl font-bold">About {projectList.name}</h1>
                        <p className="my-4">
                            {projectList.description}
                        </p>
                        <Divider mb={5} orientation="horizontal" />
                        <div className="flex gap-5 my-4 justify-evenly">
                            <div className="flex items-center gap-2">
                                <FaRegCalendarAlt className="text-5xl" />
                                <div>
                                    <p className="font-medium">Founded</p>
                                    <p className="font-bold">{projectList.founded_in}</p>
                                </div>
                                <Divider ml={3} orientation="vertical" />
                            </div>
                            <div className="flex items-center gap-2">
                                <FaSackDollar className="text-5xl" />
                                <div>
                                    <p className="font-medium">Raised</p>
                                    <p className="font-bold">{projectList?.fund_raised}</p>
                                </div>
                                <Divider ml={3} orientation="vertical" />
                            </div>
                            <div className="flex items-center gap-2">
                                <RiFundsFill className="text-5xl" />
                                <div>
                                    <p className="font-medium"> Funding Type</p>
                                    <p className="font-bold">Series A</p>
                                </div>
                                <Divider ml={3} orientation="vertical" />
                            </div>

                            <div className="flex items-center gap-2">
                                <FaUsersGear className="text-5xl" />
                                <div>
                                    <p className="font-medium"> Team Size</p>
                                    <p className="font-bold">{projectList?.team_size}</p>
                                </div>
                                <Divider ml={3} orientation="vertical" />
                            </div>

                            <div className="flex items-center gap-2">
                                <IoLocationOutline className="text-5xl" />
                                <div>
                                    <p className="font-medium"> Location</p>
                                    <p className="font-bold">{projectList?.city}, India</p>
                                </div>
                                <Divider ml={3} orientation="vertical" />
                            </div>

                        </div>
                    </CardBody>
                </Card>
                {!isMoreFeatureUnlocked && (
                    <div className="text-center my-6">
                        <Button onClick={() => {
                            setIsMoreFeatureUnlocked(!isMoreFeatureUnlocked)
                        }} variant='solid' className="primary-btn">Unlock More Feature ✨</Button>
                    </div>
                )}

                {isMoreFeatureUnlocked ? <ViewAnalytics /> : null}

            </div>
        </>
    );
};

export default ProjectDetails;
