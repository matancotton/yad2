export const initialPosts = [];

const postsReducer = (state, action) => {
    switch (action.type) {
        case "SET_POSTS":
            return action.posts;
        case "ADD_POSTS":
            const newState = [...state];
            return newState.concat(action.posts);
        default:
            return [...state];
    }
};

export default postsReducer;
