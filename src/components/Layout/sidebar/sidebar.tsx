import { NavLink, useNavigate } from "react-router-dom"
import { routes } from "./utils/route"
import styles from "./sidebar.module.scss"
import Logo from "@assets/icons/logo.svg"
import { Button } from "../.."
import { FaPlus } from "react-icons/fa6"
import { MdOutlineHelpOutline } from "react-icons/md"

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <aside className="bg-primary-40 px-8  py-6">
            <img src={Logo} alt="Scrutz" className="w-fit" />
            <Button
                variant="primary"
                className="mt-10 w-full"
                onClick={() => navigate("/campaign/new")}
            >
                <FaPlus color="white" className="mr-4" size="20px" />
                New Campaign
            </Button>

            <ul className="mt-10 ">
                {routes?.slice(0, 5).map((route, index) => (
                    <li className="flex items-center my-1 text-md " key={index}>
                        <NavLink
                            //end
                            to={route?.link}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.active}  flex items-center justify-between  py-3 px-4 w-full hover:text-primary-100 mb-2   text-primary-100 bg-white-100  rounded font-semibold`
                                    : `${styles.inactive} hover:text-green-100 flex items-center px-4 py-3 w-full 
                                    text-primary-100 justify-between font-medium mb-2`
                            }
                        >
                            <div className="flex items-center gap-2 w-full m">
                                <route.Icon />
                                <span className="">{route?.name}</span>
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="bg-white-100 rounded  flex justify-center flex-col p-8 mt-16">
                <div className="flex justify-center mb-2">
                    <MdOutlineHelpOutline color="#247B7B" size="22px" />
                </div>

                <p
                    className={`text-center font-semibold text-md ${styles.needHelp}`}
                >
                    Need help?
                </p>
                <p className="mt-2 text-[#666666] text-center text-2sm">
                    We’re readily available to provide help
                </p>
                <Button variant="border" className="mt-4">
                    Get help
                </Button>
            </div>
        </aside>
    )
}

export default Sidebar
