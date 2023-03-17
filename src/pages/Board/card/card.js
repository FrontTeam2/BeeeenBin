import styled from "styled-components";
import { flexBetween } from "styles/common";
import theme from "styles/theme";

function itemCard(props) {
    const {
        item,
        title,
        number,
        body,
        onNavigateDetail,
        commentLen,
        updateAt,
    } = props;

    return (
        <S.ListBox mode={theme}>
            <div onClick={() => onNavigateDetail(item.id)}>
                <div>
                    <div>
                        <p>#{number}</p>
                        <h2>{title}</h2>
                        <p>comments({commentLen})</p>
                    </div>
                    <p>{body}</p>
                    <p>
                        {item.user.login} {updateAt}
                    </p>
                </div>
            </div>
        </S.ListBox>
    );
}

export default itemCard;

const ListBox = styled.div`
    width: 95%;
    margin: 0 auto 1rem;
    max-width: 120rem;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.PALETTE.gray[100]};
    font-size: ${({ theme }) => theme.FONT_SIZE.small};

    &:hover {
        background-color: #fff;
    }

    & > div {
        margin-bottom: 1rem;
        padding: 2rem;
        text-align: center;
        box-sizing: border-box;
        cursor: pointer;
    }

    & > div > div > div {
        ${flexBetween}
    }

    & > div > div > div > p:first-child {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    & > div > div > div > p:last-child {
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    & > div > div > p:nth-child(2) {
        margin: 20px 0;
        white-space: wrap;
        text-align: left;
        word-wrap: break-word;
    }

    & > div > div > p:last-child {
        text-align: right;
    }
`;

const S = {
    ListBox,
};
