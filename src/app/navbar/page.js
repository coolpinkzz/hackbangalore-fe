"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/project-list");
  };

  return (
    <>
      <div className="sticky z-10 top-0 bg-purple-800 text-white text-xl">
        <div className="h-[65px] w-[80%] m-auto flex items-center justify-between ">
          <p className="cursor-pointer" onClick={handleClick}>
            PACN
          </p>
          {/* <i class="fa-solid fa-cart-shopping"></i> */}
          {/* {roleType === "entrepreneur" ? (
            <p className="cursor-pointer" onClick={handleClick}>
              Add Your Project
            </p>
          ) : null} */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
