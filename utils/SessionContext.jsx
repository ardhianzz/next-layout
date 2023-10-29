"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';




//FUNGSI MENGENKRIPSI DATA SESSION
const secretKey = process.env.NEXT_PUBLIC_SECRET;
const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    return ciphertext;
  };
const decryptData = (ciphertext) => {
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    } catch (error) {
      sessionStorage.removeItem("_access");
      window.location.reload();
    }
};



//FUNGSI MENYIMPAN SESSION
const SessionContext = createContext();
export const useSession = () => {
  return useContext(SessionContext);
};




// FUNGSI MENGECEK TIME STAMP
const sessionTimeout = 30 * 60 * 1000; // 30 menit dalam milidetik
const isSessionValid = (timestamp) => {
  const now = new Date().getTime();
  return now - timestamp <= sessionTimeout;
};





export const SessionProvider = ({ children }) => {
    //MENGUUNAKAN TIME STAMP
    // const [user, setUser] = useState(() => {
    //     const storedUser = sessionStorage.getItem('_access');
    //     if (storedUser) {
    //       const { data, timestamp } = decryptData(storedUser);
    //       // Periksa apakah session masih berlaku berdasarkan timestamp
    //       if (isSessionValid(timestamp)) {
    //         return data;
    //       } else {
    //         // Hapus session yang tidak valid
    //         sessionStorage.removeItem('_access');
    //       }
    //     }
    //     return null;
    // });


    //TIDAK MENGGUNAKAN TIME STAMP LAMA
    // const [user, setUser] = useState(() => {
    //     const storedUser = sessionStorage.getItem("_access");
    //     return storedUser ? decryptData(storedUser) : null;
    //   });

    //BARU
    const [user, setUser] = useState(null);
    useEffect(() => {
      const storedUser = sessionStorage.getItem("_access");
      if (storedUser) {
        const decryptedUser = decryptData(storedUser);
        setUser(decryptedUser);
      }
    }, []);
   

     



    {/* 
        #
        # DATA LOGIN DIDAPAT SETELAH LOGIN DARI API BERHASIL
        # MELALUI METOTD login({object})
        #
    */}
    const login = (userData) => {
        // TIDAK MENGGUNAKAN TIME STAMP
        const encryptedUserData = encryptData(userData);
        sessionStorage.setItem("_access", encryptedUserData);
        setUser(userData);

        // MENGGUNAKAN TIMESTAMP
        // const timestamp = new Date().getTime();
        // const encryptedUserData = encryptData({ data: userData, timestamp });
        // sessionStorage.setItem('user', encryptedUserData);
        // setUser(userData);
    };


    const updateSessionTimestamp = () => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
          const { data, timestamp } = decryptData(storedUser);
          const updatedTimestamp = new Date().getTime();
          const updatedData = { data, timestamp: updatedTimestamp };
          const encryptedUserData = encryptData(updatedData);
          sessionStorage.setItem('_access', encryptedUserData);
        }
    };

  const logout = () => {
    sessionStorage.removeItem("_access");
    setUser(null);
  };

  const value = { user, login, logout};

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
};