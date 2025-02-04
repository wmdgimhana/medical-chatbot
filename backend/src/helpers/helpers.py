import os
import dotenv
from langchain.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings



dotenv.load_dotenv()






def load_data(path):
    data = DirectoryLoader(path, glob=["*.pdf"], loader_cls=PyPDFLoader)
    docs = data.load()
    return docs


def split_docs(docs):
    splitter = RecursiveCharacterTextSplitter(chunk_size = 500, chunk_overlap = 20)
    splits = splitter.split_documents(docs)
    return splits


def download_embedding_model():
    model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    return model

