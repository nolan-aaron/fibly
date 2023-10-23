# Fibly 🌀

This application takes a continuous stream of user-supplied numbers as input. If any of these numbers happens to be a Fibonacci number, it will output **FIB**. Additionally, at a regular interval set by the user, it will output the provided numbers in descending order of their frequency.

## Getting Started

Navigate to the folder where you'd like to clone the project, and then run the following commands.

```bash
git clone https://github.com/nolan-aaron/fibly.git
cd fibly
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Running Tests

```bash
npm test
```

## Written Response

1. You have a new requirement to implement for your application: its logic should stay exactly the same but it will need to have a different user interface (e.g. if you wrote a web app, a different UI may be a REPL). Please describe how you would go about implementing this new UI in your application? Would you need to restructure your solution in any way?
    > To convert the user interface of this application to a CLI, I would need to ensure that the core logic is decoupled from the existing UI components. This has already been achieved for the `isFibonacciNumber` functionality, but the Stopwatch component currently relies on the `useStopwatch` hook. A better approach would be to extract the timing logic from this component and use dependency injection to make it more flexible. A similar approach should be taken to implement a notification service, as `Toast` notifications are currently hardcoded into the core components.

1. You now need to make your application “production ready”, and deploy it so that it can be used by customers. Please describe the steps you’d need to take for this to happen.
    > While the application is already [live](https://fibly.vercel.app/) in a production environment, there are several enhancements I would make. Firstly, I would increase test coverage, and build a pipeline to automatically run these tests and prevent breaking code making it into production. I would also improve the UI and UX to ensure that even new users, without prior knowledge of the application, can understand it's purpose and easily interact with it. And depending on the anticipated traffic, I would explore migrating to a more scalable and robust cloud infrastructure, such as AWS.

1. What did you think about this coding test - is there anything you’d suggest in order to improve it?
    > I enjoyed this coding challenge! I liked that it had a clear set of requirements, but the implementation was left up to the participant. At this stage there is nothing I would suggest to improve the overall experience.
