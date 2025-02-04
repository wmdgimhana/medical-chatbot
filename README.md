#🏥 Medical Chatbot RAG Application 🤖💬

This is a Medical Chatbot built using Retrieval-Augmented Generation (RAG) to provide relevant and accurate medical information. It leverages FastAPI, LangChain, GroqAPI (Gemma2-9b-it), Pinecone, and a React + Tailwind frontend.

✨ Features

🧠 RAG-based QA System: Uses a retrieval-augmented approach to enhance response accuracy.

🚀 FastAPI Backend: Serves API endpoints for chatbot interaction.

🔗 LangChain Integration: Manages document retrieval and language model interaction.

🤖 GroqAPI (Gemma2-9b-it): Handles natural language generation.

📂 Pinecone Vector Database: Stores and retrieves embeddings for context-aware responses.

🎨 React + Tailwind UI: Provides an interactive chat interface.

🛠️ Technologies Used

Backend: FastAPI, LangChain, GroqAPI (Gemma2-9b-it), Pinecone

Frontend: React.js, Tailwind CSS

📥 Installation

✅ Prerequisites

Ensure you have the following installed:

🐍 Python 3.8+

📦 Node.js & npm

🏗️ Virtual environment (optional but recommended)

⚙️ Backend Setup

📥 Clone the repository:

git clone https://github.com/your-repo/medical-chatbot.git
cd medical-chatbot/backend

🏗️ Create and activate a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`

📦 Install dependencies:

pip install -r requirements.txt

🔑 Set up environment variables (e.g., .env file):

GROQ_API_KEY=your_groq_api_key
PINECONE_API_KEY=your_pinecone_api_key

▶️ Run the FastAPI server:

uvicorn main:app --reload

🎨 Frontend Setup

📁 Navigate to the frontend directory:

cd ../frontend

📦 Install dependencies:

npm install

▶️ Start the React development server:

npm run dev

🚀 Usage

Open the frontend in a browser (http://localhost:3000).

🤖 Interact with the chatbot by asking medical-related questions.

📚 The chatbot retrieves relevant information from Pinecone and provides answers using the GroqAPI-powered language model.

🔮 Future Enhancements

📑 Support for More Medical Sources

🌍 Multi-language Support

🔒 Authentication for Secure Access

📊 Advanced Analytics Dashboard

🤝 Contributing

Feel free to submit issues and pull requests to improve the project. 🚀
