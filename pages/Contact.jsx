import { useState } from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 
import  {useForm}from 'react-hook-form'

export default function Contact ()  {
  const {register ,handleSubmit ,reset, formState:{errors}} = useForm()
  const [result, setResult] = useState("");


  const onSubmit = async (data)=>{
   setResult("Sending ⌛")

   const formData = new FormData ();
   formData.append("access_key" , import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
   formData.append("name" , data.name);
   formData.append("email" , data.email);
   formData.append("message", data.message);
   try {
     const respones =await fetch("https://api.web3forms.com/submit",
      {
        method:"POST",
        body:formData
      } )
      const resData =await respones.json();
      if (resData.success){
        setResult("Message Send Successfully 🔥");
        reset()
      } else {
        setResult("Something Went Error 🛑")
      }
   } catch (error) {
    setResult("Error Sending Message", error)
   }
  }



  // Social Links with Neon Colors
  const socialLinks = [
    { id: 1, icon: <FaGithub size={22} />, url: "https://github.com/kalaiselvan-mern", color: "hover:bg-gray-700 shadow-cyan-500/20", neon: "border-gray-500 text-white" },
    { id: 2, icon: <FaLinkedin size={22} />, url: "https://www.linkedin.com/in/kalai-kalai", color: "hover:bg-blue-600 shadow-blue-500/20", neon: "border-blue-500 text-blue-400" },
    { id: 3, icon: <FaFacebook size={22} />, url: "https://www.facebook.com/share/18WvAZ15YF/", color: "hover:bg-blue-800 shadow-blue-700/20", neon: "border-blue-700 text-blue-500" },
    { id: 4, icon: <FaInstagram size={22} />, url: "https://www.instagram.com/chellakutty_kalai?igsh=ZzZ4ZmVyc2JoMnBz", color: "hover:bg-pink-600 shadow-pink-500/20", neon: "border-pink-500 text-pink-400" },
    { id: 5, icon: <FaWhatsapp size={22} />, url: "https://wa.me/919344147003", color: "hover:bg-green-500 shadow-green-500/20", neon: "border-green-500 text-green-400" },
  ];


  return (
    
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-20 relative overflow-hidden text-white">

      {/* Background Neon Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-900/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl z-10">
        
        {/* Left Side: Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl wrap-anywhere font-extrabold mb-4">
              Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">magic</span> together! 🚀
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to chat about tech? Feel free to reach out. I'm always open to new opportunities!
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 bg-gray-900 border border-cyan-500/30 text-cyan-400 flex items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-cyan-500/50 transition-all">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email Me</p>
                <p className="text-gray-200 font-semibold wrap-anywhere text-lg">kalaiselvan.tech@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 bg-gray-900 border border-purple-500/30 text-purple-400 flex items-center justify-center rounded-2xl shadow-[0_0_15px_rgba(192,132,252,0.2)] group-hover:shadow-purple-500/50 transition-all">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Location</p>
                <p className="text-gray-200 font-semibold text-lg">Tamil Nadu, India</p>
              </div>
            </div>
          </div>

          {/* Social Links Neon Badges */}
          <div className="pt-4 flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl border ${social.neon} bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_currentColor] flex items-center justify-center`}
              >
                {social.icon}
              </a>
            ))}
          </div>
             <p className="text-gray-500 text-sm font-medium ">
            ©  Kalai Selvan. 
            Built with <span className="text-cyan-500">React</span> & <span className="text-purple-500">Tailwind</span>.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#111111] p-8 rounded-2xl border border-white/5 shadow-inner">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Your Name</label>
              <input { ...register("name",{required:"Name Is Required"})}
                type="text" 
                placeholder="Ex: John Doe" 
                className="w-full bg-[#0a0a0a] text-white px-5 py-4 rounded-xl border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition duration-300" 
              />{
                errors.name&& <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
              }
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Your Contact Number</label>
              <input { ...register("mobile",{required:"Mobile No Is Required"})}
                type="text" 
                placeholder="+91 9876543210" 
                className="w-full bg-[#0a0a0a] text-white px-5 py-4 rounded-xl border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition duration-300" 
              />  {
                errors.mobile && <p className="text-red-600 text-xs mt-1">{errors.mobile.message}</p>
              }
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Your Email</label>
              <input  {...register("email",{
                required:"Email  Is Required" ,
                pattern: {value: /^\S+@\S+$/i, message: "Invalid email address"}  
              })}
                type="email" 
                placeholder="Ex: john@example.com" 
                className="w-full bg-[#0a0a0a] text-white px-5 py-4 rounded-xl border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition duration-300" 
              /> {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Message</label>
              <textarea {...register("message",{required:"Please Enter A Message "})}
                rows="4" 
                placeholder="What's on your mind?" 
                className="w-full bg-[#0a0a0a] text-white px-5 py-4 rounded-xl border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition resize-none"
              >
                 {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </textarea>
              
            </div>

            <button 

              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 transform active:scale-95"
            >
              Send Message ✨
            </button>
            <p className="text-center text-sm text-cyan-500 font-medium mt-2">{result}</p>
          </form>
          
        </div>
      
      </div>
    </div>
  );
};
