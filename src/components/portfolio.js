const Portfolio = () => {
  const portfolio = [{
      name: 'Memory Card Game',
      url: 'https://rsgerrish.github.io/memory-card-game/',
      git: 'https://github.com/RSGerrish/memory-card-game',
      description: 'This is a Thundercats themed card game I did as an assignment to help in the process of learning how state and hooks work in React. I was able to get 90% of this done on my own, however I struggled when I managed to change state incorrectly and get myself caught in a difficult-to-debug render loop. I eventually had to check in on an example to understand where I was going wrong. In the end, I left with a fairly good grasp of using hooks and when and when to change state. I am also extremely pleased with the aesthetic of this project.',
      directions: 'Click all of the characters without clicking any of them more than once. Each click will shuffle the group. Game resets when a character has been clicked for the second time and is subtly indicated by the score keeping.'
    },
    {
      name: 'TDD Exercise',
      url: 'https://github.com/RSGerrish/tdd-practice',
      git: 'https://github.com/RSGerrish/tdd-practice',
      description: 'An exercise in using Jest and taking advantage of Test Driven Development. While I have found this to be tedious and counter intuitive for the size of projects I have worked on myself, I certainly see its advantage when working on larger projects as well as with a team.',
      directions: 'Please Note: No UI was created for this project and all debugging was done within the IDE using tests.',
    },
    {
      name: 'Chek List',
      url: 'https://rsgerrish.github.io/todo-project/',
      git: 'https://github.com/RSGerrish/todo-project',
      description: 'A To Do List App. I had a really good time with this one as I managed to get it all done with minimal help from examples and mostly from my own research and problem solving. The palette is crap, however I am proud of the layout and overall design. I will be revisiting this to add a firebase datase allowing for persistence between sessions. I will also be updating the palette.',
      directions: 'Just like the other million todo apps aspiring web developers have done, you can add a project on the left, and then add tasks for projects.'
    },
    {
      name: 'Mamas Pizza',
      url: 'https://rsgerrish.github.io/restaurant-project/',
      git: 'https://github.com/RSGerrish/restaurant-project',
      description: 'This was an early project I worked on, however I believe its purpose was to get me familiar with Webpack which is currently part of my preferred technology stack, as long as it makes sense of course. The assignment was to create a fake restaurant website, however I redesigned a website for a pizza shop owned by a friend. You can check out their current site at https://originalmamaspizza.com/. Who knows, maybe this project will become a paid gig someday!',
      directions: 'This site is not fully responsive and the layout breaks at smaller resolutions. I plan to revisit this one to make a mobile layout of the site which will be displayed via Javascript when the apps width goes below a certain width.',
    },
    {
      name: 'Weather App',
      url: 'https://rsgerrish.github.io/weather-app/',
      git: 'https://github.com/RSGerrish/weather-app',
      description: "The purpose of this project was to get familiar using an API, promises and async/await functions. Specifically, I used the OpenWeather API to retrieve and display current weather info.",
      directions: "I reluctantly put this on my Portfolio, but only because I am not sure how the sunrise and sunset times will display for anyone outside of the US Eastern timezone. While I could certainly work this issue out, I did not want to get bogged down with a detail that really wasn't the focus of the exercise.",
    }
  ] 

  const portEle = document.createElement('div');
  const portGrid = document.createElement('div');

  portEle.id = 'portfolio-body';
  portGrid.id = 'port-grid';

  portfolio.forEach((item) => {
    const portURL = document.createElement('a');
    const portCard = document.createElement('div');
    const portGradient = document.createElement('div');
    const portName = document.createElement('div');
    const portGit = document.createElement('a');
    const portDesc = document.createElement('div');
    const portDirections = document.createElement('div');

    portURL.href = item.url;
    portCard.className = 'port-card';
    portCard.id = item.git.substring((item.git.indexOf('RSGerrish/') + 10), item.git.length);
    portGradient.className = 'port-gradient';

    portName.className = 'port-name';
    portName.textContent = item.name;
    portGit.className = 'port-git';
    portGit.textContent = 'Check out the source on GitHub';
    portGit.href = item.git;
    portDesc.className = 'port-desc';
    portDesc.textContent = item.description;
    portDirections.className = 'port-directions';
    portDirections.textContent = item.directions;

    portGradient.append(portName, portGit, portDesc, portDirections);

    portCard.appendChild(portGradient);

    portURL.appendChild(portCard);

    portGrid.appendChild(portURL);
  })

  portEle.appendChild(portGrid);

  return portEle;
}

export default Portfolio;