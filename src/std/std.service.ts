import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';


@Injectable()
export class StdService {
    constructor(@InjectConnection() private readonly stdConnection: Connection){}

    async one() {
       return this.stdConnection.query('SELECT * FROM student ORDER BY std_name ASC')
    }

    async two(){
        return this.stdConnection.query('SELECT std_id , std_name FROM student' )
    }

    async three(){
        return this.stdConnection.query('SELECT * FROM student WHERE province="ขอนแก่น"')
    }

    async four(){
        return this.stdConnection.query('SELECT * FROM course JOIN register ON register.course_id = course.course_id WHERE std_id ="5001100348"')
    }

    async five(){
        return this.stdConnection.query('SELECT register.std_id , SUM(course.credit) FROM register JOIN course on register.course_id = course.course_id GROUP BY register.std_id')
    }

    async six(){
        return this.stdConnection.query('SELECT register.course_id , count(*) AS studentCount FROM register GROUP BY register.course_id')
    }

    async seven(){
        return this.stdConnection.query('SELECT student.std_name , register.course_id FROM student JOIN register ON student.std_id = register.std_id WHERE register.course_id = "322236"')
    }
}
