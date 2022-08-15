const DB = {
    collections: {
        posts: {
            post_1: {
                name: 'Post 1',
                text: 'Some text 1'
            },
            post_2: {
                name: 'Post 2',
                text: 'Some text 2'
            }
        },
        comments: {
            comment_1: {
                postId: 'post_1',
                text: 'Comment 1'
            },
            comment_2: {
                postId: 'post_1',
                text: 'Comment 2'
            }
        }
    }
};

const useCollection = (item) => {
    return function(elem) {
        const info = DB.collections[item];
        const postInfo = info[elem];
        if (!postInfo) {
            return null
        } else {
            postInfo.id = elem;
            return postInfo;
        }
        
    }
};

const getPostItem = useCollection('posts');

const item1 = getPostItem('post_1');
console.log(item1);

const notFoundItem = getPostItem('post_4');
console.log(notFoundItem);
