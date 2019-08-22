import {BaseQBuilder} from './BaseQBuilder';


export class Oracle10gQBuilder extends  BaseQBuilder {
   constructor() {
        super();
        this.limit = 'SELECT * FROM ( SELECT a.*, ROWNUM rnum FROM ( <QUERY> ) a WHERE rownum <= <MAX_ROW>) WHERE rnum >= <MIN_ROW>';
    }

    addLimit(limit, start = 0) {
        this.limit = this.limit.replace('<MIN_ROW>', start.toString()).replace('<MAX_ROW>', limit);
        this.userData.limit = `${limit} ${start}`;
        return this;
    }

    parseLimit() {
        this.query.limit = '';
    }

    processQuery() {
        return this.userData.limit.length > 0 ? this.limit.replace('<QUERY>', super.processQuery()) : super.processQuery();
    }
}
