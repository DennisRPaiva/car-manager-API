import { ApiProperty } from '@nestjs/swagger'
export class carDto {
    @ApiProperty({ default: 'Colossal' })
    readonly size: string;

    @ApiProperty({ default: 'Void' })
    readonly color: string;
}


// export class updateCarDto {

//     @ApiProperty({ default: 'Colossal' })
//     readonly size: string;

//     @ApiProperty({ default: 'Void' })
//     readonly color: string;
// }