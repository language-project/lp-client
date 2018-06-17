const ROOT = process.env.NODE_ENV === 'development' 
  ? `http://${window.location.hostname}:4001/api/v1`
  : `http://api.marmoym.com/api/v1`;

export const URL = {
  NEWCOMMENT: `${ROOT}/comment/new`,
  COMMENTS: `${ROOT}/comments`,
  DEFINITION_NEW: `${ROOT}/definition/new`,
  DEFINITIONS: `${ROOT}/definitions`,
  DEFINITIONS_BY_ID: `${ROOT}/definitions/:defId`,
  DEFINITIONS_IDS: `${ROOT}/definitions/ids`,
  DOWNVOTE_DEFINITIONS: `${ROOT}/vote/down`,
  NEWDEFINITIONS: `${ROOT}/newdefinitions`,
  SESSION_NEW: `${ROOT}/session/new`,
  SEARCH: `${ROOT}/search`,
  UPVOTE_DEFINITIONS: `${ROOT}/vote/up`,
  USERS_NEW: `${ROOT}/users/new`,
};

export const Maybe = '';

export default {
  [URL.COMMENTS]: {
    post: {
      data: {
        targetId: {},
        targetType: {},
      },
      url: URL.COMMENTS,
    },
  },
  [URL.DEFINITION_NEW]: {
    post: {
      data: {
        definitions: Maybe,
      },
      url: URL.DEFINITION_NEW,
    },
  },
  [URL.DEFINITIONS]: {
    post: {
      data: {
        page: Maybe,
      },
      url: URL.DEFINITIONS,
    },
  },
  [URL.DEFINITIONS_BY_ID]: {
    post: {
      data: {
        defId: {},
      },
      url: URL.DEFINITIONS_BY_ID,
    },
  },
  [URL.DOWNVOTE_DEFINITIONS]: {
    post: {
      data: {
        targetId: {},
        targetType: {},
        userId: {},
      },
      url: URL.DOWNVOTE_DEFINITIONS,
    },
  },
  [URL.NEWCOMMENT]: {
    post: {
      data: {
        comment: {},
        content: '',
        targetId: {},
        targetType: {},
        userId: {},
      },
      url: URL.NEWCOMMENT,
    },
  },
  [URL.SESSION_NEW]: {
    post: {
      data: {
        email: Maybe,
        password: Maybe,
      },
      url: URL.SESSION_NEW,
    },
  },
  [URL.UPVOTE_DEFINITIONS]: {
    post: {
      data: {
        targetId: {},
        targetType: {},
        userId: {},
      },
      url: URL.UPVOTE_DEFINITIONS,
    },
  },
  // getDefinitions: function ({
  //   page,
  // }) {
  //   return Axios({
  //     data: arguments[0],
  //     method: HttpMethod.POST,
  //     url: URL.GET_DEFINITIONS,
  //     withCredential: true,
  //   });
  // },

  // signInUser: function ({
  //   email, password
  // }) {
  //   return Axios({
  //     data: { email: arguments[0].email, password: arguments[0].password },
  //     method: HttpMethod.POST,
  //     url: URL.USERS_SIGNEDIN,
  //     withCredential: true,
  //   });
  // },
  
  // getDefinitionsById: function ({
  //   defId,
  // }) {
  //   return Axios({
  //     data: arguments[0],
  //     method: HttpMethod.POST,
  //     url: URL.GET_DEFINITIONS_BY_ID+defId,
  //     withCredential: true,
  //   });
  // },

  // signUpUser: function ({
  //   email, password, username
  // }) {
  //   return Axios({
  //     data: { email: arguments[0].email, password: arguments[0].password, username: arguments[0].username },
  //     method: HttpMethod.POST,
  //     url: URL.USERS_SIGNEDUP,
  //     withCredential: true,
  //   });
  // },

  // search(args) {
  //   return axios.get(URL.SEARCH, {
  //     params: {
  //       query: args.query,
  //     },
  //   })
  //     .then(createPayloadSelector(MarmoymApiError));
  // }
  // delete: {
  //   [EndPoint.AUTH_SESSION]: {
  //     data: {},
  //   },
  // },
  // get: {
  //   [EndPoint.USER_ME]: {
  //     data: {},
  //   },
  // },
  // post: {
  //   [EndPoint.AUTH_SESSION]: {
  //     data: {},
  //   },
  //   [EndPoint.AUTH_SESSION_NEW]: {
  //     data: {
  //       username: Maybe,
  //       password: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_BRANDS]: {
  //     data: {
  //       brandId: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_COMPETITORS_BRANDS]: {
  //     data: {
  //       brandId: Maybe,
  //       type: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_MEDIA_DELTA]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_MEDIA_ENGAGEMENT_DRIVERS]: {
  //     data: {
  //       brandId: Maybe,
  //       contentTypeId: Maybe,
  //       dateFrom: Maybe,
  //       dateTo: Maybe,
  //       sourceId: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_MEDIA_ENGAGEMENT_TIMELINE]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_MEDIA_KEYWORD_RATIO]: {
  //     data: {
  //       brandId: Maybe,
  //       dateFrom: Maybe,
  //       dateTo: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_MEDIA_PLATFORM_RATIO]: {
  //     data: {
  //       brandId: Maybe,
  //       dateFrom: Maybe,
  //       dateTo: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_MEDIA_SOURCES]: {
  //     data: {
  //       brandId: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_MEDIA_VOLUME]: {
  //     data: {
  //       brandId: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_MEDIA_VOLUME_TIMELINE]: {
  //     data: {
  //       brandId: Maybe,
  //       dateFrom: Maybe,
  //       dateTo: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_PRODUCTLIST]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_AVERAGE]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_COMPETITORS]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_KEYWORDS]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_KEYWORDS_FREQUENCY]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_KEYWORDS_TIMELINE]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_RATING]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_RATING_BREAKDOWN]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_RATING_SOURCES]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_RATING_TIMELINE]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_RAW]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_SENTIMENT_BREAKDOWN]: {
  //     data: {
  //       brandId: Maybe,
  //       productId: Maybe,
  //       rating: Maybe,
  //       sourceId: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_REVIEW_SENTIMENT_OVERALL]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_SENTIMENT_TIMELINE]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_SOURCES]: {
  //     data: {
  //       brandId: Maybe,
  //     },
  //   },
  //   [EndPoint.DATA_REVIEW_SUMMARY]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_SOURCE_BREAKDOWN]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DATA_REVIEW_VOLUME]: {
  //     data: createDefaultDataTypes(),
  //   },
  //   [EndPoint.DEBUG_TIMEOUT]: {
  //     data: {},
  //   },
  //   [EndPoint.TEST]: {
  //     data: {},
  //   },
  // },
};

function createDefaultDataTypes() {
  return {
    brandId: Maybe,
    dateFrom: Maybe,
    dateTo: Maybe,
    keywordId: Maybe,
    productId: Maybe,
    rating: Maybe,
    sourceId: Maybe,
  };
}