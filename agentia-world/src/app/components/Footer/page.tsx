import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { LiaRobotSolid } from 'react-icons/lia'

function Footer() {
    return (
        <footer className="text-gray-300 py-10 px-4 md:px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center md:text-left">
                <div className="flex gap-3">
                    <LiaRobotSolid className='text-4xl text-purple-500' />
                    <div>
                        <p className='text-2xl font-bold text-white'>Agentia World</p>
                        <p className='text-gray-400 text-base'>Next-generation AI agents powering the future of enterprise intelligence.</p>

                        <div className='flex gap-3 my-3'>
                            <FaGithub className='text-2xl text-gray-400' />
                            <FaTwitter className='text-2xl text-gray-400' />
                            <FaLinkedinIn className='text-2xl text-gray-400' />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white">Product</h3>
                        <ul className="mt-2 space-y-2 text-gray-400 md:text-lg">
                            <li><a href="#" className="hover:text-purple-400">Features</a></li>
                            <li><a href="#" className="hover:text-purple-400">Pricing</a></li>
                            <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
                            <li><a href="#" className="hover:text-purple-400">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white">Company</h3>
                        <ul className="mt-2 space-y-2 text-gray-400 md:text-lg">
                            <li><a href="#" className="hover:text-purple-400">About</a></li>
                            <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                            <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                            <li><a href="#" className="hover:text-purple-400">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white">Legal</h3>
                    <ul className="mt-2 space-y-2 text-gray-400 md:text-lg">
                        <li><a href="#" className="hover:text-purple-400">Privacy</a></li>
                        <li><a href="#" className="hover:text-purple-400">Terms</a></li>
                        <li><a href="#" className="hover:text-purple-400">Security</a></li>
                        <li><a href="#" className="hover:text-purple-400">Compliance</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
                © 2025 Agentia World. Powered by Panaversity. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
