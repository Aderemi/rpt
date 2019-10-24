import {Time} from "@angular/common";
export interface Report {
    id?:number;
    name?:string;
    title?:string;
    description?: string;
    queryIds?: string[];
    templateId?: number;
    group?: ReportGroup;
    templateType?: string;
    defaultExportType?: string;
}

export interface ReportDownload {
    id?:number;
    report_id?:number;
    filetype?:string;
    emails?: string[];
    roleIds?: number[];
    schedule?: string;
    scheduleStart?: string;
    scheduleStop?: string;
    time?: Time;
}

export interface ReportConnection{
    id:number;
    title?: string;
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

export interface Response<T> {
    status: string;
    code: number;
    data?: T[];
    message: string;
}

export interface SingleDataResponse<T> {
    status: string;
    code: number;
    data?: T;
    message: string;
}

export interface ReportGroup{
    id?: number;
    name?: string;
    code?: string;
    description?: string;
    reports?: Report;
}

export class ReportGroup {
    id?: number;
    name?: string;
    code?: string;
    description?: string;
    reports?: Report;
}

export interface ReportTemplate {
    id:number;
    name:string;
    placeholders: string[];
    jsonContent: string;
    description: string;
    html: string;
    fileContent?:string
}
