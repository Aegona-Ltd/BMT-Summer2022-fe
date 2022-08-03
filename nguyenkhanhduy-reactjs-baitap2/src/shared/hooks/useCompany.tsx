import { useSelector } from "react-redux";
import { RootState } from "../../core/store";

function useCompany() {
    const company = useSelector((state:RootState) => state.company.name)
    return company;
}

export default useCompany;