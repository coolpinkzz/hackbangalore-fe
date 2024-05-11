"use client";

import { Checkbox } from "@chakra-ui/checkbox";
import { Category } from "../select-category/JsonData";
import { Card } from "@chakra-ui/card";
import { Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { MdOutlineAttachMoney } from "react-icons/md";
import Image from "next/image";
import sample from "../../../public/investor.png";
import { IoLocationOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcSearch } from "react-icons/fc";
import { CiFilter } from "react-icons/ci";
// import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

const ProjectList = () => {
  const router = useRouter();
  // const roleType = localStorage.getItem("key");

  // const [viewDetails,setViewDetails] = useState(false)

  const handleClick = (id) => {
    router.push(`/${id}`);
  };

  //   const getProjectList = () => {
  //     axios
  //       .get("http://ede7-103-6-159-157.ngrok-free.app/api/project/listings/")
  //       .then((res) => {
  //         console.log(res, "res");
  //       });
  //   };

  const getProjectList = () => {
    axios
      .get("http://ede7-103-6-159-157.ngrok-free.app/api/service/tag/")
      .then((res) => {
        console.log("resp", res);
      });
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <>
      <div className="flex w-[80%] my-10 mx-auto gap-20 justify-center">
        <Menu>
          <MenuButton
            className="w-[200px]"
            colorScheme="purple"
            variant="outline"
            as={Button}
            leftIcon={<CiFilter />}
          >
            Sort By
          </MenuButton>
          <MenuList>
            <MenuItem>Newest</MenuItem>
            <MenuItem>Oldest</MenuItem>
            <MenuItem>Highest Funding</MenuItem>
            <MenuItem>Lowest Funding</MenuItem>
          </MenuList>
        </Menu>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FcSearch />
          </InputLeftElement>
          <Input className="!pl-10" type="text" placeholder="Search here..." />
        </InputGroup>
        {/* {roleType === "entrepreneur" ? ( */}
        <Button
          rightIcon={<IoIosAddCircleOutline />}
          colorScheme="purple"
          px={10}
          variant="solid"
          className="w-[300px]"
        >
          Add your Startup
        </Button>
        {/* ) : null} */}
      </div>
      <div className="flex gap-10 justify-evenly">
        <div className="w-[20%] h-[540px] border-2 border-gray border-solid rounded-md pl-4">
          <p className="text-xl">Category</p>
          <Stack className="pl-5 pt-4" direction="column">
            {Category.map((item, idx) => {
              return (
                <Checkbox colorScheme="purple" key={idx}>
                  {item.name}
                </Checkbox>
              );
            })}
          </Stack>
        </div>
        <div className="w-[60%] border-1 border-black border-solid flex flex-col gap-10">
          {Category.map((item, idx) => {
            return (
              <Card key={idx} className="p-5">
                <div className="flex justify-between items-center gap-20">
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                      <Image
                        src={sample}
                        alt="sample"
                        width="40"
                        height="40"
                        className="rounded-full"
                      />
                      <h1 className="text-2xl">{item.name}</h1>
                    </div>
                    <p>
                      Share your description socially impactful and sustainable
                      innovative ideas with us, and we will connect you with
                      potential investors.
                    </p>
                    <div className="flex gap-10">
                      <div className="flex items-center gap-2">
                        <CiCalendar className="text-2xl" />
                        <p>
                          <strong>Founded In:</strong> 2021
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MdOutlineAttachMoney className="text-2xl" />
                        <p>
                          <strong>Funding:</strong> 91,542
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <div className="flex items-center gap-2">
                        <SlPeople className="text-2xl" />
                        <p>
                          <strong>Team Size:</strong> 150
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationOutline className="text-2xl" />
                        <p>
                          <strong>Location:</strong> Bangalore
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <Button colorScheme="purple" variant="solid">
                      Book a Demo
                    </Button>
                    <Button
                      colorScheme="purple"
                      variant="outline"
                      onClick={() => handleClick(idx)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
