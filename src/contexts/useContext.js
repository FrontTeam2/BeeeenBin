import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

function BoardContext() {
    const [isData, setIsData] = useState();

    useEffect(() => {
        const token = process.env.REACT_APP_ACCESS_TOKEN;
        const config = {
            headers: {
                // 본인의 토큰값을 담는 역할 Authorization
                // Bearer 보안 아이템을 칭하는 문자
                Authorization: `Bearer ${token}`,
            },
        };
        const getData = async () => {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL +
                        "/repos/angular/angular-cli/issues",
                    config
                    // 토큰값을 전달해서 받아올 경우,
                    // 서버 데이터를 활용하는 횟수가 달라진다.
                );

                setIsData(res.data);
                // state 상태 변화 -> data 배열 수신
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);
    console.log(isData);
}

export default BoardContext;
