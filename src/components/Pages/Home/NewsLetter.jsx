import { AiOutlineSend } from "react-icons/ai";


const NewsLetter = () => {
    return (
        <div className="flex flex-col md:flex-row  justify-between gap-8 items-center my-20">
            <h1 className="text-5xl text-center font-bold text-red-400 ">Our  <br /> Newsletter </h1>
            <p className="text-lg text-center font-semibold">Our regular newsletters are packed full <br /> of events at our stores, fun facts, <br /> competitions and the latest in the magical world of toys.</p>
            <div>

                <div className="input-group">
                    <input type="text" placeholder="Email US" className="input input-bordered" />
                    <button className="btn btn-square">
                    {<AiOutlineSend></AiOutlineSend>}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default NewsLetter;
