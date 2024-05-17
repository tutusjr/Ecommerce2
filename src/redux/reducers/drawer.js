const drawerReducer = (state = {drawer:false}, action) => {
    switch (action.type) {
        case "OPEN_DRAWER":
            return {
                drawer: true
            };
        case "CLOSE_DRAWER":
            return {
                drawer: false
            }
        default:
            return state;
    }
};

export default drawerReducer;