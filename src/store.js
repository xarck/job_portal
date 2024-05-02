import { createStore } from "redux";

const initialState = {
    jobListings: [],
    filters: {
        minExperience: 0,
        companyName: "",
        location: "",
        remote: null,
        techStack: [],
        role: "",
        minBasePay: 0,
    },
    currentPage: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_JOB_LISTINGS":
            return { ...state, jobListings: action.payload };
        case "SET_FILTERS":
            return { ...state, filters: action.payload };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
