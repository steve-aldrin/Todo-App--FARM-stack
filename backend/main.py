from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo

app=FastAPI()

from database import(
fetch_one_todo,
fetch_all_todos,
create_todo,
update_todo,
remove_todo,

)
origins  = ['http://127.0.0.1:8000/api/todo']

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def read_root():
    return{"ping":"pong"}

@app.get("/api/todo")
async def get_todo():
    response =await fetch_all_todos()
    return response

@app.get("/api/todo{title}",response_model=Todo)
async def get_todobytitle(title):
    response=await fetch_one_todo(title)
    if response:
        return response 
    raise HTTPException(404,f"No Todo named {title} ")


@app.post("/api/todo",response_model=Todo)
async def post_todo(todo:Todo):
    response =await create_todo(todo.dict())
    if response:
        return response 
    raise HTTPException(400,f"Bad Request")


@app.put("/api/todo{title}/",response_model=Todo)
async def put_todo(title,data):
    response=await update_todo(title,desc)
    if response:
        return response 
    raise HTTPException(404,f"No Todo named {title} ")

@app.delete("/api/todo{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Sucessfully Deleted todo {title} "
    raise HTTPException(404,f"Bad Request")