import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Card from "./Card";

const OwnCreateSections2 = () => {
    const { items } = useContext(AuthContext);
    const item = items.slice(0, 6);
    console.log(item);
    return (
        <div>
            <h1 className="text-5xl  py-8 mb-8 text-center font-extrabold">Some <span className="text-yellow-600">Spanish</span> Word</h1>
            <div className="max-w-5xl mx-auto gap-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">

                

                {
                    item?.map((words, idx) => <Card key={idx} words={words}></Card>)
                }

            </div>
        </div>
    );
};

export default OwnCreateSections2;