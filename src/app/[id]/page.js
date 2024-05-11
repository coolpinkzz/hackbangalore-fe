import Image from "next/image";
import sample from "../../../public/entrepreneur.png";
import { BsBuildings } from "react-icons/bs";
import { Button } from "@chakra-ui/button";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const ProjectDetails = () => {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="flex mt-10">
          <Image src={sample} alt="project" width={120} height={120} />
          <div>
            <div className="flex">
              <BsBuildings className="text-xl" /> <span>ORGANISATION</span>
            </div>
            <h1 className="text-2xl">Heading</h1>
            <p className="w-[550px]">
              Share your description socially impactful and sustainable
              innovative ideas with us, and we will connect you with potential
              investors.
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Button
              variant="outline"
              rightIcon={<CiCalendar />}
              colorScheme="purple"
            >
              Book a Demo
            </Button>
            <Button rightIcon={<FaHeart />} colorScheme="purple">
              Donate
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-2xl">About</h1>
          <p>
            Share your description socially impactful and sustainable innovative
            ideas with us, and we will connect you with potential
            investors.Share your description socially impactful and sustainable
            innovative ideas with us, and we will connect you with potential
            investors. Share your description socially impactful and sustainable
            innovative ideas with us, and we will connect you with potential
            investors.
          </p>
          <div className="flex flex-col gap-5">
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
            <div className="flex items-center gap-2">
              <MdOutlineAttachMoney className="text-2xl" />
              <p>
                <strong>Funding Type:</strong> 91,542
              </p>
            </div>
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
      </div>
    </>
  );
};

export default ProjectDetails;
