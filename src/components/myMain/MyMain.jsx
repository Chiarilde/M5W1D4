import AllTheBooks from "../allTheBooks/AllTheBooks";
import Welcome from "../welcome/Welcome";

const MyMain = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Welcome />
                    <AllTheBooks />
                </div>
            </div>
        </div>
    );
};

export default MyMain;
