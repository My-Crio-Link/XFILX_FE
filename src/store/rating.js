import {
  getLocalStorage,
  initialStateHelper,
  setLocalStorage,
} from "./localStorage";

const LIKE = "video/LIKE";
const DISLIKE = "video/DISLIKE";
const INITIAL = "video/INITIALDATA";

export const likeInc = (id) => {
  const videoData = getLocalStorage(id);
  const updatedVideoData = {
    ...videoData,
    votes: {
      ...videoData.votes,
      upVotes: parseInt(videoData.votes.upVotes) + 1,
    },
  };
  setLocalStorage(id, updatedVideoData);
  return {
    type: LIKE,
  };
};

export const dislikeInc = (id) => {
  const videoData = getLocalStorage(id);
  const updatedVideoData = {
    ...videoData,
    votes: {
      ...videoData.votes,
      downVotes: parseInt(videoData.votes.downVotes) + 1,
    },
  };
  setLocalStorage(id, updatedVideoData);
  return {
    type: DISLIKE,
  };
};

export const setState = (id) => {
  const votes = initialStateHelper(id);
  console.log(votes);
  return {
    type: INITIAL,
    payload: { votes },
  };
};

const reducer = (
  state = {
    votes: {
      upVotes: 0,
      downVotes: 0,
    },
  },
  action
) => {
  switch (action.type) {
    case INITIAL: {
      console.log(action.payload);
      return {
        ...state,
        votes: { ...action.payload.votes },
      };
    }
    case LIKE: {
      return {
        ...state,
        votes: {
          ...state.votes,
          upVotes: parseInt(state.votes.upVotes) + 1,
        },
      };
    }
    case DISLIKE: {
      return {
        ...state,
        votes: {
          ...state.votes,
          downVotes: parseInt(state.votes.downVotes) + 1,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
