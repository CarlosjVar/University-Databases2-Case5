import * as express from 'express';
import { Logger } from '../logger/logger';

const logger = new Logger()


const app = express();

// array to hold users
const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"},
               {firstName:"fnam2",lastName:"lnam2",userName:"username2"},
               {firstName:"fnam3",lastName:"lnam3",userName:"username3"},
               {firstName:"fnam4",lastName:"lnam4",userName:"username4"}];

// request to get all the users
app.get('/users', (req, res) => {
  logger.info('users route');
  res.json(users);
});

// request to get all the users by userName
app.get('/users/:userName', (req, res) => {
  logger.info(`filter users by username:::::${req.params.userName}`);
  const user = users.filter(usr => req.params.userName === usr.userName);
  res.json(user);
});

// request to post the user
// req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
app.post('/user', (req, res) => {
  users.push(req.body);
  res.json(users);
});

export default app;