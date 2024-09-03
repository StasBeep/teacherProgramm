import { FC, PropsWithChildren } from "react";
import Navbar from "../components/Navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default AppLayout;

