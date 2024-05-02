import React, { useState } from "react";

const JobCard = ({ job }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-gray-700 mb-2">{job.company}</p>
            <p className="text-gray-600 mb-4">{job.location}</p>
            <div className="mb-4">
                <p className="text-gray-800">
                    {expanded
                        ? job.description
                        : `${job.description.slice(0, 100)}...`}
                    <button
                        onClick={toggleExpanded}
                        className="ml-2 text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        {expanded ? "Show Less" : "Show More"}
                    </button>
                </p>
            </div>
            <p className="text-gray-600 mb-4">
                Experience: {job.experience} years
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Apply
            </button>
        </div>
    );
};

export default JobCard;
