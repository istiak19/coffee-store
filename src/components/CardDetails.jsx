import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const coffee = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo } = coffee
    return (
        <div className="flex items-center border border-[#5C5B5B] bg-[#F5F4F1] shadow-lg rounded-lg p-6 max-w-7xl mx-auto bg-cover bg-center bg-card-bg mt-16">
            <div className="w-1/3">
                <img
                    src={photo}
                    alt="Americano Coffee"
                    className="w-[350px] rounded-md"
                />
            </div>
            <div className="w-2/3 pl-6">
                <h2 className="text-xl font-bold text-brown-700 mb-4">Niceties</h2>
                <div className="space-y-2">
                    <p>
                        <span className="font-semibold">Name:</span> {name}
                    </p>
                    <p>
                        <span className="font-semibold">Chef:</span> {chef}
                    </p>
                    <p>
                        <span className="font-semibold">Supplier:</span> {supplier}
                    </p>
                    <p>
                        <span className="font-semibold">Taste:</span> {taste}
                    </p>
                    <p>
                        <span className="font-semibold">Category:</span> {category}
                    </p>
                    <p>
                        <span className="font-semibold">Details:</span> {details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;