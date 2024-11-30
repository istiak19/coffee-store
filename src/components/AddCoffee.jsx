const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const chef = form.get('chef')
        const supplier = form.get('supplier')
        const taste = form.get('taste')
        const category = form.get('category')
        const details = form.get('details')
        const photo = form.get('photo')
        const user = { name, chef, supplier, taste, category, details, photo }
        console.log(user)
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('successfully')
                    e.target.reset()
                }
            })
    }
    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold text-center mb-4">Add New Coffee</h1>
            <p className="text-center text-gray-600 mb-8">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleAddCoffee}
                className="grid grid-cols-2 gap-6 p-6 rounded-lg shadow-lg"
            >
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter coffee name"
                        name="name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Chef
                    </label>
                    <input
                        type="text"
                        placeholder="Enter coffee chef"
                        name="chef"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Supplier
                    </label>
                    <input
                        type="text"
                        placeholder="Enter coffee supplier"
                        name="supplier"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Taste
                    </label>
                    <input
                        type="text"
                        placeholder="Enter coffee taste"
                        name="taste"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Category
                    </label>
                    <input
                        type="text"
                        placeholder="Enter coffee category"
                        name="category"
                        className="input input-bordered w-full"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Details
                    </label>
                    <input
                        type="text"
                        placeholder="Enter coffee details"
                        name="details"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                        Photo
                    </label>
                    <input
                        type="text"
                        placeholder="Enter photo URL"
                        name="photo"
                        className="input input-bordered w-full"
                    />
                </div>
                <button type="submit" className="btn bg-[#D2B48C] border-2 border-[#331A15] col-span-2">
                    Update Coffee Details
                </button>
            </form>
        </div>
    );
};

export default AddCoffee;