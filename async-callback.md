# Synchronicity and Asynchronicity

### Interviewer: “Hi! Welcome to the job interview. To warm up, can you please tell me all you know about JavaScript and synchronicity? Why do we say JavaScript is asynchronous language?”

`You: “Thank you so much for giving me a chance and I’m going to start from your second question and make a small correction, which you probably did purposely to test me - JavaScript is not an asynchronous language, but synchronous one with some asynchronous behaviors.”`

`Potential Interview questions:`
`JavaScript, at its core, is a single-threaded and synchronous language, and this means next:`

### single-threaded - only one block of code is executed at the time. You can imagine this as there’s always one single actor in the play - ex. you were alone at home in the above example, so only you could’ve worked on all these tasks. There’s no one else who can do it simultaneously at the same time as you. This means that if you (JavaScript engine) work quickly enough and can switch between tasks efficiently enough, you will manage to finish all the tasks like you had a friend or more of them helping you (but remember, in JS case, this is impossible - always one operation at the time - forget about friend’s help when you’re JavaScript. :stuck_out_tongue_winking_eye: )

### synchronous - the code gets executed line by line, from top to bottom, in the order in which they are put in - line 2 can’t get executed before line 1, line 3 can’t get executed before line 2, and so on.

````Potential Interview questions:
What is the difference between synchronous and asynchronous code in JavaScript?
In short, synchronous means the operation needs to be executed in a certain order, and each operation has to wait for the previous one to complete.```

`Asynchronous means the opposite of the previous - an operation can occur while another operation is still being processed.`
````
