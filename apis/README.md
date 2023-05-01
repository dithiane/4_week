APIs
For Part 1 and Part 2 of this lab, keep track of your answers in a regular document (Word, Google Doc, Pages).

Part 1: SWAPI
Instructions
For each of the following use the SWAPI docs, to figure out the complete URL(s) (including params or queries) that you need to go to in order to reach the following data:

1.the height of Darth Vader: 

202

2.the population of the planet Alderaan: 

2000000000

3.the name of the manufacturer of the Millennium Falcon: 

Corellian Engineering Corporation

4.the name of the species that C-3PO belongs to (multiple URLs): 

Droid

5.the title of each film that Obi-Wan Kenobi is in (multiple URLs): 

A New Hope, The Empire Strikes Back, Return of the Jedi, The Phantom Menace, Attack of the Clones, Revenge of the Sith

6.use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship: 

https://swapi.dev/api/starships/?search=Millennium Falcon:

name:Millennium Falcon
model:YT-1300 light freighter
manufacturer:Corellian Engineering Corporation
cost_in_credits:100000
length:34.37
max_atmosphering_speed:1050
crew:4
passengers:6
cargo_capacity:100000
consumables:2 months
hyperdrive_rating:0.5
MGLT:75
starship_class:Light freighter
pilots:https://swapi.dev/api/people/13/,https://swapi.dev/api/people/14/,https://swapi.dev/api/people/25/,https://swapi.dev/api/people/31/
films:https://swapi.dev/api/films/1/,https://swapi.dev/api/films/2/,https://swapi.dev/api/films/3/
created:2014-12-10T16:59:45.094000Z
edited:2014-12-20T21:23:49.880000Z
url:https://swapi.dev/api/starships/10/


Part 2: Social Mountain
Summary
In this section, you’ll be looking through the documentation for the Social Mountain API and answering questions. You’ll also be making requests and recording the URLs and some information about the responses. Run the requests in Postman. Note: this API is live and viewable by your classmates and staff. Keep things appropriate for class.

You can view the documentation for the Social Mountain API here

The base URL of your requests is: https://practiceapi.devmountain.com/api (make sure to have the “s” in “https”)

1. Check if the POST request accept params, queries, and/or a body. 
Which one(s) and what information is it expecting to be sent?

POST request accept body

2. What data type does the GET request return?

An array of objects

3. What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )

https://practiceapi.devmountain.com/api/posts?id=555

4. List the possible response codes from the GET request at ‘/posts/filter’

409

5. Create a post whose text is your name, record the URL and body here:

https://practiceapi.devmountain.com/api/posts
   {
        "id": 1701,
        "text": "Dithiane here...",
        "date": "27 Apr 2023"
    },

6. What would the URL and body object be to update the post you just made to contain your favorite color instead of your name?

https://practiceapi.devmountain.com/api/posts?id=1701
   {
        "id": 1701,
        "text": "White color",
        "date": "27 Apr 2023"
    },
7. What is the URL to get posts that contain the text “blue”?

https://practiceapi.devmountain.com/api/posts/filter?text=blue

8. Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)

application/json; charset=utf-8

9. What would cause a PUT request to return a 409 status?

if request is missing req.query.id or req.body.text

10. What happens if you try to send a query in the GET request URL? Why do you get that response?

404 Not Found

The requested resource could not be found but may be available again in the future. Subsequent requests by the client are permissible.

There is not an endpoint was created for a query.








