import { createSlice, configureStore } from '@reduxjs/toolkit'
import _ from 'lodash'
const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    isLogged: false,
    username: '',
    nickname: '',
    email: '',
    bio: '',
    imgPath: ''
  },
  reducers: {
    logIn: (state, action) => {
      // console.log(action)
      state.isLogged = true
    },
    LogInState: (state, action) => {
      // console.log(action.payload)
      state.username = action.payload.username
      state.nickname = action.payload.nickname
      state.email = action.payload.email
      state.imgPath = action.payload.imgPath
      // state.bio = state.payload.bio
    },
    LogOutState: (state, action) => {
      state.isLogged = false
      state.username = ''
      state.nickname = ''
      state.email = ''
      state.imgPath = ''
      state.bio = ''
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
  }
})

const CreateCommentSlice = createSlice({
  name: 'CreateCommentSlice',
  initialState: { value: 0 },
  reducers: {
    CreateComment: (state, action) => {
      console.log(action)
    }
  }
})

const urlSlice = createSlice({
  name: 'urlSlice',
  initialState: { preUrl: '/' },
  reducers: {
    ChangeUrl: (state, action) => {
      console.log(action)
    }
  }
})

const stackSlice = createSlice({
  name: 'stackSlice',
  initialState: {
    content: '',
    music: '',
    instrument: '',
    heartCnt: 0,
    remainDepth: 3,
    isPublic: 0,
    isComplete: 0,
    tags: [],
    prevStationId: -1,
    videoName: '',
    delete: true
  },
  reducers: {
    CreateStack: (state, action) => {
      console.log(action.payload[0], action.payload[1])
      const val = action.payload[1]
      switch (action.payload[0]) {
        case 'remainDepth':
          state.remainDepth = val
          break
        case 'prevStationId':
          state.prevStationId = val
          break
        case 'content':
          state.content = val
          break
        case 'music':
          state.music = val
          break
        case 'instrument':
          state.instrument = val
          break
        case 'isPublic':
          if (val === 'private') {
            state.isPublic = 0
          } else {
            state.isPublic = 1
          }
          break
        case 'isComplete':
          if (val === 'notCompleted') {
            state.isComplete = 0
          } else {
            state.isComplete = 1
          }
          break
        case 'tags':
          state.tags = val
          break
        case 'videoName':
          state.videoName = val
          break
        default:
          state = { ...state }
          break
      }
    },

    ClearStack: (state, action) => {
      state.content = ''
      state.music = ''
      state.instrument = ''
      state.heartCnt = 0
      state.remainDepth = 3
      state.isPublic = 0
      state.isComplete = 0
      state.tags = []
      state.prevStationId = -1
      state.videoName = ''
      state.delete = true
    }
  }
})

const CreateInstSlice = createSlice({
  name: 'CreateInstSlice',
  initialState: {
    inst: []
  },
  reducers: {
    CreateInst: (state, action) => {
      const asdf = action.payload
      const instt = state.inst
      const tmp = [...instt, ...asdf]
      state.inst = _.uniqBy(tmp, 'id')
      console.log(state.inst)
      // console.log(action)
    }
  }
})

// 검색키워드 저장
const SearchSlice = createSlice({
  name: 'SearchSlice',
  initialState: {
    keyword: ''
  },
  reducers: {
    SearchKeyword: (state, action) => {
      console.log(action.payload)
      state.keyword = action.payload
      console.log(state.keyword)
    }
  }
})

const TagSlice = createSlice({
  name: 'TagSlice',
  initialState: {
    tags: []
  },
  reducers: {
    TagList: (state, action) => {
      state.tags = action.payload
    }
  }
})

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    CreateComments: CreateCommentSlice.reducer,
    stack: stackSlice.reducer,
    CreateInst: CreateInstSlice.reducer,
    SearchKeyword: SearchSlice.reducer,
    TagList: TagSlice.reducer,
    url: urlSlice.reducer
  }
})

export default store
export const { logIn, LogInState, LogOutState } = userSlice.actions
export const { CreateComment } = CreateCommentSlice.actions
export const { CreateStack, ClearStack } = stackSlice.actions
export const { CreateInst } = CreateInstSlice.actions
export const { SearchKeyword } = SearchSlice.actions
export const { TagList } = TagSlice.actions
export const { ChangeUrl } = urlSlice.actions
