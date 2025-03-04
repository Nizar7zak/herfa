import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const models = [
    { id: 1, content: "Experience 1" },
    { id: 2, content: "Experience 2" },
    { id: 3, content: "Experience 3" },
    { id: 4, content: "Experience 4" }
];

const OurExperince = () => {
    const [hoveredModel, setHoveredModel] = useState<typeof models[number] | null>(null);
    const [selectedModel, setSelectedModel] = useState<typeof models[number] | null>(null);

    return (
        <section id="خبراتنا" className="h-screen flex justify-center items-center bg-secondary gap-10">
            <div className="w-[30vw] h-[60vh] bg-slate-200 rounded-xl flex justify-center items-center p-5">
                {hoveredModel ? (
                    <p className="text-lg font-semibold">{hoveredModel.content}</p>
                ) : (
                    <p className="text-gray-500">Hover over an item to see details</p>
                )}
            </div>

            <div className="flex justify-center items-center w-[43%] flex-col flex-wrap h-[60vh] gap-12">
                {models.map((model) => (
                    <div
                        key={model.id}
                        className="w-[20vw] h-[27vh] bg-slate-200 rounded-lg transition duration-300 hover:bg-slate-300 cursor-pointer"
                        onMouseEnter={() => setHoveredModel(model)}
                        onMouseLeave={() => setHoveredModel(null)}
                        onClick={() => setSelectedModel(model)}
                    ></div>
                ))}
            </div>

            <AnimatePresence>
                {selectedModel && (
                    <motion.div
                        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedModel(null)}
                    >
                        <motion.div
                            className="bg-white p-5 rounded-2xl w-[47vw] h-[75vh] flex flex-col justify-center items-center relative shadow-lg z-50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="absolute top-1 right-3 text-6xl font-base text-gray-700 hover:text-active"
                                onClick={() => setSelectedModel(null)}
                            >
                                &times;
                            </button>
                            <p className="text-lg font-semibold">{selectedModel.content}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default OurExperince;
