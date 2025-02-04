from pinecone.grpc import PineconeGRPC as Pinecone
from pinecone import ServerlessSpec
from langchain_pinecone import PineconeVectorStore
from src.helpers.helpers import load_data, download_embedding_model, split_docs
import os
import dotenv


dotenv.load_dotenv()


os.environ["PINECONE_API_KEY"] = os.getenv("PINECONE_API_KEY")


pc = Pinecone()

docs_load = load_data('data/')
splits = split_docs(docs_load)
embedding = download_embedding_model()


index_name = "medibot"


pc.create_index(
    name=index_name,
    dimension=384,
        metric="cosine",
    spec=ServerlessSpec(
        cloud="aws",
        region="us-east-1"
    ) 
)


docsearch = PineconeVectorStore.from_documents(
    documents=splits,
    embedding=embedding,
    index_name = index_name
)

docsearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embedding
)