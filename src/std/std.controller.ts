import { Controller, Get } from '@nestjs/common';
import { StdService } from './std.service';

@Controller('std')
export class StdController {

    constructor(private stdService: StdService){}


    @Get('1')
    async onecontrol(): Promise<any>{
        return this.stdService.one()
    }

    @Get('2')
    async twocontrol(): Promise<any>{
        return this.stdService.two()
    }

    @Get('3')
    async threecontrol(): Promise<any>{
        return this.stdService.three()
    }

    @Get('4')
    async fourcontrol(): Promise<any>{
        return this.stdService.four()
    }

    @Get('5')
    async fivecontrol(): Promise<any>{
        return this.stdService.five()
    }
    
    @Get('6')
    async sixcontrol(): Promise<any>{
        return this.stdService.six()
    }

    @Get('7')
    async sevencontrol(): Promise<any>{
        return this.stdService.seven()
    }
}
