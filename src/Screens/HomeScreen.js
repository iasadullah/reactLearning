import React, { useEffect } from "react";

const HomeScreen = () => {
  useEffect(() => {
    //make api calls
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      // let response= await fetchGet()
    } catch (error) {
      console.log("fetchList error");
    }
  };
  return <div>HomeScreen</div>;
};

export default HomeScreen;
