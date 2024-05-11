"use client";
import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import Image from "next/image";
import entrepreneur from "../../../public/entrepreneur.png";
import investor from "../../../public/investor.png";
import "./page.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { ArrowForwardIcon } from "@chakra-ui/icons";

const SelectRole = () => {
  const router = useRouter();

  const [role, setRole] = useState("");

  const handleClick = () => {
    if (role === "investor") {
      router.push("/select-category");
    } else {
      router.push("/list-project");
    }
  };
  const handleRoleClick = (role) => {
    localStorage.setItem("key", role);
    setRole(role);
  };

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex1 flex-col gap-10">
        <div className="text-2xl">Whats your role?</div>
        <div className="flex gap-10">
          <Card className="cursor" onClick={() => handleRoleClick("investor")}>
            <CardBody
              className={
                role === "investor"
                  ? "active cursor-pointer flex1 flex-col min-w-40"
                  : "cursor-pointer flex1 flex-col min-w-40"
              }
            >
              <Image src={investor} alt="entrepreneur" width={80} />
              <Text fontSize="xl">Investor</Text>
            </CardBody>
          </Card>
          <Card onClick={() => handleRoleClick("entrepreneur")}>
            <CardBody
              className={
                role === "entrepreneur"
                  ? "active cursor-pointer flex1 flex-col min-w-40"
                  : "cursor-pointer flex1 flex-col min-w-40"
              }
            >
              <Image src={entrepreneur} alt="entrepreneur" width={80} />
              <Text fontSize="xl">Entrepreneur</Text>
            </CardBody>
          </Card>
        </div>
        <div>
          <Button
            className="w-[100px]"
            colorScheme="purple"
            size="md"
            onClick={handleClick}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SelectRole;
