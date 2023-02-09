import { createSlice, configureStore } from '@reduxjs/toolkit'

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

const stackSlice = createSlice({
  name: 'stackSlice',
  initialState: {
    content: '',
    music: '',
    instrumentId: [],
    heartCnt: 0,
    remainDepth: 0,
    isPublic: 0,
    isComplete: 0,
    tags: [],
    prevStationId: 0,
    videoName: '',
    delete: true,
    file: {}
  },
  reducers: {
    CreateStack: (state, action) => {
      const val = action.payload[1]
      state.remainDepth = 3
      state.prevStationId = -1
      switch (action.payload[0]) {
        case 'content':
          state.content = val
          break
        case 'music':
          state.music = val
          break
        case 'instrumentId':
          state.instrumentId = val
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
      state.instrumentId = []
      state.heartCnt = 0
      state.remainDepth = 0
      state.isPublic = 0
      state.isComplete = 0
      state.tags = []
      state.prevStationId = 0
      state.videoName = ''
      state.delete = true
      state.file = {}
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
      console.log(action.payload)
      const asdf = action.payload
      const instt = state.inst
      state.inst = [...instt, ...asdf]
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

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    CreateComments: CreateCommentSlice.reducer,
    stack: stackSlice.reducer,
    CreateInst: CreateInstSlice.reducer,
    SearchKeyword: SearchSlice.reducer
  }
})

export default store
export const { logIn, LogInState, LogOutState } = userSlice.actions
export const { CreateComment } = CreateCommentSlice.actions
export const { CreateStack, ClearStack } = stackSlice.actions
export const { CreateInst } = CreateInstSlice.actions
export const { SearchKeyword } = SearchSlice.actions
