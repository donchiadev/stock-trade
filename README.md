# Stock Trade

## Brief Description

This app in an attempt of reverse-enginerring the original app created by [Maximilian Schwarzmüller](https://github.com/mschwarzmueller) in his [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)](https://www.udemy.com/vuejs-2-the-complete-guide/) course. This app represents the final project of the course were students use all informations acquired during the lessons. In my instance of the final app i taken some personal choices of how implement some functionalities. This app simulates an online environment of stock trading, so users can buy and sell stocks whenever they want.

## Features of the App

- You can buy and sell stocks by specific buttons.
- When you buy a company stocks these will be added to your personal portfolio.
- You can sell stocks only from the Portfolio section.
- Clicking the "End Day" button all companies stocks will suffer a price variation.
- You can save the state of the app by clicking the "Save & Load" dropdown button and then clicking on the "Save Data" option.
- You can load a previous state of the app by clicking the "Save & Load" dropdown button and then clicking on the "Load Data" option.
- Every time you access the app it will load seed data, but you can load a previuos app state as specified above.

## "Save & Load" Feature

The original project of this application expected a real database for saving and loading data, in this way the student could have used vue-resource to send requests to the database. Actually this version of my app uses web storage to store and load data, this decision was made to benefit the long term functioning of the app.

## Run the App locally

- Clone this repo
- Install all dependecies (`npm install`)
- From the project root folder run `npm run serve`
- Enjoy!

## Run the App on Browser without Installation

Use this [link](https://unequaled-fight.surge.sh)
