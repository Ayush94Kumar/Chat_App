import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000" : "/";

// Create Zustand authentication store
export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLogingin: false,

    // Check if the user is already authenticated
    // Runs when the app loads to keep the user logged in
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({ authUser: res.data })
        } catch (error) {
            console.log("Error is authCheck", error);
            set({ authUser: null });
        }
        finally {
            set({ isCheckingAuth: false })
        }
    },

    // Register a new user
    // Sends signup data to the backend
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post('/auth/signup', data);
            set({ authUser: res.data });
            toast.success("Signed Up Successfully");

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }
    },

    // Login an existing user
    // Sends email and password to the backend
    login: async (data) => {
        set({ isLogingin: true });
        try {
            const res = await axiosInstance.post('/auth/login', data);
            set({ authUser: res.data });
            toast.success("Logged in Successfully");

        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isLogingin: false });
        }
    },


}))