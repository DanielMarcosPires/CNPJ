import { ComponentProps } from "react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Form from "./Form/Form";
import Banner from "./Banner/Banner";
import Profile from "./Profile/Profile";


export const Layout = {
    Header:Header,
    Banner:Banner,
    Content:Content,
    Profile:Profile,
    Form:Form,
    Structure:({children}:ComponentProps<"div">)=>{
        return <div className="border h-screen overflow-y-auto">{children}</div>
    }
}