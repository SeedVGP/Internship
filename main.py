from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from typing import List

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

tasks = [{
  "id": 1,
  "title": "Office Design ",
  "name": "Your company, Joel Wills",
  "date":"04/02/2023 - 08/03/2023"
 
},
{
  "id": 2,
  "title": "Office Design ",
  "name": "Your company, Joel Wills",
  "date":"04/02/2023 - 08/03/2023"
 
},
{
  "id": 3,
  "title": "Office Design ",
  "name": "Your company, Joel Wills",
  "date":"04/02/2023 - 08/03/2023"
 
}]


@app.get("/tasks", response_model=List[dict])
def get_tasks():
    return tasks
