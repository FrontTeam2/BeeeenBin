import { useParams } from "react-router-dom";

function DetailPage() {
    const params = useParams();
    console.log(params);
}

export default DetailPage;
