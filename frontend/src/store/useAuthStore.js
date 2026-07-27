import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUSer: null,
    isCheckingAuth: true,
    isSigningUp: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({ authUSer: res.data })
        } catch (error) {
            console.log("Error is authCheck", error);
            set({ authUSer: null });
        }
        finally {
            set({ isCheckingAuth: false })
        }
    },
    signup: async (data) => {
        set({isSigningUp:true});
        try {
            const res =await axiosInstance.post('/auth/signup',data);
            set({authUSer:res.data});
            toast.success("Logged in Successfully");

        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isSigningUp:false});
        }
    }

}))