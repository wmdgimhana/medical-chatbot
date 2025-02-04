import os
import dotenv
from langchain_groq import ChatGroq
from langchain_pinecone import PineconeVectorStore
from src.helpers.helpers import download_embedding_model
from src.prompts.prompts import prompt_template
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains.retrieval import create_retrieval_chain
from src.models.models import InputQuery


os.environ["GROQ_API_KEY"] = os.getenv("GROQ_API_KEY")

llm = ChatGroq(model="gemma2-9b-it")


embedding = download_embedding_model()

index_name = "medibot"

docssearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embedding

)


retriever = docssearch.as_retriever(search_kwargs={"k" : 3})


question_chain = create_stuff_documents_chain(llm, prompt_template)
rag_chain = create_retrieval_chain(retriever, question_chain)


async def get_response(query: InputQuery):
    response =  rag_chain.invoke({"input" : query.question})
    return response["answer"]