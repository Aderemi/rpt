export interface Report {
    id?:number;
    name?:string;
    title?:string;
    description?: string;
    template?: string;
    group?: ReportGroup;
    templateType?: string;
    defaultExportType?: string;
}

export interface ReportConnection{
    id:number;

    title: string;
    description: string;
    databaseName: string;
    dbms: string;
    databaseDriver: string;
    databaseUsername: string;
    databasePassword: string;
    databaseHost: string;
    databasePort: string;
    status: string;
    type: string;
}
export class ReportConnection{
    id:number;

    title: string;
    description: string;
    databaseName: string;
    dbms: string;
    databaseUsername: string;
    databasePassword: string;
    databaseHost: string;
    databasePort: string;
    status: string;
    type: string;
}

export interface ReportQueries{
    id?: number;
    connectionId?: number;
    title?: string;
    description?: string;
    content?: string;
    prevContent?: string;
    select?: string;
    group?: string;
    limit?: string;
    sort?: string;
    where?: string;
    from?: string;
    type?: string;
}

export interface Response<T>{
    status: string;
    code: number;
    data?: T[];
    message: string;
}

export interface SingleDataResponse<T>{
    status: string;
    code: number;
    data?: T;
    message: string;
}

export interface ReportGroup{
    id?: number;
    name?: string;
}

export interface ReportTemplate{
    id:number;
    name:string;
    placeholders: string[];
    jsonContent: string;
    description: string;
    html: string;
}
