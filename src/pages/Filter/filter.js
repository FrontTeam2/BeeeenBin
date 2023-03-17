import { useState } from "react";
import styled from "styled-components";
import { flexBetween } from "styles/common";

function HashFilter() {
    const filterReducer = () => {};

    const [filterData, filterDispatch] = useState(filterReducer, [
        {
            id: "",
            name: "",
            list: "",
        },
    ]);

    // default값
    const onUpdate = () => {
        filterDispatch({ type: "UPDATE_SORT" });
    };

    // 조회수를 체크하는 객체값에 접근
    const onCreate = () => {
        filterDispatch({ type: "CREATE_SORT" });
    };

    // 댓글수를 체크하는 객체값에 접근
    const onComments = () => {
        filterDispatch({ type: "COMMENTS_SORT" });
    };

    return (
        <S.Wrapper>
            {/* 업데이트순 / 조회순 ... */}
            <S.FilterBox>
                <button onClick={onUpdate}>#Update</button>
                <button onClick={onCreate}>#Create</button>
                <button onClick={onComments}>#Comments</button>
            </S.FilterBox>
            <S.SelectBox>
                <option>10개씩 보기</option>
                <option>20개씩 보기</option>
                <option>50개씩 보기</option>
            </S.SelectBox>
        </S.Wrapper>
    );
}

export default HashFilter;

const Wrapper = styled.div`
    width: 95%;
    max-width: 120rem;
    margin: 0 auto;
`;

const FilterBox = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    ${flexBetween}

    & button {
        width: 100%;
        height: 3rem;
        font-size: 1.2rem;
        cursor: pointer;
        background: linear-gradient(to right, #24292f 90%, red);
        color: white;
        /* border-bottom: 0.5rem solid red; */
        margin-right: 0.5rem;
        border-radius: 0.5rem;
        box-sizing: border-box;
    }

    & button:last-child {
        margin: 0;
    }
`;

const SelectBox = styled.select`
    width: 100%;
    margin-bottom: 1rem;
`;

const S = {
    Wrapper,
    FilterBox,
    SelectBox,
};
