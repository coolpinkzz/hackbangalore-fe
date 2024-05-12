"use client";
import {Button, Card, CardBody, Text} from "@chakra-ui/react";
import Image from "next/image";
import entrepreneur from "../../../public/entrepreneur.png";
import investor from "../../../public/investor.png";
import "./page.css";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {IoArrowForwardCircleOutline} from "react-icons/io5";
// import { ArrowForwardIcon } from "@chakra-ui/icons";

const SelectRole = () => {
    const router = useRouter();

    const [role, setRole] = useState("");

    const handleClick = () => {
        if (role === "investor") {
            router.push("/select-category");
        } if (role === 'entrepreneur') {
            router.push("/project-form");
        }


    };
    const handleRoleClick = (role) => {
        localStorage.setItem("role", role);
        setRole(role);
    };

    useEffect(() => {
        setRole("");
    }, []);

    return (
        <>
            <div className="w-[100vw] h-[80vh] flex1 flex-col gap-10">
                <div className="text-5xl">Whats your role?</div>
                <div className="flex gap-10">
                    <Card boxShadow='2xl' w={300} h={300} className="cursor" onClick={() => handleRoleClick("investor")}>
                        <CardBody
                            className={
                                role === "investor"
                                    ? "active cursor-pointer flex1 flex-col min-w-40"
                                    : "cursor-pointer flex1 flex-col min-w-40"
                            }
                        >
                            <Image src={investor} alt="entrepreneur" width={120} />
                            <Text marginTop={4} fontWeight='bold' fontSize="2xl">Investor</Text>
                        </CardBody>
                    </Card>
                    <Card boxShadow='2xl' w={300} h={300} onClick={() => handleRoleClick("entrepreneur")}>
                        <CardBody
                            className={
                                role === "entrepreneur"
                                    ? "active cursor-pointer flex1 flex-col min-w-40"
                                    : "cursor-pointer flex1 flex-col min-w-40"
                            }
                        >
                            <Image src={entrepreneur} alt="entrepreneur" width={120} />
                            <Text marginTop={4} fontWeight='bold' fontSize="2xl">Entrepreneur</Text>
                        </CardBody>
                    </Card>
                </div>
                <div>
                    <Button
                        className="w-[100px] primary-btn"
                        colorScheme="purple"
                        size="lg"
                        onClick={handleClick}
                        rightIcon={<IoArrowForwardCircleOutline />}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
};

export default SelectRole;
