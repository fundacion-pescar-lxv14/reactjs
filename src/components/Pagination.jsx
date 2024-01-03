import { PageList } from "./PageList"
import { BtnGroup } from "./BtnGroup"

export const Pagination = () => {
    return(
    <footer className="border-top p-3 sticky-bottom bg-body z-0">
        <PageList/>
        <BtnGroup/>
    </footer>)}