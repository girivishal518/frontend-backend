import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:{
  //   proxy:{
  //     "/":{
  //       target:"http://localhost:3000/",
  //       changeOrigin:true,
  //       proxy1:console.log("this proxy from /"),
        
  //     },
  //     "/form":{
  //       target:"http://localhost:3000/",
  //       changeOrigin:true,
  //       proxy1:console.log("this proxt from /form"),
        
  //     }
  //   }
  // }
})
