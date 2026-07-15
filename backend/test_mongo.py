from pymongo import MongoClient

uri = "mongodb+srv://heamannthreddy_db_user:6mssVhUjU9OM6QFU@cluster0.ru5nt1q.mongodb.net/?appName=Cluster0"

try:
    client = MongoClient(uri, serverSelectionTimeoutMS=10000)
    client.admin.command("ping")
    print("✅ Connected successfully!")
except Exception as e:
    print(type(e).__name__)
    print(e)