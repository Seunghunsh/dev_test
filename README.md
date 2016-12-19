# ObjectiveIQ Technical Test
- Do any 2 of the following 3 questions.
- Please do not fork this repo; rather clone it and host it as a private repo, or (if you don't have a private plan) return it as a zip file.

### Questions
- [Question 1](https://github.com/objectiveiq/dev_test#question-1)
- [Question 2](https://github.com/objectiveiq/dev_test#question-2)
- [Question 3](https://github.com/objectiveiq/dev_test#question-3)

## Question 1
Refactor the React app that is given in this test. Focus on code semantics, and control flow clarity.

### Requirements
- The final page should look like this:  ![First slide](https://s3.amazonaws.com/qrtrmstr-internal/oiq-test_Screen1.png)
- When the forgot password link is clicked, it should pop up a modal that looks like this: ![Second slide](he final page should look like this:
![Second slide](https://s3.amazonaws.com/qrtrmstr-internal/oiq-test_Screen2.png)
- Validate that the email is actually an email, and the password field is atleast 6 characters long and has a capital
- When the form is submitted, `console.log` the resulting email and password

### Constraints & Tips
- Do not use React.createClass
- Use `$ python -m SimpleHTTPServer` to allow you to see the index page at [http://localhost:8000](http://localhost:8000)

## Question 2
There are two functions to implement here. Correctly doing those functions will cause all tests to pass, and there to be no exceptions in the console.

This question uses the [expect](https://github.com/mjackson/expect) package to do unit tests. All of the tests are `isEquals` which makes sure that the first argument matches the second. In a couple of instances, I specify how to handle problems in a creative way.

### Constraints & Tips
- Use `$ python -m SimpleHTTPServer` to allow you to see the index page at [http://localhost:8000](http://localhost:8000)
- Don't change the function signature
- Don't change the tests
- Be mindful of what the test is actually asking for
- If something is not being tested for, don't worry about it; your only goal is to make all the tests green by implementing those functions

## Question 3
Given a starter Node project using just native node modules:

1. Parse the route
2. Create a `/pokemon/{number}` endpoint
3. Inside this endpoint, make an API call to the Pokeapi (url given) for that Pokemon's information
4. If the Pokemon's `base_experience` is greater than 100, return the `name` and `weight` in an object. If the Pokemon's `base_experience` is less than 100, return its `name` and `base_experience`
5. Control the AJAX control flow using a native `Promise`.

### Constraints & Tips
- *Do not* use any external libraries
- You can test this from the command line by using the `curl` command like:
```bash
$ curl localhost:9001/pokemon/1
// Should return something about Charmander
```
