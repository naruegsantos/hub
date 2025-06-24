export interface ITodo {
    id:string
    status:string
    title?:string
    created_at:string
    completed_at:string
    content:string,
    bedges?:{
        title:string,
        variant: "default" | "secondary" | "destructive" | "outline" | null | undefined
    }[]
}   