import api from "../config/Api";

export const getCustomers = (setCustomers = () => { }) => {
    let promise = api.get("/customers");

    promise.then(response => {
        setCustomers(response.data)
    });

    promise.catch(error => {
        console.log(error);
        setCustomers([]);
    });

    return promise;
};

export const getCustomerData = (setCustomerData = () => { }) => {
    let promise = api.get("/customerdata");

    promise.then(response => {
        setCustomerData(response.data)
    });

    promise.catch(error => {
        console.log(error);
        setCustomerData([]);
    });

    return promise;
};

export const getCustomersById = (id, setCustomers = () => {}) => {
    let promise = api.get(`/customers/${id}`);
  
    promise.then(response => {
      setCustomers(response.data)
    });
  
    promise.catch(error => {
      console.log(error);
      setCustomers([]);
    });
  
    return promise;
  };
  
  export const getCustomerDataById = (id, setCustomerData = () => {}) => {
      let promise = api.get(`/customerdata/${id}`);
    
      promise.then(response => {
          setCustomerData(response.data)
      });
    
      promise.catch(error => {
        console.log(error);
        setCustomerData([]);
      });
    
      return promise;
    };
