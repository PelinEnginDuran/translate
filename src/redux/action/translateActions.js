//thunk ACTION

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {options} from "../constant"

export const getLanguages = createAsyncThunk(
    "translate/getLanguages",
    async()=>{
const res= await axios.request(options)

return res.data.data.languages


})

//çeviri yapıp sonucu store a aktaran action:

export const translateText= createAsyncThunk("translate/text", 
async({text, sourceLang, targetLang})=>{
    
const Params = new URLSearchParams();
Params.set('source_language', sourceLang.value);
Params.set('target_language', targetLang.value);
Params.set('text', text);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '78d7909bd1msh9c59cb67b90942cp1c229djsna02622d49002',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: Params,
};
try{
    const res = await axios.request(options)
 
    return res.data.data.translatedText
} catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
}
})