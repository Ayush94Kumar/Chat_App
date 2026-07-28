import { create } from "zustand";
import toast from "react-hot-toast";

export const useChatStore = create((set, get) => ({
    // Stores all registered users except the logged-in user
    allContacts: [],
    // Stores users with whom the logged-in user has chatted
    chats: [],
    // Stores messages of the currently selected chat
    messages: [],
    // Keeps track of the currently active tab ("chats" or "contacts")
    activeTab: "chats",
    // Stores the currently selected user for chatting
    selectedUser: null,
    // Loading state while fetching contacts or chat partners
    isUsersLoading: false,
    // Loading state while fetching chat messages
    isMessagesLoading: false,
    // Load sound preference from localStorage when the app starts

    isSoundEnabled: JSON.parse(localStorage.getItem("isSoundEnabled")) === true,

    toggleSound: () => {
        localStorage.setItem("isSoundEnabled", !get().isSoundEnabled);
        set({ isSoundEnabled: !get().isSoundEnabled });
    },

    setActiveTab: (tab) => set({ activeTab: tab }),

    setSelectedUser: (selectedUser) => set({ selectedUser }),

    getAllContacts: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/contacts");
            set({ allContacts: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMyChatPartners: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/chats");
            set({ chats: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },


}))