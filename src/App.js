import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";


export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 text-gray-800">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">Jane Doe</h1>
                <p className="text-lg">Software Engineer | Full Stack Developer</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:jane@example.com"><Mail className="w-5 h-5" /></a>
                    <a href="https://github.com/janedoe"><Github className="w-5 h-5" /></a>
                    <a href="https://linkedin.com/in/janedoe"><Linkedin className="w-5 h-5" /></a>
                </div>
            </header>

            <section>
                <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                </div>
            </section>
        </div>
    );
}
