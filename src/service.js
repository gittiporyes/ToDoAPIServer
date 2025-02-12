import axios from 'axios';

// הגדרת כתובת ה-API כ-bririd defualt
axios.defaults.baseURL = "http://localhost:5279"; // עדכן לפורט המתאים שבו ה-API שלך רץ

// הוספת interceptor לשגיאות
axios.interceptors.response.use(
    response => response,
    error => {
        console.error("There was an error!", error); // רישום השגיאה ללוג
        return Promise.reject(error);
    }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/todos`); // עדכון ל-path הנכון של ה-API
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask', name);
    const result = await axios.post(`/todos`, { name }); // שלח את המידע ל-API
    return result.data; // החזר את התגובה מה-API
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete });
    const result = await axios.put(`/todos/${id}`, { isComplete }); // עדכון הסטטוס
    return result.data; // החזר את התגובה מה-API
  },

  deleteTask: async (id) => {
    console.log('deleteTask', id);
    const result = await axios.delete(`/todos/${id}`); // קריאה למחיקת המשימה
    return result.data; // החזר את התגובה מה-API
  }
};