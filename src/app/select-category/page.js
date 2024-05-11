import { Tag } from "@chakra-ui/react";
import { Category } from "./JsonData";

const SelectCategory = () => {
  return (
    <>
      {Category.map((item, idx) => {
        return (
          <Tag key={idx} variant="solid" colorScheme="teal">
            {item}
          </Tag>
        );
      })}
    </>
  );
};

export default SelectCategory;
