import { DataMovie } from "./dataMovies"; 

export interface RespMovies{
    page: number,
    results: DataMovie[],
    total_pages: number,
    total_result: number
}