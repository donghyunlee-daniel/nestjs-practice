import { IsOptional, IsString } from "class-validator";
import { IsNumber } from "class-validator";

export class CreateMovieDto{
    @IsString()
    readonly title:string;
    @IsNumber()
    readonly year:number;
    @IsString({each:true})
    @IsOptional()
    readonly genres:string[];
}