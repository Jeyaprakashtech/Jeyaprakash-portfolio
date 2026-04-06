import React from 'react'
import { motion } from "framer-motion";

function Avatarcard() {
  return (
    <div className="relative w-[400px] h-[400px] flex items-center justify-center mb-10">
    
                <div className="absolute inset-[-20px] rounded-full blur-2xl bg-purple-500/20" />
    
                <motion.div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-purple-600 to-pink-500"
                animate={{ rotate: 360 }}
  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                  
                  <div className="w-full h-full rounded-full bg-[#0E0C1A]" />
                </motion.div>
               
                <div className="relative w-[380px] h-[380px] rounded-full flex flex-col overflow-hidden
                items-center justify-center bg-gradient-to-br from-[#181428] to-[#0E0C1A]">
                  <img className=' w-[full] h-fit block'
                  src="/avatar.png" alt="" />
                </div>
                
              </div>
  )
}

export default Avatarcard