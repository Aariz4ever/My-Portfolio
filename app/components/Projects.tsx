'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function InteractiveCards() {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(null);
    const floatingIcons = [
        { src: "/proj/code.svg", size: 120, x: "10%", y: "20%" },
        { src: "/proj/code.svg", size: 80, x: "80%", y: "30%" },
        { src: "/proj/code.svg", size: 100, x: "50%", y: "70%" },
        { src: "/proj/code.svg", size: 140, x: "20%", y: "80%" }
    ];
    
    const projects = [
        {
            title: "Image Classification - Flutter $ Tensorflow",
            description: "Developed an image classification model for Indian food identification using TensorFlow, achieving 98% accuracy. Integrated FastAPI backend and deployed to mobile using TensorFlow Lite.",
            link: "https://github.com/Aariz4ever/flutter-tensorflow-app.git",
            iconPath: "/proj/cnn.svg"
        },
        {
            title: "NLP – Movie Recommendation System",
            description: "Built a content-based movie recommender using NLP techniques. Integrated TMDB API for movie info & posters, using Streamlit for a user-friendly interface.",
            link: "https://github.com/Aariz4ever/Movie-Recommenders.git",
            iconPath: "/proj/nlp.svg"
        },
        {
            title: "Movie Review Platform - MERN",
            description: "Designed a movie review system with authentication, MySQL storage, and a dynamic UI with search and pagination. Built RESTful APIs in Spring Boot.",
            link: "https://github.com/your-repo",
            iconPath: "/proj/film.svg"
        },
        {
            title: "Quiz App - Spring Microservices",
            description: "Designed a movie review system with authentication, MySQL storage, and a dynamic UI with search and pagination. Built RESTful APIs in Spring Boot.",
            link: "https://github.com/Aariz4ever/springboot-microservices.git",
            iconPath: "/proj/quiz.svg"
        },
        {
            title: "NotesApp - Flutter & Firebase",
            description: "Designed a movie review system with authentication, MySQL storage, and a dynamic UI with search and pagination. Built RESTful APIs in Spring Boot.",
            link: "https://github.com/Aariz4ever/basic-notesapp-firebase.git",
            iconPath: "/proj/notes.svg"
        },
        {
            title: "Movie Review App - Spring Boot",
            description: "Built a shopping cart with user authentication, product management, and checkout functionality. Integrated Redux for state management and Stripe for payment processing.",
            link: "https://github.com/Aariz4ever/Movie-review-webapp-react-spring.git",
            iconPath: "/proj/film.svg"
        },
        {
            title: "E-commerce Shopping - Spring Boot",
            description: "Built a shopping cart with user authentication, product management, and checkout functionality. Integrated Redux for state management and Stripe for payment processing.",
            link: "https://github.com/Aariz4ever/springboot-ecommerce-webapp.git",
            iconPath: "/proj/shopping-cart.svg"
        },
        {
            title: "ToDo App - MERN",
            description: "Built a recipe search app with user authentication, real-time recipe recommendations, and a shopping list feature. Integrated Next.js, Firebase, and Tailwind CSS.",
            link: "https://github.com/Aariz4ever/recipe-search-app-nextjs.git",
            iconPath: "/proj/todo.svg"
        },
        // {
        //     title: "Loan Status Prediction",
        //     description: "Built a recipe search app with user authentication, real-time recipe recommendations, and a shopping list feature. Integrated Next.js, Firebase, and Tailwind CSS.",
        //     link: "https://github.com/Aariz4ever/loan-status-prediction-ml-website.git",
        //     iconPath: "/proj/cooking.svg"
        // },
        {
            title: "Chest Cancer Classify - MLFlow & DVC",
            description: "Built a meal planner app with user authentication, recipe search, and a shopping list feature. Integrated Next.js, Firebase, and Tailwind CSS.",
            link: "https://github.com/Aariz4ever/End-to-end-chest-cancer-classification-using-MLflow-DVC.git",
            iconPath: "/proj/cnn.svg"
        }
    ];

    useEffect(() => {
        const updateCursor = (e) => {
            setCursor({ x: e.clientX, y: e.clientY });
            document.documentElement.style.setProperty('--x', e.clientX);
            document.documentElement.style.setProperty('--y', e.clientY);
        };

        window.addEventListener('pointermove', updateCursor);
        return () => window.removeEventListener('pointermove', updateCursor);
    }, []);

    return (
        <main id="projects" className="relative flex flex-col items-center justify-center min-h-screen bg-[#010001]">
            {floatingIcons.map((icon, index) => (
                <motion.div
                    key={index}
                    initial={{ y: 0 }}
                    animate={{ y: [0, 10, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute opacity-30 grayscale"
                    style={{ left: icon.x, top: icon.y }}
                >
                    <Image src={icon.src} alt="Background Icon" width={icon.size} height={icon.size} />
                </motion.div>
            ))}
            <h3 className="text-[3rem] md:text-[6rem] leading-none font-serif font-bold text-gray-400 mt-26 mb-10 md:my-12">
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-[#8900f2] to-[#f20089] transition-all duration-300 group-hover:w-full"></span>
            </h3>

            <ul className="flex flex-wrap gap-8 max-w-6xl p-6 justify-center">
                {projects.map((project, i) => (
                    <li
                        key={i}
                        className="card relative w-80 aspect-[4/4] bg-gray-900 p-6 flex flex-col justify-start overflow-hidden border border-gray-800 group"
                    >
                        <Image src={project.iconPath} alt={project.title} width={72} height={72} className="absolute top-4 left-4 text-[#8900f2] transition-transform duration-300 group-hover:scale-110 group-hover:brightness-150 group-hover:filter group-hover:drop-shadow-[0_0_10px_#f20089]" />
                        <h3 className="text-white text-xl font-semibold mt-24">{project.title}</h3>
                        <p className="text-gray-300 text-sm">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-[#8900f2] hover:text-[#f20089] transition-colors duration-300">
                            View Project →
                        </a>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .card:hover {
                    --active: 1;
                }

                .card:before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background:
                        radial-gradient(circle at calc(var(--x) * 1px) calc(var(--y) * 1px), 
                        rgba(137, 0, 242, 0.6), 
                        rgba(242, 0, 137, 0.6), 
                        transparent 15vmin);
                    background-attachment: fixed;
                    pointer-events: none;
                    mask:
                        linear-gradient(white, white) 50% 0 / 100% 4px no-repeat,
                        linear-gradient(white, white) 50% 100% / 100% 4px no-repeat,
                        linear-gradient(white, white) 0 50% / 4px 100% no-repeat,
                        linear-gradient(white, white) 100% 50% / 4px 100% no-repeat;
                    transition: opacity 0.3s;
                }
            `}</style>
        </main>
    );
}
