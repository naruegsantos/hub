export interface IRelease {
    id:string
    date:string
    status:string
    version?:string
    nickName?:string
    content:string,
    bedges?:{
        title:string,
        variant: "default" | "secondary" | "destructive" | "outline" | null | undefined
    }[]
}