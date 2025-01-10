import { ComponentProps } from "react";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Form from "./Form/Form";


export const Layout = {
    Header:Header,
    Content:Content,
    Form:Form,
    Structure:({children}:ComponentProps<"div">)=>{
        return <div className="border h-screen overflow-y-auto">{children}</div>
    }
}