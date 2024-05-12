"use client";
import {useRouter} from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/project-list");
    };

    return (
        <>
            <div style={{boxShadow: '0 2px 3px -1px rgba(0, 0, 0, 0.1)'}} className="sticky z-10 top-0 bg-[#f3f4f5] text-xl">
                <div className="h-[65px] w-[80%] m-auto flex items-center justify-between ">
                    <p className="cursor-pointer font-bold" onClick={handleClick}>
                        ImpactConnect
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
