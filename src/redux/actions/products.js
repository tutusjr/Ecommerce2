

export const productsAction = () => async (dispatch) => {
    const url = "https://fakestoreapi.com/products";
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
        type: "GET_PRODUCTS",
        payload: data,
    });
};
