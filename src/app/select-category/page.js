"use client";
import {Button, Divider, Heading} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

const SelectCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [getAllCategories, setGetAllCategories] = useState([])
    const router = useRouter();

    const getCategoryList = () => {
        axios
            .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/service/tag/`)
            .then((res) => {
                console.log("resp", res);
                setGetAllCategories(res?.data?.message)
            });
    };

    useEffect(() => {
        getCategoryList();
    }, []);

    const handleClick = (id) => {
        const categoryItem = selectedCategory?.find((item) => parseInt(item.id) === parseInt(id));
        if (!categoryItem) {
            const getCategoryItem = getAllCategories.find((item) => parseInt(item.id) === parseInt(id));

            setSelectedCategory([...selectedCategory, getCategoryItem]);
        } else {
            setSelectedCategory(
                selectedCategory?.filter((item) => parseInt(item.id) !== parseInt(categoryItem.id))
            );
        }
    };

    const handleNext = () => {
        localStorage.setItem("category", JSON.stringify(selectedCategory));
        router.push("/project-list");
    };

    return (
        <>
            <div className=" w-[40%] mx-auto flex flex-col items-end gap-10">
                <div className="h-[500px] mt-10 border-2 border-gray border-solid p-6">
                    <Heading size='md'>Select your preferred category</Heading>
                    <Divider marginY={4} orientation="horizontal" />
                    {getAllCategories?.map((item, index) => {
                        return (
                            <Button
                                className="m-2 p-2"
                                key={index}
                                variant={
                                    selectedCategory.find((ele) => parseInt(ele.id) === parseInt(item.id))
                                        ? "solid"
                                        : "outline"
                                }
                                colorScheme="purple"
                                onClick={() => handleClick(index + 1)}
                            >
                                {item.name}
                            </Button>
                        );
                    })}
                </div>
                <div>
                    <Button className="primary-btn" onClick={handleNext}>
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SelectCategory;
