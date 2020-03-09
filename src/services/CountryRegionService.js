import api from "../config/Api";

export const getCountries = (setCountries = () => { }) => {
    let promise = api.get("/countries");

    promise.then(response => {
        setCountries(response.data)
    });

    promise.catch(error => {
        console.log(error);
        setCountries([]);
    });

    return promise;
};

export const getRegions = (setRegions = () => { }) => {
    let promise = api.get("/regions");

    promise.then(response => {
        setRegions(response.data)
    });

    promise.catch(error => {
        console.log(error);
        setRegions([]);
    });

    return promise;
};