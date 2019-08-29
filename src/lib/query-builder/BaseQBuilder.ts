export class BaseQBuilder {
    static aggregates = {
        'Sum of': ' SUM(_)',
        'Average of': ' AVG(_)',
        'Minimum in': ' MIN(_)',
        'Maximum in': ' MAX(_)',
        'Count of'  : ' COUNT(_)'
    };

    static builderName = 'SQL Parser';
    query: {
              where: string,
              from: string,
              groupBy: string,
              orderBy: string,
              select: string,
              limit: string
          } = {
              where: '',
              from: '',
              groupBy: '',
              orderBy: '',
              select: '',
              limit: ''
          };
    protected userData;
    protected joins;
    protected operators;
    protected partialWhere;
    protected where: string;
    protected on: string;
    protected groupBy: string;
    protected orderBy: string;
    protected select: string;
    protected from: string;
    protected limit: string;
    protected subQueryOperators: [string, string];
    protected tables: [];
    protected aggDebug;

    constructor() {
        this.userData = {
            tables: [],
            where: [],
            groupBy: [],
            orderBy: [],
            select: [],
            limit: ''
        };

        this.aggDebug = {
            'Sum of': ' SUM(_)',
            'Average of': ' AVG(_)',
            'Minimum in': ' MIN(_)',
            'Maximum in': ' MAX(_)',
            'Count of'  : ' COUNT(_)'
        };
        this.joins = {
            'Cross join': ' CROSS JOIN',
            'Inner join': ' INNER JOIN',
            'Left outer join': ' LEFT OUTER JOIN',
            'right outer join': ' RIGHT OUTER JOIN',
        };

        this.operators = {
            'Greater than' : ' > ',
            'Less than' : ' < ',
            'Greater than or equal' : ' >= ',
            'Less than or equal' : ' <= ',
            'Equal to' : ' =',
            'Contains' : ' LIKE \'%_%\'',
            'Starts with' : ' LIKE \'_%\'',
            'Ends with' : ' LIKE \'%_\'',
            'Not Equal to' : ' <> ',
            'In' : ' IN ',
            'Not in' : ' NOT IN '
        };
        this.partialWhere = ['Contains', 'Starts with', 'Ends with'];
        this.where = ' WHERE ';
        this.on = ' ON ';
        this.groupBy = ' GROUP BY ';
        this.from = ' FROM';
        this.limit = ' LIMIT';
        this.orderBy = ' ORDER BY ';
        this.select = ' SELECT *';
        this.subQueryOperators = ['in', 'not in'];
        this.tables = [];
    }

    getUserData(key) {
        return this.userData[key];
    }
    static parseAggregates(aggregate, data) {
        if (!BaseQBuilder.aggregates[aggregate]) { throw new Error(`Aggregate: ${aggregate} is not implemented on ${BaseQBuilder.builderName}`); }
        if (aggregate === 'Count of' && !data) { data = [{column: '*'}]; }
        if (!data) { throw new Error(`Aggregate: ${aggregate} cannot work without a column`); }
        return data.map(d => BaseQBuilder.aggregates[aggregate].replace('_', d.column) + `${!!d.alias ? ' AS ' + d.alias : ''}`).join(', ');
    }

    validate(entity, min = 1, thr = false) {
        if (this.userData[entity].length < min) {
            if (thr) {throw new Error(`You must supply at least ${min} ${entity} to process this query`); } else { return false; }
        }
        return true;
    }

    addWhere(column, operator, value, alt= 'AND') {
        this.userData.where.push({
            column: column,
            op: operator,
            value: value,
            alt: ` ${alt} `
        });
        return this;
    }

    parseWhere() {
        if (!this.validate('where')) { return; }
        let i = 0;
        let queryString = '';
        this.userData.where.forEach(column => {
            if (this.subQueryOperators.includes(column.op)
                && !(column.value instanceof Array)) {
                // new query if not literal values
            }
            let columnValue = column.value instanceof Array ? column.value.join(',') : column.value;

            let operator = '';
            if (this.partialWhere.includes(column.op)) {
                columnValue = this.operators[column.op].replace('_', column.value);
            } else {
                operator = this.operators[column.op];
            }
            const alt = `${(i++ > 0) ? ' ' + column.alt + ' ' : ''}`;
            queryString += `${alt} ${column.column} ${operator} ${columnValue} `;
        });
        this.query.where = this.where + ' ' + queryString;
        return this;
    }

    addTable(table, alias, joinType, on) {
        if (this.userData['tables'].length !== 0 && !joinType) { this.userData['tables'] = []; }
        if (this.userData['tables'].length === 0 && !!joinType) {
          throw new Error('You must have base table before specifying table with joinType');
        }
        if (joinType && !on) { throw new Error('You must specify column where the tableContainer join'); }
        if (joinType && !this.joins[joinType]) { throw new Error('The join type: ' + joinType + ' you specified does not exist'); }
        debugger;
        this.userData['tables'].push({
            name: table,
            alias: alias,
            joinType: joinType,
            on: on
        });
      debugger;
      return this;
    }

    parseFrom() {
        this.validate('tables', 1, true);
        const tables = this.userData.tables;
        this.query.from = this.from + tables.map((t) => {
            const on = !!t.on ? t.on.map((o) => `${o.left} ${!!o.op ? o.op : ' = '} ${o.right}`).join(' AND') : '';
            return `${!!t.joinType ? this.joins[t.joinType] : ''} ${t.name} ${!!t.alias ? ' ' + t.alias : ''} ${!!on ? this.on + on : ''} `;
        }).join(' ');

        return this;
    }

    addGroup(column) {
        this.userData.groupBy.push({column: column});
        return this;
    }

    parseGroup() {
        if (!this.validate('groupBy')) { return; }
        this.query.groupBy = this.groupBy + this.userData.groupBy.map(d => ' ' + d.column).join(', ');
        return this;
    }

    addLimit(limit, start = 0) {
        this.userData.limit = this.limit + ' ' + limit + ' OFFSET ' + start;
        return this;
    }

    parseLimit() {
        if (!this.validate('limit')) { return; }
        this.query.limit = this.userData.limit;
    }

    addOrder(column, direction = 'ASC ') {
        this.userData.orderBy.push({
            column: column,
            dir: direction
        });
        return this;
    }

    parseOrder() {
        if (!this.validate('orderBy')) { return; }
        this.query.orderBy = this.orderBy
          + this.userData.orderBy.map(d =>
            !! d.dir ?  ' ' + d.column + ' '  + d.dir :  ' ' + d.column + ' ' + 'ASC').join(', ');
        return this;
    }

    addSelect(column, alias, aggregate = '', subquery = false) {
        if (!column) { column = '*'; }
        this.userData.select.push({
            column: column,
            alias: alias,
            aggregate: aggregate,
            subquery: subquery
        });
        return this;
    }

    parseSelect() {
        let queryString = '';
        if (!this.validate('select')) {
            queryString = this.select;
        } else {
            queryString = this.userData.select.map((d) => {
                const column = this.aggDebug[d.aggregate]
                  ? BaseQBuilder.aggregates[d.aggregate].replace('_', d.column) : d.column;

                let q = d.subquery ? ' (' + column + ') ' : column;
                q += d.alias ? ' AS ' + d.alias : '';
                return q;
            }).join(', ');
            queryString = this.select.replace('*', queryString);
        }

        this.query.select = queryString;
        return this;
    }

    removeFilter(filterColumn, operator) {
        this.removeEntity('where', filterColumn, {operator: operator});
        return this;
    }

    removeSelectColumn(selectColumn, aggregator) {
        this.removeEntity('select', selectColumn, {aggregate: aggregator});
        return this;
    }

    removeOrderColumn(column) {
        this.removeEntity('orderBy', column, {});
        return this;
    }

    removeTable(table) {
        this.removeEntity('tables', table, {});
        return this;
    }

    removeEntity(entityName, pointer, extra) {
        if (entityName === 'limit') { return this.userData.limit = ''; } else {
            const prop = entityName === 'tables' ? 'builderName' : 'column';
            this.userData[entityName] = this.userData[entityName].filter(ent => {
                const selectCheck = (entityName !== 'select') || (ent['aggregate'] === extra.aggregate);
                const filterCheck = (entityName !== 'where') || (ent['op'] === extra.operator);
                return !(ent[prop] === pointer && selectCheck && filterCheck);
            });
        }
        return this;
    }


    processQuery() {
        this.parseGroup();
        this.parseWhere();
        this.parseFrom();
        this.parseLimit();
        this.parseSelect();
        this.parseOrder();
        return `${this.query.select} ${this.query.from} ${this.query.where} ${this.query.groupBy} ${this.query.orderBy} ${this.query.limit}`
            .replace( /  +/g, ' ' ).trim();
    }

    reset() {
        this.userData = {
            tables: [],
            where: [],
            groupBy: [],
            orderBy: [],
            select: [],
            limit: ''
        };
    }

}
