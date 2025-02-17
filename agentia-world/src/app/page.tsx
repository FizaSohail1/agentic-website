import Navbar from "./components/Navbar/page";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { LiaRobotSolid } from "react-icons/lia";
import { FaMicrochip } from "react-icons/fa6";
import { GrGlobe } from "react-icons/gr";
import { FaGithub, FaLinkedinIn, FaRegBookmark, FaTwitter } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { RxFramerLogo } from "react-icons/rx";
import { FaRegMessage } from "react-icons/fa6";
import PricingCards from "./components/pricingcards/page";
import Footer from "./components/Footer/page";


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-10 mb-20 h-screen">
        <div className="lg:w-[60%] w-full px-4">
          <div className="flex gap-2 items-center justify-center mb-8">
            <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
            <p className="text-lg text-purple-400 font-medium">Powered by Panaversity</p>
          </div>
          <h1 className="text-5xl md:text-7xl text-center font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Enterprise AI Agents <span className="text-gray-200">for the Future</span>
          </h1>

          <div className="bg-gray-900 border-[1px] border-purple-800 h-32 rounded-xl w-full my-10 flex items-center gap-3 md:gap-10 px-4 ">
            <div className="h-14 w-14 flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-full">
              <LiaRobotSolid className="text-2xl text-white" />
            </div>
            <Input className="bg-gray-800 border-none py-8 text-purple-400" placeholder="Hello! I'm your AI agent. How can I enhance your business to" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white  rounded-lg text-xl px-10 py-8 font-bold flex justify-center items-center hover:shadow-sm hover:shadow-purple-500 hover:scale-105 transition-all duration-300">Deploy Your Ai Agent <IoIosArrowForward className="ml-2 text-lg" /></Button>
            <Button className="bg-gray-800 border-[1px] border-purple-800 text-white  rounded-lg text-xl px-10 py-8 font-bold flex justify-center items-center hover:shadow-sm hover:shadow-purple-500 hover:scale-105 transition-all duration-300">Watch Demo</Button>
          </div>
        </div>
      </div>

      <section id="technology" className="w-full px-4 md:px-12 my-20 lg:my-40">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Powered By Advanced AI
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium my-4">
            Built on cutting-edge neural architectures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {[
            { icon: <LuBrain className="text-2xl text-white" />, title: "Neural Networks", desc: "Advanced neural architectures for complex decision-making." },
            { icon: <FaMicrochip className="text-2xl text-white" />, title: "Deep Learning", desc: "Sophisticated deep learning models for pattern recognition." },
            { icon: <FaCode className="text-2xl text-white" />, title: "Advanced ML", desc: "Cutting-edge machine learning algorithms." },
            { icon: <GrGlobe className="text-2xl text-white" />, title: "Global Scale", desc: "Distributed AI processing across global networks." },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 border border-transparent hover:border-purple-900 transition-all duration-300 hover:scale-105 rounded-xl p-6 flex flex-col items-center shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md">
                {feature.icon}
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl md:text-2xl text-white font-semibold">{feature.title}</h2>
                <p className="text-gray-300 text-sm md:text-base mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="w-full px-4 md:px-12 my-20 lg:my-40">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Neural Capabilities
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium my-4">
            Powered by next-generation artificial intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {[
            { icon: <LuBrain className="text-2xl text-white" />, title: "Autonomous Learning", desc: "Self-evolving neural networks that continuously adapt to your business needs through reinforcement learning" },
            { icon: <FaRegMessage className="text-2xl text-white" />, title: "Multi-Modal Intelligence", desc: "Advanced agents capable of processing text, voice, and visual data for comprehensive understanding" },
            { icon: <FaCode className="text-2xl text-white" />, title: "Cognitive Integration", desc: "Seamless integration with existing systems through advanced cognitive APIs and neural bridges" },
            { icon: <RxFramerLogo className="text-2xl text-white" />, title: "Ethical AI Framework", desc: "Built-in ethical guidelines and safety protocols ensuring responsible AI deployment" },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 border border-transparent hover:border-purple-900 transition-all duration-300 hover:scale-105 rounded-xl p-6 flex flex-col shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md">
                {feature.icon}
              </div>
              <div className="mt-4">
                <h2 className="text-xl md:text-2xl text-white font-semibold">{feature.title}</h2>
                <p className="text-gray-300 text-sm md:text-base mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="agents" className="w-full px-4 md:px-12 my-20 lg:my-40">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl font-medium my-4">
            Transforming industries with intelligent agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          {[
            { icon: <GrGlobe className="text-2xl text-white" />, title: "Enterprise AI", desc: "Custom AI agents designed for enterprise-scale operations and decision-making" },
            { icon: <FaRegMessage className="text-2xl text-white" />, title: "Neural Operations", desc: "Automated workflow optimization through distributed neural networks" },
            { icon: <FaRegBookmark className="text-2xl text-white" />, title: "Secure Intelligence", desc: "Privacy-first AI solutions with military-grade security protocols" },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900 border border-transparent hover:border-purple-900 transition-all duration-300 hover:scale-105 rounded-xl p-6 flex flex-col shadow-lg">
              <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-md">
                {feature.icon}
              </div>
              <div className="mt-4">
                <h2 className="text-xl md:text-2xl text-white font-semibold">{feature.title}</h2>
                <p className="text-gray-300 text-sm md:text-base mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PricingCards />

      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl font-medium my-4">
          Ready to transform your business with AI?
        </p>
      </div>



      <section id="contact" className="w-full px-4 md:px-12 my-20 lg:my-40 flex flex-col md:flex-row justify-center ">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Contact Information</h2>
          <p className="text-lg text-gray-200">📧 contact@agentiaworld.com</p>
          <p className="text-lg text-gray-200">🌐 www.agentiaworld.com</p>

          <div className='flex gap-3 my-3'>
            <FaGithub className='text-2xl text-gray-400' />
            <FaTwitter className='text-2xl text-gray-400' />
            <FaLinkedinIn className='text-2xl text-gray-400' />
          </div>
        </div>

        <div className="w-full md:w-1/2  p-6 rounded-xl shadow-md">
          <form className="space-y-4 md:space-y-8">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:border-purple-500" />
              <input type="text" placeholder="Last Name" className="w-1/2 p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:border-purple-500" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:border-purple-500" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg bg-gray-900 border border-gray-600 focus:outline-none focus:border-purple-500"></textarea>
            <button className="w-full p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition">Send Message</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

