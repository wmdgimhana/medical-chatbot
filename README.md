# 🏥 Medical Chatbot RAG Application 🤖💬

This is a **Medical Chatbot** built using **Retrieval-Augmented Generation (RAG)** to provide relevant and accurate medical information. It leverages **FastAPI**, **LangChain**, **GroqAPI (Gemma2-9b-it)**, **Pinecone**, and a **React + Tailwind** frontend.

## ✨ Features
- 🧠 **RAG-based QA System**: Uses a retrieval-augmented approach to enhance response accuracy.
- 🚀 **FastAPI Backend**: Serves API endpoints for chatbot interaction.
- 🔗 **LangChain Integration**: Manages document retrieval and language model interaction.
- 🤖 **GroqAPI (Gemma2-9b-it)**: Handles natural language generation.
- 📂 **Pinecone Vector Database**: Stores and retrieves embeddings for context-aware responses.
- 🎨 **React + Tailwind UI**: Provides an interactive chat interface.

## 🛠️ Technologies Used
- **Backend**: FastAPI, LangChain, GroqAPI (Gemma2-9b-it), Pinecone
- **Frontend**: React.js, Tailwind CSS

## 📥 Installation
### ✅ Prerequisites
Ensure you have the following installed:
- 🐍 Python 3.8+
- 📦 Node.js & npm

### ⚙️ Backend Setup
1. 📥 Clone the repository:
   ```sh
   git clone https://github.com/your-repo/medical-chatbot.git
   cd medical-chatbot/backend
   ```

2. 🏗️ Create and activate a virtual environment
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. 📦 Install dependencies
   ```sh
   pip install -r requirements.txt
   ```

4. 🔑 Set up environment variables
   ```sh
   GROQ_API_KEY=your_groq_api_key
   PINECONE_API_KEY=your_pinecone_api_key
   ```

### 🎨 Frontend Setup
1. 📁 Navigate to the frontend directory
   ```sh
   cd ../frontend
   ```

2. 📦 Install dependencies
   ```sh
   npm install
   ```

3. ▶️ Start the React development server
   ```sh
   npm run dev
   ```



