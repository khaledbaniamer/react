import { configureStore } from '@reduxjs/toolkit'
import  characterSlice  from './charaterSlicer'

export default configureStore({
  reducer: {
    cahracter:characterSlice,
  }
})