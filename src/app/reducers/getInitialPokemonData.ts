import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/constants";

export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    const startTime = performance.now(); // Capture the start time before the request
    try {
      const { data } = await axios.get(pokemonsRoute);
      const endTime = performance.now(); // Capture the end time after receiving the response

      const responseTime = endTime - startTime; // Calculate the difference to get response time
      console.log(
        `Response time for ${pokemonsRoute}: ${responseTime} milliseconds`
      );

      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);
