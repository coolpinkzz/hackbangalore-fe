"use client";
import { Button } from "@chakra-ui/react";
import { Category } from "./JsonData";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const router = useRouter();

  const handleClick = (id) => {
    const categoryItem = selectedCategory.find((item) => item.id === id);
    if (!categoryItem) {
      const getCategoryItem = Category.find((item) => item.id === id);

      setSelectedCategory([...selectedCategory, getCategoryItem]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((item) => item.id !== categoryItem.id)
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
          <p>Select your preferred category</p>
          {Category.map((item, index) => {
            return (
              <Button
                className="m-2 p-2"
                key={index}
                variant={
                  selectedCategory.find((ele) => ele.id === item.id)
                    ? "solid"
                    : "outline"
                }
                colorScheme="purple"
                onClick={() => handleClick(index)}
              >
                {item.name}
              </Button>
            );
          })}
        </div>
        <div className="">
          <Button colorScheme="purple" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectCategory;
