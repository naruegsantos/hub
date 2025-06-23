
export interface ILog {
    id:string
    date:string
    status:string
    version?:string
    name?:string
    content:string,
    bedges?:{
        title:string,
        variant: "default" | "secondary" | "destructive" | "outline" | null | undefined
    }[]
}