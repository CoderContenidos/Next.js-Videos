"use client"
import { auth, db, provider } from "@/firebase/config"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        emaiL: null,
        uid: null
    })

    const router = useRouter()

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = async () => {
        await signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                const docRef = doc(db, "roles", user.uid)
                const userDoc = await getDoc(docRef)

                if (userDoc.data()?.rol === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    })
                } else {
                    router.push("/unauthorized")
                    logout()
                }

            } else {
                setUser({
                    logged: false,
                    emaiL: null,
                    uid: null
                })
            }
        })
    }, [router])

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}