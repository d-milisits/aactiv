from bs4 import BeautifulSoup
import requests
from Quote import Quote

def insert_quote(url):
  response = requests.get(url)
  soup = BeautifulSoup(response.text, 'html.parser')

  # Extract quote from website.
  quote_content = soup.findAll('strong')
  for i in range(len(quote_content)-1):
    # print(quote_content[i].get_text())
    new_quote = Quote(quote=quote_content[i].get_text())
    new_quote.insert()

insert_quote('https://personaldevelopfit.com/motivational-quotes/')

