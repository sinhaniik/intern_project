import { config } from 'dotenv';
config();

import bodyParser from 'body-parser';
import cors from "cors"
import express, { Express, Request, Response } from 'express';
import mongoose, { connect } from 'mongoose';
import {masterList , formList} from './models/mongoModels';

const app: Express = express();
const PORT = 5000;

// bypass cors error
app.use(cors())

// Configure body parser once before routes
app.use(bodyParser.urlencoded({ extended: true }));

// Establish connection
connect(process.env.URL ?? '').then(() => {
  app.listen(PORT);
  console.log(`Connected to port ${PORT}`);
});

// MASTER ENDPOINT
app.use(bodyParser.json());

// POST ROUTES
app.post('/masterpost', async (req: Request, res: Response) => {
  // create a new task
    const newPost = new masterList({
        masterCode: req.body.masterCode,
        masterName: req.body.masterName,
        masterDescription: req.body.masterDescription,
        usedIn: req.body.usedIn,
        createdOn: req.body.createdOn,
        action: req.body.action,
    });
  // save it to the DB
  const createdPost = await newPost.save();
     res.json(createdPost);
});

// GET ROUTES
app.get('/masterpost', async (req: Request, res: Response) => {
    //  Step 1 : find what to show in the UI when page first loads
    const post = await masterList.find({})
    // step 2: push back to the UI
    res.json(post)
});

// UPDATE ROUTE
app.put('/masterpost/:id', async (req: Request, res: Response) => {
    // find the post by id and update it
    const updatedPost = await masterList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // send the updated post back to the client
    res.json(updatedPost);
});

// DELETE ROUTE
app.delete('/masterpost/:id', async (req: Request, res: Response) => {
    // find the post by id and delete it
    const deletedPost = await masterList.findByIdAndDelete(req.params.id);
    // send back the deleted post
    res.json(deletedPost);
});


// FORM ENDPOINT
app.use(bodyParser.json());

// POST ROUTES
app.post('/formpost', async (req: Request, res: Response) => {
    // create a new task
    const formPost = new formList({
        formCode: req.body.formCode,
        formName: req.body.formName,
        formDescription: req.body.formDescription,
        usedFor: req.body.usedFor,
        createdOn: req.body.createdOn,
        action: req.body.action,
    });
    // save it to the DB
    const createFormPost = await formPost.save();
    res.json(createFormPost);
});

// GET ROUTES
app.get('/formpost', async (req: Request, res: Response) => {
    //  Step 1 : find what to show in the UI when page first loads
    const formPost = await formList.find({})
    // step 2: push back to the UI
    res.json(formPost)
});

// UPDATE ROUTE
app.put('/formpost/:id', async (req: Request, res: Response) => {
    // find the post by id and update it
    const updatedPost = await formList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    // send the updated post back to the client
    res.json(updatedPost);
});

// DELETE ROUTE
app.delete('/formpost/:id', async (req: Request, res: Response) => {
    // find the post by id and delete it
    const deletedPost = await formList.findByIdAndDelete(req.params.id);
    // send back the deleted post
    res.json(deletedPost);
});
