# Create a Merge Request

When you push your feature branch and it is ready to be reviewed:

Create a Merge Request in Gitlab. Source Branch is your feature branch. Target branch is always DEV branch.

Title of the Merge Request will be [Jira-Ticket Number - Feature] ex. RR-34 Bug Fix Input Fields.


Make sure delete source branch is checked

# Create Merge Request

MAKE SURE TO MOVE THE Jira TICKET to Code Review stage

# Situations

Sometimes you may see Merge Request unable to Merge because Source branch is commits behind target branch. That means, after you pulled the Dev branch and made a copy of that branch locally, another team member merged their code into the Dev branch. Which means your branch is not up to date.

# How to make it up to date

- git checkout dev //checkout the dev branch
- git pull  //to get the latest code from the remote repository in your local machine
- git checkout [your feature branch]
- git merge origin dev
- // Hold [SHIFT] [+] [;] buttons on keyboard
- // Press [w] [q] buttons in keyboard and then press [enter] button
- git push

When you go to the merge request in gitlab you will see the merge request updated with your branch up to date. There are other rebase and merge strategies you can do as well. This is just 1 of the strategy.

# Merge Request Checklist

- Merge request Title should be Jira Ticket number and feature. ex. RR-34 BUG fixing input fields

- Reviewers are assigned.

- Description includes link to Jira Ticket

- Delete source branch is checked

- After approval, merge request should be merged by you.

- Move Jira Ticket to Code-Review. After you merge it, Move the ticket to QA lane or Done.

- Any Merge Request created that still has work in progress should have the word Draft: in title.

- Post Merge Request in project related channel as well

- It is your responsibility to follow up with your merge request if nobody has approved it.

# Run this project locally

## Prerequisites

- Node JS - V > 14.*
- yarn - V > 1.22.*

`Please make sure you have those installed on your system`

# Please check the backend api url here

```javascript

```

### Run application

*run these commands on your terminal on project root directory to start the application*

- `yarn install --frozen-lockfile`
## start development server

- `yarn dev`

`Your application will be start on port 3000`

Now open this link to view application : http://localhost:3000

## build it and run
```shell
yarn build

# start production server
yarn start
```


# Containerization (Docker)
Please make sure some file content before dockerize.



#### Run these command to make dockerisation
```shell
docker build -t fish_my_spot . && docker run -p 80:3000 -d fish_my_spot
```


# Run the storybook locally
## Prerequisites

- Node JS - V > 14.*
- yarn - V > 1.22.*

`Please make sure you have those installed on your system`

#### Clone the repository
Clone the repository:
```shell
git clone <repository link>
```

If you want to clone any specific branch of the repository, then run the command:
```shell
git clone -b <branch-name> <repository-link>
```

#### Install dependencies 
For running the storybook of the project in locally first you have to install necessary dependencies. We setup in the repository. 

Run the command:
```shell
yarn install --frozen-lockfile
```

#### Run the storybook 
If you followed above instruction, run the command now:
```shell
yarn storybook
```
Your application will be start on port 6006
The storybook of the project will run and open in the url: http://localhost:6006/ 

--- IT'S DONE---



