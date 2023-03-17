import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import IssueCard from "./card/card";


function BoardList() {
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

    const navigate = useNavigate();
    const onNavigateDetail = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        // 필요한 길이만큼만 배열을 출력받고 싶다.
        // 이후 배열도 써야한다.
        // splice를 쓰면 배열을 길이만큼 반환받고 복사되는

        isData &&
        isData.map((issue, index) => {
            // isData.splice(0, 3);
            return (
                <IssueCard
                    key={index}
                    item={issue}
                    title={
                        issue.title.split(" ").splice(0, 3).join(" ") + "..."
                    }
                    number={`${issue.number}`}
                    body={
                        issue.body
                            ? issue.body.split(" ").splice(0, 99).join(" ") +
                              " ..."
                            : issue.body
                    }
                    commentLen={issue.labels.length}
                    updateAt={issue.updated_at}
                    onNavigateDetail={onNavigateDetail}
                />
            );
        })
    );
}

export default BoardList;
