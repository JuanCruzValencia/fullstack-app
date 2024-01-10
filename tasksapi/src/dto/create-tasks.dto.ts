import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  desciption: string;

  @IsBoolean()
  @IsOptional()
  done?: boolean;
}
