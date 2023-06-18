import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const movies = await axios
    .get(`https://apidiorakids.ru`)
    .then((res) => res.data);

  console.log(movies);

  return NextResponse.json(movies);
}
