'use client';
import { FaEnvelope, FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/text-effect";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <TextEffect 
                    per="char" 
                    preset="fade"
                    className="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    Get in Touch
                </TextEffect>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="bg-gray-900/80 p-8 rounded-xl border border-gray-700"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold mb-6">
                            Say hi to me
                        </h3>
                        <motion.form 
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-400 mb-1"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-400 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-400 mb-1"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:opacity-90 transition-opacity"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    <motion.div 
                        className="bg-gray-900/80 p-8 rounded-xl border border-gray-700 flex flex-col justify-between"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-6">
                                Contact Information
                            </h3>
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <FaEnvelope
                                            size={18}
                                            className="text-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Email
                                        </p>
                                        <p className="font-medium">
                                            rakis9076@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                                        <FaGlobe
                                            size={18}
                                            className="text-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">
                                            Location
                                        </p>
                                        <p className="font-medium">
                                            Binh Phuoc, Viet Nam
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            className="mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h4 className="font-medium mb-4">
                                Connect with me
                            </h4>
                            <div className="flex gap-4">
                                <motion.a
                                    href="https://github.com/plsgivemeachane"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub size={18} />
                                </motion.a>
                                {/* <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                >
                                    <FaLinkedin size={18} />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                                >
                                    <FaTwitter size={18} />
                                </a> */}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
