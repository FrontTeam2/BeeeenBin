import BoardList from "./Board/board";
import HashFilter from "./Filter/filter";

function IndexPage() {
    return (
        <div>
            <HashFilter />
            <BoardList />
        </div>
    );
}

export default IndexPage;
