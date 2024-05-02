import { useDispatch, useSelector } from "react-redux";

const FilterBar = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const handleFilterChange = (e) => {
        dispatch({
            type: "SET_FILTERS",
            payload: {
                ...filters,
                [e.target.name]: e.target.value,
            },
        });
    };

    const handleCheckboxChange = (e) => {
        dispatch({
            type: "SET_FILTERS",
            payload: {
                ...filters,
                [e.target.name]: e.target.checked,
            },
        });
    };
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Min Experience
                    </label>
                    <input
                        type="number"
                        name="minExperience"
                        value={filters.minExperience}
                        onChange={handleFilterChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Company Name
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        value={filters.companyName}
                        onChange={handleFilterChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Remote
                    </label>
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            name="remote"
                            checked={filters.remote}
                            onChange={handleCheckboxChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-gray-700">Allow Remote</span>
                    </div>
                </div>

                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Role
                    </label>
                    <select
                        name="role"
                        value={filters.role}
                        onChange={handleFilterChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select Role</option>
                        <option value="Front-end">Front-end</option>
                        <option value="Back-end">Back-end</option>
                        <option value="Full Stack">Full Stack</option>
                        <option value="Data Science">Data Science</option>
                        <option value="DevOps">DevOps</option>
                    </select>
                </div>

                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Tech Stack
                    </label>
                    <select
                        name="techStack"
                        value={filters.techStack}
                        onChange={handleFilterChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select Tech Stack</option>
                        <option value="Python">Python</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Java">Java</option>
                        <option value="React">React</option>
                        <option value="MongoDB">MongoDB</option>
                    </select>
                </div>

                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Min Base Pay
                    </label>
                    <input
                        type="number"
                        name="minBasePay"
                        value={filters.minBasePay}
                        onChange={handleFilterChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
