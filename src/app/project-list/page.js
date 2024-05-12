"use client";

import {Checkbox} from "@chakra-ui/checkbox";
import {Category} from "../select-category/JsonData";
import {Card} from "@chakra-ui/card";
import {Stack} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
import {MdOutlineAttachMoney} from "react-icons/md";
import Image from "next/image";
import sample from "../../../public/investor.png";
import {IoLocationOutline} from "react-icons/io5";
import {SlPeople} from "react-icons/sl";
import {CiCalendar} from "react-icons/ci";

import {IoSearch} from "react-icons/io5";
import {
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    Tag,
} from "@chakra-ui/react";
import {IoIosAddCircleOutline} from "react-icons/io";
import {FcSearch} from "react-icons/fc";
import {CiFilter} from "react-icons/ci";
// import { useState } from "react";
import {useRouter} from "next/navigation";
//import axios from "axios";
import {useEffect, useState} from "react";
import axios from "axios";

const ProjectList = () => {
    const router = useRouter();
    const [projectList, setProjectList] = useState([])
    const [filteredProjectList, setFilteredProjectList] = useState([])
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])



    const [searchValue, setSearchValue] = useState('')
    // const roleType = localStorage.getItem("key");

    // const [viewDetails,setViewDetails] = useState(false)

    const handleClick = (id) => {
        router.push(`/${id}`);
    };

    const getProjectList = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project/listings/`)
            .then((res) => {
                setProjectList(res?.data)
                setFilteredProjectList(res?.data)

            });
    };

    const getCategoryList = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service/tag/`)
            .then((res) => {
                setCategoryList(res?.data?.message)
            });
    };

    useEffect(() => {
        getProjectList();
        getCategoryList();

    }, []);

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchValue(event.target.value)
        const filterData = projectList.filter((item) => item.title.toLowerCase().includes(event.target.value))
        setFilteredProjectList(filterData)
    }

    useEffect(() => {
        if (selectedCategory.length > 0) {
            console.log(selectedCategory, 'selectedCategory')
            let filterArray = []
            selectedCategory.forEach((item) => {
                const obj = projectList.find((ele) => {
                    return ele.tags.includes(item.name)
                })
                if (!filterArray.includes(obj) && !!obj) {
                    filterArray.push(obj)

                }
            })
            setFilteredProjectList(filterArray)

            //const filter = selectedCategory.map((item) => projectList.filter((ele) => ele.tags.includes(item.name)))
        } else {
            setFilteredProjectList(projectList)
        }

    }, [selectedCategory])

    const handleCategory = (id) => {
        const categoryItem = selectedCategory?.find((item) => parseInt(item.id) === parseInt(id));
        if (!categoryItem) {
            const getCategoryItem = categoryList.find((item) => parseInt(item.id) === parseInt(id));
            setSelectedCategory([...selectedCategory, getCategoryItem]);
        } else {
            setSelectedCategory(
                selectedCategory?.filter((item) => parseInt(item.id) !== parseInt(categoryItem.id))
            );
        }
        if (selectedCategory.length === 0) {
            setFilteredProjectList(projectList)
        }

        console.log(filteredProjectList, 'filteredProjectList')
    }

    const handleSort = (e) => {
        console.log(e.target.value)
    }

    if (filteredProjectList.length === 0) return (<div className="flex justify-center mt-16"><Spinner color="purple" size='xl' />
    </div>)

    return (
        <>
            <div className="flex w-[80%] my-10 mx-auto gap-20 justify-center">
                <Menu>
                    <MenuButton
                        className="w-[200px] primary-btn"
                        colorScheme="purple"
                        variant="outline"
                        as={Button}
                        leftIcon={<CiFilter />}
                    >
                        Sort By
                    </MenuButton>
                    <MenuList onChange={(e) => handleSort(e)}>
                        <MenuItem value='newest'>Newest</MenuItem>
                        <MenuItem value='oldest'>Oldest</MenuItem>
                        <MenuItem value='highest-funding'>Highest Funding</MenuItem>
                        <MenuItem value='lowest-funding'>Lowest Funding</MenuItem>
                    </MenuList>
                </Menu>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <IoSearch />
                    </InputLeftElement>
                    <Input onChange={(event) => handleSearch(event)} className="!pl-10" type="text" placeholder="Search here..." />
                </InputGroup>
                {/* {roleType === "entrepreneur" ? ( */}
                <Button
                    rightIcon={<IoIosAddCircleOutline />}
                    colorScheme="purple"
                    px={10}
                    variant="solid"
                    className="w-[300px] primary-btn"
                    onClick={() => {
                        router.push('/project-form')
                    }}
                >
                    Add your Startup
                </Button>
                {/* ) : null} */}
            </div>
            <div className="flex justify-evenly">
                <div className="w-[20%] h-[800px] border-2 border-gray border-solid rounded-md pl-4">
                    <p className="text-xl">Category</p>
                    <Stack className="pl-5 pt-4" direction="column">
                        {categoryList?.map((item, idx) => {
                            return (
                                <Checkbox colorScheme="purple" key={idx} onChange={() => handleCategory(idx + 1)}>
                                    {item?.name}
                                </Checkbox>
                            );
                        })}
                    </Stack>
                </div>
                <div className="w-[60%] border-1 border-black border-solid flex flex-col gap-10">
                    {filteredProjectList.length > 0 ? filteredProjectList?.map((item, idx) => {
                        return (
                            <Card key={idx} className="p-5" shadow='xl' borderRadius='2xl'>
                                <div className="flex justify-between items-center gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-4">
                                            <Image
                                                src='/plastic.jpeg'
                                                alt="sample"
                                                width={120}
                                                height={70}
                                            />
                                            <div>
                                                <h1 className="text-2xl font-semibold">{item?.name}</h1>
                                                <p className="mt-2 text-md font-semibold text-gray-500">{item?.title}</p>
                                                <div className="flex gap-2 my-4">
                                                    {item?.tags.map(item => <Tag variant='solid' className="primary-btn" >{item}</Tag>)}
                                                </div>
                                            </div>

                                        </div>
                                        <p className="font-medium break">
                                            {item?.description}
                                        </p>
                                        <div className="flex gap-4">
                                            <div className=" items-center">
                                                <div className="flex items-center gap-2 my-4">
                                                    <CiCalendar color="purple" className="text-4xl" />
                                                    <p>
                                                        <strong>Founded:</strong> {item?.founded_in}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <SlPeople color="purple" className="text-4xl" />
                                                    <p>
                                                        <strong>Team Size:</strong> {item?.team_size}
                                                    </p>
                                                </div>

                                            </div>
                                            <div className=" items-center gap-2">
                                                <div className="flex items-center gap-2 my-4">
                                                    <MdOutlineAttachMoney color="purple" className="text-4xl" />
                                                    <p>
                                                        <strong>Funding: </strong>{item?.fund_raised}M$
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <IoLocationOutline color="purple" className="text-4xl" />
                                                    <p>
                                                        <strong>Location:</strong> {item?.city}, India
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <Button className="primary-btn" variant="solid" onClick={() => {
                                            window.location.href = 'https://calendly.com/mockrock/impactconnect-hackbanaglore-demo'
                                        }}>
                                            Book a Demo
                                        </Button>
                                        <Button
                                            colorScheme='purple'
                                            variant="outline"
                                            onClick={() => handleClick(item?.id)}
                                        >
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        );
                    }) : <p>No Data Found</p>}
                </div>
            </div>
        </>
    );
};

export default ProjectList;
