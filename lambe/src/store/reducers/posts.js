import {ADD_POST, ADD_COMMENT} from "../actions/actionTypes";

const initialState = {
    posts: [{
        id: Math.random(),
        nickname: 'Phelipe Mizerani',
        email: 'phelipe@email.com',
        image: require('../../../assets/imgs/fence.jpg'),
        comments: [{
            nickname: 'Veronica Marques',
            comment: 'Ficou muito bom isso ai'
        }, {
            nickname: 'Luck fedorenteo',
            comment: 'Me da biscoito'
        }]
    }, {
        id: Math.random(),
        nickname: 'Juscelino kubixeki',
        email: 'celino@onfs.com',
        image: require('../../../assets/imgs/bw.jpg'),
        comments: []
    }]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.postId) {
                        if (post.comments) {
                            post.comments = post.comments.concat(action.payload.comment);
                        } else {
                            post.comments = [action.payload.comment];
                        }
                    }
                    return post;
                })
            };
        default:
            return state;
    }
};

export default reducer;