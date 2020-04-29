from bs4 import BeautifulSoup
import requests
from Exercise import Exercise

def insert_exercise_info(url):
  response = requests.get(url)
  soup = BeautifulSoup(response.text, 'html.parser')

  # Extracts exercise name from website.
  name = soup.find(class_='page-title').get_text()

  # Extracts div with exercise info and puts into list.
  instructions_content = soup.find(class_='col-sm-6')
  instructions_list = instructions_content.findAll('p')
  prep = instructions_list[1].get_text()
  instruction = instructions_list[3].get_text()

  # Extracts video link
  video_link = instructions_content.findAll('source')
  video = video_link[0]['src']

  # To extract Main Target Muscles
  instructions_content_other = soup.find(class_='col-sm-6').next_sibling
  target_muscles_list = instructions_content_other.findAll('a')

  targets=""

  for target in target_muscles_list:
    if "Muscles" in str(target):
      targets=target.text
      break
    # Break to stop at first iteration, as first value is main target muscles.

  # print(name)
  # print(prep)
  # print(instruction)
  # print(video)
  # print(targets)

  # Inserts extracted data into database.
  new_exercise = Exercise(name=str(name), prep=str(prep), instruction=str(instruction), video=str(video), targets=str(targets))
  new_exercise.insert()

insert_exercise_info("https://exrx.net/WeightExercises/LatissimusDorsi/CBUnderhandChinup")