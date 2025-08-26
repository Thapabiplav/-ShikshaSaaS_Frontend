import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import categorySlice from "./institute/category/categoryInstituteSlice";
import courseSLice from './institute/course/institute-course-slice'
import instituteTeacherSLice from './institute/teacher/institute-teacher-slice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    course: courseSLice,
      instituteTeacher:instituteTeacherSLice
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
