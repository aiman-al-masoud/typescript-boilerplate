import { createRoot } from 'react-dom/client';
import Clazz from "./my/folder/Class"
import React, { Component, useState } from "react"
import App from './App'

console.log(Clazz.getCrap())
const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App/>);
new Clazz().sidekickFunc()