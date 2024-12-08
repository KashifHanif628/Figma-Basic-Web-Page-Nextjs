import Image from "next/image";
import MenuPage from "./components/MenuPage";
import ContentMenu from "./components/ContentMenu";
import MainCourse from "./components/MainCourse";

export default function () {
    return (
        <div>
            <MenuPage />
            <ContentMenu />
            <MainCourse />
        </div>
    )
}