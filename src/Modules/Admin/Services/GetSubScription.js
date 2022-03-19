const url = "";

export const getSubscription = () => {
  const option = {
    url: `${process.env.SUBSCRIPTION_URL}/subscriptionGET`,

    method: "GET",

    headers: {
      Accept: "application/json",
    },

    params: {
      uid: id,
    },
  };

  axios(option)
    .then((response) => {
      console.log("res get profile", response.data);

      dispatch({
        type: GET_SUBSCRIPTION_DATA,

        payload: response.data,
      });
    })

    .catch((error) => {
      console.log("err manage", error);
    });
};
