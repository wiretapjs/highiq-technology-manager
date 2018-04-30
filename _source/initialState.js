export default {
  'booky': {
    'loggedIn': true
  },
  'dashboards': {
    'items': [{
      'id': 1,
      'name': 'JavaScript Technologies',
      categories: [{
        'id': 0,
        'name': 'UI Components',
        'position': 0
      }, {
        'id': 1,
        'name': 'State Management',
        'position': 2
      }, {
        'id': 2,
        'name': 'HTTP Request / Fetch API',
        'position': 3
      }, {
        'id': 3,
        'name': 'Utility',
        'position': 4
      }]
    }, {
      'id': 2,
      'name': 'JavaScript Tutorials',
      categories: [{
        'id': 4,
        'name': 'React Best Practices',
        'position': 0
      }, {
        'id': 5,
        'name': 'React State Management',
        'position': 1
      }]
    }],
    active: 1,
    offset: 3,
    structureOpen: false
  },
  'categories': [{
    'id': 123,
    'name': 'UI Components',
    'dashboard': 1,
    'position': 0,
    'color': 1,
    'expanded': true,
    bookmarks: [{
      'id': 0,
      'category': 0,
      'name': 'Redux',
      'url': 'https://github.com/reactjs/redux',
      'favicon': 'base64',
      'position': 0
    }, {
      'id': 1,
      'category': 0,
      'name': 'Redux Thunk',
      'url': 'https://github.com/gaearon/redux-thunk',
      'favicon': 'base64',
      'position': 1
    }, {
      'id': 2,
      'category': 0,
      'name': 'Redux Saga',
      'url': 'https://github.com/redux-saga/redux-saga',
      'favicon': 'base64',
      'position': 2
    }, {
      'id': 3,
      'category': 0,
      'name': 'Redux Observable',
      'url': 'https://github.com/redux-observable/redux-observable',
      'favicon': 'base64',
      'position': 3
    }, {
      'id': 4,
      'category': 0,
      'name': 'Redux Loop',
      'url': 'https://github.com/redux-loop/redux-loop',
      'favicon': 'base64',
      'position': 4
    }, {
      'id': 5,
      'category': 0,
      'name': 'Redux Casts',
      'url': 'https://github.com/StephenGrider/ReduxCasts',
      'favicon': 'base64',
      'position': 5
    }, {
      'id': 6,
      'category': 0,
      'name': 'Rematch',
      'url': 'https://github.com/rematch/rematch',
      'favicon': 'base64',
      'position': 6
    }]
  }, {
    'id': 345,
    'name': 'State Management',
    'dashboard': 1,
    'position': 1,
    'color': 2,
    'expanded': true,
    bookmarks: [{
      'id': 7,
      'category': 1,
      'name': 'Redux',
      'url': 'https://github.com/reactjs/redux',
      'favicon': 'base64',
      'position': 0
    }, {
      'id': 8,
      'category': 1,
      'name': 'Redux Thunk',
      'url': 'https://github.com/gaearon/redux-thunk',
      'favicon': 'base64',
      'position': 1
    }, {
      'id': 9,
      'category': 1,
      'name': 'Redux Saga',
      'url': 'https://github.com/redux-saga/redux-saga',
      'favicon': 'base64',
      'position': 2
    }, {
      'id': 10,
      'category': 1,
      'name': 'Redux Observable',
      'url': 'https://github.com/redux-observable/redux-observable',
      'favicon': 'base64',
      'position': 3
    }, {
      'id': 11,
      'category': 1,
      'name': 'Redux Loop',
      'url': 'https://github.com/redux-loop/redux-loop',
      'favicon': 'base64',
      'position': 4
    }, {
      'id': 12,
      'category': 1,
      'name': 'Redux Casts',
      'url': 'https://github.com/StephenGrider/ReduxCasts',
      'favicon': 'base64',
      'position': 5
    }, {
      'id': 13,
      'category': 1,
      'name': 'Rematch',
      'url': 'https://github.com/rematch/rematch',
      'favicon': 'base64',
      'position': 6
    }]
  }, {
    'id': 45,
    'name': 'HTTP Request / Fetch API',
    'dashboard': 1,
    'position': 2,
    'color': 3,
    'expanded': false,
    bookmarks: [{
      'id': 14,
      'category': 2,
      'name': 'React Request',
      'url': 'https://github.com/jamesplease/react-request',
      'favicon': 'base64',
      'position': 0
    }, {
      'id': 15,
      'category': 2,
      'name': 'React Remote Data',
      'url': 'https://github.com/jackfranklin/react-remote-data',
      'favicon': 'base64',
      'position': 1
    }]
  }, {
    'id': 76,
    'name': 'Utility',
    'dashboard': 1,
    'position': 3,
    'color': 4,
    'expanded': true,
    bookmarks: [{
      'id': 16,
      'category': 3,
      'name': 'List',
      'url': 'https://github.com/funkia/list',
      'favicon': 'base64',
      'position': 0
    }, {
      'id': 17,
      'category': 3,
      'name': 'Voca',
      'url': 'https://github.com/panzerdp/voca',
      'favicon': 'base64',
      'position': 1
    }, {
      'id': 18,
      'category': 3,
      'name': 'Awaity.js',
      'url': 'https://github.com/asfktz/Awaity.js',
      'favicon': 'base64',
      'position': 2
    }]
  }, {
    'id': 89,
    'name': 'Category 5',
    'dashboard': 2,
    'position': 4,
    'color': 0,
    'expanded': false,
    bookmarks: [{
      'id': 19,
      'category': 4,
      'name': 'highiq.io',
      'url': 'https://highiq.io',
      'favicon': 'base64',
      'position': 0
    }]
  }],
  'header': {
    'menuOpen': false
  },
  'toolbar': {
    'sticky': true,
    'currentlySticky': true
  },
  'sidebar': {
    'open': false,
    'notes': true,
    'autofill': true,
    'newtab': true,
    'stickyHeader': true,
    'stickyToolbar': true,
    'globalColor': 0,
    'headerColor': 0,
    'maxWidth': true,
    'dashboard': 1
  },
  modal: {
    modal: 'AddBookmark',
    open: false,
    data: {}
  }
};
